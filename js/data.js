// js/data.js
const books = [
    {
        id: "sistem-bilangan",
        title: "Sistem Bilangan",
        subtitle: "Fondasi Matematika Modern",
        chapters: [
        {
            title: "BAB I: Pengantar Sistem Bilangan",
            readingTime: "18 menit baca",
            content: `
            <h2 class="section-heading">Sejarah dan Evolusi Bilangan</h2>
            <p>Perjalanan manusia dalam memahami bilangan dimulai ribuan tahun yang lalu. Dari peradaban Mesir kuno yang menggunakan hieroglif untuk mencatat jumlah ternak, hingga matematikawan India yang memperkenalkan konsep nol, sistem bilangan telah berkembang menjadi fondasi dari semua ilmu pengetahuan modern.</p>
            <p>Bangsa Babilonia mengembangkan sistem bilangan basis 60 yang masih kita gunakan untuk mengukur waktu dan sudut. Bangsa Maya menciptakan sistem vigesimal (basis 20), sementara peradaban Tiongkok mengembangkan sistem yang mempengaruhi cara kita berpikir tentang operasi aritmatika.</p>
            <p>Namun, revolusi sesungguhnya terjadi ketika matematikawan Arab memperkenalkan sistem bilangan Hindu-Arab ke Eropa pada abad ke-12. Sistem ini, yang kita gunakan sehari-hari, memungkinkan perhitungan yang jauh lebih efisien dibandingkan sistem Romawi yang sebelumnya dominan.</p>

            <h2 class="section-heading">Mengapa Sistem Bilangan Penting?</h2>
            <p>Sistem bilangan bukan sekadar alat untuk menghitung. Ia adalah bahasa universal yang memungkinkan kita:</p>
            <ol>
                <li><strong>Mengkuantifikasi realitas:</strong> Dari mengukur jarak antar bintang hingga menghitung partikel subatomik</li>
                <li><strong>Membangun teknologi:</strong> Komputer, smartphone, dan internet semuanya bergantung pada sistem bilangan biner</li>
                <li><strong>Memahami pola:</strong> Matematika membantu kita menemukan keteraturan dalam alam semesta</li>
                <li><strong>Berkomunikasi secara presisi:</strong> Bilangan memberikan cara yang tepat untuk menyampaikan informasi kuantitatif</li>
            </ol>
            <p>Dalam bab ini, kita akan menjelajahi berbagai jenis bilangan yang membentuk fondasi matematika modern, mulai dari bilangan natural yang sederhana hingga bilangan kompleks yang memungkinkan kita memecahkan persamaan yang sebelumnya tidak mungkin diselesaikan.</p>
            `,
            visual: `
            `
        },
        {
            title: "BAB II: Bilangan Natural dan Bulat",
            readingTime: "24 menit baca",
            content: `
                <h2 class="section-heading">Bilangan Natural (Asli)</h2>
                <p>Bilangan natural, yang dilambangkan dengan ℕ, adalah himpunan bilangan yang paling intuitif bagi manusia. Secara formal, bilangan natural adalah:</p>
                <p><strong>ℕ = {1, 2, 3, 4, 5, 6, ...}</strong></p>
                <p>Beberapa matematikawan memasukkan 0 dalam bilangan natural, sehingga menjadi:</p>
                <p><strong>ℕ₀ = {0, 1, 2, 3, 4, 5, ...}</strong></p>
                <p>Dalam buku ini, kita akan menggunakan konvensi yang memasukkan 0.</p>

                <h3 class="subsection-heading">Karakteristik Bilangan Natural:</h3>
                <ol>
                    <li>Tak terbatas: Tidak ada bilangan natural terbesar</li>
                    <li>Diskrit: Antara dua bilangan natural berurutan tidak ada bilangan natural lain</li>
                    <li>Terurut: Setiap bilangan natural memiliki posisi yang jelas dalam urutan</li>
                    <li>Dapat dihitung: Kita dapat membuat korespondensi satu-satu dengan himpunan bagian dari bilangan natural</li>
                </ol>

                <h3 class="subsection-heading">Aksioma Peano</h3>
                <p>Giuseppe Peano merumuskan lima aksioma yang mendefinisikan bilangan natural secara formal:</p>
                <ol>
                    <li>0 adalah bilangan natural</li>
                    <li>Setiap bilangan natural memiliki penerus yang unik</li>
                    <li>0 bukan penerus dari bilangan natural manapun</li>
                    <li>Jika dua bilangan natural memiliki penerus yang sama, maka kedua bilangan tersebut sama</li>
                    <li>Prinsip induksi matematika berlaku</li>
                </ol>

                <h2 class="section-heading">Bilangan Bulat</h2>
                <p>Bilangan bulat, dilambangkan dengan ℤ (dari kata Jerman "Zahlen"), memperluas bilangan natural dengan memasukkan bilangan negatif:</p>
                <p><strong>ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}</strong></p>

                <h3 class="subsection-heading">Mengapa Bilangan Negatif Diperlukan?</h3>
                <p>Bilangan negatif muncul dari kebutuhan praktis. Bayangkan seorang pedagang yang memiliki 5 apel dan menjual 8 apel. Dalam sistem bilangan natural, operasi 5 - 8 tidak memiliki jawaban. Bilangan negatif memungkinkan kita menyatakan hasil ini sebagai -3, yang dapat diinterpretasikan sebagai "hutang 3 apel".</p>
                <h3 class="subsection-heading">Sifat-sifat Bilangan Bulat:</h3>
                <ol>
                    <li>Tertutup terhadap penjumlahan dan pengurangan: Hasil operasi dua bilangan bulat selalu bilangan bulat</li>
                    <li>Memiliki elemen identitas: 0 untuk penjumlahan</li>
                    <li>Setiap elemen memiliki invers: Untuk setiap bilangan bulat a, terdapat -a</li>
                    <li>Komutatif dan asosiatif: a + b = b + a dan (a + b) + c = a + (b + c)</li>
                </ol>

                <h3 class="subsection-heading">Operasi pada Bilangan Bulat</h3>
                <h4>Penjumlahan dan Pengurangan</h4>
                <p>Aturan tanda dalam penjumlahan:</p>
                <ul>
                    <li>Positif + Positif = Positif: 3 + 5 = 8</li>
                    <li>Negatif + Negatif = Negatif: (-3) + (-5) = -8</li>
                    <li>Positif + Negatif = Tergantung nilai absolut: 7 + (-3) = 4, tetapi 3 + (-7) = -4</li>
                </ul>

                <h4>Perkalian dan Pembagian</h4>
                <p>Aturan tanda dalam perkalian:</p>
                <ul>
                    <li>Positif × Positif = Positif: 4 × 3 = 12</li>
                    <li>Negatif × Negatif = Positif: (-4) × (-3) = 12</li>
                    <li>Positif × Negatif = Negatif: 4 × (-3) = -12</li>
                    <li>Negatif × Positif = Negatif: (-4) × 3 = -12</li>
                </ul>
                <p>Pembagian mengikuti aturan yang sama dengan perkalian.</p>
            `,
            visual: `
                <div class="flip-grid">
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">ℕ</div>
                    <div class="flip-back">ℕ = {0, 1, 2, 3, ...}</div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">Aksioma Peano</div>
                    <div class="flip-back">5 aturan dasar bilangan natural</div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">ℤ</div>
                    <div class="flip-back">ℤ = {..., -2, -1, 0, 1, 2, ...}</div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">Contoh Operasi</div>
                    <div class="flip-back">(-4) × 3 = -12</div>
                    </div>
                </div>
                </div>
            `
        },
        {
            title: "BAB III: Bilangan Rasional dan Irasional",
            readingTime: "20 menit baca",
            content: `
                <h2 class="section-heading">Bilangan Rasional</h2>
                <p>Bilangan rasional, dilambangkan dengan ℚ (dari kata "quotient"), adalah bilangan yang dapat dinyatakan sebagai pecahan dari dua bilangan bulat:</p>
                <p><strong>ℚ = {a/b | a, b ∈ ℤ, b ≠ 0}</strong></p>

                <h3 class="subsection-heading">Contoh Bilangan Rasional:</h3>
                <ul>
                    <li>Bilangan bulat: 5 = 5/1, -3 = -3/1</li>
                    <li>Pecahan biasa: 2/3, -7/4, 15/8</li>
                    <li>Desimal berulang: 0.333... = 1/3, 0.142857142857... = 1/7</li>
                    <li>Desimal terbatas: 0.25 = 1/4, 0.75 = 3/4</li>
                </ul>

                <h3 class="subsection-heading">Sifat-sifat Bilangan Rasional:</h3>
                <ol>
                    <li>Rapat (Dense): Antara dua bilangan rasional selalu terdapat bilangan rasional lain</li>
                    <li>Dapat dihitung: Meskipun rapat, bilangan rasional dapat dibuat korespondensi dengan bilangan natural</li>
                    <li>Tertutup terhadap operasi: Hasil operasi aritmatika dua bilangan rasional (kecuali pembagian dengan nol) selalu rasional</li>
                </ol>

                <h3 class="subsection-heading">Representasi Desimal</h3>
                <p>Setiap bilangan rasional dapat dinyatakan dalam bentuk desimal yang:</p>
                <ul>
                    <li>Berakhir: seperti 1/4 = 0.25</li>
                    <li>Berulang: seperti 1/3 = 0.333... atau 1/7 = 0.142857142857...</li>
                </ul>
                <p>Untuk menentukan apakah suatu pecahan akan menghasilkan desimal berakhir atau berulang, kita perlu melihat faktor prima dari penyebutnya setelah disederhanakan. Jika penyebut hanya memiliki faktor prima 2 dan/atau 5, maka desimalnya akan berakhir.</p>

                <h2 class="section-heading">Bilangan Irasional</h2>
                <p>Bilangan irasional adalah bilangan real yang tidak dapat dinyatakan sebagai pecahan dari dua bilangan bulat. Himpunan bilangan irasional sering dilambangkan dengan ℚᶜ (komplemen dari ℚ dalam ℝ).</p>

                <h3 class="subsection-heading">Contoh Bilangan Irasional:</h3>
                <ol>
                    <li>√2: Bukti bahwa √2 irasional merupakan salah satu bukti klasik dalam matematika</li>
                    <li>π (pi): Rasio keliling lingkaran terhadap diameternya</li>
                    <li>e: Basis logaritma natural, ≈ 2.71828...</li>
                    <li>φ (phi): Rasio emas, (1+√5)/2 ≈ 1.618...</li>
                </ol>

                <h3 class="subsection-heading">Bukti Klasik: √2 adalah Irasional</h3>
                <p>Kita akan membuktikan dengan kontradiksi:</p>
                <ol>
                    <li>Asumsi: √2 adalah rasional, sehingga √2 = p/q dimana p dan q adalah bilangan bulat dengan FPB(p,q) = 1.</li>
                    <li>Dari √2 = p/q, kita peroleh 2 = p²/q²</li>
                    <li>Sehingga 2q² = p²</li>
                    <li>Ini berarti p² adalah genap, sehingga p juga genap</li>
                    <li>Misalkan p = 2k, maka p² = 4k²</li>
                    <li>Substitusi: 2q² = 4k², sehingga q² = 2k²</li>
                    <li>Ini berarti q² genap, sehingga q juga genap</li>
                    <li>Jika p dan q keduanya genap, maka FPB(p,q) ≥ 2</li>
                </ol>
                <p>Ini kontradiksi dengan asumsi bahwa FPB(p,q) = 1. Oleh karena itu, √2 adalah irasional.</p>

                <h3 class="subsection-heading">Karakteristik Bilangan Irasional:</h3>
                <ol>
                    <li>Representasi desimal tak berulang: Desimal bilangan irasional tidak pernah berulang atau berakhir</li>
                    <li>Tidak dapat dihitung: Himpunan bilangan irasional tidak dapat dibuat korespondensi dengan bilangan natural</li>
                    <li>Rapat: Seperti bilangan rasional, bilangan irasional juga rapat dalam bilangan real</li>
                </ol>
            `,
        },
        {
            title: "BAB IV: Bilangan Real dan Kompleks",
            readingTime: "25 menit baca",
            content: `
                <h2 class="section-heading">Sistem Bilangan Real (ℝ)</h2>
                <p>Bilangan real adalah gabungan bilangan rasional dan irasional: ℝ = ℚ ∪ ℚᶜ</p>

                <h3 class="subsection-heading">Aksioma Bilangan Real</h3>

                <h4>Aksioma Lapangan (Field Axioms)</h4>
                <ol>
                <li><strong>Komutatif:</strong> a + b = b + a dan ab = ba</li>
                <li><strong>Asosiatif:</strong> (a + b) + c = a + (b + c) dan (ab)c = a(bc)</li>
                <li><strong>Distributif:</strong> a(b + c) = ab + ac</li>
                <li><strong>Elemen identitas:</strong> Terdapat 0 dan 1 sedemikian sehingga a + 0 = a dan a·1 = a</li>
                <li><strong>Elemen invers:</strong> Untuk setiap a terdapat -a dan untuk a ≠ 0 terdapat a⁻¹</li>
                </ol>

                <h4>Aksioma Urutan</h4>
                <ol start="6">
                <li><strong>Trikotomi:</strong> Untuk setiap a, b ∈ ℝ, berlaku tepat satu dari: a &lt; b, a = b, atau a &gt; b</li>
                <li><strong>Transitif:</strong> Jika a &lt; b dan b &lt; c, maka a &lt; c</li>
                <li><strong>Kompatibilitas dengan operasi:</strong> Jika a &lt; b, maka a + c &lt; b + c</li>
                </ol>

                <h4>Aksioma Kelengkapan</h4>
                <ol start="9">
                <li><strong>Supremum:</strong> Setiap himpunan bagian tak kosong dari ℝ yang terbatas di atas memiliki supremum</li>
                </ol>

                <div class="completeness-box">
                    Sifat kelengkapan membedakan bilangan real dari bilangan rasional. Ini berarti tidak ada "lubang" dalam garis bilangan real. Setiap barisan Cauchy dalam ℝ konvergen ke suatu bilangan real.
                </div>


                <h3 class="subsection-heading">Pengantar Bilangan Kompleks</h3>
                <p>Bilangan kompleks, yang dilambangkan dengan ℂ, muncul dari kebutuhan untuk menyelesaikan persamaan seperti <em>x² + 1 = 0</em>. Dalam sistem bilangan real, persamaan ini tidak memiliki solusi karena tidak ada bilangan real yang kuadratnya menghasilkan -1.</p>

                <h3 class="subsection-heading">Definisi Bilangan Kompleks</h3>
                <p>Sebuah bilangan kompleks didefinisikan dalam bentuk <strong>z = a + bi</strong>, di mana:</p>
                <ul>
                    <li><strong>a</strong> dan <strong>b</strong> adalah bilangan real (a, b ∈ ℝ)</li>
                    <li><strong>i</strong> adalah unit imajiner dengan sifat <strong>i² = -1</strong></li>
                    <li><strong>a</strong> disebut bagian real dari z</li>
                    <li><strong>b</strong> disebut bagian imajiner dari z</li>
                </ul>

                <h3 class="subsection-heading">Operasi pada Bilangan Kompleks</h3>
                <ul>
                    <li><strong>Penjumlahan:</strong> (a + bi) + (c + di) = (a + c) + (b + d)i</li>
                    <li><strong>Perkalian:</strong> (a + bi)(c + di) = (ac - bd) + (ad + bc)i</li>
                    <li><strong>Konjugat:</strong> Jika z = a + bi, maka konjugat z̄ = a - bi</li>
                    <li><strong>Modulus:</strong> |z| = √(a² + b²)</li>
                </ul>

                <h3 class="subsection-heading">Representasi Geometris</h3>
                <p>Bilangan kompleks dapat direpresentasikan dalam bidang kompleks (bidang Argand), di mana:</p>
                <ul>
                    <li>Sumbu horizontal mewakili bagian real</li>
                    <li>Sumbu vertikal mewakili bagian imajiner</li>
                    <li>Setiap bilangan kompleks adalah titik dalam bidang dua dimensi</li>
                </ul>

                <h3 class="subsection-heading">Kelengkapan Sistem Bilangan</h3>
                <p>Hierarki sistem bilangan disusun sebagai berikut:</p>
                <p><strong>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ</strong></p>
                <p>Setiap langkah perluasan sistem bilangan memecahkan keterbatasan dari sistem sebelumnya:</p>
                <ol>
                    <li>ℕ → ℤ: Memungkinkan operasi pengurangan</li>
                    <li>ℤ → ℚ: Memungkinkan operasi pembagian (selain nol)</li>
                    <li>ℚ → ℝ: Memungkinkan representasi titik kontinu pada garis bilangan</li>
                    <li>ℝ → ℂ: Memungkinkan solusi terhadap semua persamaan polinomial, termasuk yang tidak punya akar real</li>
                </ol>
            `,
            visual: `
                <div class="timeline-scroll">
                    <div class="timeline-card">
                        <h4>ℝ = ℚ ∪ ℚᶜ</h4>
                        <p>Gabungan rasional dan irasional</p>
                    </div>
                    <div class="timeline-card">
                        <h4>Aksioma Lapangan</h4>
                        <p>Komutatif, asosiatif, distributif</p>
                    </div>
                    <div class="timeline-card">
                        <h4>Aksioma Urutan</h4>
                        <p>Trikotomi, transitif, kompatibel</p>
                    </div>
                    <div class="timeline-card">
                        <h4>Aksioma Kelengkapan</h4>
                        <p>Setiap subset terbatas punya supremum</p>
                    </div>
                    </div>

                    <div class="flip-grid">
                    <div class="flip-card">
                        <div class="flip-inner">
                        <div class="flip-front">Bilangan Kompleks</div>
                        <div class="flip-back">z = a + bi</div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-inner">
                        <div class="flip-front">Konjugat</div>
                        <div class="flip-back">z̄ = a - bi</div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-inner">
                        <div class="flip-front">Modulus</div>
                        <div class="flip-back">|z| = √(a² + b²)</div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-inner">
                        <div class="flip-front">Argand Plane</div>
                        <div class="flip-back">Sumbu real & imajiner</div>
                        </div>
                    </div>
                </div>
            `
        },
            {
            title: "BAB V: Sistem Bilangan dalam Berbagai Basis",
            readingTime: "18 menit baca",
            content: `
                <h2 class="section-heading">Sistem Desimal (Basis 10)</h2>
                <p>Sistem bilangan yang paling umum digunakan, menggunakan digit 0–9.</p>
                <p><strong>Contoh:</strong> 345 = 3 × 10² + 4 × 10¹ + 5 × 10⁰ = 300 + 40 + 5</p>

                <h2 class="section-heading">Sistem Biner (Basis 2)</h2>
                <p>Digunakan dalam komputer dan sistem digital, hanya memakai digit 0 dan 1.</p>
                <p><strong>Contoh:</strong> 1011 = 1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰ = 8 + 0 + 2 + 1 = 11 (desimal)</p>

                <h2 class="section-heading">Sistem Oktal (Basis 8)</h2>
                <p>Menggunakan digit dari 0 hingga 7.</p>
                <p><strong>Contoh:</strong> 27 = 2 × 8¹ + 7 × 8⁰ = 16 + 7 = 23 (desimal)</p>

                <h2 class="section-heading">Sistem Heksadesimal (Basis 16)</h2>
                <p>Menggunakan digit 0–9 dan huruf A–F (A=10, ..., F=15).</p>
                <p><strong>Contoh:</strong> 1A = 1 × 16¹ + 10 × 16⁰ = 16 + 10 = 26 (desimal)</p>
            `,
            visual: `
                <div class="timeline-scroll">
                <div class="timeline-card">
                    <h4>Desimal (10)</h4>
                    <p>345 = 3×10² + 4×10¹ + 5×10⁰</p>
                </div>
                <div class="timeline-card">
                    <h4>Biner (2)</h4>
                    <p>1011 = 8 + 0 + 2 + 1 = 11</p>
                </div>
                <div class="timeline-card">
                    <h4>Oktal (8)</h4>
                    <p>27 = 2×8¹ + 7 = 23</p>
                </div>
                <div class="timeline-card">
                    <h4>Heksadesimal (16)</h4>
                    <p>1A = 1×16 + 10 = 26</p>
                </div>
                </div>

                <div class="flip-grid">
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">Desimal</div>
                    <div class="flip-back">Basis 10, digunakan sehari-hari</div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">Biner</div>
                    <div class="flip-back">Basis 2, untuk komputer</div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">Oktal</div>
                    <div class="flip-back">Basis 8, 0–7</div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">Hexa</div>
                    <div class="flip-back">Basis 16, 0–9, A–F</div>
                    </div>
                </div>
                </div>
            `
        },
        {
            title: "BAB VI: Aplikasi dan Latihan",
            readingTime: "15 menit baca",
            content: `
                <h2 class="section-heading">Aplikasi Sistem Bilangan</h2>
                <p>Sistem bilangan digunakan secara luas dalam berbagai bidang ilmu dan teknologi:</p>
                <ol>
                <li><strong>Ilmu Komputer:</strong> Penggunaan sistem biner dalam pemrograman dan pengolahan data.</li>
                <li><strong>Keuangan:</strong> Bilangan rasional digunakan dalam perhitungan bunga dan investasi.</li>
                <li><strong>Statistika:</strong> Bilangan real digunakan dalam analisis data dan probabilitas.</li>
                <li><strong>Fisika:</strong> Bilangan kompleks digunakan dalam mekanika kuantum dan teori gelombang.</li>
                </ol>

                <h2 class="section-heading">Latihan</h2>
                <ol>
                <li>Uraikan angka 256 dalam sistem biner.</li>
                <li>Konversikan bilangan biner 1101 ke dalam desimal.</li>
                <li>Berikan contoh bilangan rasional dan irasional.</li>
                <li>Buktikan bahwa √3 adalah bilangan irasional.</li>
                <li>Hitung hasil dari (3 + 4i) + (2 - 3i).</li>
                </ol>

                <h2 class="section-heading">Penutup</h2>
                <p>
                Sistem bilangan adalah fondasi dari matematika dan ilmu pengetahuan. 
                Memahami berbagai jenis bilangan dan operasinya sangat penting untuk pengembangan keterampilan matematika yang lebih lanjut.
                Dengan pengetahuan ini, kita dapat menjelajahi konsep yang lebih kompleks dan menerapkannya dalam kehidupan sehari-hari.
                </p>
            `,
            visual: `
                <div class="timeline-scroll">
                <div class="timeline-card">
                    <h4>Ilmu Komputer</h4>
                    <p>Sistem biner untuk logika digital & pemrograman</p>
                </div>
                <div class="timeline-card">
                    <h4>Keuangan</h4>
                    <p>Perhitungan bunga menggunakan bilangan rasional</p>
                </div>
                <div class="timeline-card">
                    <h4>Statistika</h4>
                    <p>Analisis data dengan bilangan real</p>
                </div>
                <div class="timeline-card">
                    <h4>Fisika</h4>
                    <p>Bilangan kompleks dalam teori gelombang</p>
                </div>
                </div>

                <div class="flip-grid">
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">256 dalam Biner</div>
                    <div class="flip-back">256 = 100000000₂</div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">1101 (biner)</div>
                    <div class="flip-back">= 13 dalam desimal</div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">√3</div>
                    <div class="flip-back">Bukti irasional: tidak bisa dinyatakan sebagai a/b</div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-inner">
                    <div class="flip-front">(3 + 4i) + (2 - 3i)</div>
                    <div class="flip-back">= 5 + i</div>
                    </div>
                </div>
                </div>
            `
            }
        ]
    },
    {
        id: "aritmatika-dan-operasi",
        title: "Aritmatika dan Operasi",
        subtitle: "Fondasi Perhitungan Matematika",
        chapters: [
        {
            title: "BAB I: Pengantar Aritmatika",
            readingTime: "20 menit baca",
            content: `
                <h2 class="section-heading">Definisi dan Ruang Lingkup</h2>
                <p>Aritmatika adalah cabang matematika yang mempelajari operasi dasar pada bilangan. Kata "aritmatika" berasal dari bahasa Yunani "arithmos" yang berarti bilangan. Secara formal, aritmatika mencakup:</p>
                <ol>
                <li>Operasi fundamental: penjumlahan, pengurangan, perkalian, dan pembagian</li>
                <li>Sifat-sifat operasi: komutatif, asosiatif, distributif</li>
                <li>Algoritma perhitungan: metode sistematis untuk melakukan operasi</li>
                <li>Estimasi dan aproksimasi: teknik mendapatkan hasil pendekatan</li>
                <li>Aplikasi praktis: penggunaan dalam konteks nyata</li>
                </ol>
                <p>Aritmatika bukan sekadar kumpulan aturan perhitungan, tetapi sistem logis yang membentuk fondasi seluruh matematika. Setiap konsep matematika lanjutan, dari aljabar hingga kalkulus, bergantung pada pemahaman yang solid tentang operasi aritmatika dasar.</p>

                <h2 class="section-heading">Sejarah Perkembangan Aritmatika</h2>
                <h3 class="subsection-heading">Era Prasejarah dan Peradaban Kuno</h3>
                <p>Konsep bilangan dan perhitungan muncul bersamaan dengan peradaban manusia. Bukti arkeologis menunjukkan bahwa manusia prasejarah sudah menggunakan sistem pencacahan sederhana dengan membuat tanda pada tulang atau batu.</p>

                <p><strong>Peradaban Mesopotamia (3000-500 SM)</strong> Bangsa Sumeria dan Babilonia mengembangkan sistem bilangan basis 60 (sexagesimal) yang masih kita gunakan untuk mengukur waktu dan sudut. Mereka menciptakan:</p>
                <ul>
                <li>Tabel perkalian pertama (2000 SM)</li>
                <li>Sistem notasi posisional</li>
                <li>Metode perhitungan untuk perdagangan dan astronomi</li>
                </ul>

                <p><strong>Peradaban Mesir (3000-30 SM)</strong> Bangsa Mesir menggunakan hieroglif untuk bilangan dan mengembangkan:</p>
                <ul>
                <li>Sistem bilangan basis 10</li>
                <li>Metode perkalian "doubling" (penggandaan)</li>
                <li>Operasi dengan pecahan unit (1/n)</li>
                <li>Papirus Rhind (1650 SM) yang berisi 85 masalah matematika</li>
                </ul>

                <p><strong>Peradaban Yunani (800-146 SM)</strong> Matematikawan Yunani memberikan fondasi teoretis:</p>
                <ul>
                <li>Euclid: "Elements" (300 SM) - sistematisasi geometri dan aritmatika</li>
                <li>Pythagoras: hubungan antara bilangan dan harmoni</li>
                <li>Archimedes: metode perhitungan π dan volume</li>
                </ul>

                <h3 class="subsection-heading">Era Klasik dan Pertengahan</h3>
                <p><strong>Matematika India (500-1200 M)</strong> Kontribusi revolusioner dari India:</p>
                <ul>
                <li>Sistem bilangan posisional dengan nol (Brahmagupta, 628 M)</li>
                <li>Aturan operasi dengan bilangan negatif</li>
                <li>Metode perhitungan akar kuadrat</li>
                <li>Sistem bilangan yang kita gunakan sekarang</li>
                </ul>

                <p><strong>Matematika Islam (700-1400 M)</strong> Matematikawan Muslim menjadi jembatan antara Timur dan Barat:</p>
                <ul>
                <li>Al-Khwarizmi: "Kitab al-Jam' wa'l-tafriq" - memperkenalkan sistem Hindu-Arab</li>
                <li>Al-Kindi: terjemahan dan pengembangan matematika Yunani</li>
                <li>Omar Khayyam: solusi persamaan kubik</li>
                </ul>

                <p><strong>Eropa Abad Pertengahan</strong></p>
                <ul>
                <li>Leonardo Fibonacci: "Liber Abaci" (1202) - memperkenalkan sistem Hindu-Arab ke Eropa</li>
                <li>Pergantian dari sistem Romawi ke sistem Arab</li>
                <li>Perkembangan teknik perhitungan komersial</li>
                </ul>

                <h3 class="subsection-heading">Era Modern</h3>
                <p><strong>Renaissance dan Pencerahan (1400-1800)</strong></p>
                <ul>
                <li>Perkembangan notasi matematika modern</li>
                <li>François Viète: aljabar simbolik</li>
                <li>John Napier: logaritma (1614)</li>
                <li>Blaise Pascal: kalkulator mekanis pertama (1642)</li>
                </ul>

                <p><strong>Era Industri dan Komputer (1800-sekarang)</strong></p>
                <ul>
                <li>Charles Babbage: mesin analitik</li>
                <li>Ada Lovelace: algoritma komputer pertama</li>
                <li>Perkembangan komputer elektronik</li>
                <li>Kalkulator dan komputer personal</li>
                </ul>

                <h2 class="section-heading">Peran dalam Matematika Modern</h2>
                <p>Aritmatika membentuk fondasi untuk semua cabang matematika:</p>

                <p><strong>Aljabar:</strong> Manipulasi simbol menggunakan aturan aritmatika</p>
                <ul>
                <li>Persamaan linear: 2x + 3 = 7</li>
                <li>Sistem persamaan</li>
                <li>Polinomial dan faktorisasi</li>
                </ul>

                <p><strong>Geometri:</strong> Perhitungan luas, volume, dan jarak</p>
                <ul>
                <li>Teorema Pythagoras: a² + b² = c²</li>
                <li>Trigonometri</li>
                <li>Geometri analitik</li>
                </ul>

                <p><strong>Kalkulus:</strong> Limit, turunan, dan integral</p>
                <ul>
                <li>Limit: lim(x→0) sin(x)/x = 1</li>
                <li>Turunan sebagai laju perubahan</li>
                <li>Integral sebagai akumulasi</li>
                </ul>

                <p><strong>Statistika:</strong> Analisis data dan probabilitas</p>
                <ul>
                <li>Rata-rata, median, modus</li>
                <li>Distribusi probabilitas</li>
                <li>Uji hipotesis</li>
                </ul>

                <p><strong>Matematika Terapan:</strong> Pemodelan fenomena nyata</p>
                <ul>
                <li>Fisika: F = ma</li>
                <li>Ekonomi: model pertumbuhan</li>
                <li>Biologi: dinamika populasi</li>
                </ul>
            `,
            visual: `<!-- Visualisasi timeline sejarah aritmatika dan relasi ke cabang lain dapat ditambahkan di sini -->`
        },
        {
            title: "BAB II: Empat Operasi Dasar",
            readingTime: "24 menit baca",
            content: `
            <h2 class="section-heading">Penjumlahan</h2>
            <p>Penjumlahan adalah operasi yang menggabungkan dua atau lebih bilangan untuk menghasilkan jumlah total. Secara formal, penjumlahan adalah fungsi biner yang memetakan pasangan bilangan (a, b) ke bilangan c sedemikian sehingga a + b = c.</p>
            <h3 class="subsection-heading">Model Konseptual Penjumlahan</h3>
            <ol>
                <li><strong>Model Gabungan (Union Model)</strong> Menggabungkan dua himpunan terpisah:
                <ul>
                    <li>3 apel + 2 apel = 5 apel</li>
                    <li>Himpunan {1,2,3} ∪ {4,5} = {1,2,3,4,5}</li>
                </ul>
                </li>
                <li><strong>Model Penambahan (Addition Model)</strong> Menambahkan ke kuantitas yang sudah ada:
                <ul>
                    <li>Memiliki 7 buku, membeli 3 buku lagi = 10 buku</li>
                    <li>Suhu 15°C naik 8°C = 23°C</li>
                </ul>
                </li>
                <li><strong>Model Garis Bilangan (Number Line Model)</strong> Bergerak ke kanan pada garis bilangan:
                <ul>
                    <li>Mulai dari 4, bergerak 6 langkah ke kanan = 10</li>
                    <li>Visualisasi: ←—•—•—•—•—•—•—•—•—•—•—→ 0 1 2 3 4 5 6 7 8 9 10</li>
                </ul>
                </li>
            </ol>
            <h3 class="subsection-heading">Algoritma Penjumlahan</h3>
            <pre>
                11     (carry)
                347
                256
                ----- +
                603
            </pre>
            <p>Langkah sistematis:</p>
            <ol>
                <li>Mulai dari kolom paling kanan (satuan): 7 + 6 = 13</li>
                <li>Tulis 3, simpan 1 sebagai carry</li>
                <li>Kolom puluhan: 4 + 5 + 1 (carry) = 10</li>
                <li>Tulis 0, simpan 1 sebagai carry</li>
                <li>Kolom ratusan: 3 + 2 + 1(carry) = 6</li>
                <li>Hasil: 603</li>
            </ol>
            <h3 class="subsection-heading">Penjumlahan dengan Bilangan Negatif</h3>
            <p>Aturan tanda:</p>
            <ul>
                <li>(+a) + (+b) = +(a + b)</li>
                <li>(-a) + (-b) = -(a + b)</li>
                <li>(+a) + (-b) = +(a - b) jika a ≥ b, atau -(b - a) jika b > a</li>
                <li>(-a) + (+b) = +(b - a) jika b ≥ a, atau -(a - b) jika a > b</li>
            </ul>
            <p>Contoh:</p>
            <ul>
                <li>8 + (-3) = +(8 - 3) = 5</li>
                <li>(-5) + (-7) = -(5 + 7) = -12</li>
                <li>(-9) + 4 = -(9 - 4) = -5</li>
            </ul>
            <h2 class="section-heading">Pengurangan</h2>
            <p>Pengurangan adalah operasi yang menentukan selisih antara dua bilangan. Secara formal, a - b = c berarti a = b + c, atau c adalah bilangan yang jika ditambahkan ke b menghasilkan a.</p>
            <h3 class="subsection-heading">Model Konseptual Pengurangan</h3>
            <ol>
                <li><strong>Model Pengambilan (Take Away Model)</strong>:
                <ul>
                    <li>10 kelereng, diambil 4 = 6</li>
                    <li>Rp 50.000 - Rp 20.000 = Rp 30.000</li>
                </ul>
                </li>
                <li><strong>Model Perbandingan</strong>:
                <ul>
                    <li>175 - 168 = 7 cm</li>
                </ul>
                </li>
                <li><strong>Model Jarak</strong>:
                <ul>
                    <li>|12 - 5| = 7 satuan</li>
                </ul>
                </li>
            </ol>
            <h3 class="subsection-heading">Algoritma Pengurangan</h3>
            <pre>
                4 10 13
                5  0  3
                2  4  7
                --------- (-)
                2  5  6
            </pre>
            <p>Langkah sistematis:</p>
            <ol>
                <li>3 - 7 tidak bisa → pinjam dari kolom puluhan</li>
                <li>13 - 7 = 6</li>
                <li>0 - 1 = tidak bisa → pinjam dari ratusan</li>
                <li>10 - 1 - 4 = 5</li>
                <li>5 - 2 = 2</li>
                <li>Hasil: 256</li>
            </ol>
            <h2 class="section-heading">Perkalian</h2>
            <p>Perkalian adalah penjumlahan berulang.</p>
            <h3 class="subsection-heading">Model Konseptual Perkalian</h3>
            <ol>
                <li>4 × 3 = 4 + 4 + 4</li>
                <li>Array Model: 4 baris × 3 kolom</li>
                <li>Penskalaan: 0.5 × 8 = 4</li>
                <li>Luas = panjang × lebar</li>
            </ol>
            <h3 class="subsection-heading">Algoritma Perkalian</h3>
            <pre>
                234
                67
                ------ (×)
                1638
                14040
                ------
                15678
            </pre>
            <h3 class="subsection-heading">Sifat Khusus</h3>
            <ul>
                <li>a × 0 = 0</li>
                <li>a × 1 = a</li>
                <li>a × 10 = a0</li>
            </ul>
            <h2 class="section-heading">Pembagian</h2>
            <p>Pembagian menentukan berapa kali suatu bilangan dapat masuk ke bilangan lain.</p>
            <h3 class="subsection-heading">Model Konseptual Pembagian</h3>
            <ol>
                <li>12 ÷ 4 = 3</li>
                <li>15 objek, tiap grup 3 → 15 ÷ 3 = 5 grup</li>
                <li>20 ÷ 4 = 5</li>
            </ol>
            <h3 class="subsection-heading">Algoritma Pembagian</h3>
            <pre>
                15 | 345       → hasil: 23
                -30
                    45
                -45
                    0
            </pre>
            <pre>
                5 | 87         → hasil: 17 sisa 2
                -5
                37
                -35
                2
            </pre>
            <h4>Langkah sistematis:</h4>
            <ol>
            <li>5 masuk ke 8 berapa kali? 1 kali (1 × 5 = 5)</li>
            <li>8 - 5 = 3, turunkan 7 → 37</li>
            <li>5 masuk ke 37 berapa kali? 7 kali (7 × 5 = 35)</li>
            <li>37 - 35 = 2, sisa 2</li>
            <li>Hasil: 17 sisa 2</li>
            </ol>
            `,
            visual: `<!-- visual interaktif empat operasi -->`
        },
        {
            title: "BAB III: Sifat-sifat Operasi Aritmatika",
            readingTime: "10 menit baca",
            content: `
            <h2 class="section-heading">BAB III: SIFAT-SIFAT OPERASI ARITMATIKA</h2>

            <h3 class="subsection-heading">Sifat Komutatif</h3>
            <p>Sifat komutatif menyatakan bahwa urutan operand tidak mempengaruhi hasil operasi.</p>
            <p>Penjumlahan: a + b = b + a</p>
            <ul>
                <li>Contoh: 5 + 3 = 3 + 5 = 8</li>
            </ul>
            <p>Perkalian: a × b = b × a</p>
            <ul>
                <li>Contoh: 4 × 6 = 6 × 4 = 24</li>
            </ul>
            <p><strong>Catatan Penting:</strong> Pengurangan dan pembagian TIDAK komutatif</p>
            <ul>
                <li>8 - 3 ≠ 3 - 8 (5 ≠ -5)</li>
                <li>12 ÷ 3 ≠ 3 ÷ 12 (4 ≠ 0.25)</li>
            </ul>

            <h3 class="subsection-heading">Sifat Asosiatif</h3>
            <p>Sifat asosiatif menyatakan bahwa cara pengelompokan operand tidak mempengaruhi hasil.</p>
            <p>Penjumlahan: (a + b) + c = a + (b + c)</p>
            <ul>
                <li>Contoh: (2 + 3) + 4 = 2 + (3 + 4) = 9</li>
            </ul>
            <p>Perkalian: (a × b) × c = a × (b × c)</p>
            <ul>
                <li>Contoh: (2 × 3) × 4 = 2 × (3 × 4) = 24</li>
            </ul>
            <p><strong>Aplikasi Praktis:</strong> Sifat ini memungkinkan kita menghitung dengan cara yang paling mudah</p>
            <ul>
                <li>25 × 4 × 7 = (25 × 4) × 7 = 100 × 7 = 700</li>
            </ul>

            <h3 class="subsection-heading">Sifat Distributif</h3>
            <p>Sifat distributif menghubungkan perkalian dengan penjumlahan atau pengurangan.</p>
            <p>Distributif Perkalian terhadap Penjumlahan: a × (b + c) = (a × b) + (a × c)</p>
            <ul>
                <li>Contoh: 3 × (4 + 5) = 3 × 9 = 27</li>
                <li>Atau: (3 × 4) + (3 × 5) = 12 + 15 = 27</li>
            </ul>
            <p>Distributif Perkalian terhadap Pengurangan: a × (b - c) = (a × b) - (a × c)</p>
            <ul>
                <li>Contoh: 5 × (8 - 3) = 5 × 5 = 25</li>
                <li>Atau: (5 × 8) - (5 × 3) = 40 - 15 = 25</li>
            </ul>
            <p><strong>Aplikasi dalam Perhitungan Mental:</strong></p>
            <ul>
                <li>7 × 98 = 7 × (100 - 2) = 700 - 14 = 686</li>
                <li>15 × 12 = 15 × (10 + 2) = 150 + 30 = 180</li>
            </ul>

            <h3 class="subsection-heading">Elemen Identitas dan Invers</h3>
            <p><strong>Elemen Identitas</strong></p>
            <p>Identitas Penjumlahan: 0 adalah elemen identitas penjumlahan</p>
            <ul>
                <li>a + 0 = 0 + a = a untuk semua bilangan a</li>
            </ul>
            <p>Identitas Perkalian: 1 adalah elemen identitas perkalian</p>
            <ul>
                <li>a × 1 = 1 × a = a untuk semua bilangan a</li>
            </ul>

            <p><strong>Elemen Invers</strong></p>
            <p>Invers Penjumlahan: Untuk setiap bilangan a, terdapat -a sedemikian sehingga:</p>
            <ul>
                <li>a + (-a) = (-a) + a = 0</li>
            </ul>
            <p>Invers Perkalian: Untuk setiap bilangan a ≠ 0, terdapat 1/a sedemikian sehingga:</p>
            <ul>
                <li>a × (1/a) = (1/a) × a = 1</li>
            </ul>
            <hr />
            `,
            visual: `<!-- flip-card interaktif sifat operasi -->`
        },
        {
            title: "BAB IV: Urutan Operasi dan Notasi",
            readingTime: "9 menit baca",
            content: `
                <h2 class="section-heading">BAB IV: URUTAN OPERASI DAN NOTASI</h2>

                <h3 class="subsection-heading">Aturan BODMAS/PEMDAS</h3>
                <p>Urutan operasi adalah aturan yang menentukan urutan dalam melakukan operasi matematika. Aturan ini sering diingat dengan akronim BODMAS (Brackets, Orders, Division and Multiplication, Addition and Subtraction) atau PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction).</p>
                <ol>
                    <li><strong>Brackets/Parentheses:</strong> Operasi dalam tanda kurung harus diselesaikan terlebih dahulu.</li>
                    <li><strong>Orders/Exponents:</strong> Operasi eksponen atau pangkat dilakukan setelah tanda kurung.</li>
                    <li><strong>Division and Multiplication:</strong> Operasi pembagian dan perkalian dilakukan dari kiri ke kanan.</li>
                    <li><strong>Addition and Subtraction:</strong> Operasi penjumlahan dan pengurangan juga dilakukan dari kiri ke kanan.</li>
                </ol>

                <h3 class="subsection-heading">Contoh Penerapan Aturan</h3>
                <p>Misalkan kita memiliki ekspresi berikut:</p>
                <p><code>13 + 6 × (5 + 4) ÷ 3 - 7</code></p>
                <p><strong>Langkah-langkah penyelesaian:</strong></p>
                <ol>
                    <li>Selesaikan dalam tanda kurung: 5 + 4 = 9</li>
                    <li>Ekspresi menjadi: 3 + 6 × 9 ÷ 3 - 7</li>
                    <li>Lakukan perkalian dan pembagian dari kiri ke kanan:
                        <ul>
                        <li>6 × 9 = 54</li>
                        <li>54 ÷ 3 = 18</li>
                        </ul>
                    </li>
                    <li>Ekspresi menjadi: 3 + 18 - 7</li>
                    <li>Lakukan penjumlahan dan pengurangan dari kiri ke kanan:
                        <ul>
                        <li>3 + 18 = 21</li>
                        <li>21 - 7 = 14</li>
                        </ul>
                </li>
                </ol>

                <h3 class="subsection-heading">Penggunaan Tanda Kurung</h3>
                <p>Tanda kurung digunakan untuk mengubah urutan operasi. Misalnya, dalam ekspresi:</p>
                <p><code>2 + 3 × 4</code></p>
                <p>Tanpa tanda kurung, hasilnya adalah 14. Namun, jika kita menambahkan tanda kurung:</p>
                <p><code>(2 + 3) × 4</code></p>
                <p>Hasilnya menjadi 20. Tanda kurung sangat penting untuk memastikan bahwa operasi dilakukan dalam urutan yang diinginkan.</p>

                <h3 class="subsection-heading">Notasi Matematika Standar</h3>
                <p>Notasi matematika adalah cara untuk mengekspresikan operasi dan hubungan antara bilangan. Beberapa notasi umum meliputi:</p>
                <ol>
                    <li><strong>Notasi Bilangan:</strong> Menggunakan simbol untuk bilangan, seperti 1, 2, 3, dst.</li>
                    <li><strong>Notasi Operasi:</strong> Menggunakan simbol untuk operasi, seperti + (penjumlahan), - (pengurangan), × (perkalian), ÷ (pembagian).</li>
                    <li><strong>Notasi Fungsi:</strong> Menggunakan huruf untuk mewakili fungsi, seperti f(x) = x².</li>
                    <li><strong>Notasi Set:</strong> Menggunakan kurung kurawal untuk menyatakan himpunan, seperti {1, 2, 3}.</li>
                </ol>
            `,
            visual: `<!-- animasi interaktif urutan operasi -->`
        },
        {
            title: "BAB V: Estimasi dan Perhitungan Mental",
            readingTime: "8 menit baca",
            content: `
                <h2 class="section-heading">Teknik Estimasi</h2>
                <p>Estimasi adalah proses memperkirakan nilai tanpa melakukan perhitungan yang tepat. Teknik ini berguna dalam situasi di mana kecepatan lebih penting daripada akurasi.</p>
                <ol>
                <li><strong>Pembulatan:</strong> Membulatkan angka ke angka terdekat untuk memudahkan perhitungan.
                    <br><em>Contoh:</em> 47 dibulatkan menjadi 50, 23 dibulatkan menjadi 20.
                </li>
                <li><strong>Perkiraan Cepat:</strong> Menggunakan angka yang lebih sederhana untuk melakukan perhitungan cepat.
                    <br><em>Contoh:</em> 49 + 36 dapat diperkirakan menjadi 50 + 40 = 90.
                </li>
                </ol>

                <h2 class="section-heading">Strategi Perhitungan Mental</h2>
                <p>Perhitungan mental adalah kemampuan untuk melakukan operasi matematika dalam pikiran tanpa menggunakan alat bantu. Beberapa strategi yang dapat digunakan:</p>
                <ol>
                <li><strong>Memecah Angka:</strong> Memecah angka menjadi bagian yang lebih kecil untuk memudahkan perhitungan.
                    <br><em>Contoh:</em> 27 + 48 dapat dipecah menjadi 27 + 40 + 8 = 75.
                </li>
                <li><strong>Menggunakan Sifat Aritmatika:</strong> Memanfaatkan sifat komutatif dan asosiatif untuk menyederhanakan perhitungan.
                    <br><em>Contoh:</em> 15 + 25 + 5 = (15 + 5) + 25 = 20 + 25 = 45.
                </li>
                </ol>

                <h2 class="section-heading">Verifikasi Hasil</h2>
                <p>Setelah melakukan perhitungan, penting untuk memeriksa kebenaran hasil. Beberapa cara untuk memeriksa hasil:</p>
                <ol>
                <li><strong>Menggunakan Operasi Balik:</strong> Menggunakan operasi yang berlawanan untuk memverifikasi hasil.
                    <br><em>Contoh:</em> Jika 8 + 5 = 13, maka 13 - 5 harus sama dengan 8.
                </li>
                <li><strong>Estimasi:</strong> Membandingkan hasil dengan estimasi untuk melihat apakah hasilnya masuk akal.
                    <br><em>Contoh:</em> Jika hasil 198, tetapi estimasi adalah 200, maka hasilnya mungkin perlu diperiksa kembali.
                </li>
                </ol>
            `,
            visual: `<!-- soal-soal interaktif atau gamifikasi latihan -->`
            },
            {
            title: "BAB VI: Aplikasi dan Latihan",
            readingTime: "10 menit baca",
            content: `
            <h2 class="section-heading">Penerapan dalam Kehidupan Sehari-hari</h2>
            <p>Aritmatika memiliki banyak aplikasi dalam kehidupan sehari-hari, seperti:</p>
            <ol>
                <li><strong>Keuangan:</strong> Menghitung pengeluaran, pendapatan, dan anggaran.</li>
                <li><strong>Belanja:</strong> Menghitung total belanja dan diskon.</li>
                <li><strong>Memasak:</strong> Mengukur bahan dan mengonversi resep.</li>
                <li><strong>Olahraga:</strong> Menghitung skor dan statistik.</li>
            </ol>

            <h2 class="section-heading">Latihan Soal Bertingkat</h2>
            <p>Berikut adalah beberapa latihan soal untuk menguji pemahaman:</p>
            <ol>
                <li>Hitunglah hasil dari 45 + 67 - 23.</li>
                <li>Jika 8 × 7 = ?, berapa hasilnya?</li>
                <li>Selesaikan 144 ÷ 12 + 5.</li>
                <li>Hitunglah 15% dari 200.</li>
            </ol>

            <h2 class="section-heading">Pemecahan Masalah Kontekstual</h2>
            <p>Aritmatika juga digunakan dalam pemecahan masalah kontekstual. Misalnya, jika Anda memiliki 50 kelereng dan memberikan 15 kepada teman, berapa sisa kelereng yang Anda miliki?</p>

            <hr />

            <h2 class="section-heading">PENUTUP</h2>
            <p>Aritmatika dan operasi dasar adalah fondasi penting dalam matematika. Memahami konsep ini tidak hanya membantu dalam perhitungan sehari-hari tetapi juga membangun dasar untuk mempelajari konsep matematika yang lebih kompleks. Dengan latihan dan penerapan yang tepat, keterampilan aritmatika dapat ditingkatkan dan diterapkan dalam berbagai aspek kehidupan.</p>
            `,
            visual: `
            <div class="timeline-scroll">
                <div class="timeline-card">
                <h4>Keuangan</h4>
                <p>Mengelola anggaran dan tabungan</p>
                </div>
                <div class="timeline-card">
                <h4>Belanja</h4>
                <p>Diskon dan total pembayaran</p>
                </div>
                <div class="timeline-card">
                <h4>Memasak</h4>
                <p>Mengukur dan mengonversi bahan</p>
                </div>
                <div class="timeline-card">
                <h4>Olahraga</h4>
                <p>Statistik skor dan perbandingan</p>
                </div>
            </div>

            <div class="flip-grid">
                <div class="flip-card">
                <div class="flip-inner">
                    <div class="flip-front">Soal 1</div>
                    <div class="flip-back">89</div>
                </div>
                </div>
                <div class="flip-card">
                <div class="flip-inner">
                    <div class="flip-front">Soal 2</div>
                    <div class="flip-back">56</div>
                </div>
                </div>
                <div class="flip-card">
                <div class="flip-inner">
                    <div class="flip-front">Soal 3</div>
                    <div class="flip-back">17</div>
                </div>
                </div>
                <div class="flip-card">
                <div class="flip-inner">
                    <div class="flip-front">Soal 4</div>
                    <div class="flip-back">30</div>
                </div>
                </div>
            </div>
            `
        }]
    },
// Tambahan data.js untuk buku "Konsep Bilangan Pecahan dan Desimal"
    {
        id: "bilangan-pecahan",
        title: "Konsep Bilangan Pecahan dan Desimal",
        subtitle: "Memahami Representasi Bilangan Non-Bulat",
        chapters: [
        {
            title: "BAB I: Pengantar Bilangan Pecahan",
            readingTime: "22 menit baca",
            content: `
            <h2 class="section-heading">Definisi dan Konsep Dasar</h2>
            <p>Bilangan pecahan adalah representasi matematika untuk menyatakan bagian dari keseluruhan atau rasio antara dua bilangan bulat. Secara formal, pecahan didefinisikan sebagai bilangan yang dapat ditulis dalam bentuk a/b, dimana:</p>
            <ul>
                <li><strong>a</strong> disebut pembilang (numerator)</li>
                <li><strong>b</strong> disebut penyebut (denominator)</li>
                <li><strong>b ≠ 0</strong> (penyebut tidak boleh nol)</li>
            </ul>

            <h3 class="subsection-heading">Interpretasi Konseptual Pecahan:</h3>
            <ol>
                <li><strong>Model Bagian-Keseluruhan</strong>
                <ul>
                    <li>3/4 berarti 3 bagian dari 4 bagian yang sama</li>
                    <li>Seperti memotong pizza menjadi 4 bagian dan mengambil 3 bagian</li>
                </ul>
                </li>
                <li><strong>Model Rasio</strong>
                <ul>
                    <li>2/3 dapat berarti perbandingan 2 banding 3</li>
                    <li>Dalam campuran, 2 bagian bahan A untuk 3 bagian bahan B</li>
                </ul>
                </li>
                <li><strong>Model Pembagian</strong>
                <ul>
                    <li>7/2 sama dengan 7 ÷ 2 = 3.5</li>
                    <li>Pecahan sebagai hasil operasi pembagian</li>
                </ul>
                </li>
                <li><strong>Model Lokasi pada Garis Bilangan</strong>
                <ul>
                    <li>Pecahan menunjukkan posisi antara bilangan bulat</li>
                    <li>1/2 berada di tengah antara 0 dan 1</li>
                </ul>
                </li>
            </ol>

            <h2 class="section-heading">Sejarah Perkembangan Pecahan</h2>
            <h3 class="subsection-heading">Era Peradaban Kuno</h3>
            <p><strong>Mesir Kuno (3000-300 SM)</strong> Bangsa Mesir menggunakan pecahan unit (pecahan dengan pembilang 1):</p>
            <ul>
                <li>Hieroglif khusus untuk 1/2, 1/3, 1/4</li>
                <li>Papirus Rhind menunjukkan tabel pecahan unit</li>
                <li>Metode "doubling" untuk operasi pecahan</li>
                <li>Contoh: 2/3 ditulis sebagai 1/2 + 1/6</li>
            </ul>

            <p><strong>Babilonia (2000-500 SM)</strong></p>
            <ul>
                <li>Sistem sexagesimal (basis 60) memudahkan pecahan</li>
                <li>1/2 = 30/60, 1/3 = 20/60, 1/4 = 15/60</li>
                <li>Tabel reciprocal untuk pembagian</li>
                <li>Notasi posisional untuk pecahan desimal</li>
            </ul>

            <p><strong>Yunani Kuno (800-146 SM)</strong></p>
            <ul>
                <li>Euclid: teori rasio dan proporsi</li>
                <li>Archimedes: aproksimasi π menggunakan pecahan</li>
                <li>Konsep bilangan rasional vs irasional</li>
                <li>Pembuktian bahwa √2 adalah bilangan irasional</li>
            </ul>

            <h3 class="subsection-heading">Era Klasik dan Pertengahan</h3>
            <p><strong>India (500-1200 M)</strong></p>
            <ul>
                <li>Brahmagupta: aturan operasi pecahan</li>
                <li>Sistem notasi pecahan modern</li>
                <li>Konsep nol dalam pecahan</li>
                <li>Bhaskara: operasi kompleks dengan pecahan</li>
            </ul>

            <p><strong>Islam (700-1400 M)</strong></p>
            <ul>
                <li>Al-Kindi: terjemahan dan pengembangan</li>
                <li>Al-Khwarizmi: aplikasi pecahan dalam aljabar</li>
                <li>Omar Khayyam: pecahan dalam geometri</li>
                <li>Penyebaran ke Eropa melalui perdagangan</li>
            </ul>

            <p><strong>Eropa Abad Pertengahan</strong></p>
            <ul>
                <li>Leonardo Fibonacci: "Liber Abaci" (1202)</li>
                <li>Pengenalan sistem Hindu-Arab ke Eropa</li>
                <li>Perkembangan notasi pecahan modern</li>
                <li>Aplikasi dalam perdagangan dan keuangan</li>
            </ul>

            <h2 class="section-heading">Jenis-jenis Bilangan Pecahan</h2>
            <h3 class="subsection-heading">Berdasarkan Nilai Relatif:</h3>
            <ol>
                <li><strong>Pecahan Sejati (Proper Fraction)</strong>
                <ul><li>Pembilang &lt; penyebut</li><li>Nilai &lt; 1</li><li>Contoh: 2/3, 5/7, 11/15</li></ul>
                </li>
                <li><strong>Pecahan Tidak Sejati (Improper Fraction)</strong>
                <ul><li>Pembilang ≥ penyebut</li><li>Nilai ≥ 1</li><li>Contoh: 7/4, 9/5, 13/13</li></ul>
                </li>
                <li><strong>Pecahan Campuran (Mixed Number)</strong>
                <ul><li>Kombinasi bilangan bulat dan pecahan sejati</li><li>Contoh: 2 1/3, 5 2/7, 10 3/8</li></ul>
                </li>
            </ol>

            <h3 class="subsection-heading">Berdasarkan Penyebut:</h3>
            <ol>
                <li><strong>Pecahan Senama (Like Fractions)</strong>
                <ul><li>Memiliki penyebut yang sama</li><li>Contoh: 2/5, 3/5, 7/5</li></ul>
                </li>
                <li><strong>Pecahan Tidak Senama (Unlike Fractions)</strong>
                <ul><li>Memiliki penyebut yang berbeda</li><li>Contoh: 1/2, 2/3, 3/4</li></ul>
                </li>
            </ol>

            <h3 class="subsection-heading">Berdasarkan Bentuk Sederhana:</h3>
            <ol>
                <li><strong>Pecahan Sederhana</strong>
                <ul><li>FPB(pembilang, penyebut) = 1</li><li>Contoh: 3/4, 5/7, 2/9</li></ul>
                </li>
                <li><strong>Pecahan Tidak Sederhana</strong>
                <ul><li>FPB(pembilang, penyebut) &gt; 1</li><li>Contoh: 6/8, 10/15, 12/18</li></ul>
                </li>
            </ol>
            `,
            visual: `<!-- visualisasi flip-card pecahan dan sejarah perkembangan dapat ditambahkan di sini -->`
        },
        {
            title: "BAB II: Representasi dan Notasi Pecahan",
            readingTime: "18 menit baca",
            content: `
            <h2 class="section-heading">Pecahan Biasa</h2>
            <p>Pecahan biasa adalah bentuk standar penulisan pecahan dengan garis horizontal atau miring memisahkan pembilang dan penyebut.</p>
            <p><strong>Notasi:</strong></p>
            <ul>
            <li>Horizontal: 3/4 atau 3 ÷ 4</li>
            <li>Vertikal: ¾</li>
            <li>Dalam teks: tiga per empat</li>
            </ul>

            <h3 class="subsection-heading">Menyederhanakan Pecahan:</h3>
            <ol>
            <li>Tentukan FPB dari pembilang dan penyebut</li>
            <li>Bagi pembilang dan penyebut dengan FPB</li>
            <li>Hasil adalah pecahan dalam bentuk sederhana</li>
            </ol>
            <p><strong>Contoh:</strong> Sederhanakan 12/18</p>
            <ol>
            <li>FPB(12, 18) = 6</li>
            <li>12 ÷ 6 = 2, 18 ÷ 6 = 3</li>
            <li>Hasil: 2/3</li>
            </ol>

            <h3 class="subsection-heading">Membandingkan Pecahan:</h3>
            <ol>
            <li>Samakan penyebut (KPK)</li>
            <li>Bandingkan pembilang</li>
            </ol>
            <p><strong>Contoh:</strong> Bandingkan 2/3 dan 3/4</p>
            <ol>
            <li>KPK(3, 4) = 12</li>
            <li>2/3 = 8/12, 3/4 = 9/12</li>
            <li>Karena 8 &lt; 9, maka 2/3 &lt; 3/4</li>
            </ol>

            <h2 class="section-heading">Pecahan Campuran</h2>
            <p>Pecahan campuran terdiri dari bilangan bulat dan pecahan sejati.</p>

            <h3 class="subsection-heading">Konversi Pecahan Tidak Sejati ke Campuran:</h3>
            <ol>
            <li>Bagi pembilang dengan penyebut</li>
            <li>Hasil bagi = bilangan bulat</li>
            <li>Sisa = pembilang pecahan baru</li>
            <li>Penyebut tetap sama</li>
            </ol>
            <p><strong>Contoh:</strong> Ubah 17/5 ke pecahan campuran</p>
            <ol>
            <li>17 ÷ 5 = 3 sisa 2</li>
            <li>Hasil: 3 2/5</li>
            </ol>

            <h3 class="subsection-heading">Konversi Pecahan Campuran ke Tidak Sejati:</h3>
            <ol>
            <li>Kalikan bilangan bulat dengan penyebut</li>
            <li>Tambahkan dengan pembilang</li>
            <li>Hasil = pembilang baru</li>
            <li>Penyebut tetap sama</li>
            </ol>
            <p><strong>Contoh:</strong> Ubah 4 3/7 ke pecahan tidak sejati</p>
            <ol>
            <li>(4 × 7) + 3 = 28 + 3 = 31</li>
            <li>Hasil: 31/7</li>
            </ol>

            <h2 class="section-heading">Pecahan Desimal</h2>
            <p>Pecahan desimal menggunakan sistem basis 10 dengan tanda koma atau titik sebagai pemisah.</p>

            <h3 class="subsection-heading">Nilai Tempat Desimal:</h3>
            <ul>
            <li>0.1 = 1/10 (persepuluh)</li>
            <li>0.01 = 1/100 (perseratus)</li>
            <li>0.001 = 1/1000 (perseribu)</li>
            </ul>

            <h3 class="subsection-heading">Jenis Pecahan Desimal:</h3>
            <ol>
            <li><strong>Desimal Terbatas (Terminating)</strong>
            <ul>
                <li>Memiliki digit terbatas setelah koma</li>
                <li>Contoh: 0.25, 0.375, 0.8</li>
            </ul>
            </li>
            <li><strong>Desimal Berulang (Repeating)</strong>
            <ul>
                <li>Memiliki pola digit yang berulang</li>
                <li>Contoh: 0.333... = 0.3̄, 0.142857142857... = 0.142857̄</li>
            </ul>
            </li>
            </ol>

            <h2 class="section-heading">Konversi Antar Bentuk</h2>
            <h3 class="subsection-heading">Pecahan Biasa ke Desimal:</h3>
            <p>Bagi pembilang dengan penyebut</p>
            <p><strong>Contoh:</strong> 3/4 = 3 ÷ 4 = 0.75</p>

            <h3 class="subsection-heading">Desimal ke Pecahan Biasa:</h3>
            <ol>
            <li><strong>Desimal Terbatas:</strong>
            <ul>
                <li>Tulis sebagai pecahan dengan penyebut 10, 100, 1000, dst</li>
                <li>Sederhanakan</li>
                <li><strong>Contoh:</strong> 0.75 = 75/100 = 3/4</li>
            </ul>
            </li>
            <li><strong>Desimal Berulang:</strong>
            <ul>
                <li>Gunakan metode aljabar</li>
                <li><strong>Contoh:</strong> 0.3̄ = x</li>
                <li>10x = 3.3̄</li>
                <li>10x - x = 3.3̄ - 0.3̄</li>
                <li>9x = 3</li>
                <li>x = 3/9 = 1/3</li>
            </ul>
            </li>
            </ol>
            `,
            visual: `<!-- Tambahkan flip-card atau timeline untuk notasi dan jenis pecahan -->`
        },
        {
            title: "BAB III: Operasi pada Bilangan Pecahan",
            readingTime: "16 menit baca",
            content: `
                <h2 class="section-heading">Penjumlahan dan Pengurangan</h2>
                <h3 class="subsection-heading">Pecahan Senama:</h3>
                <p>Jumlahkan atau kurangkan pembilang, penyebut tetap.</p>
                <ul>
                <li>2/7 + 3/7 = (2+3)/7 = 5/7</li>
                <li>5/8 - 2/8 = (5-2)/8 = 3/8</li>
                </ul>

                <h3 class="subsection-heading">Pecahan Tidak Senama:</h3>
                <ol>
                <li>Samakan penyebut (gunakan KPK)</li>
                <li>Ubah pembilang sesuai perubahan penyebut</li>
                <li>Jumlahkan atau kurangkan pembilang</li>
                <li>Sederhanakan hasil</li>
                </ol>
                <p><strong>Contoh:</strong> 1/3 + 1/4</p>
                <ol>
                <li>KPK(3, 4) = 12</li>
                <li>1/3 = 4/12, 1/4 = 3/12</li>
                <li>4/12 + 3/12 = 7/12</li>
                </ol>

                <h3 class="subsection-heading">Pecahan Campuran:</h3>
                <ol>
                <li>Ubah ke pecahan tidak sejati, atau</li>
                <li>Operasikan bilangan bulat dan pecahan terpisah</li>
                </ol>
                <p><strong>Contoh:</strong> 2 1/3 + 1 1/4</p>
                <p><strong>Metode 1:</strong></p>
                <ul>
                <li>2 1/3 = 7/3, 1 1/4 = 5/4</li>
                <li>7/3 + 5/4 = 28/12 + 15/12 = 43/12 = 3 7/12</li>
                </ul>

                <h2 class="section-heading">Perkalian dan Pembagian</h2>
                <h3 class="subsection-heading">Perkalian Pecahan:</h3>
                <p>Kalikan pembilang dengan pembilang, penyebut dengan penyebut.</p>
                <p><strong>Rumus:</strong> a/b × c/d = (a×c)/(b×d)</p>
                <p><strong>Contoh:</strong> 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2</p>

                <h3 class="subsection-heading">Pembagian Pecahan:</h3>
                <p>Kalikan dengan kebalikan (reciprocal) dari pembagi.</p>
                <p><strong>Rumus:</strong> a/b ÷ c/d = a/b × d/c = (a×d)/(b×c)</p>
                <p><strong>Contoh:</strong> 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8</p>

                <h3 class="subsection-heading">Operasi dengan Bilangan Bulat:</h3>
                <p>Ubah bilangan bulat menjadi pecahan dengan penyebut 1.</p>
                <p><strong>Contoh:</strong> 3 × 2/5 = 3/1 × 2/5 = 6/5 = 1 1/5</p>

                <h2 class="section-heading">Sifat-sifat Operasi Pecahan</h2>
                <h3 class="subsection-heading">Sifat Komutatif:</h3>
                <ul>
                <li>Penjumlahan: a/b + c/d = c/d + a/b</li>
                <li>Perkalian: a/b × c/d = c/d × a/b</li>
                </ul>

                <h3 class="subsection-heading">Sifat Asosiatif:</h3>
                <ul>
                <li>Penjumlahan: (a/b + c/d) + e/f = a/b + (c/d + e/f)</li>
                <li>Perkalian: (a/b × c/d) × e/f = a/b × (c/d × e/f)</li>
                </ul>

                <h3 class="subsection-heading">Sifat Distributif:</h3>
                <p>a/b × (c/d + e/f) = (a/b × c/d) + (a/b × e/f)</p>

                <h3 class="subsection-heading">Elemen Identitas:</h3>
                <ul>
                <li>Penjumlahan: a/b + 0 = a/b</li>
                <li>Perkalian: a/b × 1 = a/b</li>
                </ul>
            `,
            visual: `<!-- Tambahkan visual flip-card atau ilustrasi langkah operasi pecahan di sini -->`
        },
        {
            title: "BAB IV: Bilangan Desimal",
            readingTime: "14 menit baca",
            content: `
                <h2 class="section-heading">Sistem Bilangan Desimal</h2>
                <p>Sistem desimal menggunakan basis 10 dengan nilai tempat yang menurun dari kiri ke kanan.</p>
                <h3 class="subsection-heading">Struktur Bilangan Desimal:</h3>
                <p>
                <strong>Ribuan | Ratusan | Puluhan | Satuan | . | Persepuluh | Perseratus | Perseribu</strong><br />
                &nbsp;&nbsp;1000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;100&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;1&nbsp;&nbsp;| . |&nbsp;&nbsp;&nbsp;0.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;0.01&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;0.001
                </p>

                <h3 class="subsection-heading">Membaca Bilangan Desimal:</h3>
                <ul>
                <li>12.345 dibaca: "dua belas koma tiga empat lima"</li>
                <li>Atau: "dua belas dan tiga ratus empat puluh lima perseribu"</li>
                </ul>

                <h2 class="section-heading">Operasi Bilangan Desimal</h2>
                <h3 class="subsection-heading">Penjumlahan dan Pengurangan:</h3>
                <ol>
                <li>Sejajarkan tanda koma</li>
                <li>Tambahkan nol jika perlu</li>
                <li>Operasikan seperti bilangan bulat</li>
                <li>Letakkan koma pada posisi yang sama</li>
                </ol>
                <p><strong>Contoh:</strong></p>
                <pre>
            12.30
            +  4.56
            -------
            16.86
                </pre>

                <h3 class="subsection-heading">Perkalian:</h3>
                <ol>
                <li>Kalikan seperti bilangan bulat</li>
                <li>Hitung total jumlah angka di belakang koma dari kedua bilangan</li>
                <li>Tempatkan koma pada hasil sesuai jumlah total angka di belakang koma</li>
                </ol>
                <p><strong>Contoh:</strong></p>
                <pre>
            12.5 × 3.4 = 125 × 34 = 4250
            Jumlah angka di belakang koma: 1 (dari 12.5) + 1 (dari 3.4) = 2
            Hasil: 42.50 atau 42.5
                </pre>

                <h3 class="subsection-heading">Pembagian:</h3>
                <ol>
                <li>Ubah pembagi menjadi bilangan bulat dengan menggeser koma</li>
                <li>Geser koma pada pembagi dan hasil sesuai jumlah yang digeser</li>
                <li>Lakukan pembagian seperti biasa</li>
                </ol>
                <p><strong>Contoh:</strong></p>
                <pre>
            12.6 ÷ 0.3
            Ubah 0.3 menjadi 3 (geser koma 1 tempat)
            Geser koma pada 12.6 juga 1 tempat menjadi 126
            126 ÷ 3 = 42
                </pre>

                <h2 class="section-heading">Pembulatan dan Estimasi</h2>
                <h3 class="subsection-heading">Pembulatan:</h3>
                <ul>
                <li>Pembulatan ke angka terdekat</li>
                <li>Jika angka di belakang koma ≥ 5, bulatkan ke atas</li>
                <li>Jika < 5, bulatkan ke bawah</li>
                </ul>
                <p><strong>Contoh:</strong></p>
                <ul>
                <li>3.76 dibulatkan menjadi 4</li>
                <li>3.24 dibulatkan menjadi 3</li>
                </ul>

                <h3 class="subsection-heading">Estimasi:</h3>
                <ul>
                <li>Menggunakan pembulatan untuk memperkirakan hasil</li>
                <li>Berguna dalam perhitungan cepat</li>
                </ul>
                <p><strong>Contoh:</strong></p>
                <ul>
                <li>49 + 36 dapat diperkirakan menjadi 50 + 40 = 90</li>
                </ul>
            `,
            visual: `<!-- Tambahkan diagram nilai tempat desimal atau animasi visual penjumlahan/perkalian di sini -->`
        },
        {
            title: "BAB V: Persentase dan Aplikasi",
            readingTime: "10 menit baca",
            content: `
                <h2 class="section-heading">Konsep Persentase</h2>
                <p>Persentase adalah cara untuk menyatakan suatu bilangan sebagai bagian dari seratus.</p>
                <h3 class="subsection-heading">Rumus Persentase:</h3>
                <p><strong>Persentase = (Bagian / Keseluruhan) × 100%</strong></p>
                <p><strong>Contoh:</strong></p>
                <ul>
                <li>Jika 25 dari 200 siswa lulus, persentasenya adalah:<br />
                (25 / 200) × 100% = 12.5%</li>
                </ul>

                <h2 class="section-heading">Konversi Pecahan-Desimal-Persentase</h2>
                <h3 class="subsection-heading">1. Dari Pecahan ke Persentase:</h3>
                <ul>
                <li>Kalikan pecahan dengan 100%</li>
                <li>Contoh: 3/4 = (3/4) × 100% = 75%</li>
                </ul>

                <h3 class="subsection-heading">2. Dari Desimal ke Persentase:</h3>
                <ul>
                <li>Kalikan desimal dengan 100%</li>
                <li>Contoh: 0.85 = 0.85 × 100% = 85%</li>
                </ul>

                <h3 class="subsection-heading">3. Dari Persentase ke Pecahan:</h3>
                <ul>
                <li>Bagi persentase dengan 100% dan sederhanakan</li>
                <li>Contoh: 60% = 60/100 = 3/5</li>
                </ul>

                <h2 class="section-heading">Aplikasi dalam Kehidupan Sehari-hari</h2>
                <ul>
                <li><strong>Keuangan:</strong> Menghitung diskon, bunga, dan pajak</li>
                <li><strong>Statistik:</strong> Menyajikan data dalam bentuk persentase</li>
                <li><strong>Kesehatan:</strong> Menghitung indeks massa tubuh (BMI) dan persentase lemak tubuh</li>
                </ul>
            `,
            visual: `<!-- Tambahkan visual interaktif seperti diagram lingkaran persentase di sini -->`
        },
        {
            title: "BAB VI: Pemecahan Masalah dan Latihan",
            readingTime: "10 menit baca",
            content: `
                <h2 class="section-heading">Penerapan dalam Kehidupan Sehari-hari</h2>
                <p>Aritmatika pecahan dan desimal sangat penting dalam kehidupan sehari-hari, seperti:</p>
                <ul>
                <li><strong>Belanja:</strong> Menghitung total belanja dan diskon</li>
                <li><strong>Memasak:</strong> Mengukur bahan dan mengonversi resep</li>
                <li><strong>Olahraga:</strong> Menghitung skor dan statistik</li>
                </ul>

                <h2 class="section-heading">Latihan Soal Bertingkat</h2>
                <ol>
                <li>Hitunglah hasil dari 45 + 67 - 23.</li>
                <li>Jika 8 × 7 = ?, berapa hasilnya?</li>
                <li>Selesaikan 144 ÷ 12 + 5.</li>
                <li>Hitunglah 15% dari 200.</li>
                <li>Ubah 0.75 ke dalam bentuk pecahan.</li>
                <li>Ubah 3/8 ke dalam bentuk desimal.</li>
                </ol>

                <h2 class="section-heading">Pemecahan Masalah Kontekstual</h2>
                <p>Aritmatika juga digunakan dalam pemecahan masalah kontekstual. Misalnya, jika Anda memiliki 50 kelereng dan memberikan 15 kepada teman, berapa sisa kelereng yang Anda miliki?</p>

                <hr />

                <h2 class="section-heading">Penutup</h2>
                <p>
                Bilangan pecahan dan desimal adalah fondasi penting dalam matematika. Memahami konsep ini tidak hanya membantu dalam perhitungan sehari-hari tetapi juga membangun dasar untuk mempelajari konsep matematika yang lebih kompleks. Dengan latihan dan penerapan yang tepat, keterampilan aritmatika dapat ditingkatkan dan diterapkan dalam berbagai aspek kehidupan.
                </p>
            `,
            visual: `<!-- Tambahkan visual latihan interaktif atau kuis pecahan/desimal di sini -->`
        }]
    },
    {
        id: "rasio-proporsi-dan-persentase",
        title: "Rasio, Proporsi, dan Persentase",
        subtitle: "Memahami Hubungan dan Perbandingan Kuantitatif",
        chapters: [
        {
            title: "BAB I: Pengantar Rasio dan Proporsi",
            readingTime: "18 menit baca",
            content: `
            <h2 class="section-heading">Definisi dan Konsep Dasar</h2>
            <p>Rasio adalah perbandingan antara dua atau lebih kuantitas yang sejenis, yang menunjukkan hubungan relatif antara besaran-besaran tersebut. Secara matematis, rasio antara a dan b ditulis sebagai a : b atau a/b, dimana b ≠ 0.</p>
            <p>Proporsi adalah pernyataan bahwa dua rasio adalah sama atau setara. Jika a : b = c : d, maka ini membentuk proporsi yang dapat ditulis sebagai a/b = c/d.</p>
            <p>Persentase adalah cara khusus untuk menyatakan rasio atau bagian dari keseluruhan dalam bentuk per seratus (%). Persentase merupakan rasio yang dibandingkan dengan 100.</p>
            <h3 class="subsection-heading">Konsep Fundamental:</h3>
            <ol>
                <li><strong>Hubungan Kuantitatif</strong>
                <ul>
                    <li>Rasio menunjukkan seberapa besar satu kuantitas dibandingkan dengan kuantitas lain</li>
                    <li>Proporsi menunjukkan kesetaraan hubungan antara dua pasang kuantitas</li>
                    <li>Persentase memberikan cara standar untuk membandingkan bagian dengan keseluruhan</li>
                </ul>
                </li>
                <li><strong>Sifat Relatif</strong>
                <ul>
                    <li>Rasio bersifat relatif, bukan absolut</li>
                    <li>2:3 sama dengan 4:6 atau 20:30</li>
                    <li>Nilai absolut dapat berbeda, tetapi hubungan relatifnya sama</li>
                </ul>
                </li>
                <li><strong>Aplikasi Universal</strong>
                <ul>
                    <li>Digunakan dalam berbagai bidang: matematika, sains, ekonomi, statistik</li>
                    <li>Membantu dalam analisis, perbandingan, dan prediksi</li>
                    <li>Dasar untuk pemahaman konsep probabilitas dan statistik</li>
                </ul>
                </li>
            </ol>
            <h2 class="section-heading">Sejarah Perkembangan</h2>
            <h3 class="subsection-heading">Era Peradaban Kuno</h3>
            <ul>
                <li><strong>Mesopotamia (3000-500 SM)</strong>
                <ul>
                    <li>Bangsa Babilonia menggunakan rasio dalam perdagangan</li>
                    <li>Sistem sexagesimal memudahkan perhitungan proporsi</li>
                    <li>Tabel reciprocal untuk menyelesaikan proporsi</li>
                    <li>Aplikasi dalam arsitektur dan astronomi</li>
                </ul>
                </li>
                <li><strong>Mesir Kuno (3000-30 SM)</strong>
                <ul>
                    <li>Papirus Rhind berisi masalah proporsi</li>
                    <li>Penggunaan dalam konstruksi piramida</li>
                    <li>Rasio emas (golden ratio) dalam seni dan arsitektur</li>
                    <li>Sistem pengukuran berdasarkan proporsi tubuh manusia</li>
                </ul>
                </li>
                <li><strong>Yunani Kuno (800-146 SM)</strong>
                <ul>
                    <li>Euclid (300 SM): "Elements" Book V dan VI</li>
                    <li>Teori proporsi geometris</li>
                    <li>Definisi formal rasio dan proporsi</li>
                    <li>Teorema tentang proporsi segitiga</li>
                    <li>Pythagoras: Hubungan musik dan matematika melalui rasio</li>
                    <li>Archimedes: Aproksimasi π dan prinsip leverage berdasarkan proporsi</li>
                </ul>
                </li>
            </ul>
            <h3 class="subsection-heading">Era Klasik dan Pertengahan</h3>
            <ul>
                <li><strong>India</strong>
                <ul>
                    <li>Brahmagupta: Aturan tiga (rule of three)</li>
                    <li>Bhaskara II: "Lilavati" - masalah proporsi praktis</li>
                </ul>
                </li>
                <li><strong>Islam</strong>
                <ul>
                    <li>Al-Khwarizmi: Aljabar dan proporsi</li>
                    <li>Al-Kindi: Terjemahan dan pengembangan teori Yunani</li>
                    <li>Omar Khayyam: Proporsi dalam geometri</li>
                </ul>
                </li>
                <li><strong>Eropa Abad Pertengahan dan Renaissance</strong>
                <ul>
                    <li>Leonardo Fibonacci: "Liber Abaci"</li>
                    <li>Luca Pacioli: "Summa de Arithmetica"</li>
                </ul>
                </li>
            </ul>
            <h3 class="subsection-heading">Era Modern</h3>
            <ul>
                <li><strong>Abad 16-18</strong>
                <ul>
                    <li>François Viète: Aljabar simbolik</li>
                    <li>John Napier: Logaritma dan proporsi geometris</li>
                    <li>Isaac Newton: Proporsi dalam fisika dan kalkulus</li>
                </ul>
                </li>
                <li><strong>Abad 19-20</strong>
                <ul>
                    <li>Perkembangan statistik dan probabilitas</li>
                    <li>Aplikasi dalam sains sosial dan ekonomi</li>
                    <li>Komputer dan perhitungan proporsi kompleks</li>
                </ul>
                </li>
            </ul>
            <h2 class="section-heading">Peran dalam Matematika dan Kehidupan</h2>
            <h3 class="subsection-heading">Dalam Matematika:</h3>
            <ul>
                <li>Aljabar: Persamaan linear, sistem persamaan, fungsi linear</li>
                <li>Geometri: Kesebangunan, skala, transformasi, trigonometri</li>
                <li>Statistik dan Probabilitas: Distribusi, sampling, analisis data</li>
            </ul>
            <h3 class="subsection-heading">Dalam Kehidupan Sehari-hari:</h3>
            <ul>
                <li>Ekonomi dan Keuangan: Bunga, inflasi, analisis keuangan</li>
                <li>Sains dan Teknologi: Konsentrasi, skala, efisiensi</li>
                <li>Seni dan Desain: Proporsi dalam seni visual, arsitektur, desain</li>
            </ul>
            `,
            visual: `<!-- Visualisasi timeline atau interaktif proporsi bisa ditambahkan -->`
        },
        {
            title: "BAB II: KONSEP RASIO",
            readingTime: "20 menit baca",
            content: `
                <h2 class="section-heading">Pengertian dan Notasi Rasio</h2>
                <p>Rasio adalah perbandingan antara dua atau lebih kuantitas yang menunjukkan hubungan relatif di antara mereka. Rasio dapat dinyatakan dalam berbagai bentuk notasi.</p>
                <h3 class="subsection-heading">Bentuk Notasi Rasio:</h3>
                <ol>
                    <li><strong>Notasi Titik Dua (Colon Notation)</strong>
                        <ul>
                            <li>a : b (dibaca "a banding b")</li>
                            <li>Contoh: 3 : 4, 5 : 2 : 1</li>
                        </ul>
                    </li>
                    <li><strong>Notasi Pecahan (Fraction Notation)</strong>
                        <ul>
                            <li>a/b (dibaca "a per b")</li>
                            <li>Contoh: 3/4, 5/2</li>
                        </ul>
                    </li>
                    <li><strong>Notasi Kata (Word Notation)</strong>
                        <ul>
                            <li>"a untuk setiap b"</li>
                            <li>Contoh: "3 untuk setiap 4", "5 banding 2"</li>
                        </ul>
                    </li>
                    <li><strong>Notasi Desimal</strong>
                        <ul>
                            <li>Hasil pembagian a ÷ b</li>
                            <li>Contoh: 3:4 = 0.75, 5:2 = 2.5</li>
                        </ul>
                    </li>
                </ol>

                <h3 class="subsection-heading">Interpretasi Rasio:</h3>
                <p>Rasio 3:4 dapat diinterpretasikan sebagai:</p>
                <ul>
                    <li>Untuk setiap 3 unit dari kuantitas pertama, terdapat 4 unit dari kuantitas kedua</li>
                    <li>Kuantitas pertama adalah 3/4 dari kuantitas kedua</li>
                    <li>Kuantitas kedua adalah 4/3 dari kuantitas pertama</li>
                    <li>Total terdiri dari 7 bagian (3+4), dimana 3 bagian adalah kuantitas pertama</li>
                </ul>

                <h2 class="section-heading">Jenis-jenis Rasio</h2>
                <h3 class="subsection-heading">Berdasarkan Jumlah Kuantitas:</h3>
                <ol>
                    <li><strong>Rasio Dua Suku (Binary Ratio)</strong>
                        <ul>
                            <li>Membandingkan dua kuantitas</li>
                            <li>Contoh: 2:3, 5:7, 1:4</li>
                        </ul>
                    </li>
                    <li><strong>Rasio Tiga Suku (Ternary Ratio)</strong>
                        <ul>
                            <li>Membandingkan tiga kuantitas</li>
                            <li>Contoh: 2:3:5, 1:2:4, 3:4:6</li>
                        </ul>
                    </li>
                    <li><strong>Rasio Multi-Suku</strong>
                        <ul>
                            <li>Membandingkan lebih dari tiga kuantitas</li>
                            <li>Contoh: 1:2:3:4, 2:4:6:8:10</li>
                        </ul>
                    </li>
                </ol>

                <h3 class="subsection-heading">Berdasarkan Hubungan Nilai:</h3>
                <ol>
                    <li><strong>Rasio Sama (Equal Ratio)</strong>
                        <ul>
                            <li>Kedua kuantitas memiliki nilai sama</li>
                            <li>Contoh: 1:1, 5:5, 100:100</li>
                        </ul>
                    </li>
                    <li><strong>Rasio Lebih Besar (Greater Ratio)</strong>
                        <ul>
                            <li>Kuantitas pertama lebih besar dari kedua</li>
                            <li>Contoh: 5:3, 7:2, 10:1</li>
                        </ul>
                    </li>
                    <li><strong>Rasio Lebih Kecil (Lesser Ratio)</strong>
                        <ul>
                            <li>Kuantitas pertama lebih kecil dari kedua</li>
                            <li>Contoh: 2:5, 1:3, 3:8</li>
                        </ul>
                    </li>
                </ol>

                <h3 class="subsection-heading">Berdasarkan Sifat Matematis:</h3>
                <ol>
                    <li><strong>Rasio Sederhana</strong>
                        <ul>
                            <li>FPB dari semua suku adalah 1</li>
                            <li>Contoh: 2:3, 5:7, 3:4:5</li>
                        </ul>
                    </li>
                    <li><strong>Rasio Tidak Sederhana</strong>
                        <ul>
                            <li>FPB dari semua suku lebih dari 1</li>
                            <li>Contoh: 4:6 (FPB=2), 9:12:15 (FPB=3)</li>
                        </ul>
                    </li>
                </ol>

                <h2 class="section-heading">Menyederhanakan Rasio</h2>
                <p>Menyederhanakan rasio berarti mengubah rasio ke bentuk paling sederhana dengan membagi semua suku dengan FPB mereka.</p>
                <p><strong>Langkah-langkah Menyederhanakan:</strong></p>
                <ol>
                    <li>Tentukan FPB dari semua suku</li>
                    <li>Bagi setiap suku dengan FPB</li>
                    <li>Tulis hasil sebagai rasio sederhana</li>
                </ol>
                <p><strong>Contoh 1: Sederhanakan 12:18</strong></p>
                <ul>
                    <li>FPB(12, 18) = 6</li>
                    <li>12 ÷ 6 = 2</li>
                    <li>18 ÷ 6 = 3</li>
                    <li>Hasil: 2:3</li>
                </ul>
                <p><strong>Contoh 2: Sederhanakan 15:25:35</strong></p>
                <ul>
                    <li>FPB(15, 25, 35) = 5</li>
                    <li>15 ÷ 5 = 3</li>
                    <li>25 ÷ 5 = 5</li>
                    <li>35 ÷ 5 = 7</li>
                    <li>Hasil: 3:5:7</li>
                </ul>
                <p><strong>Contoh 3: Sederhanakan 0.6:1.2:1.8</strong></p>
                <ul>
                    <li>Kalikan dengan 10: 6:12:18</li>
                    <li>FPB(6, 12, 18) = 6</li>
                    <li>6 ÷ 6 = 1</li>
                    <li>12 ÷ 6 = 2</li>
                    <li>18 ÷ 6 = 3</li>
                    <li>Hasil: 1:2:3</li>
                </ul>

                <h2 class="section-heading">Rasio Ekuivalen</h2>
                <p>Rasio ekuivalen adalah rasio-rasio yang memiliki nilai perbandingan yang sama meskipun angka-angkanya berbeda.</p>
                <h3 class="subsection-heading">Cara Membuat Rasio Ekuivalen:</h3>
                <ul>
                    <li>Kalikan atau bagi semua suku dengan bilangan yang sama (≠ 0)</li>
                </ul>
                <p><strong>Contoh Rasio Ekuivalen:</strong></p>
                <p>2:3 = 4:6 = 6:9 = 8:12 = 10:15</p>
                <p>(mengalikan dengan 2, 3, 4, 5)</p>
                <p>12:18 = 6:9 = 4:6 = 2:3</p>
                <p>(membagi dengan 2, 3, 4, 6)</p>

                <h3 class="subsection-heading">Menentukan Rasio Ekuivalen:</h3>
                <p>Untuk menentukan apakah dua rasio ekuivalen, gunakan perkalian silang:</p>
                <ul>
                    <li>a:b ekuivalen dengan c:d jika a×d = b×c</li>
                </ul>
                <p><strong>Contoh: Apakah 3:4 ekuivalen dengan 9:12?</strong></p>
                <p>3 × 12 = 36</p>
                <p>4 × 9 = 36</p>
                <p>Karena 36 = 36, maka 3:4 ekuivalen dengan 9:12</p>
            `
        },
        {
            title: "BAB III: KONSEP PROPORSI",
            readingTime: "15 menit baca",
            content: `
                <h2 class="section-heading">Definisi Proporsi</h2>
                <p>Proporsi adalah pernyataan kesetaraan antara dua rasio. Jika rasio a:b sama dengan rasio c:d, maka kita dapat menulis proporsi sebagai:</p>
                <p><strong>a : b = c : d</strong> atau <strong>a/b = c/d</strong></p>

                <h3 class="subsection-heading">Terminologi Proporsi:</h3>
                <ul>
                    <li>a dan d disebut ekstrem (extremes)</li>
                    <li>b dan c disebut mean (means)</li>
                    <li>Dalam proporsi a:b = c:d, berlaku a×d = b×c</li>
                </ul>

                <h3 class="subsection-heading">Contoh Proporsi:</h3>
                <p>2:3 = 4:6</p>
                <p>2/3 = 4/6</p>
                <p>2 × 6 = 3 × 4 = 12</p>

                <h2 class="section-heading">Sifat-sifat Proporsi</h2>
                <ol>
                    <li><strong>Sifat Perkalian Silang (Cross Multiplication)</strong>: Jika a/b = c/d, maka a×d = b×c</li>
                    <li><strong>Sifat Pembalikan (Inversion)</strong>: Jika a/b = c/d, maka b/a = d/c</li>
                    <li><strong>Sifat Alternation</strong>: Jika a/b = c/d, maka a/c = b/d</li>
                    <li><strong>Sifat Composition</strong>: Jika a/b = c/d, maka (a+b)/b = (c+d)/d</li>
                    <li><strong>Sifat Decomposition</strong>: Jika a/b = c/d, maka (a-b)/b = (c-d)/d</li>
                    <li><strong>Sifat Addendo</strong>: Jika a/b = c/d, maka (a+c)/(b+d) = a/b = c/d</li>
                </ol>

                <h3 class="subsection-heading">Contoh Penerapan Sifat:</h3>
                <p>Diberikan: 6/8 = 9/12</p>
                <p><strong>Perkalian Silang:</strong> 6 × 12 = 8 × 9 = 72 ✓</p>
                <p><strong>Pembalikan:</strong> 8/6 = 12/9</p>
                <p><strong>Alternation:</strong> 6/9 = 8/12</p>

                <h2 class="section-heading">Menyelesaikan Proporsi</h2>
                <p>Untuk menyelesaikan proporsi yang tidak lengkap, kita dapat menggunakan metode perkalian silang.</p>

                <h3 class="subsection-heading">Contoh:</h3>
                <p>Jika 3/x = 6/12, cari nilai x.</p>
                <p><strong>Perkalian silang:</strong></p>
                <p>3 × 12 = 6 × x</p>
                <p>36 = 6x</p>
                <p>x = 36/6</p>
                <p>x = 6</p>

                <h2 class="section-heading">Aplikasi Proporsi</h2>
                <p>Proporsi banyak digunakan dalam berbagai konteks, seperti:</p>
                <ol>
                    <li><strong>Masalah Sehari-hari:</strong>
                        <ul>
                            <li>Menghitung campuran bahan dalam resep</li>
                            <li>Menghitung jarak dan waktu dalam perjalanan</li>
                        </ul>
                    </li>
                    <li><strong>Statistik:</strong>
                        <ul>
                            <li>Menghitung frekuensi relatif</li>
                            <li>Menganalisis data survei</li>
                        </ul>
                    </li>
                    <li><strong>Ekonomi:</strong>
                        <ul>
                            <li>Menghitung diskon dan markup</li>
                            <li>Menganalisis pertumbuhan ekonomi</li>
                        </ul>
                    </li>
                    <li><strong>Seni dan Desain:</strong>
                        <ul>
                            <li>Menggunakan proporsi dalam komposisi visual</li>
                            <li>Menghitung skala dalam arsitektur</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        {
            title: "BAB IV: KONSEP PERSENTASE",
            readingTime: "15 menit baca",
            content: `
                <h2 class="section-heading">Pengertian Persentase</h2>
                <p>Persentase adalah cara untuk menyatakan suatu bilangan sebagai bagian dari seratus. Persentase dinyatakan dengan simbol "%".</p>

                <h3 class="subsection-heading">Rumus Persentase:</h3>
                <p>Persentase = (Bagian / Keseluruhan) × 100%</p>
                <p><strong>Contoh:</strong> Jika 25 dari 200 siswa lulus, persentasenya adalah:</p>
                <p>(25 / 200) × 100% = 12.5%</p>

                <h2 class="section-heading">Konversi Antar Bentuk</h2>
                <ol>
                    <li><strong>Dari Pecahan ke Persentase:</strong>
                        <ul>
                            <li>Kalikan pecahan dengan 100%</li>
                            <li>Contoh: 3/4 = (3/4) × 100% = 75%</li>
                        </ul>
                    </li>
                    <li><strong>Dari Desimal ke Persentase:</strong>
                        <ul>
                            <li>Kalikan desimal dengan 100%</li>
                            <li>Contoh: 0.85 = 0.85 × 100% = 85%</li>
                        </ul>
                    </li>
                    <li><strong>Dari Persentase ke Pecahan:</strong>
                        <ul>
                            <li>Bagi persentase dengan 100% dan sederhanakan</li>
                            <li>Contoh: 60% = 60/100 = 3/5</li>
                        </ul>
                    </li>
                </ol>

                <h2 class="section-heading">Operasi dengan Persentase</h2>
                <ol>
                    <li><strong>Penjumlahan dan Pengurangan Persentase:</strong>
                        <ul>
                            <li>Untuk menambahkan atau mengurangi persentase dari suatu nilai, kalikan nilai dengan persentase yang diinginkan.</li>
                            <li><strong>Contoh:</strong> Jika harga barang adalah Rp 200.000 dan dikenakan pajak 10%:</li>
                            <li>Pajak = 10% × 200.000 = 20.000</li>
                            <li>Total = 200.000 + 20.000 = 220.000</li>
                        </ul>
                    </li>
                    <li><strong>Menghitung Diskon:</strong>
                        <ul>
                            <li>Diskon adalah pengurangan harga yang dinyatakan dalam persentase.</li>
                            <li><strong>Contoh:</strong> Jika harga barang adalah Rp 150.000 dan diskon 20%:</li>
                            <li>Diskon = 20% × 150.000 = 30.000</li>
                            <li>Harga setelah diskon = 150.000 - 30.000 = 120.000</li>
                        </ul>
                    </li>
                </ol>

                <h2 class="section-heading">Persentase dalam Konteks</h2>
                <p>Persentase digunakan dalam berbagai konteks, seperti:</p>
                <ol>
                    <li><strong>Keuangan:</strong>
                        <ul>
                            <li>Menghitung bunga pinjaman</li>
                            <li>Menganalisis investasi</li>
                        </ul>
                    </li>
                    <li><strong>Statistik:</strong>
                        <ul>
                            <li>Menyajikan data dalam bentuk persentase</li>
                            <li>Menghitung proporsi dalam populasi</li>
                        </ul>
                    </li>
                    <li><strong>Kesehatan:</strong>
                        <ul>
                            <li>Menghitung indeks massa tubuh (BMI)</li>
                            <li>Persentase lemak tubuh</li>
                        </ul>
                    </li>
                    <li><strong>Pendidikan:</strong>
                        <ul>
                            <li>Menghitung nilai akhir</li>
                            <li>Persentase kelulusan</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        {
            title: "BAB V: APLIKASI DAN PEMECAHAN MASALAH",
            readingTime: "10 menit baca",
            content: `
                <h2 class="section-heading">Aplikasi dalam Kehidupan Sehari-hari</h2>
                <p>Rasio, proporsi, dan persentase memiliki banyak aplikasi dalam kehidupan sehari-hari, seperti:</p>
                <ol>
                    <li><strong>Keuangan:</strong>
                        <ul>
                            <li>Menghitung pengeluaran dan anggaran</li>
                            <li>Menganalisis investasi dan tabungan</li>
                        </ul>
                    </li>
                    <li><strong>Belanja:</strong>
                        <ul>
                            <li>Menghitung total belanja dan diskon</li>
                            <li>Membandingkan harga produk</li>
                        </ul>
                    </li>
                    <li><strong>Memasak:</strong>
                        <ul>
                            <li>Mengukur bahan dan mengonversi resep</li>
                            <li>Menghitung proporsi bahan dalam masakan</li>
                        </ul>
                    </li>
                    <li><strong>Olahraga:</strong>
                        <ul>
                            <li>Menghitung skor dan statistik</li>
                            <li>Menganalisis performa atlet</li>
                        </ul>
                    </li>
                </ol>

                <h2 class="section-heading">Masalah Kontekstual</h2>
                <p>Rasio, proporsi, dan persentase sering digunakan dalam pemecahan masalah kontekstual. Misalnya, jika Anda memiliki 50 kelereng dan memberikan 15 kepada teman, berapa sisa kelereng yang Anda miliki?</p>
                <p><strong>Contoh:</strong></p>
                <p>Sisa kelereng = 50 - 15 = 35</p>

                <h2 class="section-heading">Strategi Pemecahan Masalah</h2>
                <ol>
                    <li><strong>Identifikasi Masalah:</strong>
                        <ul>
                            <li>Tentukan apa yang ingin dicari</li>
                            <li>Pahami konteks dan informasi yang diberikan</li>
                        </ul>
                    </li>
                    <li><strong>Gunakan Rasio dan Proporsi:</strong>
                        <ul>
                            <li>Jika masalah melibatkan perbandingan, gunakan rasio</li>
                            <li>Jika melibatkan kesetaraan, gunakan proporsi</li>
                        </ul>
                    </li>
                    <li><strong>Hitung Persentase:</strong>
                        <ul>
                            <li>Jika masalah melibatkan bagian dari keseluruhan, gunakan persentase</li>
                        </ul>
                    </li>
                    <li><strong>Verifikasi Hasil:</strong>
                        <ul>
                            <li>Periksa kembali hasil untuk memastikan kebenaran</li>
                            <li>Gunakan metode alternatif jika perlu</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        {
            title: "BAB VI: LATIHAN DAN EVALUASI",
            readingTime: "10 menit baca",
            content: `
                <h2 class="section-heading">Latihan Soal</h2>
                <ol>
                    <li>Hitunglah rasio antara 12 dan 16.</li>
                    <li>Jika 5:8 = x:32, cari nilai x.</li>
                    <li>Hitung 25% dari 200.</li>
                    <li>Jika harga barang Rp 300.000 dan diskon 15%, berapa harga setelah diskon?</li>
                    <li>Dalam sebuah kelas, 18 siswa adalah perempuan dan 12 siswa adalah laki-laki. Hitung rasio perempuan terhadap laki-laki.</li>
                </ol>

                <h2 class="section-heading">Evaluasi</h2>
                <p>Setelah menyelesaikan latihan, evaluasi pemahaman dengan menjawab pertanyaan berikut:</p>
                <ol>
                    <li>Apa perbedaan antara rasio dan proporsi?</li>
                    <li>Bagaimana cara menyederhanakan rasio?</li>
                    <li>Mengapa persentase penting dalam kehidupan sehari-hari?</li>
                    <li>Berikan contoh aplikasi rasio dalam bidang ekonomi.</li>
                </ol>

                <hr />

                <h2 class="section-heading">PENUTUP</h2>
                <p>Rasio, proporsi, dan persentase adalah konsep dasar dalam matematika yang memiliki aplikasi luas dalam kehidupan sehari-hari. Memahami dan menguasai konsep ini tidak hanya membantu dalam perhitungan matematis tetapi juga dalam pengambilan keputusan yang lebih baik. Dengan latihan dan penerapan yang tepat, keterampilan ini dapat ditingkatkan dan diterapkan dalam berbagai aspek kehidupan.</p>
            `
        }]
    },
    {
        id: "pengukuran-dan-satuan",
        title: "Pengukuran dan Satuan",
        subtitle: "Fondasi Kuantifikasi dalam Matematika dan Sains",
        chapters: [
        {
            title: "BAB I: PENGANTAR PENGUKURAN",
            readingTime: "23 menit baca",
            content: `
                <h2 class="section-heading">Definisi dan Konsep Dasar</h2>
                <p>Pengukuran adalah proses membandingkan suatu besaran dengan besaran sejenis yang dijadikan sebagai satuan standar. Secara formal, pengukuran dapat didefinisikan sebagai penetapan nilai numerik terhadap suatu besaran fisik berdasarkan perbandingan dengan standar yang telah ditetapkan.</p>

                <h3 class="subsection-heading">Komponen Dalam Pengukuran:</h3>
                <ol>
                    <li><strong>Objek yang Diukur</strong>
                        <ul>
                            <li>Besaran fisik yang akan ditentukan nilainya</li>
                            <li>Dapat berupa panjang, massa, waktu, suhu, dll</li>
                        </ul>
                    </li>
                    <li><strong>Alat Ukur (Instrumen)</strong>
                        <ul>
                            <li>Perangkat yang digunakan untuk melakukan pengukuran</li>
                            <li>Memiliki tingkat ketelitian tertentu</li>
                        </ul>
                    </li>
                    <li><strong>Satuan Standar</strong>
                        <ul>
                            <li>Acuan pembanding yang telah disepakati</li>
                            <li>Harus bersifat tetap, dapat direproduksi, dan mudah diakses</li>
                        </ul>
                    </li>
                    <li><strong>Metode Pengukuran</strong>
                        <ul>
                            <li>Prosedur atau teknik yang digunakan</li>
                            <li>Mempengaruhi akurasi dan presisi hasil</li>
                        </ul>
                    </li>
                </ol>

                <h3 class="subsection-heading">Karakteristik Pengukuran yang Baik:</h3>
                <ol>
                    <li><strong>Akurasi (Accuracy)</strong>
                        <ul>
                            <li>Kedekatan hasil pengukuran dengan nilai sebenarnya</li>
                            <li>Menunjukkan tingkat kesalahan sistematis</li>
                        </ul>
                    </li>
                    <li><strong>Presisi (Precision)</strong>
                        <ul>
                            <li>Tingkat keseragaman hasil pengukuran berulang</li>
                            <li>Menunjukkan tingkat kesalahan acak</li>
                        </ul>
                    </li>
                    <li><strong>Reliabilitas</strong>
                        <ul>
                            <li>Konsistensi hasil pengukuran</li>
                            <li>Dapat dipercaya dan dapat direproduksi</li>
                        </ul>
                    </li>
                    <li><strong>Validitas</strong>
                        <ul>
                            <li>Kesesuaian antara yang diukur dengan yang dimaksudkan</li>
                            <li>Mengukur besaran yang tepat</li>
                        </ul>
                    </li>
                </ol>

                <h2 class="section-heading">Sejarah Perkembangan Pengukuran</h2>

                <h3 class="subsection-heading">Era Prasejarah dan Peradaban Kuno</h3>
                <p><strong>Sistem Pengukuran Primitif</strong><br>
                Manusia purba menggunakan bagian tubuh sebagai standar pengukuran:</p>
                <ul>
                    <li>Hasta (cubit): dari siku hingga ujung jari tengah</li>
                    <li>Kaki (foot): panjang telapak kaki</li>
                    <li>Depa (fathom): rentangan kedua lengan</li>
                    <li>Jengkal: jarak antara ujung ibu jari dan kelingking</li>
                </ul>

                <p><strong>Peradaban Mesopotamia (3500-500 SM)</strong></p>
                <ul>
                    <li>Standardisasi pertama sistem pengukuran</li>
                    <li>Shekel: satuan berat berdasarkan biji gandum</li>
                    <li>Cubit royal: hasta standar dengan batang perunggu</li>
                    <li>Sistem berbasis 60 (sexagesimal) untuk sudut dan waktu</li>
                </ul>

                <p><strong>Mesir Kuno (3100-30 SM)</strong></p>
                <ul>
                    <li>Royal cubit: 52.5 cm, digunakan membangun piramida</li>
                    <li>Sistem decimal untuk pengukuran panjang</li>
                    <li>Standar volume berdasarkan wadah keramik</li>
                    <li>Pengukuran luas lahan untuk sistem pajak</li>
                </ul>

                <h3 class="subsection-heading">Era Klasik</h3>
                <p><strong>Yunani Kuno (800-146 SM)</strong></p>
                <ul>
                    <li>Metron: kata dasar untuk "pengukuran"</li>
                    <li>Eratosthenes: pengukuran keliling Bumi (240 SM)</li>
                    <li>Archimedes: prinsip pengukuran volume dan densitas</li>
                    <li>Pengembangan geometri untuk pengukuran tidak langsung</li>
                </ul>

                <p><strong>Romawi (753 SM-476 M)</strong></p>
                <ul>
                    <li>Standardisasi di seluruh wilayah kekaisaran</li>
                    <li>Pes Romanus: kaki Romawi (29.6 cm)</li>
                    <li>Libra: pound Romawi untuk berat</li>
                    <li>Sistem jalan dan akuaduk dengan pengukuran presisi</li>
                </ul>

                <h3 class="subsection-heading">Era Pertengahan dan Renaissance</h3>
                <p><strong>Eropa Abad Pertengahan (500-1500 M)</strong></p>
                <ul>
                    <li>Fragmentasi sistem pengukuran regional</li>
                    <li>Yard: panjang pedang Raja Henry I</li>
                    <li>Pound: berat 7000 biji gandum</li>
                    <li>Variasi lokal menyebabkan konflik perdagangan</li>
                </ul>

                <p><strong>Renaissance dan Pencerahan (1400-1800)</strong></p>
                <ul>
                    <li>Kebutuhan standardisasi untuk sains dan perdagangan</li>
                    <li>Galileo Galilei: pengukuran waktu dengan pendulum</li>
                    <li>John Harrison: kronometer maritim untuk pengukuran longitude</li>
                    <li>Pengembangan instrumen presisi</li>
                </ul>

                <h3 class="subsection-heading">Era Modern</h3>
                <p><strong>Revolusi Metrik (1789-1875)</strong></p>
                <ul>
                    <li>Sistem Metrik Prancis (1795): desimeter-gram-sekon</li>
                    <li>Based on natural constants: meter = 1/10,000,000 jarak equator ke kutub</li>
                    <li>Convention du Mètre (1875): standardisasi internasional</li>
                    <li>Distribusi prototype platinum-iridium</li>
                </ul>

                <p><strong>Abad 20: Menuju Standar Universal</strong></p>
                <ul>
                    <li>CGPM (Conférence Générale des Poids et Mesures) didirikan</li>
                    <li>Redefinisi meter berdasarkan spektrum atom (1960)</li>
                    <li>Sistem Internasional (SI) diadopsi (1960)</li>
                    <li>Standar berbasis konstanta fundamental alam</li>
                </ul>

                <p><strong>Era Digital (1980-sekarang)</strong></p>
                <ul>
                    <li>Standar berbasis konstanta fisik fundamental</li>
                    <li>Meter didefinisikan ulang berdasarkan kecepatan cahaya (1983)</li>
                    <li>Kilogram didefinisikan ulang berdasarkan konstanta Planck (2019)</li>
                    <li>Pengukuran presisi hingga level quantum</li>
                </ul>

                <h2 class="section-heading">Pentingnya Standardisasi</h2>
                <h3 class="subsection-heading">Manfaat Standardisasi:</h3>
                <ol>
                    <li><strong>Komunikasi Ilmiah Global</strong>
                        <ul>
                            <li>Memungkinkan pertukaran data antar negara</li>
                            <li>Konsistensi dalam publikasi ilmiah</li>
                            <li>Kerja sama internasional dalam penelitian</li>
                        </ul>
                    </li>
                    <li><strong>Perdagangan Internasional</strong>
                        <ul>
                            <li>Eliminasi kebingungan dalam transaksi</li>
                            <li>Jaminan kualitas produk</li>
                            <li>Efisiensi logistik dan distribusi</li>
                        </ul>
                    </li>
                    <li><strong>Keselamatan dan Kesehatan</strong>
                        <ul>
                            <li>Standar dosis obat dan radiasi</li>
                            <li>Spesifikasi teknis kendaraan</li>
                            <li>Regulasi lingkungan</li>
                        </ul>
                    </li>
                    <li><strong>Pengembangan Teknologi</strong>
                        <ul>
                            <li>Kompatibilitas antar komponen</li>
                            <li>Inovasi berbasis standar global</li>
                            <li>Transfer teknologi antar negara</li>
                        </ul>
                    </li>
                </ol>
            `,
            visual: `<!-- visualisasi kronologis sejarah pengukuran dan infografik komponen pengukuran dapat ditempatkan di sini -->`
        },
        {
            title: "BAB II: SISTEM SATUAN INTERNASIONAL",
            readingTime: "25 menit baca",
            content: `
                <h2 class="section-heading">Satuan Dasar SI</h2>
                <p>Sistem Internasional (SI) terdiri dari tujuh satuan dasar yang membentuk fondasi untuk semua pengukuran fisik.</p>
                <h3 class="subsection-heading">Tabel Satuan Dasar SI:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Besaran</th>
                            <th>Satuan</th>
                            <th>Simbol</th>
                            <th>Definisi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Panjang</td>
                            <td>meter</td>
                            <td>m</td>
                            <td>Jarak yang ditempuh cahaya dalam ruang hampa selama 1/299,792,458 detik</td>
                        </tr>
                        <tr>
                            <td>Massa</td>
                            <td>kilogram</td>
                            <td>kg</td>
                            <td>Massa yang setara dengan konstanta Planck h = 6.62607015 × 10⁻³⁴ J⋅s</td>
                        </tr>
                        <tr>
                            <td>Waktu</td>
                            <td>sekon</td>
                            <td>s</td>
                            <td>Durasi 9,192,631,770 periode radiasi atom cesium-133</td>
                        </tr>
                        <tr>
                            <td>Arus Listrik</td>
                            <td>ampere</td>
                            <td>A</td>
                            <td>Arus yang menghasilkan gaya 2×10⁻⁷ N/m antar konduktor sejajar</td>
                        </tr>
                        <tr>
                            <td>Suhu</td>
                            <td>kelvin</td>
                            <td>K</td>
                            <td>1/273.16 suhu termodinamika titik tripel air</td>
                        </tr>
                        <tr>
                            <td>Jumlah Zat</td>
                            <td>mol</td>
                            <td>mol</td>
                            <td>Jumlah zat yang mengandung 6.02214076×10²³ entitas elementer</td>
                        </tr>
                        <tr>
                            <td>Intensitas Cahaya</td>
                            <td>kandela</td>
                            <td>cd</td>
                            <td>Intensitas cahaya sumber monokromatik 540 THz dengan intensitas radiasi 1/683 watt/steradian</td>
                        </tr>
                    </tbody>
                </table>

                <h3 class="subsection-heading">Detail Satuan Dasar:</h3>
                <ol>
                    <li><strong>Meter (m) - Panjang</strong>
                        <ul>
                            <li>Sejarah: Awalnya 1/10,000,000 jarak equator ke kutub</li>
                            <li>Definisi Modern: Berdasarkan kecepatan cahaya dalam vakum</li>
                            <li>Aplikasi: Pengukuran jarak, dimensi objek, panjang gelombang</li>
                        </ul>
                    </li>
                    <li><strong>Kilogram (kg) - Massa</strong>
                        <ul>
                            <li>Sejarah: Massa 1 liter air murni pada 4°C</li>
                            <li>Definisi Modern: Berdasarkan konstanta Planck</li>
                            <li>Aplikasi: Pengukuran berat benda, dosis obat, spesifikasi material</li>
                        </ul>
                    </li>
                    <li><strong>Sekon (s) - Waktu</strong>
                        <ul>
                            <li>Sejarah: 1/86400 hari rata-rata matahari</li>
                            <li>Definisi Modern: Berdasarkan getaran atom cesium</li>
                            <li>Aplikasi: Pengukuran durasi, frekuensi, kecepatan</li>
                        </ul>
                    </li>
                </ol>

                <h2 class="section-heading">Satuan Turunan</h2>
                <p>Satuan turunan dibentuk dari kombinasi satuan dasar melalui operasi matematis.</p>
                <h3 class="subsection-heading">Satuan Turunan Penting:</h3>
                <h4>Mekanika:</h4>
                <ul>
                    <li>Luas: m² (meter persegi)</li>
                    <li>Volume: m³ (meter kubik)</li>
                    <li>Kecepatan: m/s (meter per sekon)</li>
                    <li>Percepatan: m/s² (meter per sekon kuadrat)</li>
                    <li>Gaya: N = kg⋅m/s² (newton)</li>
                    <li>Tekanan: Pa = N/m² (pascal)</li>
                    <li>Energi: J = N⋅m (joule)</li>
                    <li>Daya: W = J/s (watt)</li>
                </ul>

                <h4>Listrik dan Magnetisme:</h4>
                <ul>
                    <li>Muatan: C = A⋅s (coulomb)</li>
                    <li>Potensial: V = W/A (volt)</li>
                    <li>Resistansi: Ω = V/A (ohm)</li>
                    <li>Kapasitansi: F = C/V (farad)</li>
                    <li>Induktansi: H = Wb/A (henry)</li>
                </ul>

                <h4>Termodinamika:</h4>
                <ul>
                    <li>Kalor Spesifik: J/(kg⋅K)</li>
                    <li>Entropi: J/K</li>
                    <li>Konduktivitas Termal: W/(m⋅K)</li>
                </ul>

                <h2 class="section-heading">Awalan Metrik</h2>
                <p>Awalan metrik memungkinkan representasi nilai yang sangat besar atau sangat kecil dengan cara yang sederhana.</p>
                <h3 class="subsection-heading">Tabel Awalan SI:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Awalan</th>
                            <th>Simbol</th>
                            <th>Faktor</th>
                            <th>Nama</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>yotta</td><td>Y</td><td>10²⁴</td><td>septiliun</td></tr>
                        <tr><td>zetta</td><td>Z</td><td>10²¹</td><td>seksiliun</td></tr>
                        <tr><td>exa</td><td>E</td><td>10¹⁸</td><td>kuintiliun</td></tr>
                        <tr><td>peta</td><td>P</td><td>10¹⁵</td><td>kuadriliun</td></tr>
                        <tr><td>tera</td><td>T</td><td>10¹²</td><td>triliun</td></tr>
                        <tr><td>giga</td><td>G</td><td>10⁹</td><td>miliar</td></tr>
                        <tr><td>mega</td><td>M</td><td>10⁶</td><td>juta</td></tr>
                        <tr><td>kilo</td><td>k</td><td>10³</td><td>ribu</td></tr>
                        <tr><td>hecto</td><td>h</td><td>10²</td><td>ratus</td></tr>
                        <tr><td>deka</td><td>da</td><td>10¹</td><td>sepuluh</td></tr>
                        <tr><td>•</td><td>•</td><td>10⁰</td><td>satu</td></tr>
                        <tr><td>desi</td><td>d</td><td>10⁻¹</td><td>sepersepuluh</td></tr>
                        <tr><td>centi</td><td>c</td><td>10⁻²</td><td>seperseratus</td></tr>
                        <tr><td>mili</td><td>m</td><td>10⁻³</td><td>seperseribu</td></tr>
                        <tr><td>mikro</td><td>μ</td><td>10⁻⁶</td><td>seperjuta</td></tr>
                        <tr><td>nano</td><td>n</td><td>10⁻⁹</td><td>sepermiliar</td></tr>
                        <tr><td>piko</td><td>p</td><td>10⁻¹²</td><td>sepertriliun</td></tr>
                        <tr><td>femto</td><td>f</td><td>10⁻¹⁵</td><td>seperkuadriliun</td></tr>
                        <tr><td>atto</td><td>a</td><td>10⁻¹⁸</td><td>seperkuintiliun</td></tr>
                        <tr><td>zepto</td><td>z</td><td>10⁻²¹</td><td>seperseksiliun</td></tr>
                        <tr><td>yokto</td><td>y</td><td>10⁻²⁴</td><td>seperseptiliun</td></tr>
                    </tbody>
                </table>

                <h3 class="subsection-heading">Contoh Penggunaan Awalan:</h3>
                <ul>
                    <li>1 kilometer = 1 km = 1000 m = 10³ m</li>
                    <li>1 milimeter = 1 mm = 0.001 m = 10⁻³ m</li>
                    <li>1 gigawatt = 1 GW = 1,000,000,000 W = 10⁹ W</li>
                    <li>1 nanosekond = 1 ns = 0.000000001 s = 10⁻⁹ s</li>
                </ul>

                <h2 class="section-heading">Evolusi Sistem Metrik</h2>
                <h3 class="subsection-heading">Sistem CGS (1874)</h3>
                <ul>
                    <li>Centimeter - Gram - Sekon</li>
                    <li>Digunakan dalam fisika teoretis</li>
                    <li>Satuan elektromagnetisme: esu dan emu</li>
                </ul>

                <h3 class="subsection-heading">Sistem MKS (1901)</h3>
                <ul>
                    <li>Meter - Kilogram - Sekon</li>
                    <li>Praktis untuk engineering</li>
                    <li>Basis untuk sistem SI modern</li>
                </ul>

                <h3 class="subsection-heading">Sistem SI (1960)</h3>
                <ul>
                    <li>Menggabungkan keunggulan CGS dan MKS</li>
                    <li>Menambahkan satuan listrik, suhu, dan cahaya</li>
                    <li>Standar global yang berlaku hingga sekarang</li>
                </ul>
            `,
            visual: `<!-- infografik konversi awalan metrik dan ilustrasi satuan dasar SI dapat ditambahkan di sini -->`
        },
        {
            title: "BAB III: BESARAN DAN DIMENSI",
            readingTime: "22 menit baca",
            content: `
                <h2 class="section-heading">Besaran Pokok dan Turunan</h2>
                <p>Besaran Pokok adalah besaran yang satuannya didefinisikan secara independen dan tidak dapat diturunkan dari besaran lain.</p>
                <h3 class="subsection-heading">Klasifikasi Besaran:</h3>
                <p><strong>Besaran Pokok (7 besaran SI):</strong></p>
                <ol>
                    <li>Panjang [L] - meter (m)</li>
                    <li>Massa [M] - kilogram (kg)</li>
                    <li>Waktu [T] - sekon (s)</li>
                    <li>Arus Listrik [I] - ampere (A)</li>
                    <li>Suhu [Θ] - kelvin (K)</li>
                    <li>Jumlah Zat [N] - mol (mol)</li>
                    <li>Intensitas Cahaya [J] - kandela (cd)</li>
                </ol>
                <p><strong>Besaran Turunan</strong> dibentuk dari kombinasi besaran pokok:</p>
                <ul>
                    <li>Luas: [L²] = m²</li>
                    <li>Volume: [L³] = m³</li>
                    <li>Kecepatan: [LT⁻¹] = m/s</li>
                    <li>Percepatan: [LT⁻²] = m/s²</li>
                    <li>Gaya: [MLT⁻²] = N</li>
                    <li>Tekanan: [ML⁻¹T⁻²] = Pa</li>
                    <li>Energi: [ML²T⁻²] = J</li>
                    <li>Daya: [ML²T⁻³] = W</li>
                </ul>

                <h2 class="section-heading">Analisis Dimensi</h2>
                <p>Analisis dimensi adalah teknik untuk memeriksa kebenaran rumus fisika dengan membandingkan dimensi ruas kiri dan kanan persamaan.</p>
                <p><strong>Prinsip Homogenitas Dimensi:</strong> Semua suku dalam persamaan fisika harus memiliki dimensi yang sama.</p>
                <h3 class="subsection-heading">Contoh Analisis Dimensi:</h3>
                <p><strong>Rumus Kinematika:</strong> s = ut + ½at²</p>
                <p>Periksa dimensi:</p>
                <ul>
                    <li>s (jarak): [L]</li>
                    <li>u (kecepatan awal): [LT⁻¹]</li>
                    <li>t (waktu): [T]</li>
                    <li>a (percepatan): [LT⁻²]</li>
                </ul>
                <p><strong>Analisis:</strong></p>
                <ul>
                    <li>ut: [LT⁻¹][T] = [L] ✓</li>
                    <li>½at²: [LT⁻²][T²] = [L] ✓</li>
                    <li>Semua suku berdimensi [L] → konsisten</li>
                </ul>

                <h3 class="subsection-heading">Kegunaan Analisis Dimensi:</h3>
                <ol>
                    <li><strong>Verifikasi Rumus</strong>
                        <ul>
                            <li>Memeriksa kebenaran persamaan</li>
                            <li>Menemukan kesalahan dalam penurunan</li>
                        </ul>
                    </li>
                    <li><strong>Prediksi Hubungan</strong>
                        <ul>
                            <li>Menentukan bentuk umum persamaan</li>
                            <li>Mengurangi kompleksitas eksperimen</li>
                        </ul>
                    </li>
                    <li><strong>Konversi Satuan</strong>
                        <ul>
                            <li>Memastikan konsistensi satuan</li>
                            <li>Mengidentifikasi faktor konversi</li>
                        </ul>
                    </li>
                </ol>

                <h2 class="section-heading">Besaran Skalar dan Vektor</h2>
                <h3 class="subsection-heading">Besaran Skalar:</h3>
                <ul>
                    <li>Memiliki magnitudo (besar) saja</li>
                    <li>Tidak memiliki arah</li>
                    <li>Operasi menggunakan aljabar biasa</li>
                </ul>
                <p><strong>Contoh:</strong> massa, suhu, waktu, energi, volume</p>

                <h3 class="subsection-heading">Besaran Vektor:</h3>
                <ul>
                    <li>Memiliki magnitudo dan arah</li>
                    <li>Operasi menggunakan aljabar vektor</li>
                    <li>Representasi: notasi panah atau huruf tebal</li>
                </ul>
                <p><strong>Contoh:</strong> displacement, kecepatan, percepatan, gaya, momentum</p>

                <h3 class="subsection-heading">Notasi:</h3>
                <ul>
                    <li>Skalar: m, t, E, V</li>
                    <li>Vektor: v, F, a atau v⃗, F⃗, a⃗</li>
                </ul>

                <h2 class="section-heading">Ketidakpastian dalam Pengukuran</h2>
                <p>Setiap pengukuran memiliki ketidakpastian karena keterbatasan alat ukur dan metode pengukuran.</p>
                <h3 class="subsection-heading">Jenis Ketidakpastian:</h3>
                <ol>
                    <li><strong>Ketidakpastian Sistematis</strong>
                        <ul>
                            <li>Disebabkan oleh cacat instrumen</li>
                            <li>Mempengaruhi akurasi</li>
                            <li>Dapat dikoreksi dengan kalibrasi</li>
                        </ul>
                    </li>
                    <li><strong>Ketidakpastian Acak</strong>
                        <ul>
                            <li>Disebabkan fluktuasi lingkungan</li>
                            <li>Mempengaruhi presisi</li>
                            <li>Dapat dikurangi dengan pengulangan</li>
                        </ul>
                    </li>
                </ol>

                <h3 class="subsection-heading">Notasi Ketidakpastian:</h3>
                <ul>
                    <li>x = (nilai terbaik) ± (ketidakpastian)</li>
                    <li>Contoh: L = 25.4 ± 0.1 cm</li>
                </ul>

                <h3 class="subsection-heading">Propagasi Ketidakpastian:</h3>
                <ul>
                    <li><strong>Penjumlahan/Pengurangan:</strong> Jika z = x + y, maka Δz = √[(Δx)² + (Δy)²]</li>
                    <li><strong>Perkalian/Pembagian:</strong> Jika z = xy, maka Δz/z = √[(Δx/x)² + (Δy/y)²]</li>
                </ul>
            `,
            visual: `<!-- diagram klasifikasi besaran, tabel dimensi, dan ilustrasi ketidakpastian dapat ditambahkan di sini -->`
        },
        {
            title: "BAB IV: KONVERSI SATUAN",
            readingTime: "18 menit baca",
            content: `
                <h2 class="section-heading">Metode Konversi</h2>
                <p>Konversi satuan adalah proses mengubah nilai suatu besaran dari satu sistem satuan ke sistem satuan lain tanpa mengubah makna fisiknya.</p>
                <h3 class="subsection-heading">Langkah-langkah Konversi:</h3>
                <ol>
                    <li>Identifikasi satuan awal dan target</li>
                    <li>Tentukan faktor konversi yang tepat</li>
                    <li>Susun faktor konversi dalam bentuk rasio</li>
                    <li>Kalikan dengan nilai yang akan dikonversi</li>
                    <li>Periksa kesahihan dimensi hasil</li>
                </ol>
                <h3 class="subsection-heading">Prinsip Dasar:</h3>
                <ul>
                    <li>Mengalikan dengan bilangan 1 tidak mengubah nilai</li>
                    <li>Faktor konversi adalah bentuk bilangan 1</li>
                    <li>Contoh: 1 m = 100 cm → faktor konversi = 100 cm/1 m = 1</li>
                </ul>

                <h2 class="section-heading">Faktor Konversi</h2>
                <h3 class="subsection-heading">Konversi Panjang:</h3>
                <ul>
                    <li>1 m = 100 cm = 1000 mm</li>
                    <li>1 km = 1000 m</li>
                    <li>1 inch = 2.54 cm</li>
                    <li>1 foot = 12 inch = 30.48 cm</li>
                    <li>1 yard = 3 feet = 0.9144 m</li>
                    <li>1 mile = 1.609 km</li>
                </ul>
                <h3 class="subsection-heading">Konversi Massa:</h3>
                <ul>
                    <li>1 kg = 1000 g</li>
                    <li>1 ton = 1000 kg</li>
                    <li>1 pound = 0.4536 kg</li>
                    <li>1 ounce = 28.35 g</li>
                </ul>
                <h3 class="subsection-heading">Konversi Volume:</h3>
                <ul>
                    <li>1 liter = 1000 mL = 1000 cm³</li>
                    <li>1 m³ = 1000 liter</li>
                    <li>1 gallon (US) = 3.785 liter</li>
                    <li>1 gallon (UK) = 4.546 liter</li>
                </ul>
                <h3 class="subsection-heading">Konversi Waktu:</h3>
                <ul>
                    <li>1 menit = 60 sekon</li>
                    <li>1 jam = 60 menit = 3600 sekon</li>
                    <li>1 hari = 24 jam = 86400 sekon</li>
                    <li>1 tahun = 365.25 hari</li>
                </ul>

                <h2 class="section-heading">Konversi Antar Sistem</h2>
                <h3 class="subsection-heading">Sistem Imperial ke SI:</h3>
                <p><strong>Contoh 1: Konversi 5 feet 6 inches ke meter</strong></p>
                <pre>5 feet = 5 × 30.48 cm = 152.4 cm
                6 inches = 6 × 2.54 cm = 15.24 cm
                Total = 152.4 + 15.24 = 167.64 cm = 1.6764 m</pre>
                <p><strong>Contoh 2: Konversi 65 mph ke m/s</strong></p>
                <pre>65 mile/hour × (1.609 km/1 mile) × (1000 m/1 km) × (1 hour/3600 s)
                = 65 × 1.609 × 1000 / 3600 m/s
                = 29.06 m/s</pre>

                <h3 class="subsection-heading">Sistem CGS ke SI:</h3>
                <p><strong>Contoh: Konversi 2000 dyne ke newton</strong></p>
                <pre>1 dyne = 1 g⋅cm/s² = 10⁻³ kg × 10⁻² m/s² = 10⁻⁵ N
                2000 dyne = 2000 × 10⁻⁵ N = 0.02 N</pre>

                <h2 class="section-heading">Strategi Perhitungan</h2>
                <h3 class="subsection-heading">Teknik Chain Conversion: Menggunakan beberapa faktor konversi berurutan</h3>
                <p><strong>Contoh: Konversi 2.5 m²/s ke cm²/min</strong></p>
                <pre>2.5 m²/s × (100 cm/1 m)² × (60 s/1 min)
                = 2.5 × 10000 × 60 cm²/min
                = 1,500,000 cm²/min</pre>

                <h3 class="subsection-heading">Konversi Satuan Turunan Kompleks:</h3>
                <p><strong>Contoh: Konversi 50 km/jam ke m/s</strong></p>
                <pre>50 km/jam × (1000 m/1 km) × (1 jam/3600 s)
                = 50 × 1000/3600 m/s
                = 13.89 m/s</pre>
            `,
            visual: `<!-- visualisasi proses konversi satuan atau diagram konversi sistem CGS ke SI dapat ditambahkan di sini -->`
        },
        {
            title: "BAB V: PENGUKURAN PRAKTIS",
            readingTime: "19 menit baca",
            content: `
                <h2 class="section-heading">Alat Ukur dan Instrumen</h2>
                <h3 class="subsection-heading">Klasifikasi Berdasarkan Besaran:</h3>
                <ol>
                    <li><strong>Pengukur Panjang:</strong>
                        <ul>
                            <li>Mistar: akurasi ±0.5 mm</li>
                            <li>Jangka Sorong: akurasi ±0.1 mm</li>
                            <li>Mikrometer: akurasi ±0.01 mm</li>
                            <li>Interferometer: akurasi hingga nanometer</li>
                        </ul>
                    </li>
                    <li><strong>Pengukur Massa:</strong>
                        <ul>
                            <li>Timbangan Analog: akurasi ±1 g</li>
                            <li>Timbangan Digital: akurasi ±0.1 g</li>
                            <li>Timbangan Analitik: akurasi ±0.0001 g</li>
                            <li>Neraca Mikro: akurasi ±0.001 mg</li>
                        </ul>
                    </li>
                    <li><strong>Pengukur Waktu:</strong>
                        <ul>
                            <li>Jam Analog: akurasi ±1 menit/hari</li>
                            <li>Jam Digital: akurasi ±1 detik/hari</li>
                            <li>Stopwatch: akurasi ±0.01 s</li>
                            <li>Jam Atom: akurasi ±1 s dalam 100 juta tahun</li>
                        </ul>
                    </li>
                    <li><strong>Pengukur Suhu:</strong>
                        <ul>
                            <li>Termometer Merkuri: range -38°C hingga 356°C</li>
                            <li>Termometer Digital: range -50°C hingga 1000°C</li>
                            <li>Termokopel: range -200°C hingga 2000°C</li>
                            <li>Pyrometer: range 500°C hingga 3000°C</li>
                        </ul>
                    </li>
                </ol>

                <h2 class="section-heading">Teknik Pengukuran</h2>
                <h3 class="subsection-heading">Prinsip Pengukuran yang Baik:</h3>
                <ol>
                    <li><strong>Kalibrasi Instrumen</strong>
                        <ul>
                            <li>Periksa keakuratan sebelum penggunaan</li>
                            <li>Gunakan standar referensi yang valid</li>
                            <li>Lakukan kalibrasi berkala</li>
                        </ul>
                    </li>
                    <li><strong>Kondisi Lingkungan</strong>
                        <ul>
                            <li>Kontrol suhu dan kelembaban</li>
                            <li>Hindari getaran dan gangguan elektromagnetik</li>
                            <li>Pastikan pencahayaan yang cukup</li>
                        </ul>
                    </li>
                    <li><strong>Teknik Pembacaan</strong>
                        <ul>
                            <li>Posisi mata tegak lurus skala</li>
                            <li>Hindari paralaks error</li>
                            <li>Baca hingga digit terakhir yang bermakna</li>
                        </ul>
                    </li>
                    <li><strong>Pengulangan Pengukuran</strong>
                        <ul>
                            <li>Lakukan minimal 3 kali pengukuran</li>
                            <li>Hitung rata-rata dan deviasi standar</li>
                            <li>Identifikasi dan eliminasi outlier</li>
                        </ul>
                    </li>
                </ol>

                <h2 class="section-heading">Presisi dan Akurasi</h2>
                <h3 class="subsection-heading">Perbedaan Konseptual:</h3>
                <p>Akurasi mengacu pada kedekatan hasil pengukuran dengan nilai sebenarnya. Presisi mengacu pada reprodusibilitas hasil pengukuran berulang.</p>
                <h4>Ilustrasi dengan Analogi Target:</h4>
                <ul>
                    <li>Tinggi Akurasi, Tinggi Presisi: Semua tembakan dekat pusat target</li>
                    <li>Tinggi Akurasi, Rendah Presisi: Rata-rata dekat pusat, tetapi tersebar</li>
                    <li>Rendah Akurasi, Tinggi Presisi: Semua tembakan dekat satu sama lain, tapi jauh dari pusat</li>
                    <li>Rendah Akurasi, Rendah Presisi: Tembakan tersebar dan jauh dari pusat</li>
                </ul>
                <h4>Faktor yang Mempengaruhi:</h4>
                <p><strong>Akurasi:</strong></p>
                <ul>
                    <li>Kalibrasi instrumen</li>
                    <li>Kesalahan sistematis</li>
                    <li>Bias operator</li>
                    <li>Kondisi lingkungan</li>
                </ul>
                <p><strong>Presisi:</strong></p>
                <ul>
                    <li>Resolusi instrumen</li>
                    <li>Stabilitas lingkungan</li>
                    <li>Skill operator</li>
                    <li>Variabilitas proses</li>
                </ul>

                <h2 class="section-heading">Aplikasi dalam Berbagai Bidang</h2>
                <ol>
                    <li><strong>Teknik dan Engineering</strong>
                        <ul>
                            <li>Manufaktur: Kontrol kualitas produk</li>
                            <li>Konstruksi: Pengukuran struktur bangunan</li>
                            <li>Aerospace: Toleransi komponen pesawat</li>
                            <li>Otomotif: Spesifikasi parts kendaraan</li>
                        </ul>
                    </li>
                    <li><strong>Sains dan Penelitian</strong>
                        <ul>
                            <li>Fisika: Eksperimen laboratorium</li>
                            <li>Kimia: Konsentrasi larutan</li>
                            <li>Biologi: Pengukuran organisme</li>
                            <li>Astronomi: Jarak dan ukuran benda langit</li>
                        </ul>
                    </li>
                    <li><strong>Kedokteran dan Kesehatan</strong>
                        <ul>
                            <li>Diagnosis: Tekanan darah, suhu tubuh</li>
                            <li>Farmasi: Dosis obat yang tepat</li>
                            <li>Radiologi: Intensitas radiasi</li>
                            <li>Laboratorium: Analisis sampel</li>
                        </ul>
                    </li>
                    <li><strong>Perdagangan dan Industri</strong>
                        <ul>
                            <li>Retail: Berat dan volume produk</li>
                            <li>Logistik: Dimensi dan berat kargo</li>
                            <li>Pertanian: Hasil panen dan kualitas</li>
                            <li>Energi: Konsumsi listrik dan gas</li>
                        </ul>
                    </li>
                </ol>
            `,
            visual: `<!-- ilustrasi alat ukur praktis atau skema perbandingan akurasi-presisi dapat ditambahkan di sini -->`
        },
        {
            title: "BAB VI: PEMECAHAN MASALAH DAN LATIHAN",
            readingTime: "16 menit baca",
            content: `
                <h2 class="section-heading">Strategi Pemecahan Masalah</h2>
                <h3 class="subsection-heading">Langkah Sistematis:</h3>
                <ol>
                    <li><strong>Analisis Masalah</strong>
                        <ul>
                            <li>Identifikasi besaran yang diketahui dan dicari</li>
                            <li>Tentukan satuan yang sesuai</li>
                            <li>Pahami konteks fisik masalah</li>
                        </ul>
                    </li>
                    <li><strong>Perencanaan Solusi</strong>
                        <ul>
                            <li>Pilih metode konversi yang tepat</li>
                            <li>Tentukan faktor konversi yang diperlukan</li>
                            <li>Susun strategi perhitungan</li>
                        </ul>
                    </li>
                    <li><strong>Eksekusi Perhitungan</strong>
                        <ul>
                            <li>Terapkan faktor konversi secara sistematis</li>
                            <li>Perhatikan aturan angka penting</li>
                            <li>Periksa dimensi di setiap langkah</li>
                        </ul>
                    </li>
                    <li><strong>Evaluasi Hasil</strong>
                        <ul>
                            <li>Periksa kemasukakalan hasil</li>
                            <li>Verifikasi dengan metode alternatif</li>
                            <li>Nyatakan hasil dengan ketidakpastian</li>
                        </ul>
                    </li>
                </ol>

                <h2 class="section-heading">Contoh Masalah Terapan</h2>
                <h3>Masalah 1: Engineering</h3>
                <p>Sebuah tangki bervolume 2500 liter akan diisi dengan air dengan laju 45 m³/jam. Berapa lama waktu yang diperlukan untuk mengisi penuh tangki?</p>
                <p><strong>Solusi:</strong></p>
                <ul>
                    <li>Volume tangki = 2500 L = 2.5 m³</li>
                    <li>Laju pengisian = 45 m³/jam</li>
                    <li>Waktu = Volume / Laju</li>
                    <li>Waktu = 2.5 m³ / 45 m³/jam</li>
                    <li>Waktu = 0.056 jam = 3.33 menit</li>
                </ul>

                <h3>Masalah 2: Transportasi</h3>
                <p>Sebuah mobil bergerak dengan kecepatan 80 km/jam. Berapa jarak yang ditempuh dalam 2.5 jam dalam satuan meter?</p>
                <p><strong>Solusi:</strong></p>
                <ul>
                    <li>v = 80 km/jam = 80 × (1000 m)/(3600 s) = 22.22 m/s</li>
                    <li>t = 2.5 jam = 2.5 × 3600 s = 9000 s</li>
                    <li>s = v × t = 22.22 m/s × 9000 s = 200,000 m = 200 km</li>
                </ul>

                <h2 class="section-heading">Latihan Komprehensif</h2>
                <ul>
                    <li>Soal 1: Konversi 65°F ke Celsius dan Kelvin</li>
                    <li>Soal 2: Sebuah lapangan berbentuk persegi dengan sisi 50 m. Hitung luas dalam satuan: a) m² b) cm² c) hectare</li>
                    <li>Soal 3: Konversi kecepatan 25 m/s ke: a) km/jam b) mile/jam c) feet/s</li>
                    <li>Soal 4: Densitas air adalah 1 g/cm³. Nyatakan dalam kg/m³</li>
                    <li>Soal 5: Sebuah kawat memiliki diameter 2.5 mm. Hitung luas penampangnya dalam: a) mm² b) cm² c) m²</li>
                </ul>

                <h2 class="section-heading">Aplikasi Digital dan Modern</h2>
                <h3>Teknologi Pengukuran Modern:</h3>
                <ol>
                    <li><strong>Sensor Digital</strong>
                        <ul>
                            <li>Akurasi tinggi dan respons cepat</li>
                            <li>Integrasi dengan sistem komputer</li>
                            <li>Monitoring real-time</li>
                        </ul>
                    </li>
                    <li><strong>GPS dan Navigasi Satelit</strong>
                        <ul>
                            <li>Pengukuran posisi global</li>
                            <li>Akurasi hingga centimeter</li>
                            <li>Aplikasi surveying dan mapping</li>
                        </ul>
                    </li>
                    <li><strong>Laser Measurement</strong>
                        <ul>
                            <li>Pengukuran jarak tanpa kontak</li>
                            <li>Presisi hingga mikrometer</li>
                            <li>Aplikasi dalam industri otomotif</li>
                        </ul>
                    </li>
                    <li><strong>Spectroscopy</strong>
                        <ul>
                            <li>Analisis komposisi material</li>
                            <li>Pengukuran konsentrasi molekular</li>
                            <li>Aplikasi dalam kimia analitik</li>
                        </ul>
                    </li>
                </ol>

                <hr/>

                <h2 class="section-heading">PENUTUP</h2>
                <p>Pengukuran dan satuan merupakan fondasi yang mendasari semua aktivitas ilmiah dan teknologi modern. Memahami konsep pengukuran, sistem satuan internasional, dan teknik konversi satuan tidak hanya penting dalam konteks akademis, tetapi juga dalam aplikasi praktis sehari-hari.</p>
                <p>Standardisasi global dalam sistem SI memungkinkan komunikasi ilmiah yang efektif, perdagangan internasional yang lancar, dan perkembangan teknologi yang</p>
            `,
            visual: `<!-- ilustrasi langkah pemecahan masalah atau grafik konversi satuan modern dapat ditambahkan di sini -->`
        }]
    },
    {
        id: "geometri-dasar",
        title: "Geometri Dasar",
        subtitle: "Fondasi Bentuk, Ruang, dan Hubungan Spasial",
        chapters: [
        {
            title: "BAB I: PENGANTAR GEOMETRI",
            readingTime: "18 menit baca",
            content: `
                <h2>Definisi dan Konsep Dasar</h2>
                <p>Geometri adalah cabang matematika yang mempelajari bentuk, ukuran, posisi relatif figur, dan sifat-sifat ruang. Kata "geometri" berasal dari bahasa Yunani "geometria" yang terdiri dari "geo" (bumi) dan "metria" (pengukuran), yang secara harfiah berarti "pengukuran bumi".</p>
                <h3>Konsep Fundamental Geometri:</h3>
                <ol>
                <li><strong>Objek Geometri</strong>
                    <ul>
                    <li>Titik: lokasi tanpa dimensi</li>
                    <li>Garis: kumpulan titik yang membentang tanpa batas</li>
                    <li>Bidang: permukaan datar yang membentang tanpa batas</li>
                    <li>Ruang: kumpulan semua titik dalam tiga dimensi</li>
                    </ul>
                </li>
                <li><strong>Sifat-sifat Geometri</strong>
                    <ul>
                    <li>Bentuk: karakteristik visual objek</li>
                    <li>Ukuran: dimensi linear, luas, atau volume</li>
                    <li>Posisi: lokasi relatif dalam ruang</li>
                    <li>Orientasi: arah atau sudut objek</li>
                    </ul>
                </li>
                <li><strong>Hubungan Geometri</strong>
                    <ul>
                    <li>Kongruensi: kesamaan bentuk dan ukuran</li>
                    <li>Kesebangunan: kesamaan bentuk dengan ukuran proporsional</li>
                    <li>Simetri: keseimbangan dalam bentuk</li>
                    <li>Transformasi: perubahan posisi atau ukuran</li>
                    </ul>
                </li>
                </ol>

                <h3>Aksioma dan Postulat:</h3>
                <p>Geometri dibangun berdasarkan aksioma (kebenaran yang diterima tanpa bukti) dan postulat (asumsi dasar):</p>
                <ul>
                <li>Melalui dua titik berbeda, hanya dapat ditarik satu garis lurus</li>
                <li>Setiap ruas garis dapat diperpanjang tanpa batas</li>
                <li>Dengan pusat dan jari-jari tertentu, dapat dibuat lingkaran</li>
                <li>Semua sudut siku-siku adalah sama</li>
                <li>Melalui titik di luar garis, hanya dapat ditarik satu garis sejajar</li>
                </ul>

                <h2>Sejarah Perkembangan Geometri</h2>
                <h3>Era Peradaban Kuno</h3>
                <p><strong>Mesopotamia dan Mesir (3000–500 SM)</strong></p>
                <ul>
                <li>Praktis dan Empiris: Geometri berkembang untuk kebutuhan praktis</li>
                <li>Pengukuran Lahan: Sistem perpajakan berdasarkan luas tanah</li>
                <li>Konstruksi: Piramida dan zigurat menunjukkan pemahaman geometri</li>
                <li>Teorema Pythagoras: Dikenal sebelum Pythagoras lahir</li>
                <li>Papirus Rhind: Berisi masalah geometri praktis (1650 SM)</li>
                </ul>
                <p><strong>Yunani Kuno (800–146 SM)</strong> Transformasi dari geometri praktis ke teoretis:</p>
                <ul>
                <li><strong>Thales (624–546 SM):</strong>
                    <ul>
                    <li>Teorema pertama dalam geometri deduktif</li>
                    <li>Sudut dalam setengah lingkaran adalah sudut siku-siku</li>
                    <li>Sudut-sudut berseberangan sama besar</li>
                    </ul>
                </li>
                <li><strong>Pythagoras (570–495 SM):</strong>
                    <ul>
                    <li>Teorema Pythagoras: a² + b² = c²</li>
                    <li>Hubungan musik dan matematika melalui rasio geometri</li>
                    <li>Konsep bilangan irasional dari geometri</li>
                    </ul>
                </li>
                <li><strong>Euclid (300 SM):</strong>
                    <ul>
                    <li>"Elements": Karya geometri paling berpengaruh</li>
                    <li>Sistematisasi geometri dalam 13 buku</li>
                    <li>Metode aksiomatik yang masih digunakan</li>
                    <li>Geometri Euclidean sebagai standar selama 2000 tahun</li>
                    </ul>
                </li>
                <li><strong>Archimedes (287–212 SM):</strong>
                    <ul>
                    <li>Luas dan volume bangun lengkung</li>
                    <li>Aproksimasi π menggunakan poligon</li>
                    <li>Prinsip-prinsip mekanika geometris</li>
                    </ul>
                </li>
                </ul>

                <h3>Era Klasik dan Pertengahan</h3>
                <p><strong>Matematika Islam (700–1400 M)</strong></p>
                <ul>
                <li>Al-Khwarizmi: Aljabar geometris</li>
                <li>Omar Khayyam: Solusi geometris persamaan kubik</li>
                <li>Al-Biruni: Trigonometri dan geometri bola</li>
                <li>Ibn al-Haytham: Geometri optik</li>
                </ul>
                <p><strong>Eropa Abad Pertengahan</strong></p>
                <ul>
                <li>Terjemahan karya Yunani dan Islam</li>
                <li>Aplikasi dalam arsitektur Gothic</li>
                <li>Perkembangan perspektif dalam seni</li>
                </ul>

                <h3>Era Renaissance dan Modern</h3>
                <p><strong>Renaissance (1400–1600)</strong></p>
                <ul>
                <li>Leonardo da Vinci: Geometri dalam seni dan engineering</li>
                <li>Albrecht Dürer: Perspektif dan proyeksi</li>
                <li>Perkembangan Kartografi: Proyeksi peta</li>
                </ul>
                <p><strong>Abad 17–18: Revolusi Geometri</strong></p>
                <ul>
                <li>René Descartes (1596–1650): Geometri analitik</li>
                <li>Pierre de Fermat: Geometri koordinat</li>
                <li>Blaise Pascal: Geometri proyektif</li>
                <li>Leonhard Euler: Formula Euler untuk polyhedra</li>
                </ul>
                <p><strong>Abad 19: Geometri Non-Euclidean</strong></p>
                <ul>
                <li>Carl Friedrich Gauss: Geometri intrinsik permukaan</li>
                <li>Nikolai Lobachevsky: Geometri hiperbolik</li>
                <li>János Bolyai: Geometri non-Euclidean independen</li>
                <li>Bernhard Riemann: Geometri Riemannian</li>
                </ul>
                <p><strong>Abad 20–21: Geometri Modern</strong></p>
                <ul>
                <li>Topologi: Studi sifat yang invariant terhadap deformasi</li>
                <li>Geometri Fraktal: Mandelbrot dan dimensi pecahan</li>
                <li>Geometri Komputasional: Algoritma dan aplikasi digital</li>
                <li>Geometri Diferensial: Relativitas Einstein</li>
                </ul>

                <h2>Cabang-cabang Geometri</h2>
                <ol>
                <li><strong>Geometri Euclidean</strong>
                    <ul>
                    <li>Berdasarkan aksioma Euclid</li>
                    <li>Ruang datar dengan geometri "normal"</li>
                    <li>Aplikasi: arsitektur, engineering, desain</li>
                    </ul>
                </li>
                <li><strong>Geometri Analitik</strong>
                    <ul>
                    <li>Menggunakan koordinat dan aljabar</li>
                    <li>Menghubungkan geometri dengan analisis</li>
                    <li>Aplikasi: fisika, computer graphics</li>
                    </ul>
                </li>
                <li><strong>Geometri Proyektif</strong>
                    <ul>
                    <li>Studi sifat yang invariant terhadap proyeksi</li>
                    <li>Perspektif dan titik hilang</li>
                    <li>Aplikasi: seni, fotografi, computer vision</li>
                    </ul>
                </li>
                <li><strong>Geometri Diferensial</strong>
                    <ul>
                    <li>Menggunakan kalkulus untuk mempelajari kurva dan permukaan</li>
                    <li>Kelengkungan dan geodesik</li>
                    <li>Aplikasi: relativitas, robotika</li>
                    </ul>
                </li>
                <li><strong>Topologi</strong>
                    <ul>
                    <li>Sifat yang tidak berubah oleh deformasi kontinyu</li>
                    <li>Genus, konektivitas, orientasi</li>
                    <li>Aplikasi: jaringan, biologi molekuler</li>
                    </ul>
                </li>
                </ol>

                <h2>Peran dalam Matematika dan Kehidupan</h2>
                <h3>Dalam Matematika:</h3>
                <ul>
                <li>Aljabar: Interpretasi geometris persamaan</li>
                <li>Trigonometri: Hubungan dalam segitiga</li>
                <li>Kalkulus: Geometri kurva dan permukaan</li>
                <li>Statistik: Visualisasi data dan distribusi</li>
                </ul>
                <h3>Dalam Kehidupan Sehari-hari:</h3>
                <ul>
                <li><strong>Arsitektur dan Konstruksi</strong>
                    <ul>
                    <li>Desain bangunan dan struktur</li>
                    <li>Perhitungan material dan stabilitas</li>
                    <li>Estetika dan fungsionalitas</li>
                    </ul>
                </li>
                <li><strong>Teknologi dan Engineering</strong>
                    <ul>
                    <li>Computer graphics dan game design</li>
                    <li>Robotika dan navigasi</li>
                    <li>Manufaktur dan quality control</li>
                    </ul>
                </li>
                <li><strong>Seni dan Desain</strong>
                    <ul>
                    <li>Komposisi visual dan proporsi</li>
                    <li>Perspektif dan ilusi optik</li>
                    <li>Pattern dan ornamen</li>
                    </ul>
                </li>
                <li><strong>Sains dan Penelitian</strong>
                    <ul>
                    <li>Kristalografi dan struktur molekul</li>
                    <li>Astronomi dan kosmologi</li>
                    <li>Biologi dan morfologi</li>
                    </ul>
                </li>
                </ul>
            `,
            visual: `<!-- visualisasi garis, bidang, ruang, dan perkembangan historis geometri dapat ditambahkan di sini -->`
            },
            {
                title: "BAB II: UNSUR-UNSUR GEOMETRI DASAR",
                readingTime: "16 menit baca",
                content: `
                    <h2>Titik, Garis, dan Bidang</h2>
                    <h3>Titik</h3>
                    <p>Titik adalah konsep fundamental dalam geometri yang menunjukkan lokasi tanpa memiliki dimensi (panjang, lebar, atau tinggi).</p>
                    <p><strong>Karakteristik Titik:</strong></p>
                    <ul>
                    <li>Tidak memiliki ukuran</li>
                    <li>Hanya menunjukkan posisi</li>
                    <li>Dilambangkan dengan huruf kapital (A, B, C)</li>
                    <li>Digambarkan sebagai noktah kecil</li>
                    </ul>

                    <h3>Garis</h3>
                    <p>Garis adalah kumpulan titik-titik yang membentang tanpa batas ke kedua arah.</p>
                    <p><strong>Jenis-jenis Garis:</strong></p>
                    <ol>
                    <li><strong>Garis Lurus</strong>
                        <ul>
                        <li>Jarak terpendek antara dua titik</li>
                        <li>Tidak memiliki kelengkungan</li>
                        <li>Dilambangkan dengan huruf kecil (l, m, n) atau dua titik (AB)</li>
                        </ul>
                    </li>
                    <li><strong>Ruas Garis (Segmen)</strong>
                        <ul>
                        <li>Bagian garis yang dibatasi dua titik ujung</li>
                        <li>Memiliki panjang tertentu</li>
                        <li>Dilambangkan AB atau |AB|</li>
                        </ul>
                    </li>
                    <li><strong>Sinar (Ray)</strong>
                        <ul>
                        <li>Bagian garis yang memiliki titik awal tetapi tidak berujung</li>
                        <li>Membentang tanpa batas ke satu arah</li>
                        <li>Dilambangkan dengan panah</li>
                        </ul>
                    </li>
                    </ol>

                    <h3>Bidang</h3>
                    <p>Bidang adalah permukaan datar yang membentang tanpa batas ke segala arah.</p>
                    <p><strong>Karakteristik Bidang:</strong></p>
                    <ul>
                    <li>Memiliki panjang dan lebar tanpa batas</li>
                    <li>Tidak memiliki ketebalan</li>
                    <li>Dilambangkan dengan huruf Yunani (α, β, γ) atau tiga titik tidak segaris</li>
                    </ul>

                    <h2>Sudut dan Pengukurannya</h2>
                    <h3>Definisi Sudut</h3>
                    <p>Sudut adalah daerah yang dibentuk oleh dua sinar yang bertemu pada satu titik (titik sudut atau vertex).</p>
                    <p><strong>Komponen Sudut:</strong></p>
                    <ul>
                    <li>Vertex: titik pertemuan kedua sinar</li>
                    <li>Kaki sudut: kedua sinar pembentuk sudut</li>
                    <li>Daerah sudut: area di antara kedua kaki sudut</li>
                    </ul>

                    <h3>Satuan Pengukuran Sudut:</h3>
                    <ol>
                    <li><strong>Derajat (°)</strong>
                        <ul>
                        <li>1 putaran penuh = 360°</li>
                        <li>1° = 60' (menit)</li>
                        <li>1' = 60" (detik)</li>
                        </ul>
                    </li>
                    <li><strong>Radian (rad)</strong>
                        <ul>
                        <li>1 putaran penuh = 2π radian</li>
                        <li>1 radian ≈ 57.3°</li>
                        <li>π radian = 180°</li>
                        </ul>
                    </li>
                    </ol>

                    <h3>Klasifikasi Sudut Berdasarkan Besar:</h3>
                    <ol>
                    <li>Sudut Lancip: 0° < α < 90°</li>
                    <li>Sudut Siku-siku: α = 90°</li>
                    <li>Sudut Tumpul: 90° < α < 180°</li>
                    <li>Sudut Lurus: α = 180°</li>
                    <li>Sudut Refleks: 180° < α < 360°</li>
                    <li>Sudut Penuh: α = 360°</li>
                    </ol>

                    <h3>Hubungan Antar Sudut:</h3>
                    <ol>
                    <li>Sudut Komplemen: dua sudut yang jumlahnya 90°</li>
                    <li>Sudut Suplemen: dua sudut yang jumlahnya 180°</li>
                    <li>Sudut Bertolak Belakang: sudut yang sama besar dan berhadapan</li>
                    <li>Sudut Sehadap: sudut yang posisinya sama pada garis sejajar</li>
                    </ol>

                    <h2>Hubungan Antar Garis</h2>
                    <h3>Kedudukan Dua Garis dalam Bidang:</h3>
                    <ol>
                    <li><strong>Garis Sejajar</strong>
                        <ul>
                        <li>Tidak pernah berpotongan</li>
                        <li>Jarak antar garis selalu sama</li>
                        <li>Dilambangkan: l ∥ m</li>
                        </ul>
                    </li>
                    <li><strong>Garis Berpotongan</strong>
                        <ul>
                        <li>Bertemu pada satu titik</li>
                        <li>Membentuk empat sudut</li>
                        <li>Sudut bertolak belakang sama besar</li>
                        </ul>
                    </li>
                    <li><strong>Garis Berimpit</strong>
                        <ul>
                        <li>Semua titik pada kedua garis sama</li>
                        <li>Sebenarnya adalah garis yang sama</li>
                        </ul>
                    </li>
                    </ol>

                    <h3>Garis Tegak Lurus</h3>
                    <p>Dua garis yang berpotongan dan membentuk sudut siku-siku (90°).</p>
                    <p><strong>Sifat-sifat:</strong></p>
                    <ul>
                    <li>Dilambangkan: l ⊥ m</li>
                    <li>Keempat sudut yang terbentuk adalah 90°</li>
                    <li>Jika l ⊥ m dan m ∥ n, maka l ⊥ n</li>
                    </ul>

                    <h2>Konstruksi Geometri Dasar</h2>
                    <h3>Alat Konstruksi Klasik:</h3>
                    <ul>
                    <li>Jangka: untuk membuat lingkaran dan memindahkan jarak</li>
                    <li>Penggaris: untuk menggambar garis lurus (tanpa skala)</li>
                    </ul>

                    <h3>Konstruksi Fundamental:</h3>
                    <ol>
                    <li><strong>Membagi Ruas Garis Sama Panjang</strong>
                        <ul>
                        <li>Buat busur dengan jari-jari > ½ panjang ruas</li>
                        <li>Dari kedua ujung ruas, buat busur yang berpotongan</li>
                        <li>Hubungkan titik potong busur</li>
                        </ul>
                    </li>
                    <li><strong>Membuat Garis Tegak Lurus</strong>
                        <ul>
                        <li>Dari titik pada garis, buat busur memotong garis di dua titik</li>
                        <li>Dari kedua titik potong, buat busur dengan jari-jari sama</li>
                        <li>Hubungkan titik asal dengan perpotongan busur</li>
                        </ul>
                    </li>
                    <li><strong>Membagi Sudut Sama Besar</strong>
                        <ul>
                        <li>Dari vertex, buat busur memotong kedua kaki sudut</li>
                        <li>Dari titik potong, buat busur dengan jari-jari sama</li>
                        <li>Hubungkan vertex dengan perpotongan busur</li>
                        </ul>
                    </li>
                    </ol>
                `,
                visual: `<!-- visualisasi titik, garis, bidang, dan konstruksi geometri klasik bisa ditambahkan di sini -->`
            },
            {
                title: "BAB III: BANGUN DATAR",
                readingTime: "18 menit baca",
                content: `
                    <h2>Segitiga dan Sifat-sifatnya</h2>
                    <h3>Definisi Segitiga</h3>
                    <p>Segitiga adalah bangun datar yang dibentuk oleh tiga ruas garis yang saling bertemu pada tiga titik yang tidak segaris.</p>
                    <p><strong>Unsur-unsur Segitiga:</strong></p>
                    <ul>
                    <li>Sisi: tiga ruas garis pembentuk segitiga</li>
                    <li><strong>Titik Sudut</strong>: tiga titik pertemuan sisi</li>
                    <li>Sudut: tiga sudut yang terbentuk oleh sisi-sisi</li>
                    </ul>

                    <h3>Klasifikasi Segitiga Berdasarkan Sisi:</h3>
                    <ol>
                    <li>Segitiga Siku-siku: memiliki satu sudut siku-siku (90°)</li>
                    <li>Segitiga Sama Sisi: ketiga sisinya sama panjang</li>
                    <li>Segitiga Sama Kaki: dua sisi sama panjang</li>
                    <li>Segitiga Sembarang: semua sisi berbeda panjang</li>
                    </ol>

                    <h3>Klasifikasi Segitiga Berdasarkan Sudut:</h3>
                    <ol>
                    <li>Segitiga Lancip: semua sudut kurang dari 90°</li>
                    <li>Segitiga Tumpul: satu sudut lebih dari 90°</li>
                    <li>Segitiga Siku-siku: satu sudut tepat 90°</li>
                    </ol>

                    <h3>Sifat-sifat Segitiga:</h3>
                    <ol>
                    <li>Jumlah Sudut: Jumlah ketiga sudut dalam segitiga selalu 180°.</li>
                    <li>Teorema Pythagoras: Dalam segitiga siku-siku, kuadrat panjang sisi miring sama dengan jumlah kuadrat panjang kedua sisi lainnya (a² + b² = c²).</li>
                    <li>Ketidaksetaraan Segitiga: Jumlah panjang dua sisi harus lebih besar dari panjang sisi ketiga.</li>
                    </ol>

                    <p><strong>Rumus Luas Segitiga:</strong> Luas = 1/2 × alas × tinggi</p>

                    <h2>Segiempat dan Jenisnya</h2>
                    <h3>Definisi Segiempat</h3>
                    <p>Segiempat adalah bangun datar yang dibentuk oleh empat sisi dan empat sudut.</p>

                    <h3>Klasifikasi Segiempat:</h3>
                    <ol>
                    <li>Persegi: keempat sisi sama panjang dan keempat sudut siku-siku.</li>
                    <li>Persegi Panjang: dua pasang sisi yang sama panjang dan keempat sudut siku-siku.</li>
                    <li>Jajar Genjang: dua pasang sisi yang sama panjang, sudut berlawanan sama besar.</li>
                    <li>Trapesium: memiliki sepasang sisi sejajar.</li>
                    <li>Belah Ketupat: keempat sisi sama panjang, sudut berlawanan sama besar.</li>
                    </ol>

                    <h3>Sifat-sifat Segiempat:</h3>
                    <ol>
                    <li>Jumlah Sudut: Jumlah sudut dalam segiempat selalu 360°.</li>
                    <li>Teorema Pythagoras: Dapat diterapkan pada segiempat yang memiliki sudut siku-siku.</li>
                    <li>Ketidaksetaraan Segiempat: Jumlah panjang dua sisi harus lebih besar dari panjang sisi ketiga dan keempat.</li>
                    </ol>

                    <h3>Rumus Luas Segiempat:</h3>
                    <ul>
                    <li>Persegi: Luas = sisi × sisi</li>
                    <li>Persegi Panjang: Luas = panjang × lebar</li>
                    <li>Jajar Genjang: Luas = alas × tinggi</li>
                    <li>Trapesium: Luas = 1/2 × (jumlah sisi sejajar) × tinggi</li>
                    </ul>

                    <h2>Lingkaran dan Unsur-unsurnya</h2>
                    <h3>Definisi Lingkaran</h3>
                    <p>Lingkaran adalah bangun datar yang dibentuk oleh semua titik yang berjarak sama dari titik pusat.</p>

                    <h3>Unsur-unsur Lingkaran:</h3>
                    <ol>
                    <li>Pusat: Titik tengah lingkaran.</li>
                    <li>Jari-jari (r): Jarak dari pusat ke tepi lingkaran.</li>
                    <li>Diameter (d): Jarak dari satu titik di tepi lingkaran ke titik lain yang berlawanan, dua kali jari-jari (d = 2r).</li>
                    <li>Lingkaran: Garis lengkung yang menghubungkan semua titik di tepi.</li>
                    <li>Busur: Bagian dari lingkaran.</li>
                    <li>Tali Busur: Garis lurus yang menghubungkan dua titik di tepi lingkaran.</li>
                    </ol>

                    <h3>Sifat-sifat Lingkaran:</h3>
                    <ol>
                    <li>Jumlah Sudut: Sudut pusat = 2 × sudut keliling yang subtended oleh busur yang sama.</li>
                    <li>Teorema Pythagoras: Dapat diterapkan pada segitiga yang dibentuk oleh jari-jari dan tali busur.</li>
                    <li>Lingkaran Sejajar: Dua lingkaran yang memiliki pusat yang sama dan jari-jari berbeda.</li>
                    </ol>

                    <p><strong>Rumus Luas Lingkaran:</strong> Luas = π × r²</p>
                    <p><strong>Rumus Keliling Lingkaran:</strong> Keliling = 2 × π × r</p>

                    <h2>Bangun Datar Beraturan</h2>
                    <h3>Definisi Bangun Datar Beraturan</h3>
                    <p>Bangun datar beraturan adalah bangun yang memiliki sisi dan sudut yang sama.</p>

                    <h3>Contoh Bangun Datar Beraturan:</h3>
                    <ol>
                    <li>Segitiga Sama Sisi: Ketiga sisi dan sudut sama.</li>
                    <li>Persegi: Keempat sisi dan sudut sama.</li>
                    <li>Lingkaran: Semua titik di tepi sama jauh dari pusat.</li>
                    </ol>

                    <h3>Sifat-sifat Bangun Datar Beraturan:</h3>
                    <ol>
                    <li>Simetri: Memiliki banyak sumbu simetri.</li>
                    <li>Kongruensi: Semua sisi dan sudut sama besar.</li>
                    <li>Kesebangunan: Semua bangun beraturan memiliki bentuk yang sama.</li>
                    </ol>
                `,
                visual: `<!-- visualisasi bangun datar: segitiga, segiempat, lingkaran, dan bangun datar beraturan dapat ditambahkan di sini -->`
            },
            {
                title: "BAB IV: BANGUN RUANG",
                readingTime: "16 menit baca",
                content: `
                    <h2>Prisma dan Limas</h2>
                    <h3>Definisi Prisma</h3>
                    <p>Prisma adalah bangun ruang yang memiliki dua alas sejajar dan sisi tegak berbentuk persegi panjang.</p>
                    <p><strong>Unsur-unsur Prisma:</strong></p>
                    <ul>
                    <li>Alas: Dua sisi yang sejajar dan identik.</li>
                    <li>Sisi Tegak: Sisi yang menghubungkan alas.</li>
                    <li>Tinggi Prisma (h): Jarak antara dua alas.</li>
                    </ul>
                    <p><strong>Rumus Volume Prisma:</strong> Volume = Luas Alas × Tinggi</p>
                    <p><strong>Contoh Prisma:</strong></p>
                    <ul>
                    <li>Prisma Segitiga: Alas berbentuk segitiga.</li>
                    <li>Prisma Persegi: Alas berbentuk persegi.</li>
                    </ul>

                    <h3>Definisi Limas</h3>
                    <p>Limas adalah bangun ruang yang memiliki satu alas dan sisi tegak yang bertemu pada satu titik (puncak).</p>
                    <p><strong>Unsur-unsur Limas:</strong></p>
                    <ul>
                    <li>Alas: Satu sisi yang menjadi dasar.</li>
                    <li>Puncak: Titik pertemuan sisi tegak.</li>
                    <li>Sisi Tegak: Sisi yang menghubungkan alas dengan puncak.</li>
                    </ul>
                    <p><strong>Rumus Volume Limas:</strong> Volume = 1/3 × Luas Alas × Tinggi</p>

                    <h2>Tabung, Kerucut, dan Bola</h2>
                    <h3>Definisi Tabung</h3>
                    <p>Tabung adalah bangun ruang yang memiliki dua alas berbentuk lingkaran dan sisi tegak berbentuk persegi panjang.</p>
                    <p><strong>Unsur-unsur Tabung:</strong></p>
                    <ul>
                    <li>Alas: Dua lingkaran identik.</li>
                    <li>Tinggi Tabung (h): Jarak antara dua alas.</li>
                    </ul>
                    <p><strong>Rumus Volume Tabung:</strong> Volume = Luas Alas × Tinggi = π × r² × h</p>
                    <p><strong>Rumus Luas Permukaan Tabung:</strong> Luas Permukaan = 2 × Luas Alas + Keliling Alas × Tinggi = 2 × π × r² + 2 × π × r × h</p>

                    <h3>Definisi Kerucut</h3>
                    <p>Kerucut adalah bangun ruang yang memiliki satu alas berbentuk lingkaran dan puncak yang terhubung dengan alas.</p>
                    <p><strong>Unsur-unsur Kerucut:</strong></p>
                    <ul>
                    <li>Alas: Satu lingkaran.</li>
                    <li>Puncak: Titik tertinggi kerucut.</li>
                    <li>Tinggi Kerucut (h): Jarak dari puncak ke alas.</li>
                    </ul>
                    <p><strong>Rumus Volume Kerucut:</strong> Volume = 1/3 × Luas Alas × Tinggi = 1/3 × π × r² × h</p>
                    <p><strong>Rumus Luas Permukaan Kerucut:</strong> Luas Permukaan = Luas Alas + Luas Selimut = π × r² + π × r × s (s = garis pelukis)</p>

                    <h3>Definisi Bola</h3>
                    <p>Bola adalah bangun ruang yang terdiri dari semua titik yang berjarak sama dari titik pusat.</p>
                    <p><strong>Unsur-unsur Bola:</strong></p>
                    <ul>
                    <li>Pusat: Titik tengah bola.</li>
                    <li>Jari-jari (r): Jarak dari pusat ke permukaan.</li>
                    </ul>
                    <p><strong>Rumus Volume Bola:</strong> Volume = 4/3 × π × r³</p>
                    <p><strong>Rumus Luas Permukaan Bola:</strong> Luas Permukaan = 4 × π × r²</p>

                    <h2>Hubungan Antar Bangun Ruang</h2>
                    <ol>
                    <li><strong>Prisma dan Limas</strong>
                        <ul>
                        <li>Prisma memiliki dua alas, sedangkan limas hanya memiliki satu.</li>
                        <li>Volume limas selalu lebih kecil dibandingkan prisma dengan alas yang sama dan tinggi yang sama.</li>
                        </ul>
                    </li>
                    <li><strong>Tabung dan Kerucut</strong>
                        <ul>
                        <li>Volume kerucut adalah sepertiga dari volume tabung dengan alas yang sama dan tinggi yang sama.</li>
                        <li>Luas permukaan kerucut lebih kecil dibandingkan tabung.</li>
                        </ul>
                    </li>
                    <li><strong>Bola dan Bangun Ruang Lain</strong>
                        <ul>
                        <li>Volume bola lebih kecil dibandingkan volume tabung yang memiliki jari-jari dan tinggi yang sama.</li>
                        <li>Luas permukaan bola adalah yang terkecil dibandingkan dengan bangun ruang lain dengan volume yang sama.</li>
                        </ul>
                    </li>
                    </ol>
                `,
                visual: `<!-- visualisasi 3D bangun ruang seperti prisma, limas, tabung, kerucut, dan bola dapat ditambahkan di sini -->`
            },
            {
                title: "BAB V: TRANSFORMASI GEOMETRI",
                readingTime: "12 menit baca",
                content: `
                    <h2>Translasi dan Rotasi</h2>

                    <h3>Definisi Translasi</h3>
                    <p>Translasi adalah pergeseran semua titik pada bangun geometri sejauh jarak tertentu ke arah tertentu.</p>
                    <p><strong>Sifat-sifat Translasi:</strong></p>
                    <ul>
                    <li>Bentuk dan ukuran bangun tetap.</li>
                    <li>Posisi bangun berubah.</li>
                    <li>Semua titik bergerak sejauh jarak yang sama.</li>
                    </ul>

                    <h3>Definisi Rotasi</h3>
                    <p>Rotasi adalah perputaran bangun geometri di sekitar titik pusat dengan sudut tertentu.</p>
                    <p><strong>Sifat-sifat Rotasi:</strong></p>
                    <ul>
                    <li>Bentuk dan ukuran bangun tetap.</li>
                    <li>Posisi bangun berubah sesuai sudut rotasi.</li>
                    <li>Titik pusat tetap tidak bergerak.</li>
                    </ul>

                    <h2>Refleksi dan Dilatasi</h2>

                    <h3>Definisi Refleksi</h3>
                    <p>Refleksi adalah pencerminan bangun geometri terhadap garis tertentu (garis refleksi).</p>
                    <p><strong>Sifat-sifat Refleksi:</strong></p>
                    <ul>
                    <li>Bentuk dan ukuran bangun tetap.</li>
                    <li>Posisi bangun berubah menjadi cermin.</li>
                    <li>Jarak titik ke garis refleksi tetap.</li>
                    </ul>

                    <h3>Definisi Dilatasi</h3>
                    <p>Dilatasi adalah perubahan ukuran bangun geometri dengan skala tertentu, baik membesar atau memperkecil.</p>
                    <p><strong>Sifat-sifat Dilatasi:</strong></p>
                    <ul>
                    <li>Bentuk bangun tetap.</li>
                    <li>Ukuran bangun berubah sesuai faktor skala.</li>
                    <li>Titik pusat dilatasi tetap tidak bergerak.</li>
                    </ul>

                    <h2>Kesebangunan dan Kekongruenan</h2>

                    <h3>Kesebangunan</h3>
                    <p>Dua bangun dikatakan sebangun jika memiliki bentuk yang sama tetapi ukuran yang berbeda.</p>
                    <p><strong>Sifat-sifat Kesebangunan:</strong></p>
                    <ul>
                    <li>Sudut-sudut yang bersesuaian sama besar.</li>
                    <li>Sisi-sisi yang bersesuaian memiliki perbandingan yang sama.</li>
                    </ul>

                    <h3>Kekongruenan</h3>
                    <p>Dua bangun dikatakan kongruen jika memiliki bentuk dan ukuran yang sama.</p>
                    <p><strong>Sifat-sifat Kekongruenan:</strong></p>
                    <ul>
                    <li>Semua sisi dan sudut yang bersesuaian sama.</li>
                    <li>Dapat dicocokkan dengan translasi, rotasi, dan refleksi.</li>
                    </ul>

                    <h2>Aplikasi Transformasi</h2>
                    <ol>
                    <li><strong>Dalam Desain Grafis</strong>
                        <ul>
                        <li>Menggunakan transformasi untuk menciptakan efek visual.</li>
                        <li>Memanipulasi objek dalam software desain.</li>
                        </ul>
                    </li>
                    <li><strong>Dalam Arsitektur</strong>
                        <ul>
                        <li>Menggunakan transformasi untuk merancang bangunan.</li>
                        <li>Menciptakan simetri dan proporsi yang menarik.</li>
                        </ul>
                    </li>
                    <li><strong>Dalam Robotika</strong>
                        <ul>
                        <li>Menggunakan transformasi untuk pergerakan robot.</li>
                        <li>Menghitung posisi dan orientasi objek.</li>
                        </ul>
                    </li>
                    </ol>
                `,
                visual: `<!-- visualisasi animasi transformasi seperti translasi, rotasi, refleksi, dan dilatasi dapat ditambahkan di sini -->`
            },
            {
                title: "BAB VI: APLIKASI DAN PEMECAHAN MASALAH",
                readingTime: "13 menit baca",
                content: `
                    <h2>Strategi Pemecahan Masalah</h2>
                    <h3>Langkah-langkah Pemecahan Masalah Geometri:</h3>
                    <ol>
                    <li><strong>Identifikasi Masalah</strong>
                        <ul>
                        <li>Tentukan jenis bangun yang terlibat.</li>
                        <li>Pahami informasi yang diberikan.</li>
                        </ul>
                    </li>
                    <li><strong>Gambarkan Situasi</strong>
                        <ul>
                        <li>Buat sketsa bangun untuk visualisasi.</li>
                        <li>Tandai semua informasi yang relevan.</li>
                        </ul>
                    </li>
                    <li><strong>Terapkan Rumus</strong>
                        <ul>
                        <li>Gunakan rumus yang sesuai untuk menghitung.</li>
                        <li>Perhatikan satuan yang digunakan.</li>
                        </ul>
                    </li>
                    <li><strong>Verifikasi Hasil</strong>
                        <ul>
                        <li>Periksa kembali perhitungan.</li>
                        <li>Pastikan hasil masuk akal dalam konteks masalah.</li>
                        </ul>
                    </li>
                    </ol>

                    <h2>Contoh Masalah Terapan</h2>
                    <p><strong>Masalah 1: Luas Segitiga</strong></p>
                    <p>Sebuah segitiga memiliki alas 10 cm dan tinggi 5 cm. Hitunglah luas segitiga tersebut.</p>
                    <p><em>Solusi:</em> Luas = 1/2 × alas × tinggi = 1/2 × 10 cm × 5 cm = 25 cm²</p>

                    <p><strong>Masalah 2: Volume Tabung</strong></p>
                    <p>Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Hitunglah volume tabung tersebut.</p>
                    <p><em>Solusi:</em> Volume = π × r² × h = π × (7 cm)² × 10 cm ≈ 1540 cm³</p>

                    <p><strong>Masalah 3: Luas Permukaan Bola</strong></p>
                    <p>Sebuah bola memiliki jari-jari 14 cm. Hitunglah luas permukaan bola tersebut.</p>
                    <p><em>Solusi:</em> Luas Permukaan = 4 × π × r² = 4 × π × (14 cm)² ≈ 2464 cm²</p>

                    <h2>Latihan Komprehensif</h2>
                    <ul>
                    <li>Soal 1: Hitunglah luas segiempat dengan panjang 8 cm dan lebar 5 cm.</li>
                    <li>Soal 2: Sebuah prisma segitiga memiliki alas segitiga dengan panjang 6 cm, tinggi 4 cm, dan tinggi prisma 10 cm. Hitunglah volume prisma tersebut.</li>
                    <li>Soal 3: Sebuah kerucut memiliki jari-jari 3 cm dan tinggi 9 cm. Hitunglah volume kerucut tersebut.</li>
                    <li>Soal 4: Hitunglah keliling lingkaran dengan jari-jari 5 cm.</li>
                    <li>Soal 5: Sebuah limas segiempat memiliki alas berbentuk persegi dengan sisi 4 cm dan tinggi 6 cm. Hitunglah volume limas tersebut.</li>
                    </ul>

                    <h2>Aplikasi Digital dan Modern</h2>
                    <h3>Teknologi Geometri Modern:</h3>
                    <ol>
                    <li><strong>Software Geometri</strong>
                        <ul>
                        <li>Digunakan untuk menggambar dan menganalisis bangun geometri.</li>
                        <li>Contoh: GeoGebra, SketchUp.</li>
                        </ul>
                    </li>
                    <li><strong>Modeling 3D</strong>
                        <ul>
                        <li>Menggunakan geometri untuk menciptakan model tiga dimensi.</li>
                        <li>Aplikasi dalam arsitektur, game, dan film.</li>
                        </ul>
                    </li>
                    <li><strong>Geometri dalam Komputasi</strong>
                        <ul>
                        <li>Algoritma geometri untuk pemrosesan gambar dan pengenalan pola.</li>
                        <li>Aplikasi dalam machine learning dan AI.</li>
                        </ul>
                    </li>
                    </ol>

                    <hr/>
                    <h2>PENUTUP</h2>
                    <p>Geometri dasar adalah fondasi penting dalam matematika yang mempengaruhi banyak aspek kehidupan sehari-hari. Memahami konsep dasar geometri, sifat-sifat bangun datar dan bangun ruang, serta transformasi geometri sangat penting untuk pengembangan keterampilan analitis dan pemecahan masalah.</p>
                    <p>Dengan aplikasi yang luas dalam berbagai bidang, mulai dari arsitektur hingga teknologi, geometri tetap menjadi salah satu cabang matematika yang paling relevan dan menarik untuk dipelajari. Melalui latihan dan penerapan yang tepat, keterampilan geometri dapat ditingkatkan dan diterapkan dalam berbagai aspek kehidupan.</p>
                `,
                visual: `<!-- visualisasi interaktif pemecahan masalah dan simulasi modeling 3D dapat ditambahkan di sini -->`
            },
        ]
    },
    {
        id: "pola-dan-hubungan",
        title: "Pola dan Hubungan",
        subtitle: "Memahami Keteraturan dan Struktur dalam Matematika",
        chapters: [
        {
            title: "BAB I: PENGANTAR POLA DAN HUBUNGAN",
            readingTime: "19 menit baca",
            content: `
                <h2>Definisi dan Konsep Dasar</h2>
                <p>Pola adalah keteraturan atau struktur yang dapat diamati dalam susunan objek, bilangan, bentuk, atau fenomena. Secara matematis, pola merupakan pengulangan elemen-elemen tertentu yang mengikuti aturan atau hukum yang dapat diprediksi.</p>
                <p>Hubungan adalah keterkaitan atau korespondensi antara dua atau lebih elemen, yang dapat dinyatakan dalam bentuk aturan, rumus, atau fungsi matematis.</p>

                <h3>Karakteristik Fundamental Pola:</h3>
                <ol>
                <li><strong>Keteraturan (Regularity)</strong>
                    <ul>
                    <li>Pengulangan elemen dengan aturan tertentu</li>
                    <li>Dapat diprediksi berdasarkan pola sebelumnya</li>
                    <li>Memiliki struktur yang konsisten</li>
                    </ul>
                </li>
                <li><strong>Prediktabilitas (Predictability)</strong>
                    <ul>
                    <li>Memungkinkan peramalan elemen berikutnya</li>
                    <li>Mengikuti hukum atau aturan matematis</li>
                    <li>Dapat diekstrapolasi untuk nilai masa depan</li>
                    </ul>
                </li>
                <li><strong>Struktur (Structure)</strong>
                    <ul>
                    <li>Memiliki organisasi internal yang jelas</li>
                    <li>Hubungan antar elemen dapat diidentifikasi</li>
                    <li>Dapat dianalisis secara sistematis</li>
                    </ul>
                </li>
                </ol>

                <h3>Jenis-jenis Hubungan Matematis:</h3>
                <ul>
                <li><strong>Hubungan Linear</strong>
                    <ul>
                    <li>Perubahan konstan antar elemen</li>
                    <li>Grafik berbentuk garis lurus</li>
                    <li>Contoh: y = mx + c</li>
                    </ul>
                </li>
                <li><strong>Hubungan Non-linear</strong>
                    <ul>
                    <li>Perubahan tidak konstan</li>
                    <li>Grafik berbentuk kurva</li>
                    <li>Contoh: y = x², y = 2ˣ</li>
                    </ul>
                </li>
                <li><strong>Hubungan Siklik</strong>
                    <ul>
                    <li>Pola berulang dalam periode tertentu</li>
                    <li>Kembali ke nilai awal setelah siklus lengkap</li>
                    <li>Contoh: fungsi trigonometri</li>
                    </ul>
                </li>
                <li><strong>Hubungan Rekursif</strong>
                    <ul>
                    <li>Elemen bergantung pada elemen sebelumnya</li>
                    <li>Definisi berulang dengan aturan tertentu</li>
                    <li>Contoh: deret Fibonacci</li>
                    </ul>
                </li>
                </ul>

                <h2>Sejarah Perkembangan Teori Pola</h2>
                <h3>Era Peradaban Kuno</h3>
                <p><strong>Mesopotamia dan Mesir (3000-500 SM)</strong></p>
                <ul>
                <li>Pola Astronomi: Pengamatan siklus bulan dan matahari</li>
                <li>Pola Geometri: Ornamen dan dekorasi arsitektur</li>
                <li>Pola Bilangan: Sistem perhitungan dan kalender</li>
                <li>Aplikasi Praktis: Pertanian berdasarkan pola musim</li>
                </ul>

                <p><strong>Yunani Kuno (800-146 SM)</strong> Pengembangan teori matematis tentang pola:</p>
                <ul>
                <li><strong>Pythagoras (570-495 SM):</strong>
                    <ul>
                    <li>Bilangan Figuratif: Segitiga, persegi, pentagonal</li>
                    <li>Harmoni Musik: Rasio frekuensi dalam musik</li>
                    <li>Teorema Pythagoras: Pola dalam segitiga siku-siku</li>
                    </ul>
                </li>
                <li><strong>Euclid (300 SM):</strong>
                    <ul>
                    <li>"Elements": Sistematisasi pola geometri</li>
                    <li>Bilangan Prima: Pola distribusi bilangan prima</li>
                    <li>Algoritma Euclid: Pola dalam mencari FPB</li>
                    </ul>
                </li>
                <li><strong>Archimedes (287-212 SM):</strong>
                    <ul>
                    <li>Spiral Archimedes: Pola kurva matematika</li>
                    <li>Aproksimasi π: Pola konvergensi poligon</li>
                    </ul>
                </li>
                </ul>

                <h3>Era Klasik dan Pertengahan</h3>
                <ul>
                <li><strong>Matematika India (500-1200 M)</strong>
                    <ul>
                    <li>Brahmagupta: Pola dalam deret aritmatika</li>
                    <li>Bhaskara: Pola dalam persamaan kuadrat</li>
                    <li>Sistem Bilangan: Pola posisional dengan nol</li>
                    </ul>
                </li>
                <li><strong>Matematika Islam (700-1400 M)</strong>
                    <ul>
                    <li>Al-Khwarizmi: Pola dalam aljabar</li>
                    <li>Omar Khayyam: Pola dalam geometri</li>
                    <li>Ibn al-Haytham: Pola dalam optik dan fisika</li>
                    </ul>
                </li>
                <li><strong>Eropa Abad Pertengahan</strong>
                    <ul>
                    <li>Leonardo Fibonacci (1170-1250): Deret Fibonacci</li>
                    <li>Nicole Oresme (1320-1382): Grafik dan koordinat</li>
                    <li>Perkembangan Notasi: Simbolisme matematis</li>
                    </ul>
                </li>
                </ul>

                <h3>Era Renaissance dan Modern</h3>
                <ul>
                <li><strong>Abad 16-17: Revolusi Ilmiah</strong>
                    <ul>
                    <li>Johannes Kepler (1571-1630): Pola orbit planet</li>
                    <li>Galileo Galilei (1564-1642): Pola gerak benda</li>
                    <li>René Descartes (1596-1650): Geometri analitik</li>
                    <li>Pierre de Fermat (1601-1665): Teori bilangan</li>
                    </ul>
                </li>
                <li><strong>Abad 18: Era Pencerahan</strong>
                    <ul>
                    <li>Leonhard Euler (1707-1783):</li>
                    <ul>
                        <li>Formula Euler: e^(iπ) + 1 = 0</li>
                        <li>Teori graf dan topologi</li>
                        <li>Fungsi zeta dan bilangan prima</li>
                    </ul>
                    <li>Joseph-Louis Lagrange (1736-1813): Mekanika analitik</li>
                    </ul>
                </li>
                <li><strong>Abad 19: Matematika Modern</strong>
                    <ul>
                    <li>Carl Friedrich Gauss (1777-1855): Teori bilangan</li>
                    <li>Augustin-Louis Cauchy (1789-1857): Analisis matematis</li>
                    <li>Évariste Galois (1811-1832): Teori grup</li>
                    <li>Georg Cantor (1845-1918): Teori himpunan</li>
                    </ul>
                </li>
                <li><strong>Abad 20-21: Era Digital</strong>
                    <ul>
                    <li>Benoit Mandelbrot (1924-2010): Geometri fraktal</li>
                    <li>John Conway (1937-2020): Game of Life</li>
                    <li>Komputer dan Algoritma: Analisis pola kompleks</li>
                    <li>Machine Learning: Pengenalan pola otomatis</li>
                    </ul>
                </li>
                </ul>

                <h2>Pentingnya Pola dalam Matematika</h2>
                <h3>Fungsi Kognitif:</h3>
                <ol>
                <li><strong>Pengenalan Pola (Pattern Recognition)</strong>
                    <ul>
                    <li>Kemampuan dasar dalam pembelajaran matematika</li>
                    <li>Membantu memahami struktur dan hubungan</li>
                    <li>Dasar untuk generalisasi dan abstraksi</li>
                    </ul>
                </li>
                <li><strong>Pemecahan Masalah</strong>
                    <ul>
                    <li>Mengidentifikasi pola dalam masalah kompleks</li>
                    <li>Menggunakan pola untuk mencari solusi</li>
                    <li>Menerapkan strategi berdasarkan pola yang dikenal</li>
                    </ul>
                </li>
                <li><strong>Prediksi dan Estimasi</strong>
                    <ul>
                    <li>Meramalkan nilai atau kejadian masa depan</li>
                    <li>Menggunakan tren dan pola historis</li>
                    <li>Dasar untuk modeling matematis</li>
                    </ul>
                </li>
                </ol>

                <h3>Aplikasi Matematis:</h3>
                <ul>
                <li>Aljabar: Pola dalam persamaan dan fungsi</li>
                <li>Geometri: Pola dalam bentuk dan transformasi</li>
                <li>Statistik: Pola dalam data dan distribusi</li>
                <li>Kalkulus: Pola dalam limit dan turunan</li>
                </ul>

                <h2>Klasifikasi Pola dan Hubungan</h2>
                <h3>Berdasarkan Struktur:</h3>
                <ul>
                <li><strong>Pola Linear</strong>: Perubahan konstan, hubungan proporsional, contoh: 2, 4, 6, 8, 10, ...</li>
                <li><strong>Pola Kuadratik</strong>: Perubahan dengan percepatan konstan, contoh: 1, 4, 9, 16, 25, ...</li>
                <li><strong>Pola Eksponensial</strong>: Perubahan dengan rasio konstan, contoh: 2, 4, 8, 16, 32, ...</li>
                </ul>

                <h3>Berdasarkan Dimensi:</h3>
                <ul>
                <li>Pola Satu Dimensi: Barisan bilangan, deret matematis, pola temporal</li>
                <li>Pola Dua Dimensi: Pola geometri planar, tessellasi dan pengubinan, matriks dan array</li>
                <li>Pola Tiga Dimensi: Struktur kristal, pola ruang, geometri solid</li>
                </ul>

                <h3>Berdasarkan Kompleksitas:</h3>
                <ul>
                <li>Pola Sederhana: Aturan tunggal dan jelas, mudah diidentifikasi</li>
                <li>Pola Kompleks: Aturan majemuk, interaksi multiple, analisis mendalam</li>
                <li>Pola Chaos: Sensitif terhadap kondisi awal, tampak acak tetapi deterministik</li>
                </ul>
            `,
            visual: `<!-- Visualisasi interaktif pola deret, grafik fungsi, dan simulasi chaos dapat ditambahkan di sini -->`
            },
            {
                title: "BAB II: POLA BILANGAN",
                readingTime: "18 menit baca",
                content: `
                    <h2>Barisan Aritmatika</h2>
                    <p><strong>Definisi Barisan Aritmatika</strong> Barisan aritmatika adalah barisan bilangan dimana selisih antara dua suku berturut-turut selalu konstan. Selisih konstan ini disebut beda (d).</p>
                    <p><strong>Bentuk Umum:</strong> a, a+d, a+2d, a+3d, ..., a+(n-1)d</p>
                    <p><strong>Rumus Suku ke-n:</strong> Un = a + (n-1)d</p>
                    <p>Dimana:</p>
                    <ul>
                    <li>Un = suku ke-n</li>
                    <li>a = suku pertama</li>
                    <li>d = beda</li>
                    <li>n = nomor suku</li>
                    </ul>
                    <h3>Contoh Barisan Aritmatika:</h3>
                    <ol>
                    <li><strong>Barisan Bilangan Ganjil:</strong> 1, 3, 5, 7, 9, ...
                        <ul>
                        <li>a = 1, d = 2</li>
                        <li>Un = 1 + (n-1)×2 = 2n - 1</li>
                        </ul>
                    </li>
                    <li><strong>Barisan Kelipatan 5:</strong> 5, 10, 15, 20, 25, ...
                        <ul>
                        <li>a = 5, d = 5</li>
                        <li>Un = 5 + (n-1)×5 = 5n</li>
                        </ul>
                    </li>
                    <li><strong>Barisan Menurun:</strong> 20, 17, 14, 11, 8, ...
                        <ul>
                        <li>a = 20, d = -3</li>
                        <li>Un = 20 + (n-1)×(-3) = 23 - 3n</li>
                        </ul>
                    </li>
                    </ol>
                    <h3>Sifat-sifat Barisan Aritmatika:</h3>
                    <ol>
                    <li><strong>Suku Tengah:</strong> Dalam barisan dengan jumlah suku ganjil, suku tengah sama dengan rata-rata suku pertama dan terakhir.</li>
                    <li><strong>Hubungan Tiga Suku Berturut-turut:</strong> Jika a, b, c membentuk barisan aritmatika, maka b = (a+c)/2</li>
                    <li><strong>Grafik:</strong> Titik-titik (n, Un) membentuk garis lurus</li>
                    </ol>

                    <h2>Barisan Geometri</h2>
                    <p><strong>Definisi Barisan Geometri</strong> Barisan geometri adalah barisan bilangan dimana rasio antara dua suku berturut-turut selalu konstan. Rasio konstan ini disebut rasio (r).</p>
                    <p><strong>Bentuk Umum:</strong> a, ar, ar², ar³, ..., ar^(n-1)</p>
                    <p><strong>Rumus Suku ke-n:</strong> Un = a × r^(n-1)</p>
                    <p>Dimana:</p>
                    <ul>
                    <li>Un = suku ke-n</li>
                    <li>a = suku pertama</li>
                    <li>r = rasio</li>
                    <li>n = nomor suku</li>
                    </ul>
                    <h3>Contoh Barisan Geometri:</h3>
                    <ol>
                    <li><strong>Barisan Pangkat 2:</strong> 2, 4, 8, 16, 32, ...
                        <ul>
                        <li>a = 2, r = 2</li>
                        <li>Un = 2 × 2^(n-1) = 2^n</li>
                        </ul>
                    </li>
                    <li><strong>Barisan Pecahan:</strong> 1, 1/2, 1/4, 1/8, 1/16, ...
                        <ul>
                        <li>a = 1, r = 1/2</li>
                        <li>Un = 1 × (1/2)^(n-1) = 1/2^(n-1)</li>
                        </ul>
                    </li>
                    <li><strong>Barisan Negatif:</strong> 3, -6, 12, -24, 48, ...
                        <ul>
                        <li>a = 3, r = -2</li>
                        <li>Un = 3 × (-2)^(n-1)</li>
                        </ul>
                    </li>
                    </ol>
                    <h3>Sifat-sifat Barisan Geometri:</h3>
                    <ol>
                    <li><strong>Suku Tengah:</strong> Dalam barisan dengan jumlah suku ganjil, kuadrat suku tengah sama dengan hasil kali suku pertama dan terakhir.</li>
                    <li><strong>Hubungan Tiga Suku Berturut-turut:</strong> Jika a, b, c membentuk barisan geometri, maka b² = ac</li>
                    <li><strong>Grafik:</strong> Titik-titik (n, Un) membentuk kurva eksponensial</li>
                    </ol>

                    <h2>Pola Bilangan Khusus</h2>
                    <ol>
                    <li><strong>Deret Fibonacci</strong> Setiap suku adalah jumlah dua suku sebelumnya: F(n) = F(n-1) + F(n-2)
                        <ul>
                        <li>Barisan: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...</li>
                        <li>Sifat-sifat Fibonacci:
                            <ul>
                            <li>Rasio dua suku berturut-turut mendekati golden ratio (φ ≈ 1.618)</li>
                            <li>Muncul dalam berbagai fenomena alam</li>
                            <li>Hubungan dengan spiral logaritmik</li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li><strong>Bilangan Segitiga</strong> Bilangan yang dapat disusun membentuk segitiga: Tn = n(n+1)/2
                        <ul>
                        <li>Barisan: 1, 3, 6, 10, 15, 21, 28, 36, 45, ...</li>
                        <li>Visualisasi:
                            <pre>
                                *
                                * *
                                * * *
                                * * * *
                            </pre>
                        </li>
                        </ul>
                    </li>
                    <li><strong>Bilangan Persegi</strong> Bilangan yang merupakan kuadrat sempurna: Sn = n²
                        <ul>
                        <li>Barisan: 1, 4, 9, 16, 25, 36, 49, 64, 81, ...</li>
                        </ul>
                    </li>
                    <li><strong>Bilangan Pentagonal</strong> Bilangan yang dapat disusun membentuk pentagon: Pn = n(3n-1)/2
                        <ul>
                        <li>Barisan: 1, 5, 12, 22, 35, 51, 70, 92, 117, ...</li>
                        </ul>
                    </li>
                    </ol>

                    <h2>Deret dan Jumlah Barisan</h2>
                    <ol>
                    <li><strong>Jumlah Barisan Aritmatika</strong> Rumus untuk menghitung jumlah n suku pertama (Sn) dari barisan aritmatika:
                        <pre>S_n = (n/2) × (a + l)</pre>
                        <p>Dimana:</p>
                        <ul>
                        <li>n = jumlah suku</li>
                        <li>a = suku pertama</li>
                        <li>l = suku terakhir</li>
                        </ul>
                        <p>Contoh: Jika barisan aritmatika adalah 2, 4, 6, 8, 10, maka:</p>
                        <ul>
                        <li>n = 5</li>
                        <li>a = 2</li>
                        <li>l = 10</li>
                        <li>S₅ = 5/2 × (2+10) = 5/2 × 12 = 30</li>
                        </ul>
                    </li>
                    <li><strong>Jumlah Barisan Geometri</strong> Rumus untuk menghitung jumlah n suku pertama (Sn) dari barisan geometri:
                        <pre>S_n = a × (1 - r^n) / (1 - r), dengan r ≠ 1</pre>
                        <p>Dimana:</p>
                        <ul>
                        <li>a = suku pertama</li>
                        <li>r = rasio</li>
                        <li>n = jumlah suku</li>
                        </ul>
                        <p>Contoh: Jika barisan geometri adalah 3, 6, 12, 24, 48, maka:</p>
                        <ul>
                        <li>a = 3</li>
                        <li>r = 2</li>
                        <li>n = 5</li>
                        <li>S₅ = 3 × (1 - 2⁵) / (1 - 2) = 3 × (1 - 32) / -1 = 3 × (-31) / -1 = 93</li>
                        </ul>
                    </li>
                    </ol>
                `,
                visual: `<!-- Visualisasi interaktif barisan aritmatika, geometri, dan pola bilangan khusus dapat ditambahkan di sini -->`
            },
            {
                title: "BAB III: POLA GEOMETRI",
                readingTime: "15 menit baca",
                content: `
                    <h2>Pola dalam Bangun Datar</h2>
                    <ol>
                    <li><strong>Pola Segitiga</strong> Segitiga dapat membentuk pola yang berulang, seperti dalam tiling atau tessellasi. Contoh pola segitiga dapat dilihat dalam desain ubin atau mosaik.</li>
                    <li><strong>Pola Persegi</strong> Pola persegi sering digunakan dalam desain grafis dan arsitektur. Contoh pola ini termasuk ubin lantai, wallpaper, dan jendela.</li>
                    <li><strong>Pola Lingkaran</strong> Lingkaran dapat membentuk pola yang menarik, seperti dalam desain bunga atau mandala. Pola ini sering digunakan dalam seni dan dekorasi.</li>
                    </ol>

                    <h2>Pola dalam Bangun Ruang</h2>
                    <ol>
                    <li><strong>Pola Prisma</strong> Prisma dapat membentuk pola yang berulang dalam tiga dimensi. Contoh pola ini dapat dilihat dalam struktur bangunan atau desain interior.</li>
                    <li><strong>Pola Kerucut</strong> Kerucut dapat digunakan dalam desain arsitektur, seperti atap atau menara. Pola ini memberikan kesan elegan dan dinamis.</li>
                    <li><strong>Pola Bola</strong> Bola dapat membentuk pola dalam desain olahraga, seperti bola sepak atau bola basket. Pola ini juga terlihat dalam seni dan dekorasi.</li>
                    </ol>

                    <h2>Tessellasi dan Pengubinan</h2>
                    <p><strong>Definisi Tessellasi</strong> Tessellasi adalah penutupan permukaan datar dengan bentuk-bentuk geometri tanpa celah atau tumpang tindih. Pola ini sering digunakan dalam seni, arsitektur, dan desain.</p>
                    <p><strong>Contoh Tessellasi:</strong></p>
                    <ul>
                    <li>Tessellasi Segitiga: Menggunakan segitiga sama sisi untuk menutupi permukaan.</li>
                    <li>Tessellasi Persegi: Menggunakan persegi untuk menutupi permukaan.</li>
                    <li>Tessellasi Poligon: Menggunakan poligon reguler seperti heksagon.</li>
                    </ul>
                    <p><strong>Aplikasi Tessellasi:</strong></p>
                    <ul>
                    <li>Seni Mosaik: Menggunakan potongan kecil untuk membentuk gambar.</li>
                    <li>Desain Lantai: Menggunakan ubin untuk menciptakan pola yang menarik.</li>
                    <li>Arsitektur: Menggunakan bentuk geometris untuk menciptakan struktur yang estetis.</li>
                    </ul>

                    <h2>Fraktal dan Pola Rekursif</h2>
                    <p><strong>Definisi Fraktal</strong> Fraktal adalah pola yang berulang pada berbagai skala. Fraktal memiliki sifat self-similarity, di mana bagian dari fraktal menyerupai keseluruhan.</p>
                    <p><strong>Contoh Fraktal:</strong></p>
                    <ul>
                    <li>Kumpulan Mandelbrot: Pola kompleks yang dihasilkan dari fungsi matematis.</li>
                    <li>Pohon Fraktal: Struktur pohon yang menunjukkan pola cabang yang berulang.</li>
                    <li>Salju Fraktal: Pola salju yang menunjukkan bentuk berulang pada berbagai skala.</li>
                    </ul>
                    <p><strong>Aplikasi Fraktal:</strong></p>
                    <ul>
                    <li>Seni Digital: Menggunakan fraktal untuk menciptakan gambar yang menarik.</li>
                    <li>Modeling Alam: Menggunakan fraktal untuk mensimulasikan bentuk alam seperti pegunungan dan awan.</li>
                    <li>Analisis Data: Menggunakan fraktal untuk menganalisis pola dalam data kompleks.</li>
                    </ul>
                `,
                visual: `<!-- Visualisasi interaktif untuk pola segitiga, tessellasi, dan fraktal dapat ditambahkan di sini -->`
            },
            {
                title: "BAB IV: HUBUNGAN FUNGSIONAL",
                readingTime: "12 menit baca",
                content: `
                    <h2>Konsep Fungsi dan Relasi</h2>
                    <p><strong>Definisi Fungsi</strong> Fungsi adalah hubungan antara dua himpunan, di mana setiap elemen dari himpunan pertama (domain) dipetakan ke satu elemen di himpunan kedua (kodomain).</p>
                    <p><strong>Notasi Fungsi:</strong> Fungsi biasanya dinyatakan dengan notasi f(x), di mana f adalah nama fungsi dan x adalah variabel input.</p>
                    <p><strong>Contoh Fungsi:</strong></p>
                    <ul>
                    <li>Fungsi Linear: f(x) = mx + b</li>
                    <li>Fungsi Kuadratik: f(x) = ax² + bx + c</li>
                    <li>Fungsi Eksponensial: f(x) = a × b^x</li>
                    </ul>

                    <h2>Jenis-jenis Fungsi</h2>
                    <ol>
                    <li><strong>Fungsi Linear</strong> Fungsi yang grafiknya membentuk garis lurus. Contoh: f(x) = 2x + 3.</li>
                    <li><strong>Fungsi Kuadratik</strong> Fungsi yang grafiknya membentuk parabola. Contoh: f(x) = x² - 4x + 4.</li>
                    <li><strong>Fungsi Eksponensial</strong> Fungsi yang grafiknya menunjukkan pertumbuhan atau peluruhan eksponensial. Contoh: f(x) = 3^x.</li>
                    <li><strong>Fungsi Trigonometri</strong> Fungsi yang berhubungan dengan sudut dan digunakan dalam analisis siklik. Contoh: f(x) = sin(x), f(x) = cos(x).</li>
                    </ol>

                    <h2>Grafik dan Representasi Visual</h2>
                    <ol>
                    <li><strong>Grafik Fungsi</strong> Grafik fungsi adalah representasi visual dari hubungan antara variabel input dan output. Grafik dapat membantu dalam memahami pola dan hubungan.</li>
                    <li><strong>Sumbu Koordinat</strong> Sumbu x dan y digunakan untuk menggambarkan grafik fungsi. Titik potong sumbu menunjukkan nilai-nilai penting dari fungsi.</li>
                    <li><strong>Transformasi Grafik</strong> Transformasi grafik meliputi pergeseran, refleksi, dan perubahan skala. Transformasi ini dapat mempengaruhi bentuk dan posisi grafik.</li>
                    </ol>

                    <h2>Transformasi Fungsi</h2>
                    <ol>
                    <li><strong>Pergeseran (Translation)</strong> Menggeser grafik fungsi ke atas, bawah, kiri, atau kanan. Contoh: f(x) + k (geser ke atas) atau f(x - h) (geser ke kanan).</li>
                    <li><strong>Refleksi (Reflection)</strong> Membalik grafik fungsi terhadap sumbu x atau y. Contoh: -f(x) (refleksi terhadap sumbu x).</li>
                    <li><strong>Perubahan Skala (Scaling)</strong> Mengubah ukuran grafik fungsi. Contoh: af(x) (memperbesar atau memperkecil grafik).</li>
                    </ol>
                `,
                visual: `<!-- Tambahkan grafik interaktif fungsi linear, kuadratik, dan eksponensial di sini -->`
            },
            {
                title: "BAB V: POLA DALAM KEHIDUPAN SEHARI-HARI",
                readingTime: "10 menit baca",
                content: `
                    <h2>Pola Alam dan Biologi</h2>
                    <ol>
                    <li><strong>Pola Musim</strong> Perubahan musim menunjukkan pola yang dapat diprediksi berdasarkan waktu tahun. Pola ini mempengaruhi pertanian dan ekosistem.</li>
                    <li><strong>Pola Pertumbuhan</strong> Pola pertumbuhan tanaman dan hewan mengikuti siklus tertentu, seperti siklus hidup dan reproduksi.</li>
                    <li><strong>Pola Migrasi</strong> Banyak hewan menunjukkan pola migrasi yang teratur berdasarkan musim dan ketersediaan makanan.</li>
                    </ol>

                    <h2>Pola dalam Seni dan Arsitektur</h2>
                    <ol>
                    <li><strong>Pola Simetris</strong> Banyak karya seni dan arsitektur menggunakan simetri untuk menciptakan keseimbangan dan keindahan.</li>
                    <li><strong>Pola Geometris</strong> Desain geometris sering digunakan dalam seni, seperti mosaik, ukiran, dan lukisan.</li>
                    <li><strong>Pola Warna</strong> Penggunaan warna dalam pola dapat menciptakan efek visual yang menarik dan mempengaruhi suasana.</li>
                    </ol>

                    <h2>Pola dalam Musik dan Ritme</h2>
                    <ol>
                    <li><strong>Pola Ritmis</strong> Musik sering terdiri dari pola ritmis yang berulang, menciptakan struktur dan keteraturan.</li>
                    <li><strong>Pola Melodi</strong> Melodi dalam musik mengikuti pola tertentu, baik dalam nada maupun durasi.</li>
                    <li><strong>Pola Harmoni</strong> Harmoni dalam musik menciptakan hubungan antara nada yang berbeda, membentuk pola yang menyenangkan.</li>
                    </ol>

                    <h2>Aplikasi Teknologi Modern</h2>
                    <ol>
                    <li><strong>Algoritma dan Data</strong> Pola dalam data digunakan untuk mengembangkan algoritma dalam machine learning dan analisis data.</li>
                    <li><strong>Pengenalan Pola</strong> Teknologi pengenalan pola digunakan dalam berbagai aplikasi, seperti pengenalan wajah, suara, dan tulisan tangan.</li>
                    <li><strong>Desain Grafis dan Animasi</strong> Pola digunakan dalam desain grafis untuk menciptakan visual yang menarik dan interaktif.</li>
                    </ol>
                `,
                visual: `<!-- Tambahkan visualisasi interaktif tentang pola simetris, migrasi hewan, dan algoritma pola dalam AI di sini -->`
            },
            {
                title: "BAB VI: PEMECAHAN MASALAH DAN LATIHAN",
                readingTime: "9 menit baca",
                content: `
                    <h2>Strategi Pemecahan Masalah</h2>
                    <ol>
                    <li><strong>Identifikasi Pola</strong> Mencari pola dalam data atau masalah yang diberikan. Ini adalah langkah pertama untuk menemukan solusi.</li>
                    <li><strong>Gunakan Rumus</strong> Menerapkan rumus yang sesuai untuk menghitung atau memprediksi nilai berdasarkan pola yang ditemukan.</li>
                    <li><strong>Verifikasi Hasil</strong> Memeriksa kembali hasil untuk memastikan bahwa solusi yang ditemukan konsisten dengan pola yang ada.</li>
                    </ol>

                    <h2>Contoh Masalah Terapan</h2>
                    <p><strong>Masalah 1: Barisan Aritmatika</strong><br />
                    Sebuah barisan aritmatika dimulai dengan 5 dan memiliki beda 3. Hitunglah suku ke-10.<br />
                    <em>Solusi:</em> Un = a + (n-1)d = 5 + (10-1)×3 = 5 + 27 = 32</p>

                    <p><strong>Masalah 2: Barisan Geometri</strong><br />
                    Sebuah barisan geometri dimulai dengan 2 dan memiliki rasio 3. Hitunglah suku ke-6.<br />
                    <em>Solusi:</em> Un = a × r^(n-1) = 2 × 3^(6-1) = 2 × 243 = 486</p>

                    <p><strong>Masalah 3: Jumlah Barisan Aritmatika</strong><br />
                    Hitunglah jumlah 10 suku pertama dari barisan aritmatika yang dimulai dengan 4 dan beda 2.<br />
                    <em>Solusi:</em> Sn = n/2 × (a + l) = 10/2 × (4 + (4 + 9×2)) = 5 × (4 + 22) = 5 × 26 = 130</p>

                    <h2>Latihan Komprehensif</h2>
                    <ol>
                    <li>Hitunglah suku ke-15 dari barisan aritmatika yang dimulai dengan 10 dan beda 5.</li>
                    <li>Hitunglah jumlah 8 suku pertama dari barisan geometri yang dimulai dengan 1 dan rasio 2.</li>
                    <li>Gambarkan grafik fungsi f(x) = 2x + 3 dan identifikasi transformasi yang terjadi.</li>
                    <li>Temukan pola dalam deret berikut: 1, 4, 9, 16, ... dan hitung suku ke-10.</li>
                    <li>Buatlah tessellasi menggunakan bentuk segitiga dan gambarkan pola yang dihasilkan.</li>
                    </ol>

                    <hr />

                    <h2>PENUTUP</h2>
                    <p>Pola dan hubungan adalah konsep fundamental dalam matematika yang membantu kita memahami keteraturan dan struktur dalam berbagai fenomena. Dengan mempelajari pola, kita dapat mengembangkan keterampilan analitis dan pemecahan masalah yang berguna dalam kehidupan sehari-hari.</p>
                    <p>Melalui aplikasi dalam berbagai bidang, mulai dari seni hingga teknologi, pola dan hubungan tetap menjadi bagian penting dari pemahaman kita tentang dunia. Dengan latihan dan penerapan yang tepat, keterampilan dalam mengenali dan menggunakan pola dapat ditingkatkan dan diterapkan dalam berbagai aspek kehidupan.</p>
                `,
                visual: `<!-- Visualisasi interaktif grafik fungsi linear, animasi tessellasi, dan simulasi barisan aritmatika dapat ditambahkan di sini -->`
            },
        ]
    },
    {
        id: "representasi-data",
        title: "Representasi Data",
        subtitle: "Visualisasi dan Interpretasi Informasi Kuantitatif",
        chapters: [
            {
                title: "BAB I: PENGANTAR REPRESENTASI DATA",
                readingTime: "20 menit baca",
                content: `
                    <h2>Definisi dan Konsep Dasar</h2>
                    <p>Representasi Data adalah proses penyajian informasi dalam bentuk visual atau numerik yang memudahkan pemahaman, analisis, dan interpretasi. Data merupakan kumpulan fakta, angka, atau informasi yang dikumpulkan untuk tujuan analisis dan pengambilan keputusan.</p>

                    <h3>Komponen Fundamental Representasi Data:</h3>
                    <ol>
                    <li><strong>Data Mentah (Raw Data)</strong>
                        <ul>
                        <li>Informasi yang belum diolah atau diorganisir</li>
                        <li>Dapat berupa angka, teks, gambar, atau kombinasi</li>
                        <li>Memerlukan pengolahan untuk menjadi bermakna</li>
                        </ul>
                    </li>
                    <li><strong>Pengolahan Data (Data Processing)</strong>
                        <ul>
                        <li>Transformasi data mentah menjadi informasi yang berguna</li>
                        <li>Meliputi pembersihan, sortir, dan klasifikasi</li>
                        <li>Menggunakan metode statistik dan matematis</li>
                        </ul>
                    </li>
                    <li><strong>Visualisasi Data (Data Visualization)</strong>
                        <ul>
                        <li>Penyajian data dalam bentuk grafik, diagram, atau chart</li>
                        <li>Memudahkan identifikasi pola dan tren</li>
                        <li>Meningkatkan komunikasi informasi</li>
                        </ul>
                    </li>
                    <li><strong>Interpretasi (Interpretation)</strong>
                        <ul>
                        <li>Proses memahami makna dari data yang disajikan</li>
                        <li>Mengambil kesimpulan berdasarkan analisis</li>
                        <li>Mendukung pengambilan keputusan</li>
                        </ul>
                    </li>
                    </ol>

                    <h3>Karakteristik Data yang Baik:</h3>
                    <ul>
                    <li><strong>Akurat (Accurate)</strong>
                        <ul>
                        <li>Bebas dari kesalahan dan bias</li>
                        <li>Mencerminkan kondisi sebenarnya</li>
                        <li>Dapat diverifikasi dan divalidasi</li>
                        </ul>
                    </li>
                    <li><strong>Relevan (Relevant)</strong>
                        <ul>
                        <li>Sesuai dengan tujuan analisis</li>
                        <li>Memberikan informasi yang dibutuhkan</li>
                        <li>Mendukung pengambilan keputusan</li>
                        </ul>
                    </li>
                    <li><strong>Tepat Waktu (Timely)</strong>
                        <ul>
                        <li>Dikumpulkan dan disajikan pada waktu yang tepat</li>
                        <li>Masih berlaku untuk kondisi saat ini</li>
                        <li>Mendukung respons yang cepat</li>
                        </ul>
                    </li>
                    <li><strong>Lengkap (Complete)</strong>
                        <ul>
                        <li>Mencakup semua aspek yang diperlukan</li>
                        <li>Tidak ada informasi penting yang hilang</li>
                        <li>Memberikan gambaran menyeluruh</li>
                        </ul>
                    </li>
                    </ul>

                    <h2>Sejarah Perkembangan Visualisasi Data</h2>
                    <h3>Era Prasejarah dan Kuno</h3>
                    <ul>
                    <li><strong>Zaman Prasejarah (40,000 SM)</strong>
                        <ul>
                        <li>Cave Paintings: Representasi visual pertama data berburu</li>
                        <li>Tally Marks: Sistem pencacahan sederhana pada tulang dan batu</li>
                        <li>Astronomical Records: Pengamatan pola bintang dan musim</li>
                        </ul>
                    </li>
                    <li><strong>Peradaban Kuno (3000-500 SM)</strong>
                        <ul>
                        <li>Mesopotamia: Tablet cuneiform dengan data perdagangan</li>
                        <li>Mesir: Hieroglif untuk pencatatan inventaris dan pajak</li>
                        <li>Yunani: Peta geografis dan diagram geometri</li>
                        <li>Cina: Grafik astronomi dan kalender lunar</li>
                        </ul>
                    </li>
                    </ul>

                    <h3>Era Klasik dan Pertengahan</h3>
                    <ul>
                    <li><strong>Abad Pertengahan (500–1500 M)</strong>
                        <ul>
                        <li>Peta Navigasi: Portolan charts untuk pelayaran</li>
                        <li>Manuscript Illumination: Diagram dalam teks ilmiah</li>
                        <li>Islamic Golden Age: Grafik astronomi dan matematika</li>
                        <li>Monastic Records: Pencatatan data ekonomi dan demografis</li>
                        </ul>
                    </li>
                    <li><strong>Renaissance (1400–1600)</strong>
                        <ul>
                        <li>Leonardo da Vinci: Diagram anatomi dan engineering</li>
                        <li>Mercator Projection: Sistem proyeksi peta modern</li>
                        <li>Scientific Revolution: Grafik eksperimental pertama</li>
                        <li>Printing Press: Distribusi visualisasi data</li>
                        </ul>
                    </li>
                    </ul>

                    <h3>Era Modern Awal</h3>
                    <ul>
                    <li><strong>Abad 17–18: Revolusi Ilmiah</strong>
                        <ul>
                        <li>René Descartes: Sistem koordinat Cartesian</li>
                        <li>Isaac Newton: Grafik dalam "Principia"</li>
                        <li>Edmund Halley: Peta cuaca dan magnetik</li>
                        <li>William Playfair: Pioneer chart modern</li>
                        </ul>
                    </li>
                    </ul>

                    <h3>Abad 19: Era Statistik</h3>
                    <ul>
                    <li>Adolphe Quetelet: Statistik sosial</li>
                    <li>Florence Nightingale: Diagram rose untuk mortalitas</li>
                    <li>Charles Joseph Minard: Flow map Napoleon's march</li>
                    <li>Francis Galton: Scatter plot dan korelasi</li>
                    </ul>

                    <h3>Abad 20: Revolusi Komputasi</h3>
                    <ul>
                    <li><strong>Era Komputer (1940–1980)</strong>
                        <ul>
                        <li>John Tukey: Exploratory Data Analysis</li>
                        <li>Jacques Bertin: "Semiology of Graphics"</li>
                        <li>Edward Tufte: Prinsip visualisasi data</li>
                        <li>Computer Graphics: Visualisasi interaktif</li>
                        </ul>
                    </li>
                    <li><strong>Era Digital (1980–sekarang)</strong>
                        <ul>
                        <li>Personal Computer: Demokratisasi visualisasi data</li>
                        <li>Internet: Sharing dan kolaborasi data global</li>
                        <li>Big Data: Visualisasi dataset masif</li>
                        <li>Interactive Visualization: Dashboard dan real-time analytics</li>
                        </ul>
                    </li>
                    </ul>

                    <h2>Pentingnya Representasi Data</h2>
                    <h3>Fungsi Kognitif:</h3>
                    <ul>
                    <li><strong>Pemahaman Cepat (Quick Comprehension)</strong>
                        <ul>
                        <li>Visual processing lebih cepat dari teks</li>
                        <li>Pattern recognition yang efisien</li>
                        <li>Reduksi cognitive load</li>
                        </ul>
                    </li>
                    <li><strong>Identifikasi Pola (Pattern Recognition)</strong>
                        <ul>
                        <li>Mendeteksi tren dan anomali</li>
                        <li>Hubungan antar variabel</li>
                        <li>Clustering dan segmentasi</li>
                        </ul>
                    </li>
                    <li><strong>Memori dan Retensi</strong>
                        <ul>
                        <li>Visual lebih mudah diingat</li>
                        <li>Storytelling dengan data</li>
                        <li>Emotional connection</li>
                        </ul>
                    </li>
                    </ul>

                    <h3>Aplikasi Praktis:</h3>
                    <ul>
                    <li><strong>Bisnis dan Ekonomi</strong>
                        <ul>
                        <li>Dashboard kinerja perusahaan</li>
                        <li>Analisis pasar dan kompetitor</li>
                        <li>Forecasting dan planning</li>
                        </ul>
                    </li>
                    <li><strong>Sains dan Penelitian</strong>
                        <ul>
                        <li>Publikasi hasil penelitian</li>
                        <li>Peer review dan validasi</li>
                        <li>Komunikasi dengan publik</li>
                        </ul>
                    </li>
                    <li><strong>Pemerintahan dan Kebijakan</strong>
                        <ul>
                        <li>Transparansi data publik</li>
                        <li>Evidence-based policy making</li>
                        <li>Monitoring program pemerintah</li>
                        </ul>
                    </li>
                    <li><strong>Pendidikan</strong>
                        <ul>
                        <li>Pembelajaran visual</li>
                        <li>Assessment dan evaluasi</li>
                        <li>Research presentation</li>
                        </ul>
                    </li>
                    </ul>

                    <h2>Jenis-jenis Data dan Karakteristiknya</h2>
                    <h3>Berdasarkan Sifat:</h3>
                    <ul>
                    <li><strong>Data Kualitatif (Categorical)</strong>
                        <ul>
                        <li>Menggambarkan karakteristik atau atribut</li>
                        <li>Tidak dapat diukur secara numerik</li>
                        <li>Contoh: jenis kelamin, warna, profesi</li>
                        <li>Sub-kategori:
                            <ul>
                            <li>Nominal: Tidak ada urutan (warna mata, agama)</li>
                            <li>Ordinal: Ada urutan (tingkat pendidikan, rating)</li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li><strong>Data Kuantitatif (Numerical)</strong>
                        <ul>
                        <li>Dapat diukur dan dinyatakan dalam angka</li>
                        <li>Memungkinkan operasi matematika</li>
                        <li>Contoh: tinggi badan, berat, umur</li>
                        <li>Sub-kategori:
                            <ul>
                            <li>Diskrit: Bilangan bulat (jumlah anak, mobil)</li>
                            <li>Kontinu: Dapat berupa pecahan (tinggi, berat)</li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    </ul>

                    <h3>Berdasarkan Skala Pengukuran:</h3>
                    <ul>
                    <li><strong>Skala Nominal</strong>
                        <ul>
                        <li>Kategori tanpa urutan</li>
                        <li>Hanya untuk klasifikasi</li>
                        <li>Operasi: frekuensi, modus</li>
                        </ul>
                    </li>
                    <li><strong>Skala Ordinal</strong>
                        <ul>
                        <li>Kategori dengan urutan</li>
                        <li>Tidak ada jarak yang sama</li>
                        <li>Operasi: median, persentil</li>
                        </ul>
                    </li>
                    <li><strong>Skala Interval</strong>
                        <ul>
                        <li>Jarak sama antar nilai</li>
                        <li>Tidak ada titik nol absolut</li>
                        <li>Operasi: mean, standar deviasi</li>
                        </ul>
                    </li>
                    <li><strong>Skala Rasio</strong>
                        <ul>
                        <li>Memiliki titik nol absolut</li>
                        <li>Rasio bermakna</li>
                        <li>Semua operasi statistik</li>
                        </ul>
                    </li>
                    </ul>

                    <h3>Berdasarkan Sumber:</h3>
                    <ul>
                    <li><strong>Data Primer</strong>
                        <ul>
                        <li>Dikumpulkan langsung oleh peneliti</li>
                        <li>Sesuai dengan tujuan spesifik</li>
                        <li>Contoh: survei, eksperimen</li>
                        </ul>
                    </li>
                    <li><strong>Data Sekunder</strong>
                        <ul>
                        <li>Dikumpulkan oleh pihak lain</li>
                        <li>Digunakan untuk tujuan berbeda</li>
                        <li>Contoh: publikasi, database</li>
                        </ul>
                    </li>
                    </ul>
                `,
                visual: `<!-- Tambahkan ilustrasi perkembangan grafik dari masa ke masa dan peta jenis data -->`
            },
            {
                title: "BAB II: PENGUMPULAN DAN ORGANISASI DATA",
                readingTime: "24 menit baca",
                content: `
                    <h2>Metode Pengumpulan Data</h2>
                    <ol>
                    <li><strong>Observasi</strong>
                        <p>Pengamatan langsung terhadap objek atau fenomena yang diteliti.</p>
                        <p><strong>Jenis Observasi:</strong></p>
                        <ul>
                        <li>Observasi Partisipan: Peneliti terlibat dalam aktivitas</li>
                        <li>Observasi Non-partisipan: Peneliti hanya mengamati</li>
                        <li>Observasi Terstruktur: Menggunakan pedoman sistematis</li>
                        <li>Observasi Tidak Terstruktur: Pengamatan bebas</li>
                        </ul>
                        <p><strong>Keunggulan:</strong></p>
                        <ul>
                        <li>Data real-time dan akurat</li>
                        <li>Dapat mengamati perilaku natural</li>
                        <li>Tidak bergantung pada responden</li>
                        </ul>
                        <p><strong>Kelemahan:</strong></p>
                        <ul>
                        <li>Memerlukan waktu lama</li>
                        <li>Subjektivitas pengamat</li>
                        <li>Hawthorne effect</li>
                        </ul>
                    </li>

                    <li><strong>Survei dan Kuesioner</strong>
                        <p>Pengumpulan data melalui pertanyaan terstruktur kepada responden.</p>
                        <p><strong>Jenis Survei:</strong></p>
                        <ul>
                        <li>Survei Tatap Muka: Interview langsung</li>
                        <li>Survei Telepon: Wawancara melalui telepon</li>
                        <li>Survei Online: Kuesioner digital</li>
                        <li>Survei Pos: Kuesioner melalui surat</li>
                        </ul>
                        <p><strong>Desain Pertanyaan:</strong></p>
                        <ul>
                        <li>Pertanyaan Terbuka: Responden bebas menjawab</li>
                        <li>Pertanyaan Tertutup: Pilihan jawaban terbatas</li>
                        <li>Skala Likert: Rating 1-5 atau 1-7</li>
                        <li>Semantic Differential: Skala bipolar</li>
                        </ul>
                    </li>

                    <li><strong>Eksperimen</strong>
                        <p>Manipulasi variabel untuk mengamati efek kausal.</p>
                        <p><strong>Komponen Eksperimen:</strong></p>
                        <ul>
                        <li>Variabel Independen: Yang dimanipulasi</li>
                        <li>Variabel Dependen: Yang diukur</li>
                        <li>Variabel Kontrol: Yang dikontrol konstan</li>
                        <li>Randomisasi: Penugasan acak subjek</li>
                        </ul>
                        <p><strong>Jenis Eksperimen:</strong></p>
                        <ul>
                        <li>Laboratory Experiment: Lingkungan terkontrol</li>
                        <li>Field Experiment: Lingkungan natural</li>
                        <li>Quasi-experiment: Kontrol terbatas</li>
                        <li>Natural Experiment: Memanfaatkan variasi alami</li>
                        </ul>
                    </li>
                    </ol>

                    <h2>Populasi dan Sampel</h2>
                    <p><strong>Definisi Populasi</strong> Populasi adalah keseluruhan objek atau individu yang menjadi target penelitian dan memiliki karakteristik yang sama.</p>
                    <p><strong>Karakteristik Populasi:</strong></p>
                    <ul>
                    <li>Populasi Target: Yang ingin digeneralisasi</li>
                    <li>Populasi Terjangkau: Yang dapat diakses peneliti</li>
                    <li>Unit Analisis: Individu, kelompok, organisasi</li>
                    <li>Parameter: Karakteristik populasi (μ, σ, π)</li>
                    </ul>

                    <p><strong>Definisi Sampel</strong> Sampel adalah subset dari populasi yang dipilih untuk mewakili karakteristik populasi.</p>
                    <p><strong>Alasan Sampling:</strong></p>
                    <ul>
                    <li>Efisiensi Biaya: Lebih murah dari sensus</li>
                    <li>Efisiensi Waktu: Lebih cepat dari sensus</li>
                    <li>Akurasi: Kontrol kualitas lebih baik</li>
                    <li>Praktikalitas: Populasi tidak terbatas</li>
                    </ul>

                    <h2>Teknik Sampling</h2>
                    <ol>
                    <li><strong>Probability Sampling</strong> Setiap anggota populasi memiliki peluang yang diketahui untuk terpilih.
                        <ul>
                        <li><strong>Simple Random Sampling:</strong>
                            <ul>
                            <li>Setiap individu memiliki peluang sama</li>
                            <li>Menggunakan tabel random atau software</li>
                            <li>Cocok untuk populasi homogen</li>
                            </ul>
                        </li>
                        <li><strong>Systematic Sampling:</strong>
                            <ul>
                            <li>Memilih setiap k-th individu</li>
                            <li>k = N/n (interval sampling)</li>
                            <li>Mudah dilakukan, efisien</li>
                            </ul>
                        </li>
                        <li><strong>Stratified Sampling:</strong>
                            <ul>
                            <li>Populasi dibagi menjadi strata homogen</li>
                            <li>Sampling dari setiap stratum</li>
                            <li>Meningkatkan representativitas</li>
                            </ul>
                        </li>
                        <li><strong>Cluster Sampling:</strong>
                            <ul>
                            <li>Populasi dibagi menjadi cluster</li>
                            <li>Memilih cluster secara random</li>
                            <li>Efisien untuk populasi tersebar</li>
                            </ul>
                        </li>
                        </ul>
                    </li>

                    <li><strong>Non-Probability Sampling</strong> Peluang terpilih tidak diketahui atau tidak sama.
                        <ul>
                        <li><strong>Convenience Sampling:</strong>
                            <ul>
                            <li>Memilih yang mudah diakses</li>
                            <li>Cepat dan murah</li>
                            <li>Bias seleksi tinggi</li>
                            </ul>
                        </li>
                        <li><strong>Purposive Sampling:</strong>
                            <ul>
                            <li>Memilih berdasarkan kriteria tertentu</li>
                            <li>Expert judgment</li>
                            <li>Untuk penelitian kualitatif</li>
                            </ul>
                        </li>
                        <li><strong>Quota Sampling:</strong>
                            <ul>
                            <li>Memenuhi kuota karakteristik tertentu</li>
                            <li>Mirip stratified tanpa randomisasi</li>
                            <li>Praktis untuk survei pasar</li>
                            </ul>
                        </li>
                        <li><strong>Snowball Sampling:</strong>
                            <ul>
                            <li>Responden merujuk responden lain</li>
                            <li>Untuk populasi tersembunyi</li>
                            <li>Network sampling</li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    </ol>

                    <h2>Organisasi dan Klasifikasi Data</h2>
                    <ol>
                    <li><strong>Coding dan Entry Data</strong> Proses mengubah data mentah menjadi format yang dapat dianalisis.
                        <p><strong>Tahapan Coding:</strong></p>
                        <ul>
                        <li>Pre-coding: Menentukan kode sebelum pengumpulan</li>
                        <li>Post-coding: Menentukan kode setelah pengumpulan</li>
                        <li>Verification: Memeriksa konsistensi kode</li>
                        <li>Cleaning: Mengoreksi kesalahan entry</li>
                        </ul>
                    </li>
                    <li><strong>Data Cleaning</strong> Proses identifikasi dan koreksi kesalahan dalam dataset.
                        <p><strong>Jenis Kesalahan:</strong></p>
                        <ul>
                        <li>Missing Values: Data yang hilang</li>
                        <li>Outliers: Nilai ekstrem yang tidak wajar</li>
                        <li>Inconsistency: Ketidakkonsistenan format</li>
                        <li>Duplication: Data yang terduplikasi</li>
                        </ul>
                        <p><strong>Teknik Cleaning:</strong></p>
                        <ul>
                        <li>Listwise Deletion: Menghapus kasus dengan missing value</li>
                        <li>Pairwise Deletion: Menghapus per analisis</li>
                        <li>Imputation: Mengganti dengan nilai estimasi</li>
                        <li>Transformation: Mengubah skala atau distribusi</li>
                        </ul>
                    </li>
                    <li><strong>Data Transformation</strong> Mengubah data ke dalam format yang lebih sesuai untuk analisis.
                        <ul>
                        <li>Normalization: Mengubah skala data ke rentang tertentu (misalnya, 0-1).</li>
                        <li>Standardization: Mengubah data menjadi distribusi normal dengan mean 0 dan deviasi standar 1.</li>
                        <li>Binning: Mengelompokkan data ke dalam interval atau kategori.</li>
                        <li>Log Transformation: Menggunakan logaritma untuk mengurangi skewness data.</li>
                        </ul>
                    </li>
                    <li><strong>Klasifikasi Data</strong> Mengelompokkan data berdasarkan karakteristik tertentu untuk memudahkan analisis.
                        <ul>
                        <li>Hierarchical Classification: Mengorganisir data dalam struktur pohon.</li>
                        <li>Flat Classification: Mengelompokkan data ke dalam kategori tanpa hierarki.</li>
                        <li>Multilevel Classification: Menggunakan beberapa level klasifikasi untuk detail lebih lanjut.</li>
                        </ul>
                    </li>
                    </ol>
                `,
                visual: `<!-- Tambahkan bagan alur pengumpulan data, ilustrasi metode sampling, dan contoh tabel hasil coding/transformasi -->`
            },
            {
                title: "BAB III: TABEL DAN DISTRIBUSI FREKUENSI",
                readingTime: "15 menit baca",
                content: `
                    <h2>Tabel Data Sederhana</h2>
                    <p><strong>Definisi Tabel Data</strong> Tabel data adalah representasi data dalam format baris dan kolom yang memudahkan pembacaan dan analisis.</p>
                    <p><strong>Komponen Tabel:</strong></p>
                    <ul>
                    <li>Judul Tabel: Menjelaskan isi tabel.</li>
                    <li>Kolom: Menyajikan variabel yang berbeda.</li>
                    <li>Baris: Menyajikan observasi atau entitas.</li>
                    <li>Sel: Interseksi antara kolom dan baris.</li>
                    </ul>
                    <p><strong>Contoh Tabel Data:</strong></p>
                    <table border="1">
                    <thead>
                        <tr><th>Nama</th><th>Umur</th><th>Jenis Kelamin</th><th>Pekerjaan</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Ali</td><td>25</td><td>Laki-laki</td><td>Mahasiswa</td></tr>
                        <tr><td>Siti</td><td>30</td><td>Perempuan</td><td>Dokter</td></tr>
                        <tr><td>Budi</td><td>22</td><td>Laki-laki</td><td>Pelajar</td></tr>
                        <tr><td>Rina</td><td>28</td><td>Perempuan</td><td>Pengacara</td></tr>
                    </tbody>
                    </table>

                    <h2>Distribusi Frekuensi</h2>
                    <p><strong>Definisi Distribusi Frekuensi</strong> Distribusi frekuensi adalah cara untuk mengorganisir data kuantitatif dengan menghitung jumlah kemunculan setiap nilai atau interval nilai.</p>
                    <p><strong>Komponen Distribusi Frekuensi:</strong></p>
                    <ul>
                    <li>Nilai atau Interval: Rentang nilai yang dikelompokkan.</li>
                    <li>Frekuensi: Jumlah kemunculan nilai dalam dataset.</li>
                    <li>Frekuensi Relatif: Proporsi frekuensi terhadap total.</li>
                    </ul>
                    <p><strong>Contoh Distribusi Frekuensi:</strong></p>
                    <table border="1">
                    <thead>
                        <tr><th>Interval Umur</th><th>Frekuensi</th><th>Frekuensi Relatif</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>20-24</td><td>3</td><td>0.30</td></tr>
                        <tr><td>25-29</td><td>4</td><td>0.40</td></tr>
                        <tr><td>30-34</td><td>3</td><td>0.30</td></tr>
                        <tr><td><strong>Total</strong></td><td><strong>10</strong></td><td><strong>1.00</strong></td></tr>
                    </tbody>
                    </table>

                    <h2>Tabel Kontingensi</h2>
                    <p><strong>Definisi Tabel Kontingensi</strong> Tabel kontingensi adalah tabel yang menunjukkan frekuensi dari dua variabel kategorikal untuk menganalisis hubungan antara keduanya.</p>
                    <p><strong>Contoh Tabel Kontingensi:</strong></p>
                    <table border="1">
                    <thead>
                        <tr><th>Pekerjaan</th><th>Laki-laki</th><th>Perempuan</th><th>Total</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Mahasiswa</td><td>3</td><td>2</td><td>5</td></tr>
                        <tr><td>Dokter</td><td>1</td><td>2</td><td>3</td></tr>
                        <tr><td>Pengacara</td><td>1</td><td>1</td><td>2</td></tr>
                        <tr><td><strong>Total</strong></td><td><strong>5</strong></td><td><strong>5</strong></td><td><strong>10</strong></td></tr>
                    </tbody>
                    </table>

                    <h2>Interpretasi Tabel Data</h2>
                    <ol>
                    <li><strong>Membaca Tabel</strong>
                        <ul>
                        <li>Identifikasi variabel dan nilai yang disajikan.</li>
                        <li>Perhatikan frekuensi dan pola yang muncul.</li>
                        </ul>
                    </li>
                    <li><strong>Analisis Hubungan</strong>
                        <ul>
                        <li>Gunakan tabel kontingensi untuk menganalisis hubungan antar variabel.</li>
                        <li>Hitung proporsi dan bandingkan frekuensi.</li>
                        </ul>
                    </li>
                    <li><strong>Kesimpulan</strong>
                        <ul>
                        <li>Ambil kesimpulan berdasarkan data yang disajikan.</li>
                        <li>Identifikasi pola atau tren yang relevan.</li>
                        </ul>
                    </li>
                    </ol>
                `,
                visual: `<!-- Tambahkan diagram distribusi frekuensi dan contoh visualisasi tabel kontingensi -->`
            },
            {
                title: "BAB IV: GRAFIK DAN DIAGRAM",
                readingTime: "18 menit baca",
                content: `
                    <h2>Diagram Batang dan Histogram</h2>
                    <h3>1. Diagram Batang</h3>
                    <p>Diagram batang adalah representasi grafis dari data kategorikal dengan batang vertikal atau horizontal.</p>
                    <p><strong>Karakteristik Diagram Batang:</strong></p>
                    <ul>
                    <li>Setiap batang mewakili kategori.</li>
                    <li>Tinggi batang menunjukkan frekuensi atau nilai.</li>
                    <li>Mudah dibaca dan dibandingkan.</li>
                    </ul>
                    <p><strong>Contoh Diagram Batang:</strong></p>
                    <pre>
                        Frekuensi
                        |
                        |         █
                        |         █
                        |         █         █
                        |         █         █
                        |         █         █         █
                        |         █         █         █
                        |         █         █         █
                        |_________█_________█_________█_________
                            A         B         C
                    </pre>

                    <h3>2. Histogram</h3>
                    <p>Histogram adalah representasi grafis dari distribusi frekuensi data kuantitatif dengan interval.</p>
                    <p><strong>Karakteristik Histogram:</strong></p>
                    <ul>
                    <li>Batang bersebelahan tanpa celah.</li>
                    <li>Menunjukkan distribusi data.</li>
                    <li>Memudahkan identifikasi pola distribusi.</li>
                    </ul>
                    <p><strong>Contoh Histogram:</strong></p>
                    <pre>
                        Frekuensi
                        |
                        |         █
                        |         █
                        |         █         █
                        |         █         █
                        |         █         █         █
                        |         █         █         █
                        |_________█_________█_________█_________
                                10-20     20-30     30-40
                    </pre>

                    <h2>Diagram Lingkaran</h2>
                    <p><strong>Definisi Diagram Lingkaran</strong> Diagram lingkaran adalah representasi grafis dari proporsi data dalam bentuk lingkaran.</p>
                    <p><strong>Karakteristik Diagram Lingkaran:</strong></p>
                    <ul>
                    <li>Setiap irisan mewakili proporsi dari total.</li>
                    <li>Memudahkan visualisasi perbandingan antar kategori.</li>
                    <li>Cocok untuk data kualitatif.</li>
                    </ul>
                    <p><strong>Contoh Diagram Lingkaran:</strong></p>
                    <pre>
                            25%
                            _______
                        /       \\
                        /         \\
                        |           |
                        |     50%   |
                        \\         /
                        \\_______/
                            25%
                    </pre>

                    <h2>Diagram Garis</h2>
                    <p><strong>Definisi Diagram Garis</strong> Diagram garis adalah representasi grafis dari data kuantitatif yang menunjukkan perubahan nilai seiring waktu.</p>
                    <p><strong>Karakteristik Diagram Garis:</strong></p>
                    <ul>
                    <li>Titik data dihubungkan dengan garis.</li>
                    <li>Menunjukkan tren dan pola perubahan.</li>
                    <li>Cocok untuk data waktu.</li>
                    </ul>
                    <p><strong>Contoh Diagram Garis:</strong></p>
                    <pre>
                        Nilai
                        |
                        |         *
                        |        * *
                        |       *   *
                        |      *     *
                        |     *       *
                        |_____*_________*_________
                    Waktu
                    </pre>

                    <h2>Scatter Plot dan Diagram Kotak</h2>
                    <h3>1. Scatter Plot</h3>
                    <p>Scatter plot adalah representasi grafis dari dua variabel kuantitatif untuk menunjukkan hubungan antara keduanya.</p>
                    <p><strong>Karakteristik Scatter Plot:</strong></p>
                    <ul>
                    <li>Titik data menunjukkan nilai dari dua variabel.</li>
                    <li>Memudahkan identifikasi pola dan korelasi.</li>
                    <li>Cocok untuk analisis regresi.</li>
                    </ul>
                    <p><strong>Contoh Scatter Plot:</strong></p>
                    <pre>
                        Y
                        |
                        |         *
                        |      *
                        |   *
                        | *
                        |_________________ X
                    </pre>

                    <h3>2. Diagram Kotak (Box Plot)</h3>
                    <p>Diagram kotak adalah representasi grafis dari distribusi data yang menunjukkan median, kuartil, dan outlier.</p>
                    <p><strong>Karakteristik Diagram Kotak:</strong></p>
                    <ul>
                    <li>Menunjukkan rentang interkuartil (IQR).</li>
                    <li>Memudahkan identifikasi outlier.</li>
                    <li>Cocok untuk perbandingan antar grup.</li>
                    </ul>
                `,
                visual: `<!-- Visualisasi statis atau interaktif: batang, histogram, pie, line chart, scatter plot, box plot -->`
            },
            {
                title: "BAB V: UKURAN PEMUSATAN DAN PENYEBARAN",
                readingTime: "25 menit baca",
                content: `
                    <h2>Mean, Median, dan Modus</h2>
                    <h3>1. Mean (Rata-rata)</h3>
                    <p>Mean adalah jumlah semua nilai dibagi dengan jumlah observasi.</p>
                    <p><strong>Rumus Mean:</strong><br>Mean = Σx / n</p>
                    <p>Dimana:</p>
                    <ul>
                    <li>Σx = jumlah semua nilai</li>
                    <li>n = jumlah observasi</li>
                    </ul>
                    <p>Contoh: Data: 2, 4, 6, 8, 10<br>Mean = (2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6</p>
                    <p><strong>Keunggulan Mean:</strong></p>
                    <ul>
                    <li>Menggunakan semua data dalam perhitungan</li>
                    <li>Mudah dihitung dan dipahami</li>
                    <li>Dasar untuk perhitungan statistik lanjutan</li>
                    </ul>
                    <p><strong>Kelemahan Mean:</strong></p>
                    <ul>
                    <li>Sensitif terhadap nilai ekstrem (outlier)</li>
                    <li>Tidak cocok untuk data ordinal atau nominal</li>
                    <li>Dapat memberikan nilai yang tidak realistis</li>
                    </ul>

                    <h3>2. Median</h3>
                    <p>Median adalah nilai tengah dari dataset yang telah diurutkan.</p>
                    <p><strong>Langkah Menentukan Median:</strong></p>
                    <ol>
                    <li>Urutkan data dari terkecil ke terbesar</li>
                    <li>Jika n ganjil: Median = nilai ke-(n+1)/2</li>
                    <li>Jika n genap: Median = rata-rata nilai ke-n/2 dan ke-(n/2)+1</li>
                    </ol>
                    <p>Contoh: Data ganjil: 1, 3, 5, 7, 9 &rarr; Median = 5<br>Data genap: 2, 4, 6, 8 &rarr; Median = (4 + 6) / 2 = 5</p>
                    <p><strong>Keunggulan Median:</strong></p>
                    <ul>
                    <li>Tidak terpengaruh outlier</li>
                    <li>Cocok untuk data ordinal</li>
                    <li>Mudah dipahami konsepnya</li>
                    </ul>
                    <p><strong>Kelemahan Median:</strong></p>
                    <ul>
                    <li>Tidak menggunakan semua informasi data</li>
                    <li>Sulit untuk perhitungan statistik lanjutan</li>
                    <li>Memerlukan pengurutan data</li>
                    </ul>

                    <h3>3. Modus</h3>
                    <p>Modus adalah nilai yang paling sering muncul dalam dataset.</p>
                    <p><strong>Jenis Modus:</strong></p>
                    <ul>
                    <li>Unimodal: Satu modus</li>
                    <li>Bimodal: Dua modus</li>
                    <li>Multimodal: Lebih dari dua modus</li>
                    <li>Tidak ada modus: Semua nilai frekuensinya sama</li>
                    </ul>
                    <p>Contoh: Data: 1, 2, 2, 3, 3, 3, 4 &rarr; Modus = 3 (muncul 3 kali)<br>Data: 1, 1, 2, 2, 3 &rarr; Modus = 1 dan 2 (bimodal)</p>
                    <p><strong>Keunggulan Modus:</strong></p>
                    <ul>
                    <li>Cocok untuk semua jenis data</li>
                    <li>Mudah diidentifikasi</li>
                    <li>Menunjukkan nilai yang paling umum</li>
                    </ul>
                    <p><strong>Kelemahan Modus:</strong></p>
                    <ul>
                    <li>Mungkin tidak ada atau lebih dari satu</li>
                    <li>Tidak stabil untuk sampel kecil</li>
                    <li>Tidak menggunakan semua informasi data</li>
                    </ul>

                    <h2>Range, Varians, dan Standar Deviasi</h2>
                    <h3>1. Range (Rentang)</h3>
                    <p>Range adalah selisih antara nilai maksimum dan minimum.</p>
                    <p><strong>Rumus Range:</strong><br>Range = Nilai Maksimum - Nilai Minimum</p>
                    <p>Contoh: Data: 5, 8, 12, 15, 20 &rarr; Range = 20 - 5 = 15</p>
                    <p><strong>Keunggulan Range:</strong></p>
                    <ul>
                    <li>Mudah dihitung</li>
                    <li>Memberikan gambaran sebaran data</li>
                    <li>Intuitif dan mudah dipahami</li>
                    </ul>
                    <p><strong>Kelemahan Range:</strong></p>
                    <ul>
                    <li>Hanya menggunakan dua nilai ekstrem</li>
                    <li>Sangat sensitif terhadap outlier</li>
                    <li>Tidak memberikan informasi tentang distribusi</li>
                    </ul>

                    <h3>2. Varians</h3>
                    <p>Varians mengukur rata-rata kuadrat deviasi dari mean.</p>
                    <p><strong>Rumus Varians Populasi:</strong><br>σ² = Σ(xi - μ)² / N<br><strong>Rumus Varians Sampel:</strong><br>s² = Σ(xi - x̄)² / (n-1)</p>
                    <p>Contoh: Data: 2, 4, 6 Mean = 4<br>
                    Varians = [(2-4)² + (4-4)² + (6-4)²] / 3<br>
                    = [4 + 0 + 4] / 3 = 8/3 = 2.67</p>

                    <h3>3. Standar Deviasi</h3>
                    <p>Standar deviasi adalah akar kuadrat dari varians.</p>
                    <p><strong>Rumus Standar Deviasi:</strong></p>
                    <ul>
                    <li>σ = √σ²  (populasi)</li>
                    <li>s = √s²  (sampel)</li>
                    </ul>
                    <p><strong>Interpretasi Standar Deviasi:</strong></p>
                    <ul>
                    <li>Nilai kecil: Data terpusat di sekitar mean</li>
                    <li>Nilai besar: Data tersebar luas dari mean</li>
                    <li>Satuan sama dengan data asli</li>
                    </ul>
                    <p><strong>Aturan Empiris (68-95-99.7):</strong><br>Untuk distribusi normal:</p>
                    <ul>
                    <li>68% data dalam 1 standar deviasi dari mean</li>
                    <li>95% data dalam 2 standar deviasi dari mean</li>
                    <li>99.7% data dalam 3 standar deviasi dari mean</li>
                    </ul>

                    <h2>Kuartil dan Persentil</h2>
                    <h3>1. Kuartil</h3>
                    <p>Kuartil membagi data menjadi empat bagian sama besar.</p>
                    <p><strong>Jenis Kuartil:</strong></p>
                    <ul>
                    <li>Q1 (Kuartil Pertama): 25% data di bawahnya</li>
                    <li>Q2 (Kuartil Kedua): Median (50%)</li>
                    <li>Q3 (Kuartil Ketiga): 75% data di bawahnya</li>
                    </ul>
                    <p><strong>Menghitung Kuartil:</strong></p>
                    <ol>
                    <li>Urutkan data</li>
                    <li>Q1 = median dari setengah bawah data</li>
                    <li>Q3 = median dari setengah atas data</li>
                    </ol>
                    <p>Contoh: Data: 1, 2, 3, 4, 5, 6, 7, 8, 9<br>
                    Q1 = 2.5 (median dari 1,2,3,4)<br>Q2 = 5 (median keseluruhan)<br>Q3 = 7.5 (median dari 6,7,8,9)</p>

                    <h3>2. Persentil</h3>
                    <p>Persentil membagi data menjadi 100 bagian sama besar.</p>
                    <p><strong>Interpretasi Persentil:</strong></p>
                    <ul>
                    <li>P25 = Q1</li>
                    <li>P50 = Median = Q2</li>
                    <li>P75 = Q3</li>
                    <li>P90 = 90% data di bawahnya</li>
                    </ul>

                    <h3>3. Interquartile Range (IQR)</h3>
                    <p>IQR mengukur sebaran 50% data tengah.</p>
                    <p><strong>Rumus IQR:</strong><br>IQR = Q3 - Q1</p>
                    <p><strong>Kegunaan IQR:</strong></p>
                    <ul>
                    <li>Mengidentifikasi outlier</li>
                    <li>Ukuran sebaran yang robust</li>
                    <li>Dasar untuk box plot</li>
                    </ul>
                    <p><strong>Aturan Outlier:</strong></p>
                    <ul>
                    <li>Outlier bawah: &lt; Q1 - 1.5×IQR</li>
                    <li>Outlier atas: &gt; Q3 + 1.5×IQR</li>
                    </ul>

                    <h2>Interpretasi Statistik Deskriptif</h2>
                    <h3>1. Memilih Ukuran Pemusatan</h3>
                    <ul>
                    <li>Mean: Data interval/rasio, distribusi normal</li>
                    <li>Median: Data ordinal, ada outlier, distribusi skew</li>
                    <li>Modus: Data nominal, mencari nilai paling umum</li>
                    </ul>
                    <h3>2. Memilih Ukuran Penyebaran</h3>
                    <ul>
                    <li>Standar Deviasi: Berpasangan dengan mean</li>
                    <li>IQR: Berpasangan dengan median</li>
                    <li>Range: Gambaran kasar sebaran</li>
                    </ul>
                    <h3>3. Bentuk Distribusi</h3>
                    <ul>
                    <li>Simetris: Mean ≈ Median ≈ Modus</li>
                    <li>Skew Positif: Mean > Median > Modus</li>
                    <li>Skew Negatif: Mean < Median < Modus</li>
                    </ul>
                `,
                visual: `<!-- Visualisasi: histogram, boxplot, grafik mean/median/modus, contoh distribusi normal -->`
            },
            {
                title: "BAB VI: APLIKASI DAN ANALISIS DATA",
                readingTime: "28 menit baca",
                content: `
                <h2>Aplikasi Representasi Data dalam Berbagai Bidang</h2>
                <h3>1. Bisnis dan Ekonomi</h3>
                <h4>Analisis Penjualan:</h4>
                <ul>
                <li>Grafik garis untuk tren penjualan bulanan</li>
                <li>Diagram batang untuk perbandingan produk</li>
                <li>Pie chart untuk pangsa pasar</li>
                <li>Histogram untuk distribusi pendapatan pelanggan</li>
                </ul>
                <h4>Dashboard Kinerja:</h4>
                <ul>
                <li>KPI (Key Performance Indicators) dalam bentuk gauge</li>
                <li>Tabel scorecard untuk metrik bisnis</li>
                <li>Heat map untuk analisis regional</li>
                <li>Scatter plot untuk analisis korelasi harga-permintaan</li>
                </ul>
                <h4>Forecasting:</h4>
                <ul>
                <li>Time series plot untuk prediksi</li>
                <li>Box plot untuk analisis variabilitas</li>
                <li>Regression line untuk tren jangka panjang</li>
                </ul>

                <h3>2. Kesehatan dan Kedokteran</h3>
                <h4>Epidemiologi:</h4>
                <ul>
                <li>Peta choropleth untuk penyebaran penyakit</li>
                <li>Grafik garis untuk kurva epidemi</li>
                <li>Diagram batang untuk perbandingan antar wilayah</li>
                <li>Funnel chart untuk tahapan screening</li>
                </ul>
                <h4>Penelitian Klinis:</h4>
                <ul>
                <li>Forest plot untuk meta-analisis</li>
                <li>Kaplan-Meier curve untuk survival analysis</li>
                <li>ROC curve untuk diagnostic accuracy</li>
                <li>Violin plot untuk distribusi biomarker</li>
                </ul>
                <h4>Monitoring Kesehatan:</h4>
                <ul>
                <li>Control chart untuk quality control</li>
                <li>Radar chart untuk profil kesehatan</li>
                <li>Waterfall chart untuk faktor risiko</li>
                </ul>

                <h3>3. Pendidikan</h3>
                <h4>Analisis Prestasi Akademik:</h4>
                <ul>
                <li>Histogram untuk distribusi nilai</li>
                <li>Box plot untuk perbandingan antar kelas</li>
                <li>Scatter plot untuk korelasi nilai-kehadiran</li>
                <li>Heatmap untuk pola pembelajaran</li>
                </ul>
                <h4>Evaluasi Program:</h4>
                <ul>
                <li>Before-after plot untuk efektivitas program</li>
                <li>Stacked bar chart untuk komposisi siswa</li>
                <li>Line chart untuk progress tracking</li>
                <li>Bubble chart untuk multi-dimensi analysis</li>
                </ul>

                <h3>4. Pemerintahan dan Kebijakan Publik</h3>
                <h4>Demografi:</h4>
                <ul>
                <li>Population pyramid untuk struktur usia</li>
                <li>Choropleth map untuk data spasial</li>
                <li>Treemap untuk komposisi anggaran</li>
                <li>Sankey diagram untuk alur migrasi</li>
                </ul>
                <h4>Monitoring Program:</h4>
                <ul>
                <li>Gantt chart untuk timeline proyek</li>
                <li>Speedometer chart untuk pencapaian target</li>
                <li>Multi-line chart untuk tren indikator</li>
                </ul>

                <h2>Teknik Analisis Data Modern</h2>
                <h3>1. Exploratory Data Analysis (EDA)</h3>
                <h4>Tahapan EDA:</h4>
                <ol>
                <li>Data Profiling: Memahami struktur dan kualitas data</li>
                <li>Univariate Analysis: Analisis satu variabel</li>
                <li>Bivariate Analysis: Hubungan dua variabel</li>
                <li>Multivariate Analysis: Analisis multiple variabel</li>
                </ol>
                <h4>Tools EDA:</h4>
                <ul>
                <li>Summary statistics</li>
                <li>Distribution plots</li>
                <li>Correlation matrix</li>
                <li>Missing value analysis</li>
                </ul>

                <h3>2. Statistical Inference</h3>
                <h4>Hypothesis Testing:</h4>
                <ul>
                <li>Null dan alternative hypothesis</li>
                <li>P-value dan significance level</li>
                <li>Type I dan Type II error</li>
                <li>Power analysis</li>
                </ul>
                <h4>Confidence Intervals:</h4>
                <ul>
                <li>Interval estimasi parameter</li>
                <li>Margin of error</li>
                <li>Sample size determination</li>
                </ul>

                <h3>3. Predictive Analytics</h3>
                <h4>Regression Analysis:</h4>
                <ul>
                <li>Linear regression untuk hubungan linear</li>
                <li>Multiple regression untuk multiple predictors</li>
                <li>Logistic regression untuk outcome binary</li>
                <li>Time series regression untuk data temporal</li>
                </ul>
                <h4>Machine Learning:</h4>
                <ul>
                <li>Supervised learning (classification, regression)</li>
                <li>Unsupervised learning (clustering, dimensionality reduction)</li>
                <li>Cross-validation untuk model evaluation</li>
                <li>Feature selection dan engineering</li>
                </ul>

                <h3>4. Big Data Analytics</h3>
                <h4>Karakteristik Big Data (5V):</h4>
                <ul>
                <li>Volume: Ukuran data yang besar</li>
                <li>Velocity: Kecepatan data streaming</li>
                <li>Variety: Keragaman format data</li>
                <li>Veracity: Kualitas dan akurasi data</li>
                <li>Value: Nilai bisnis dari data</li>
                </ul>
                <h4>Tools Big Data:</h4>
                <ul>
                <li>Hadoop ecosystem</li>
                <li>Spark untuk processing</li>
                <li>NoSQL databases</li>
                <li>Cloud computing platforms</li>
                </ul>

                <h2>Best Practices dalam Representasi Data</h2>
                <h3>1. Prinsip Desain Visual</h3>
                <h4>Clarity (Kejelasan):</h4>
                <ul>
                <li>Gunakan judul yang deskriptif</li>
                <li>Label sumbu dengan jelas</li>
                <li>Hindari clutter dan elemen tidak perlu</li>
                <li>Pilih skala yang appropriate</li>
                </ul>
                <h4>Accuracy (Akurasi):</h4>
                <ul>
                <li>Mulai sumbu Y dari nol jika memungkinkan</li>
                <li>Gunakan proporsi yang benar</li>
                <li>Hindari distorsi visual</li>
                <li>Sertakan sumber data</li>
                </ul>
                <h4>Efficiency (Efisiensi):</h4>
                <ul>
                <li>Maksimalkan data-ink ratio</li>
                <li>Gunakan warna secara konsisten</li>
                <li>Pilih chart type yang sesuai</li>
                <li>Optimasi untuk audience</li>
                </ul>

                <h3>2. Pemilihan Visualisasi</h3>
                <h4>Berdasarkan Tujuan:</h4>
                <ul>
                <li>Comparison: Bar chart, column chart</li>
                <li>Composition: Pie chart, stacked bar</li>
                <li>Distribution: Histogram, box plot</li>
                <li>Relationship: Scatter plot, correlation matrix</li>
                <li>Trend: Line chart, area chart</li>
                </ul>
                <h4>Berdasarkan Jenis Data:</h4>
                <ul>
                <li>Categorical: Bar chart, pie chart</li>
                <li>Numerical: Histogram, scatter plot</li>
                <li>Time series: Line chart, area chart</li>
                <li>Geographical: Map, choropleth</li>
                </ul>

                <h3>3. Storytelling dengan Data</h3>
                <h4>Struktur Narasi:</h4>
                <ol>
                <li>Context: Latar belakang dan tujuan</li>
                <li>Conflict: Masalah atau pertanyaan</li>
                <li>Resolution: Insight dan rekomendasi</li>
                </ol>
                <h4>Teknik Storytelling:</h4>
                <ul>
                <li>Progressive disclosure</li>
                <li>Annotation dan callouts</li>
                <li>Color untuk emphasis</li>
                <li>Interactive elements</li>
                </ul>

                <h2>Etika dalam Representasi Data</h2>
                <h3>1. Transparansi</h3>
                <ul>
                <li>Sertakan metodologi pengumpulan data</li>
                <li>Jelaskan limitasi dan asumsi</li>
                <li>Berikan akses ke raw data jika memungkinkan</li>
                <li>Dokumentasi yang lengkap</li>
                </ul>
                <h3>2. Objektivitas</h3>
                <ul>
                <li>Hindari cherry-picking data</li>
                <li>Presentasikan uncertainty</li>
                <li>Akui bias dan konflik kepentingan</li>
                <li>Peer review dan validation</li>
                </ul>
                <h3>3. Privacy dan Keamanan</h3>
                <ul>
                <li>Anonymisasi data personal</li>
                <li>Secure data storage dan transmission</li>
                <li>Compliance dengan regulasi (GDPR, dll)</li>
                <li>Informed consent untuk data collection</li>
                </ul>

                <hr />
                <h2>PENUTUP</h2>
                <p>Representasi data merupakan jembatan penting antara data mentah dan insight yang actionable. Dalam era digital saat ini, kemampuan untuk mengumpulkan, mengorganisir, menganalisis, dan memvisualisasikan data telah menjadi keterampilan fundamental yang diperlukan di hampir semua bidang profesi.</p>
                `,
                visual: `<!-- visualisasi interaktif dashboard, EDA dan storytelling dapat ditambahkan di sini -->`
            }
        ]
    },
    {
        id: "konsep-peluang-dasar",
        title: "KONSEP PELUANG DASAR",
        subtitle: "Memahami Ketidakpastian dan Kemungkinan dalam Matematika",
        chapters: [
            {
            title: "BAB I: PENGANTAR TEORI PELUANG",
            readingTime: "30 menit baca",
            content: `
                Definisi dan Konsep Dasar
                Peluang adalah ukuran numerik yang menyatakan kemungkinan terjadinya suatu kejadian. Secara matematis, peluang adalah fungsi yang memetakan kejadian-kejadian dalam ruang sampel ke interval [0,1], dimana 0 menunjukkan kejadian yang mustahil terjadi dan 1 menunjukkan kejadian yang pasti terjadi.

                Konsep Fundamental Peluang:
                1. Ketidakpastian (Uncertainty)
                • Kondisi dimana hasil suatu eksperimen tidak dapat diprediksi dengan pasti
                • Dasar dari semua konsep probabilistik
                • Membedakan antara deterministic dan stochastic processes
                2. Randomness (Keacakan)
                • Sifat dari proses yang hasilnya tidak dapat diprediksi
                • Tidak berarti tanpa pola, tetapi pola yang kompleks
                • Dapat dimodelkan menggunakan teori peluang
                3. Likelihood (Kemungkinan)
                • Derajat kepercayaan terhadap terjadinya suatu kejadian
                • Dapat dikuantifikasi menggunakan skala 0 hingga 1
                • Basis untuk pengambilan keputusan dalam ketidakpastian

                Karakteristik Eksperimen Acak:
                1. Reproducible: Dapat diulang dalam kondisi yang sama
                2. Multiple Outcomes: Memiliki lebih dari satu hasil yang mungkin
                3. Unpredictable: Hasil individual tidak dapat diprediksi
                4. Pattern in Long Run: Menunjukkan pola dalam jangka panjang

                Contoh Eksperimen Acak:
                • Melempar koin
                • Mengocok kartu
                • Mengukur tinggi badan siswa yang dipilih acak
                • Menghitung jumlah panggilan telepon per jam

                Sejarah Perkembangan Teori Peluang

                Era Kuno dan Abad Pertengahan
                Peradaban Kuno (3000 SM - 500 M)
                • Mesopotamia: Penggunaan dadu dalam permainan dan ramalan
                • Mesir: Permainan Senet dengan elemen probabilistik
                • Yunani: Aristoteles membahas konsep kemungkinan dalam logika
                • Roma: Permainan judi dengan dadu dan koin

                Abad Pertengahan (500-1400 M)
                • Dunia Islam: Al-Kindi menganalisis kombinatorik
                • Eropa: Permainan judi berkembang di kalangan bangsawan
                • Fibonacci: "Liber Abaci" membahas masalah kombinatorial
                • Cardano: Analisis awal permainan dadu

                Era Renaissance dan Kelahiran Teori Modern

                Abad 16-17: Fondasi Matematika
                • Gerolamo Cardano (1501-1576): "Liber de Ludo Aleae"
                • Analisis sistematis pertama tentang permainan dadu
                • Konsep equiprobability
                • Perhitungan peluang dalam permainan kartu

                Korespondensi Pascal-Fermat (1654) Titik balik dalam sejarah teori peluang:
                • Blaise Pascal (1623-1662): Segitiga Pascal dan kombinatorik
                • Pierre de Fermat (1601-1665): Metode counting dan permutasi
                • Problem of Points: Pembagian taruhan yang adil
                • Expectation Value: Konsep nilai harapan

                Abad 17-18: Pengembangan Teori
                Christiaan Huygens (1629-1695)
                • "De Ratiociniis in Ludo Aleae" (1657)
                • Formalisasi konsep expectation
                • Teorema fundamental tentang permainan yang adil

                Jacob Bernoulli (1654-1705)
                • "Ars Conjectandi" (1713)
                • Law of Large Numbers
                • Distribusi Bernoulli dan Binomial
                • Konsep konvergensi probabilitas

                Abraham de Moivre (1667-1754)
                • "The Doctrine of Chances" (1718)
                • Normal approximation to binomial
                • Stirling's formula
                • Central Limit Theorem (bentuk awal)

                Abad 18-19: Ekspansi Aplikasi
                Pierre-Simon Laplace (1749-1827)
                • "Théorie Analytique des Probabilités" (1812)
                • Definisi klasik peluang
                • Laplace transform
                • Determinisme dan probabilitas

                Carl Friedrich Gauss (1777-1855)
                • Distribusi normal (Gaussian)
                • Method of least squares
                • Error analysis
                • Aplikasi dalam astronomi

                Siméon Denis Poisson (1781-1840)
                • Distribusi Poisson
                • Law of Large Numbers (generalisasi)
                • Aplikasi dalam hukum dan kedokteran

                Abad 20: Revolusi Modern
                Andrey Kolmogorov (1903-1987)
                • "Foundations of the Theory of Probability" (1933)
                • Aksiomatisasi teori peluang
                • Measure theory approach
                • Stochastic processes

                Perkembangan Modern:
                • Martingale Theory: J.L. Doob
                • Information Theory: Claude Shannon
                • Game Theory: John von Neumann
                • Computational Probability: Monte Carlo methods

                Pentingnya Peluang dalam Kehidupan

                Aplikasi dalam Sains dan Teknologi:
                1. Fisika Kuantum
                • Prinsip ketidakpastian Heisenberg
                • Wave function dan probabilitas
                • Quantum entanglement

                2. Biologi dan Genetika
                • Hukum Mendel dan pewarisan sifat
                • Evolusi dan seleksi alam
                • Epidemiologi dan penyebaran penyakit

                3. Komputer dan AI
                • Machine learning algorithms
                • Bayesian networks
                • Probabilistic programming

                Aplikasi dalam Kehidupan Sehari-hari:
                1. Ekonomi dan Keuangan
                • Analisis risiko investasi
                • Asuransi dan aktuaria
                • Forecasting ekonomi

                2. Kedokteran
                • Diagnosis dan screening
                • Clinical trials
                • Epidemiologi

                3. Olahraga dan Permainan
                • Strategi permainan
                • Betting odds
                • Performance analysis

                Terminologi dan Notasi Dasar

                Terminologi Fundamental:
                1. Eksperimen (Experiment): Proses yang menghasilkan outcome
                2. Outcome: Hasil individual dari eksperimen
                3. Sample Space (S): Himpunan semua outcome yang mungkin
                4. Event (Kejadian): Subset dari sample space
                5. Probability (P): Fungsi yang mengukur kemungkinan kejadian

                Notasi Matematika:
                • S atau Ω: Sample space
                • A, B, C: Events (kejadian)
                • P(A): Probability of event A
                • A' atau A^c: Complement of A
                • A ∪ B: Union of A and B
                • A ∩ B: Intersection of A and B
                • ∅: Empty set (impossible event)

                Contoh Aplikasi Notasi: Eksperimen: Melempar dadu
                • S = {1, 2, 3, 4, 5, 6}
                • A = "bilangan genap" = {2, 4, 6}
                • B = "bilangan prima" = {2, 3, 5}
                • P(A) = 3/6 = 1/2
                • A ∩ B = {2}
                • A ∪ B = {2, 3, 4, 5, 6}
                ________________________________________
            `,
            visual: `<!-- visualisasi segitiga Pascal, eksperimen acak, atau perkembangan sejarah dapat ditambahkan di sini -->`
            },
            {
                title: "BAB II: RUANG SAMPEL DAN KEJADIAN",
                readingTime: "28 menit baca",
                content: `
                    Eksperimen dan Ruang Sampel

                    Definisi Ruang Sampel
                    Ruang sampel adalah himpunan semua hasil yang mungkin dari suatu eksperimen acak. Ruang sampel dilambangkan dengan S atau Ω.

                    Karakteristik Ruang Sampel:
                    1. Exhaustive: Mencakup semua kemungkinan hasil
                    2. Mutually Exclusive: Setiap outcome berbeda dan tidak overlap
                    3. Well-defined: Setiap outcome dapat diidentifikasi dengan jelas

                    Jenis Ruang Sampel:
                    1. Ruang Sampel Diskrit Terbatas
                    Memiliki jumlah outcome yang terbatas dan dapat dihitung.
                    Contoh:
                    • Melempar koin: S = {H, T}
                    • Melempar dadu: S = {1, 2, 3, 4, 5, 6}
                    • Memilih kartu: S = {♠A, ♠2, ..., ♠K, ♥A, ..., ♦K, ♣A, ..., ♣K}

                    2. Ruang Sampel Diskrit Tak Terbatas
                    Memiliki jumlah outcome yang dapat dihitung tetapi tak terbatas.
                    Contoh:
                    • Melempar koin sampai muncul H: S = {H, TH, TTH, TTTH, ...}
                    • Menghitung panggilan telepon per hari: S = {0, 1, 2, 3, ...}

                    3. Ruang Sampel Kontinu
                    Memiliki outcome yang tidak dapat dihitung (uncountable).
                    Contoh:
                    • Mengukur tinggi badan: S = [0, ∞)
                    • Waktu tunggu bus: S = [0, ∞)
                    • Koordinat titik dalam lingkaran: S = {(x,y): x² + y² ≤ 1}

                    Jenis-jenis Kejadian
                    1. Kejadian Sederhana (Simple Event)
                    Kejadian yang terdiri dari satu outcome saja.
                    Contoh:
                    • A = "muncul angka 3" = {3}
                    • B = "muncul King of Spades" = {♠K}

                    2. Kejadian Majemuk (Compound Event)
                    Kejadian yang terdiri dari lebih dari satu outcome.
                    Contoh:
                    • C = "muncul bilangan genap" = {2, 4, 6}
                    • D = "muncul kartu merah" = {♥A, ♥2, ..., ♦K}

                    3. Kejadian Pasti (Certain Event)
                    Kejadian yang selalu terjadi, sama dengan ruang sampel.
                    Contoh:
                    • E = "muncul bilangan 1-6" = S = {1, 2, 3, 4, 5, 6}
                    • P(E) = 1

                    4. Kejadian Mustahil (Impossible Event)
                    Kejadian yang tidak pernah terjadi, diwakili oleh himpunan kosong.
                    Contoh:
                    • F = "muncul angka 7 pada dadu" = ∅
                    • P(F) = 0

                    5. Kejadian Saling Lepas (Mutually Exclusive)
                    Dua kejadian yang tidak dapat terjadi bersamaan.
                    Contoh:
                    • A = "muncul bilangan ganjil" = {1, 3, 5}
                    • B = "muncul bilangan genap" = {2, 4, 6}
                    • A ∩ B = ∅

                    6. Kejadian Saling Bebas (Independent)
                    Dua kejadian dimana terjadinya satu kejadian tidak mempengaruhi peluang kejadian lainnya.
                    Contoh:
                    • Hasil lempar koin pertama dan kedua
                    • Memilih kartu dengan pengembalian

                    Operasi pada Kejadian
                    1. Komplemen (Complement)
                    Komplemen dari kejadian A adalah kejadian yang berisi semua outcome yang tidak ada dalam A.
                    Notasi: A' atau A^c
                    Definisi: A' = {s ∈ S : s ∉ A}
                    Contoh: Jika A = {2, 4, 6}, maka A' = {1, 3, 5}
                    Sifat Komplemen:
                    • (A')' = A
                    • A ∪ A' = S
                    • A ∩ A' = ∅
                    • P(A') = 1 - P(A)

                    2. Gabungan (Union)
                    Gabungan dari kejadian A dan B adalah kejadian yang berisi semua outcome yang ada di A atau B atau keduanya.
                    Notasi: A ∪ B
                    Definisi: A ∪ B = {s ∈ S : s ∈ A atau s ∈ B}
                    Contoh: A = {1, 3, 5}, B = {2, 3, 4} A ∪ B = {1, 2, 3, 4, 5}

                    3. Irisan (Intersection)
                    Irisan dari kejadian A dan B adalah kejadian yang berisi outcome yang ada di A dan B.
                    Notasi: A ∩ B
                    Definisi: A ∩ B = {s ∈ S : s ∈ A dan s ∈ B}
                    Contoh: A = {1, 3, 5}, B = {2, 3, 4} A ∩ B = {3}

                    4. Selisih (Difference)
                    Selisih A dan B adalah kejadian yang berisi outcome yang ada di A tetapi tidak di B.
                    Notasi: A - B atau A \\ B
                    Definisi: A - B = {s ∈ S : s ∈ A dan s ∉ B}
                    Contoh: A = {1, 3, 5}, B = {2, 3, 4} A - B = {1, 5}

                    Diagram Venn dalam Peluang
                    Diagram Venn adalah alat visual yang digunakan untuk menggambarkan hubungan antara kejadian-kejadian dalam ruang sampel. Diagram ini membantu dalam memahami gabungan, irisan, dan komplemen dari kejadian.

                    Contoh Diagram Venn:
                    • Dua lingkaran yang saling tumpang tindih mewakili dua kejadian A dan B.
                    • Area tumpang tindih menunjukkan A ∩ B.
                    • Area di luar lingkaran A menunjukkan A'.
                    • Area di luar lingkaran B menunjukkan B'.

                    Penggunaan Diagram Venn:
                    • Memvisualisasikan hubungan antara kejadian
                    • Memudahkan perhitungan peluang gabungan dan irisan
                    • Membantu dalam memahami konsep kompleks dalam teori peluang
                    ________________________________________
                `,
                visual: `<!-- Diagram Venn interaktif, ilustrasi ruang sampel diskrit dan kontinu dapat ditambahkan di sini -->`
            },
            {
                title: "BAB III: DEFINISI DAN SIFAT PELUANG",
                readingTime: "15 menit baca",
                content: `
                    Definisi Klasik Peluang
                    Definisi klasik peluang menyatakan bahwa peluang suatu kejadian A dapat dihitung dengan membagi jumlah outcome yang menguntungkan dengan jumlah total outcome dalam ruang sampel.
                    Rumus:
                    P(A) = Jumlah outcome yang menguntungkan / Jumlah total outcome
                    Contoh:
                    • Melempar dadu: P(muncul angka 4) = 1/6
                    • Memilih kartu As dari dek: P(muncul As) = 4/52 = 1/13

                    Definisi Frekuensi Relatif
                    Definisi frekuensi relatif menyatakan bahwa peluang suatu kejadian A dapat dihitung dengan membagi jumlah kejadian A yang terjadi dengan jumlah percobaan yang dilakukan.
                    Rumus:
                    P(A) = Frekuensi A / Total percobaan
                    Contoh: Jika dalam 100 kali lempar dadu, angka 4 muncul 20 kali, maka:
                    P(muncul angka 4) = 20/100 = 0.2

                    Definisi Aksiomatik
                    Definisi aksiomatik adalah pendekatan formal untuk mendefinisikan peluang berdasarkan aksioma-aksioma yang harus dipatuhi.

                    Aksioma Kolmogorov:
                    1. P(A) ≥ 0 untuk setiap kejadian A.
                    2. P(S) = 1, dimana S adalah ruang sampel.
                    3. Jika A1, A2, A3, ... adalah kejadian saling lepas, maka:
                    P(A1 ∪ A2 ∪ A3 ∪ ...) = P(A1) + P(A2) + P(A3) + ...

                    Sifat-sifat Dasar Peluang
                    1. Non-negativitas: P(A) ≥ 0
                    2. Normalisasi: P(S) = 1
                    3. Additivity: Untuk kejadian saling lepas, P(A ∪ B) = P(A) + P(B)
                    4. Komplemen: P(A') = 1 - P(A)
                `,
                visual: `<!-- Visualisasi perbandingan definisi klasik, frekuensi relatif, dan aksiomatik dapat ditambahkan di sini -->`
            },
            {
                title: "BAB IV: ATURAN PELUANG",
                readingTime: "10 menit baca",
                content: `
                    Aturan Penjumlahan
                    Aturan penjumlahan digunakan untuk menghitung peluang gabungan dari dua kejadian A dan B.
                    1. Kejadian Saling Lepas: Jika A dan B saling lepas, maka:
                    P(A ∪ B) = P(A) + P(B)
                    2. Kejadian Tidak Saling Lepas: Jika A dan B tidak saling lepas, maka:
                    P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

                    Aturan Perkalian
                    Aturan perkalian digunakan untuk menghitung peluang terjadinya dua kejadian A dan B secara bersamaan.
                    1. Kejadian Saling Bebas: Jika A dan B saling bebas, maka:
                    P(A ∩ B) = P(A) × P(B)
                    2. Kejadian Tidak Saling Bebas: Jika A dan B tidak saling bebas, maka:
                    P(A ∩ B) = P(A) × P(B | A)
                    dimana P(B | A) adalah peluang B terjadi dengan syarat A telah terjadi.

                    Peluang Bersyarat
                    Peluang bersyarat adalah peluang terjadinya kejadian B dengan syarat bahwa kejadian A telah terjadi.
                    Rumus:
                    P(B | A) = P(A ∩ B) / P(A)

                    Teorema Bayes
                    Teorema Bayes digunakan untuk menghitung peluang bersyarat dengan membalik kondisi.
                    Rumus:
                    P(A | B) = [P(B | A) × P(A)] / P(B)
                `,
                visual: `<!-- Visualisasi diagram Venn untuk aturan penjumlahan dan perkalian serta pohon peluang untuk Teorema Bayes dapat ditambahkan di sini -->`
            },
            {
                title: "BAB V: DISTRIBUSI PELUANG DISKRIT",
                readingTime: "8 menit baca",
                content: `
                    Variabel Acak Diskrit
                    Variabel acak diskrit adalah variabel yang dapat mengambil nilai-nilai tertentu dengan probabilitas tertentu.
                    Contoh:
                    •	Jumlah dadu yang muncul angka genap saat melempar dua dadu.
                    •	Jumlah pelanggan yang datang ke toko dalam satu jam.

                    Distribusi Binomial
                    Distribusi binomial digunakan untuk menghitung peluang terjadinya k kejadian sukses dalam n percobaan.
                    Rumus:
                    P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
                    dimana C(n, k) adalah kombinasi dari n diambil k.
                    Contoh: Peluang mendapatkan 3 angka 6 saat melempar dadu 10 kali.

                    Distribusi Poisson
                    Distribusi Poisson digunakan untuk menghitung peluang terjadinya k kejadian dalam interval waktu atau ruang tertentu.
                    Rumus:
                    P(X = k) = (λ^k * e^(-λ)) / k!
                    dimana λ adalah rata-rata kejadian dalam interval.
                    Contoh: Peluang menerima 5 panggilan telepon dalam satu jam jika rata-rata 3 panggilan per jam.

                    Distribusi Geometrik
                    Distribusi geometrik digunakan untuk menghitung peluang terjadinya kejadian pertama kali pada percobaan ke-k.
                    Rumus:
                    P(X = k) = (1-p)^(k-1) * p
                    dimana p adalah peluang sukses.
                    Contoh: Peluang mendapatkan angka 6 pertama kali saat melempar dadu.
                    ________________________________________
                `,
                visual: `<!-- Visualisasi grafik batang distribusi binomial, Poisson, dan geometrik dapat ditambahkan di sini -->`
            },
            {
                title: "BAB VI: APLIKASI DAN PEMECAHAN MASALAH",
                readingTime: "7 menit baca",
                content: `
                    Aplikasi Peluang dalam Kehidupan Sehari-hari
                    1.	Keputusan Bisnis
                    •	Menghitung risiko investasi
                    •	Memperkirakan permintaan produk
                    •	Analisis pasar
                    2.	Kedokteran
                    •	Menentukan efektivitas pengobatan
                    •	Menghitung risiko penyakit
                    •	Merancang uji klinis
                    3.	Olahraga
                    •	Menganalisis performa atlet
                    •	Menghitung peluang kemenangan tim
                    •	Strategi taruhan

                    Contoh Masalah Peluang
                    1.	Masalah Dadu
                    •	Jika dua dadu dilempar, berapa peluang mendapatkan total 7?
                    •	Penyelesaian: Hitung semua kombinasi yang menghasilkan total 7.
                    2.	Masalah Kartu
                    •	Jika satu kartu diambil dari dek 52 kartu, berapa peluang mendapatkan kartu hati?
                    •	Penyelesaian: P(A) = 13/52 = 1/4.
                    3.	Masalah Epidemiologi
                    •	Dalam populasi 1000 orang, 200 terinfeksi penyakit. Jika satu orang dipilih secara acak, berapa peluang orang tersebut terinfeksi?
                    •	Penyelesaian: P(A) = 200/1000 = 0.2.
                    ________________________________________
                    PENUTUP
                    Peluang adalah konsep fundamental dalam matematika yang memiliki aplikasi luas dalam berbagai bidang. Memahami teori peluang membantu kita dalam mengambil keputusan yang lebih baik dalam situasi ketidakpastian. Dengan mempelajari dasar-dasar peluang, kita dapat menganalisis data, memprediksi hasil, dan membuat keputusan yang lebih informasional. Peluang bukan hanya sekadar angka, tetapi juga alat untuk memahami dunia di sekitar kita.
                `,
                visual: `<!-- Visualisasi infografik contoh aplikasi peluang dalam bisnis, kedokteran, dan olahraga dapat ditambahkan di sini -->`
            }
        ]
    },
    {
        id: "pemecahan-masalah",
        title: "PEMECAHAN MASALAH",
        subtitle: "Strategi dan Pendekatan dalam Menyelesaikan Masalah Matematika",
        chapters: [
            {
                title: "BAB I: PENGANTAR PEMECAHAN MASALAH",
                readingTime: "22 menit baca",
                content: `
                    <b>Definisi dan Konsep Dasar</b><br>
                    <i>Pemecahan Masalah</i> adalah proses yang melibatkan identifikasi, analisis, dan penyelesaian masalah dengan menggunakan berbagai strategi dan pendekatan. Dalam konteks matematika, pemecahan masalah mencakup penerapan konsep, rumus, dan teknik untuk menemukan solusi dari masalah yang diberikan.
                    <br><br>
                    <b>Komponen Pemecahan Masalah:</b><br>
                    1. <b>Identifikasi Masalah</b>: Menentukan apa yang menjadi masalah dan mengapa itu penting untuk diselesaikan.<br>
                    2. <b>Analisis Masalah</b>: Memahami komponen dan faktor yang terlibat dalam masalah.<br>
                    3. <b>Pengembangan Strategi</b>: Merancang rencana atau pendekatan untuk menyelesaikan masalah.<br>
                    4. <b>Implementasi</b>: Melaksanakan strategi yang telah direncanakan.<br>
                    5. <b>Evaluasi</b>: Menilai hasil dan efektivitas solusi yang diterapkan.
                    <br><br>
                    <b>Pentingnya Pemecahan Masalah</b><br>
                    Pemecahan masalah adalah keterampilan penting yang diperlukan dalam berbagai aspek kehidupan, baik dalam konteks akademis, profesional, maupun pribadi. Kemampuan ini membantu individu untuk:
                    <ul>
                    <li>Menghadapi tantangan dan situasi yang kompleks.</li>
                    <li>Mengembangkan keterampilan berpikir kritis dan analitis.</li>
                    <li>Meningkatkan kreativitas dalam menemukan solusi.</li>
                    <li>Mempersiapkan diri untuk situasi yang tidak terduga.</li>
                    </ul>
                    <br>
                    <b>Jenis-jenis Masalah</b><br>
                    Masalah dapat diklasifikasikan ke dalam beberapa kategori, antara lain: <br>
                    1. <b>Masalah Tertutup</b>: Masalah yang memiliki satu solusi yang jelas dan dapat dihitung.<br>
                    &emsp; • Contoh: "Berapa hasil dari 5 + 3?"<br>
                    2. <b>Masalah Terbuka</b>: Masalah yang dapat memiliki lebih dari satu solusi atau pendekatan.<br>
                    &emsp; • Contoh: "Bagaimana cara mengoptimalkan penggunaan sumber daya dalam proyek?"<br>
                    3. <b>Masalah Rutin</b>: Masalah yang sering dihadapi dan dapat diselesaikan dengan metode yang telah dikenal.<br>
                    &emsp; • Contoh: "Hitung luas segitiga dengan alas 5 cm dan tinggi 10 cm."<br>
                    4. <b>Masalah Non-Rutin</b>: Masalah yang tidak biasa dan memerlukan pendekatan kreatif untuk menyelesaikannya.<br>
                    &emsp; • Contoh: "Rancang sebuah sistem untuk mengurangi limbah di perusahaan."
                    <br><br>
                    <b>Proses Pemecahan Masalah</b><br>
                    Proses pemecahan masalah dapat diuraikan dalam beberapa langkah: <br>
                    1. <b>Mengidentifikasi Masalah</b>: Menentukan masalah yang perlu diselesaikan.<br>
                    2. <b>Mengumpulkan Informasi</b>: Mengumpulkan data dan informasi yang relevan untuk memahami masalah.<br>
                    3. <b>Menganalisis Masalah</b>: Menganalisis informasi yang telah dikumpulkan untuk menemukan akar penyebab masalah.<br>
                    4. <b>Mengembangkan Solusi</b>: Merancang beberapa alternatif solusi untuk masalah yang dihadapi.<br>
                    5. <b>Menerapkan Solusi</b>: Melaksanakan solusi yang dipilih dan memantau hasilnya.<br>
                    6. <b>Menilai Hasil</b>: Mengevaluasi efektivitas solusi dan melakukan penyesuaian jika diperlukan.<br>
                `,
                visual: `<!-- visualisasi siklus pemecahan masalah dalam bentuk diagram alur -->`
                },
                {
                    title: "BAB II: STRATEGI PEMECAHAN MASALAH",
                    readingTime: "18 menit baca",
                    content: `
                        <b>Strategi Umum</b><br>
                        Berbagai strategi dapat digunakan dalam pemecahan masalah, antara lain:
                        1. <b>Analisis Langkah-demi-Langkah</b>: Memecah masalah menjadi langkah-langkah kecil yang lebih mudah dikelola.<br>
                        2. <b>Pencarian Pola</b>: Mencari pola atau hubungan dalam data yang dapat membantu menemukan solusi.<br>
                        3. <b>Brainstorming</b>: Menghasilkan ide-ide sebanyak mungkin tanpa mengkritik, untuk menemukan solusi kreatif.<br>
                        4. <b>Modeling</b>: Menggunakan model matematis atau diagram untuk memahami masalah dan mencari solusi.<br>

                        <b>Strategi Khusus</b><br>
                        1. <b>Strategi Visualisasi</b>: Menggunakan diagram, grafik, atau gambar untuk membantu memahami masalah.<br>
                        2. <b>Strategi Pengujian</b>: Mencoba beberapa solusi untuk melihat mana yang paling efektif.<br>
                        3. <b>Strategi Pembagian Masalah</b>: Memecah masalah besar menjadi sub-masalah yang lebih kecil dan lebih mudah dipecahkan.<br>

                        <b>Penggunaan Alat Bantu</b><br>
                        Alat bantu seperti kalkulator, perangkat lunak statistik, dan aplikasi pemecahan masalah dapat membantu dalam proses pemecahan masalah. Penggunaan alat ini dapat meningkatkan efisiensi dan akurasi dalam menyelesaikan masalah.

                        <b>Keterampilan Berpikir Kritis</b><br>
                        Keterampilan berpikir kritis sangat penting dalam pemecahan masalah. Ini mencakup kemampuan untuk:
                        <ul>
                        <li>Menganalisis informasi secara objektif.</li>
                        <li>Mengidentifikasi asumsi dan bias.</li>
                        <li>Mengembangkan argumen yang logis.</li>
                        <li>Mengambil keputusan berdasarkan bukti.</li>
                        </ul>
                    `,
                    visual: `<!-- visualisasi tabel perbandingan strategi umum vs strategi khusus -->`
                },
            {
                title: "BAB III: PEMECAHAN MASALAH MATEMATIKA",
                readingTime: "15 menit baca",
                content: `
                    Masalah Aritmetika
                    Masalah aritmetika melibatkan operasi dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian. Contoh masalah aritmetika:
                    Contoh 1: Jika Ali memiliki 5 apel dan membeli 3 apel lagi, berapa banyak apel yang dimiliki Ali sekarang?
                    • Penyelesaian: 5 + 3 = 8 apel.
                    Contoh 2: Siti memiliki 12 kelereng dan memberikan 4 kelereng kepada temannya. Berapa banyak kelereng yang tersisa?
                    • Penyelesaian: 12 - 4 = 8 kelereng.

                    Masalah Geometri
                    Masalah geometri melibatkan pengukuran dan perhitungan bentuk dan ruang. Contoh masalah geometri:
                    Contoh 1: Hitung luas segitiga dengan alas 10 cm dan tinggi 5 cm.
                    • Penyelesaian: Luas = 1/2 × alas × tinggi = 1/2 × 10 × 5 = 25 cm².
                    Contoh 2: Hitung keliling persegi dengan sisi 4 cm.
                    • Penyelesaian: Keliling = 4 × sisi = 4 × 4 = 16 cm.

                    Masalah Aljabar
                    Masalah aljabar melibatkan penggunaan variabel dan persamaan. Contoh masalah aljabar:
                    Contoh 1: Jika 2x + 3 = 11, berapa nilai x?
                    • Penyelesaian: 2x = 11 - 3 → 2x = 8 → x = 4.
                    Contoh 2: Jika y = 3x + 2, berapa nilai y jika x = 5?
                    • Penyelesaian: y = 3(5) + 2 = 15 + 2 = 17.

                    Masalah Statistik
                    Masalah statistik melibatkan pengumpulan, analisis, dan interpretasi data. Contoh masalah statistik:
                    Contoh 1: Hitung rata-rata dari data berikut: 4, 8, 6, 5, 3.
                    • Penyelesaian: Rata-rata = (4 + 8 + 6 + 5 + 3) / 5 = 26 / 5 = 5.2.
                    Contoh 2: Hitung median dari data berikut: 3, 1, 4, 2, 5.
                    • Penyelesaian: Urutkan data: 1, 2, 3, 4, 5. Median = 3.
                `,
                visual: `<!-- visualisasi interaktif soal dan grafik bentuk geometri -->`
            },
            {
                title: "BAB IV: PEMECAHAN MASALAH DALAM KEHIDUPAN SEHARI-HARI",
                readingTime: "17 menit baca",
                content: `
                    Aplikasi dalam Bisnis
                    Dalam dunia bisnis, pemecahan masalah sangat penting untuk pengambilan keputusan yang efektif. Contoh aplikasi pemecahan masalah dalam bisnis:
                    Contoh 1: Mengidentifikasi penyebab penurunan penjualan.
                    • Langkah-langkah:
                    1. Kumpulkan data penjualan.
                    2. Analisis tren dan pola.
                    3. Identifikasi faktor penyebab.
                    4. Rancang strategi perbaikan.
                    Contoh 2: Mengoptimalkan penggunaan sumber daya.
                    • Langkah-langkah:
                    1. Evaluasi penggunaan sumber daya saat ini.
                    2. Identifikasi area yang tidak efisien.
                    3. Rancang rencana untuk meningkatkan efisiensi.
                    4. Implementasikan dan evaluasi hasil.

                    Aplikasi dalam Kesehatan
                    Dalam bidang kesehatan, pemecahan masalah digunakan untuk diagnosis dan perawatan pasien. Contoh aplikasi pemecahan masalah dalam kesehatan:
                    Contoh 1: Menentukan diagnosis penyakit berdasarkan gejala.
                    • Langkah-langkah:
                    1. Kumpulkan informasi gejala pasien.
                    2. Analisis data dan bandingkan dengan database penyakit.
                    3. Rekomendasikan tes tambahan jika diperlukan.
                    4. Tentukan diagnosis dan rencana perawatan.
                    Contoh 2: Meningkatkan kualitas layanan kesehatan.
                    • Langkah-langkah:
                    1. Kumpulkan umpan balik dari pasien.
                    2. Identifikasi area yang perlu perbaikan.
                    3. Rancang program pelatihan untuk staf.
                    4. Evaluasi dampak perubahan.

                    Aplikasi dalam Pendidikan
                    Dalam pendidikan, pemecahan masalah digunakan untuk meningkatkan proses belajar mengajar. Contoh aplikasi pemecahan masalah dalam pendidikan:
                    Contoh 1: Meningkatkan hasil belajar siswa.
                    • Langkah-langkah:
                    1. Kumpulkan data hasil ujian siswa.
                    2. Analisis faktor yang mempengaruhi hasil.
                    3. Rancang program intervensi.
                    4. Evaluasi efektivitas program.
                    Contoh 2: Mengatasi masalah disiplin di kelas.
                    • Langkah-langkah:
                    1. Identifikasi perilaku yang tidak diinginkan.
                    2. Kumpulkan umpan balik dari siswa dan orang tua.
                    3. Rancang kebijakan disiplin yang jelas.
                    4. Implementasikan dan evaluasi hasil.

                    Aplikasi dalam Ilmu Sosial
                    Dalam ilmu sosial, pemecahan masalah digunakan untuk memahami fenomena sosial dan perilaku manusia. Contoh aplikasi pemecahan masalah dalam ilmu sosial:
                    Contoh 1: Menganalisis faktor-faktor yang mempengaruhi perilaku pemilih.
                    • Langkah-langkah:
                    1. Kumpulkan data survei pemilih.
                    2. Analisis hubungan antara variabel.
                    3. Rancang strategi kampanye berdasarkan temuan.
                    4. Evaluasi dampak kampanye.
                    Contoh 2: Mengatasi masalah kemiskinan di masyarakat.
                    • Langkah-langkah:
                    1. Kumpulkan data demografis dan ekonomi.
                    2. Identifikasi penyebab kemiskinan.
                    3. Rancang program intervensi sosial.
                    4. Evaluasi efektivitas program.
                `,
                visual: `<!-- visualisasi skema langkah pemecahan masalah per bidang -->`
            },
            {
                title: "BAB V: LATIHAN DAN STUDI KASUS",
                readingTime: "12 menit baca",
                content: `
                    Contoh Soal dan Penyelesaian
                    Soal 1: Sebuah perusahaan memiliki 100 karyawan. Jika 60 karyawan adalah laki-laki dan 40 karyawan adalah perempuan, berapa peluang memilih seorang karyawan perempuan?
                    Penyelesaian:
                    P(perempuan) = Jumlah perempuan / Total karyawan
                    P(perempuan) = 40 / 100 = 0.4

                    Soal 2: Dalam sebuah kelas terdapat 30 siswa, 18 di antaranya lulus ujian matematika. Berapa peluang memilih seorang siswa yang lulus ujian matematika?
                    Penyelesaian:
                    P(lulus) = Jumlah siswa lulus / Total siswa
                    P(lulus) = 18 / 30 = 0.6

                    Studi Kasus Pemecahan Masalah
                    Studi Kasus 1: Sebuah restoran mengalami penurunan jumlah pelanggan. Manajer restoran melakukan analisis untuk menemukan penyebabnya.
                    Langkah-langkah:
                    1. Kumpulkan data penjualan selama 6 bulan terakhir.
                    2. Analisis tren penjualan berdasarkan waktu dan hari.
                    3. Kumpulkan umpan balik dari pelanggan tentang layanan dan menu.
                    4. Identifikasi faktor penyebab penurunan.
                    5. Rancang strategi pemasaran untuk menarik pelanggan kembali.

                    Studi Kasus 2: Sebuah sekolah ingin meningkatkan hasil ujian siswa. Kepala sekolah melakukan analisis untuk menemukan cara yang efektif.
                    Langkah-langkah:
                    1. Kumpulkan data hasil ujian dari tahun sebelumnya.
                    2. Analisis faktor yang mempengaruhi hasil, seperti kehadiran dan partisipasi.
                    3. Rancang program bimbingan belajar untuk siswa yang berisiko.
                    4. Implementasikan program dan evaluasi hasilnya setelah ujian berikutnya.

                    Diskusi dan Refleksi
                    Setelah menyelesaikan latihan dan studi kasus, penting untuk mendiskusikan hasil dan refleksi dari proses pemecahan masalah. Pertanyaan yang dapat diajukan:
                    • Apa yang berhasil dan tidak berhasil dalam pendekatan yang digunakan?
                    • Apa yang dapat dipelajari dari pengalaman ini?
                    • Bagaimana cara menerapkan pembelajaran ini di masa depan?
                `,
                visual: `<!-- visualisasi alur studi kasus dan refleksi dapat ditempatkan di sini -->`
            },
            {
                title: "BAB VI: PENUTUP",
                readingTime: "5 menit baca",
                content: `
                    Pemecahan masalah adalah keterampilan yang sangat penting dalam kehidupan sehari-hari, baik dalam konteks akademis, profesional, maupun pribadi. Dengan memahami proses dan strategi pemecahan masalah, individu dapat menghadapi tantangan dengan lebih percaya diri dan efektif.

                    Kesimpulan:
                    • Pemecahan masalah melibatkan identifikasi, analisis, dan penyelesaian masalah dengan menggunakan berbagai strategi.
                    • Keterampilan ini dapat diterapkan dalam berbagai bidang, termasuk bisnis, kesehatan, pendidikan, dan ilmu sosial.
                    • Melalui latihan dan pengalaman, individu dapat meningkatkan kemampuan pemecahan masalah mereka.

                    Rekomendasi untuk Pembaca:
                    • Teruslah berlatih pemecahan masalah dengan berbagai jenis masalah.
                    • Gunakan pendekatan yang berbeda untuk menemukan solusi yang lebih baik.
                    • Diskusikan pengalaman pemecahan masalah dengan orang lain untuk mendapatkan perspektif baru.

                    Dengan keterampilan pemecahan masalah yang baik, individu dapat lebih siap menghadapi tantangan dan membuat keputusan yang lebih baik dalam kehidupan mereka.
                `,
                visual: `<!-- visualisasi penutup seperti ilustrasi proses berpikir atau refleksi dapat ditambahkan di sini -->`
            }
        ]
    }
];
