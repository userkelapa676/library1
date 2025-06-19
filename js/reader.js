class ReaderManager {
    constructor() {
        this.header = document.getElementById('readerHeader');
        this.content = document.getElementById('readerContent');
        this.progressFill = document.getElementById('progressFill');
        this.readingProgress = document.getElementById('readingProgress');
        this.readingTime = document.getElementById('readingTime');
        
        this.lastScrollTop = 0;
        this.startTime = Date.now();
        this.isHeaderVisible = true;
        
        this.init();
    }
    
    init() {
        this.setupScrollHandler();
        this.setupControls();
        this.updateProgress();
        this.updateReadingTime();
    }
    
    setupScrollHandler() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = scrollTop - this.lastScrollTop;
        
        // Auto-hide header saat scroll ke bawah
        if (scrollDelta > 5 && scrollTop > 100) {
            this.hideHeader();
        } else if (scrollDelta < -5) {
            this.showHeader();
        }
        
        this.lastScrollTop = scrollTop;
        this.updateProgress();
    }
    
    hideHeader() {
        if (this.isHeaderVisible) {
            this.header.classList.add('hidden');
            this.isHeaderVisible = false;
        }
    }
    
    showHeader() {
        if (!this.isHeaderVisible) {
            this.header.classList.remove('hidden');
            this.isHeaderVisible = true;
        }
    }
    
    toggleHeader() {
        if (this.isHeaderVisible) {
            this.hideHeader();
        } else {
            this.showHeader();
        }
    }
    
    updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min((scrollTop / docHeight) * 100, 100);
        
        this.progressFill.style.width = `${progress}%`;
        this.readingProgress.textContent = `${Math.round(progress)}%`;
    }
    
    updateReadingTime() {
        setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 60000);
            this.readingTime.textContent = `${elapsed} menit`;
        }, 60000);
    }
    
    setupControls() {
        // Toggle header visibility
        document.getElementById('toggleHeader')?.addEventListener('click', () => {
            this.toggleHeader();
        });
        
        // Font settings
        document.getElementById('fontSettings')?.addEventListener('click', () => {
            this.showFontSettings();
        });
        
        // Bookmark
        document.getElementById('bookmarkBtn')?.addEventListener('click', () => {
            this.toggleBookmark();
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'h':
                case 'H':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.toggleHeader();
                    }
                    break;
                case 'Escape':
                    this.showHeader();
                    break;
            }
        });
    }
    
    showFontSettings() {
        // Implementasi pengaturan font
        console.log('Font settings clicked');
    }
    
    toggleBookmark() {
        // Implementasi bookmark
        console.log('Bookmark toggled');
    }
}

// Initialize reader when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ReaderManager();
});

// Smooth scroll untuk navigasi
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
