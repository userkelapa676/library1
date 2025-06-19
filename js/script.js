// js/script.js

let currentChapterIndex = 0;
let selectedBook = null;

function getSelectedBook() {
  const selectedId = localStorage.getItem("selectedBookId") || books[0].id;
  return books.find(b => b.id === selectedId) || books[0];
}

function renderChapters(book) {
  const chaptersList = document.getElementById("chaptersList");
  chaptersList.innerHTML = "";

  book.chapters.forEach((chapter, index) => {
    const item = document.createElement("div");
    item.classList.add("chapter-item");
    if (index === currentChapterIndex) item.classList.add("active");
    item.innerHTML = `
      <div class="chapter-number">${index + 1}</div>
      <div class="chapter-title">${chapter.title}</div>
    `;
    item.addEventListener("click", () => {
      currentChapterIndex = index;
      renderChapter(book);
      updateProgress(book);
    });
    chaptersList.appendChild(item);
  });
}

function renderChapter(book) {
  const chapter = book.chapters[currentChapterIndex];
  document.getElementById("chapterTitle").textContent = chapter.title;
  document.getElementById("readingTime").textContent = chapter.readingTime;
  document.getElementById("currentChapter").textContent = currentChapterIndex + 1;

  const textContainer = document.querySelector(".text-content");
  const visualContainer = document.querySelector(".visual-content");

  // Isi konten teks biasa
  textContainer.innerHTML = chapter.content || "(Konten teks tidak tersedia)";
  visualContainer.innerHTML = chapter.visual || "(Konten visual tidak tersedia)";

  // Update menu aktif
  document.querySelectorAll(".chapter-item").forEach((el, i) => {
    el.classList.toggle("active", i === currentChapterIndex);
  });
}

function updateProgress(book) {
  const fill = document.getElementById("progressFill");
  const progress = ((currentChapterIndex + 1) / book.chapters.length) * 100;
  fill.style.width = `${progress}%`;
}

function previousChapter() {
  if (currentChapterIndex > 0) {
    currentChapterIndex--;
    renderChapter(selectedBook);
    updateProgress(selectedBook);
  }
}

function nextChapter() {
  if (currentChapterIndex < selectedBook.chapters.length - 1) {
    currentChapterIndex++;
    renderChapter(selectedBook);
    updateProgress(selectedBook);
  }
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}

window.addEventListener("DOMContentLoaded", () => {
  selectedBook = getSelectedBook();

  document.getElementById("bookTitle").textContent = selectedBook.title;
  document.getElementById("bookSubtitle").textContent = selectedBook.subtitle;

  renderChapters(selectedBook);
  renderChapter(selectedBook);
  updateProgress(selectedBook);
});
