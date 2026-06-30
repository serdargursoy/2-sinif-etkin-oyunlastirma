// ==========================================
// 🔢 Matematik Soru Havuzu (MEB %100 Uyumlu)
// ==========================================

const MATH_QUESTIONS = {
  subject: 'math',
  subjectName: 'Matematik Adası',
  icon: '🔢',
  units: [
    {
      id: 'dogal-sayilar',
      name: 'Doğal Sayılar',
      icon: '🔢',
      questCode: 'MAT-01',
      semester: 1,
      description: 'Sayıları okuma, yazma ve basamak değerleri',
      introText: 'Hoş geldin! Sihirli ormanda yolumuzu bulmak için sayılara ihtiyacımız var. Benito ile birlikte sayıları okumayı keşfetmeye hazır mısın?',
      lessons: [
        { title: 'Sayıların Gücü 🌟', text: 'Günlük hayatta yıldızları saymak için sayılara ihtiyacımız var! Sayılar 0, 1, 2, 3 diye sonsuza kadar gider.' },
        { title: 'Onlar ve Birler 🏠', text: 'Örneğin <strong>45</strong> sayısında sağdaki 5 <span style="color:var(--color-primary)">Birler Basamağı</span>, soldaki 4 ise <span style="color:var(--color-secondary)">Onlar Basamağı</span>dır. 4 onluk ve 5 birlik demektir!' }
      ],
      questions: [
        { id: 'math-ds-001', type: 'multiple-choice', difficulty: 1, question: '45 sayısında 4 hangi basamaktadır?', options: ['Birler', 'Onlar', 'Yüzler', 'Binler'], correct: 'Onlar', hint: 'Soldaki rakam onlar basamağındadır.', points: 10 },
        { id: 'math-ds-002', type: 'fill-blank', difficulty: 1, question: '73 sayısının onlar basamağındaki rakam kaçtır?', correct: ['7', 'yedi'], hint: 'Soldaki rakamdır.', points: 15 },
        { id: 'math-ds-003', type: 'multiple-choice', difficulty: 1, question: 'Hangi sayı en büyüktür?', options: ['34', '43', '38', '41'], correct: '43', hint: 'Önce onlar basamağına bak.', points: 10 },
        { id: 'math-ds-004', type: 'fill-blank', difficulty: 1, question: '56 sayısının birler basamağındaki rakam kaçtır?', correct: ['6', 'altı'], hint: 'Sağdaki rakamdır.', points: 15 },
        { id: 'math-ds-005', type: 'match', difficulty: 2, question: 'Basamak değerlerini eşleştir!', pairs: [{left: '4 Onluk', right: '40'}, {left: '5 Onluk', right: '50'}, {left: '8 Birlik', right: '8'}, {left: '1 Onluk', right: '10'}], points: 20 },
        { id: 'math-ds-006', type: 'multiple-choice', difficulty: 2, question: '89 sayısında 8 rakamının basamak değeri kaçtır?', options: ['8', '80', '89', '9'], correct: '80', hint: '8 onlar basamağında: 8 × 10 = ?', points: 15 },
        { id: 'math-ds-007', type: 'true-false', difficulty: 1, question: '95 sayısı 100\'den büyüktür.', options: ['Doğru', 'Yanlış'], correct: 'Yanlış', hint: '95 ile 100\'ü karşılaştır.', points: 10 },
        { id: 'math-ds-008', type: 'multiple-choice', difficulty: 2, question: '10, 20, 30, ___, 50 Boşluğa hangi sayı gelir?', options: ['35', '40', '45', '25'], correct: '40', hint: 'Onar onar sayıyoruz.', points: 15 },
        { id: 'math-ds-009', type: 'multiple-choice', difficulty: 3, question: 'Onlar basamağı 7, birler basamağı 3 olan sayı hangisidir?', options: ['37', '73', '70', '30'], correct: '73', hint: 'Onlar basamağı soldaki rakamdır.', points: 20 },
        { id: 'math-ds-010', type: 'fill-blank', difficulty: 1, question: '30 sayısı kaç tane onluktan oluşur?', correct: ['3', 'üç'], hint: '10, 20, 30... Say bakalım.', points: 10 }
      ]
    },
    {
      id: 'toplama-cikarma',
      name: 'Toplama ve Çıkarma',
      icon: '➕',
      questCode: 'MAT-02',
      semester: 1,
      description: 'Eldeli toplama ve onluk bozmayı gerektiren çıkarma',
      introText: 'Ormandaki sihirli elmaları saymamız gerekiyor! Maceraya atıl!',
      lessons: [
        { title: 'Eldeli Toplama ➕', text: 'Birleri topladığında sonuç 10 veya daha büyükse, o onluğu elde olarak Onlar basamağına eklersin! 🍰+🍰=🎂' },
        { title: 'Onluk Bozma ➖', text: 'Eğer birler basamağından sayı çıkmıyorsa komşuya (onlar) gidip bir onluk borç alırız! 🏃‍♂️💨' }
      ],
      questions: [
        { id: 'math-tc-001', type: 'multiple-choice', difficulty: 1, question: '23 + 14 = ?', options: ['37', '36', '38', '35'], correct: '37', hint: 'Önce birleri topla: 3+4=7', points: 10 },
        { id: 'math-tc-002', type: 'fill-blank', difficulty: 1, question: '45 - 12 = ?', correct: ['33'], hint: 'Birleri çıkar: 5-2=3.', points: 15 },
        { id: 'math-tc-003', type: 'multiple-choice', difficulty: 2, question: '28 + 35 = ?', options: ['63', '53', '62', '64'], correct: '63', hint: 'Birler: 8+5=13 → 3 yaz 1 elde.', points: 15 },
        { id: 'math-tc-004', type: 'fill-blank', difficulty: 2, question: '52 - 27 = ?', correct: ['25'], hint: '2\'den 7 çıkmaz, onluk boz: 12-7=5', points: 15 },
        { id: 'math-tc-005', type: 'match', difficulty: 2, question: 'İşlemleri sonuçlarıyla eşleştir!', pairs: [{left: '10+15', right: '25'}, {left: '20-5', right: '15'}, {left: '8+7', right: '15'}, {left: '30-10', right: '20'}], points: 20 },
        { id: 'math-tc-006', type: 'multiple-choice', difficulty: 2, question: '47 + 36 = ?', options: ['83', '73', '82', '84'], correct: '83', hint: 'Birler: 7+6=13, 1 elde.', points: 15 },
        { id: 'math-tc-007', type: 'multiple-choice', difficulty: 1, question: 'Ali\'nin 15 elması var. Annesi 8 elma daha verdi. Toplam kaç elması olur?', options: ['23', '22', '24', '21'], correct: '23', hint: '15 + 8', points: 10 },
        { id: 'math-tc-008', type: 'fill-blank', difficulty: 2, question: '34 yolcunun olduğu otobüsten 12 kişi indi. Kaç yolcu kaldı?', correct: ['22'], hint: 'Çıkarma işlemi yap: 34 - 12', points: 15 },
        { id: 'math-tc-009', type: 'true-false', difficulty: 1, question: '25 + 15 = 40 eder.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Hesapla bakalım.', points: 10 },
        { id: 'math-tc-010', type: 'fill-blank', difficulty: 3, question: '56 + ??? = 83 Boşluğa ne gelmeli?', correct: ['27'], hint: '83\'ten 56 çıkar.', points: 20 }
      ]
    },
    {
      id: 'geometri',
      name: 'Geometri Dünyası',
      icon: '🔺',
      questCode: 'MAT-03',
      semester: 1,
      description: 'Kenarlar, köşeler ve geometrik şekiller!',
      introText: 'Şekillerin sihirli dünyasına hoş geldin! Kareler, üçgenler ve daireler... Bakalım hepsini tanıyabilecek misin?',
      lessons: [
        { title: 'Köşeler ve Kenarlar 📐', text: 'Üçgenin 3 köşesi ve 3 kenarı vardır. Karenin ise 4 köşesi ve hepsi birbirine eşit 4 kenarı bulunur!' },
        { title: 'Dairenin Sırrı 🔴', text: 'Daire etrafında dönebilir, çünkü onun kenarı ve köşesi Y-O-K-T-U-R! Dümdüz yuvarlaktır.' }
      ],
      questions: [
        { id: 'math-geo-001', type: 'multiple-choice', difficulty: 1, question: 'Hangi şeklin kenarı yoktur?', options: ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen'], correct: 'Daire', hint: 'Top gibi yuvarlak bir şekil.', points: 10 },
        { id: 'math-geo-002', type: 'fill-blank', difficulty: 1, question: 'Üçgenin kaç köşesi vardır?', correct: ['3', 'üç'], hint: 'Adı üstünde, ÜÇ-gen!', points: 15 },
        { id: 'math-geo-003', type: 'match', difficulty: 2, question: 'Şekilleri köşe sayılarıyla eşleştir!', pairs: [{left: 'Üçgen', right: '3 Köşe'}, {left: 'Kare', right: '4 Köşe'}, {left: 'Daire', right: '0 Köşe'}], points: 20 },
        { id: 'math-geo-004', type: 'multiple-choice', difficulty: 2, question: 'Tüm kenar uzunlukları birbirine eşit olan 4 kenarlı şekil hangisidir?', options: ['Dikdörtgen', 'Kare', 'Yamuk', 'Üçgen'], correct: 'Kare', hint: 'Kutu gibi düşün.', points: 10 },
        { id: 'math-geo-005', type: 'fill-blank', difficulty: 2, question: 'Dikdörtgenin ... adet köşesi vardır.', correct: ['4', 'dört'], hint: 'Kare ile aynı köşeye sahiptir.', points: 15 },
        { id: 'math-geo-006', type: 'true-false', difficulty: 1, question: 'Resimdeki şekil bir Üçgen prizmadır.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 },
        { id: 'math-geo-007', type: 'fill-blank', difficulty: 1, question: 'Dikdörtgenin kaç kenarı vardır?', correct: ['4', 'dört'], hint: 'Kare ile aynı kenar sayısına sahiptir.', points: 15 },
        { id: 'math-geo-008', type: 'multiple-choice', difficulty: 1, question: 'Hangi şekil kapı veya kitap gibi görünür?', options: ['Daire', 'Üçgen', 'Dikdörtgen', 'Kare'], correct: 'Dikdörtgen', hint: 'Uzun ve kısa kenarları vardır.', points: 10 },
        { id: 'math-geo-009', type: 'true-false', difficulty: 1, question: 'Karenin 4 kenarı birbirine eşittir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Kare özel bir dörtgendir.', points: 10 },
        { id: 'math-geo-010', type: 'multiple-choice', difficulty: 2, question: 'Bir ev çizerken çatı için hangi şekli kullanırız?', options: ['Daire', 'Kare', 'Üçgen', 'Dikdörtgen'], correct: 'Üçgen', hint: 'Çatı sivri uçlu bir şekilden oluşur.', points: 15 },
        { id: 'math-geo-011', type: 'fill-blank', difficulty: 1, question: 'Üçgenin kaç kenarı vardır?', correct: ['3', 'üç'], hint: 'Adı üstünde, ÜÇ-gen!', points: 15 },
        { id: 'math-geo-012', type: 'multiple-choice', difficulty: 2, question: 'Pizza dilimi hangi şekle benzer?', options: ['Kare', 'Daire', 'Üçgen', 'Dikdörtgen'], correct: 'Üçgen', hint: 'Sivri uçlu ve geniş tabanlıdır.', points: 10 },
        { id: 'math-geo-013', type: 'true-false', difficulty: 1, question: 'Bisiklet tekerleği daire şeklindedir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Tekerler yuvarlanabilmesi için yuvarlak olmalıdır.', points: 10 },
        { id: 'math-geo-014', type: 'multiple-choice', difficulty: 2, question: 'Hangi şeklin kenar uzunlukları birbirine EŞİT değildir?', options: ['Kare', 'Dikdörtgen', 'Eşkenar üçgen', 'Hiçbiri'], correct: 'Dikdörtgen', hint: 'Dikdörtgenda iki uzun, iki kısa kenar vardır.', points: 15 },
        { id: 'math-geo-015', type: 'match', difficulty: 2, question: 'Şekilleri günlük hayattaki karşılıklarıyla eşleştir!', pairs: [{left: 'Daire', right: 'Tekerlek'}, {left: 'Dikdörtgen', right: 'Kapı'}, {left: 'Kare', right: 'Kahve fincanı altlığı'}, {left: 'Üçgen', right: 'Trafik levhası (dur)'}], points: 20 },
        { id: 'math-geo-016', type: 'multiple-choice', difficulty: 3, question: 'Bir şeklin 4 köşesi ve karşılıklı kenarları eşit ama tüm kenarları eşit değilse bu şekil nedir?', options: ['Kare', 'Üçgen', 'Dikdörtgen', 'Daire'], correct: 'Dikdörtgen', hint: 'Uzun kısa karşılıklı kenarları eşit ama bitişik kenarlar farklı.', points: 20 }
      ]
    },
    {
      id: 'carpma-bolme',
      name: 'Çarpma ve Bölme',
      icon: '✖️',
      questCode: 'MAT-04',
      semester: 2,
      description: 'Hızlı toplama ve eşit paylaşım sanatı.',
      introText: 'Aynı sayıları tekrar tekrar toplamak yorucu değil mi? Çarpma işlemi ile bunu şipşak yapabiliriz!',
      lessons: [
        { title: 'Kestirme Yol: Çarpma 🚀', text: '3 tabak var, her birinde 2 çilek varsa: 2+2+2=6 çilek yapar.Bunu <strong>3 × 2 = 6</strong> diyerek çok daha hızlı bulabiliriz!' },
        { title: 'Bölüşmek Güzeldir: Bölme 🤝', text: 'Eğer elindeki elmaları arkadaşlarınla EŞİT paylaşıyorsan bölme işlemi yapıyorsun demektir.' }
      ],
      questions: [
        { id: 'math-cb-001', type: 'multiple-choice', difficulty: 1, question: '2 + 2 + 2 işleminin çarpma hali nasıldır?', options: ['3 × 2', '2 × 2', '3 × 3', '4 × 2'], correct: '3 × 2', hint: 'Kaç tane 2 var?', points: 10 },
        { id: 'math-cb-002', type: 'fill-blank', difficulty: 1, question: '4 × 3 = ?', correct: ['12'], hint: '4 kere 3 say.', points: 15 },
        { id: 'math-cb-003', type: 'match', difficulty: 2, question: 'Çarpımları eşleştir!', pairs: [{left: '2 × 5', right: '10'}, {left: '3 × 4', right: '12'}, {left: '4 × 5', right: '20'}], points: 20 },
        { id: 'math-cb-004', type: 'multiple-choice', difficulty: 2, question: '10 kalemi 2 arkadaşa eşit paylaştırırsak her birine kaç kalem düşer?', options: ['4', '5', '6', '10'], correct: '5', hint: '10 ÷ 2', points: 15 },
        { id: 'math-cb-005', type: 'fill-blank', difficulty: 2, question: '5 kere 5 eşittir ?', correct: ['25'], hint: 'Ritmi yakala: 5,10,15,20,25!', points: 15 },
        { id: 'math-cb-006', type: 'true-false', difficulty: 2, question: 'Her sayının 0 ile çarpımının sonucu 0 dır.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: '0 çok güçlüdür, her şeyi yutar!', points: 10 },
        { id: 'math-cb-007', type: 'fill-blank', difficulty: 3, question: '12 ÷ 3 = ?', correct: ['4'], hint: '12 içindeki 3 leri say.', points: 20 }
      ]
    },
    {
      id: 'zaman-ölçme',
      name: 'Saati Öğreniyorum',
      icon: '🕐',
      questCode: 'MAT-05',
      semester: 2,
      description: 'Tam saat, buçuk, çeyrek geçiyor ve çeyrek kalıyor',
      introText: '⏰ Saatler konuşabilseydi ne derdi? "Beni okuyabilir misin?" Gelin saatin sırlarını birlikte keşfedelim! Yelkovan ve akrep ile tanışmaya hazır mısın?',
      lessons: [
        {
          title: 'Saatin İki Kolu 🤲',
          text: 'Bir saatin iki önemli kolu vardır:<br><br>🔴 <strong>Akrep</strong> — kısa ve kalın koldur. <u>Saati</u> gösterir.<br>🔵 <strong>Yelkovan</strong> — uzun ve ince koldur. <u>Dakikayı</u> gösterir.<br><br>Bunu hatırlamak için: "<em>Akrep kısa, saat o. Yelkovan uzun, dakika o!</em>"'
        },
        {
          title: 'Tam Saatler 🕛',
          text: 'Yelkovan her zaman <strong>12</strong> rakamını gösteriyorsa, <u>tam saat</u> demektir!<br><br>🕐 Yelkovan 12, Akrep 1 → <strong>Saat tam 1</strong><br>🕓 Yelkovan 12, Akrep 4 → <strong>Saat tam 4</strong><br>🕘 Yelkovan 12, Akrep 9 → <strong>Saat tam 9</strong><br><br>💡 Akrep hangi sayıdaysa, saat o tam saattir!'
        },
        {
          title: 'Yarım Saat (Buçuk) 🕠',
          text: 'Yelkovan <strong>6</strong> rakamını gösteriyorsa, yarım saat (buçuk) geçmiş demektir!<br><br>🕜 Yelkovan 6, Akrep 1-2 arası → <strong>Saat 1 buçuk</strong><br>🕟 Yelkovan 6, Akrep 4-5 arası → <strong>Saat 4 buçuk</strong><br>🕣 Yelkovan 6, Akrep 8-9 arası → <strong>Saat 8 buçuk</strong><br><br>💡 30 dakika = Yarım saat = Buçuk!'
        },
        {
          title: 'Çeyrek Geçiyor 🕒',
          text: 'Yelkovan <strong>3</strong> rakamını gösteriyorsa, saati <u>çeyrek geçiyor</u> demektir!<br><br>🕒 Yelkovan 3, Akrep 2-3 arası → <strong>Saat 3\'ü çeyrek geçiyor</strong> (3:15)<br>🕔 Yelkovan 3, Akrep 4-5 arası → <strong>Saat 4\'ü çeyrek geçiyor</strong> (4:15)<br><br>💡 Çeyrek = 15 dakika. Bir saatin 4\'te biri!'
        },
        {
          title: 'Çeyrek Kalıyor ⏰',
          text: 'Yelkovan <strong>9</strong> rakamını gösteriyorsa, bir sonraki saate <u>çeyrek kalıyor</u> demektir!<br><br>⏰ Yelkovan 9, Akrep 7-8 arası → <strong>Saat 8\'e çeyrek var</strong> (7:45)<br>⏰ Yelkovan 9, Akrep 11-12 arası → <strong>Saat 12\'ye çeyrek var</strong> (11:45)<br><br>💡 Yelkovan 9\'da → 45 dakika geçmiş, bir sonraki saate 15 dakika kalmış!'
        },
        {
          title: 'Günlük Hayatta Saat 📅',
          text: 'Saat bize günümüzü düzenlemede yardım eder!<br><br>🌅 Sabah <strong>7:00</strong> → Uyanma zamanı!<br>📚 Sabah <strong>8:30</strong> → Okul başlıyor!<br>🍽️ Öğle <strong>12:00</strong> → Öğle yemeği!<br>🏠 Öğleden sonra <strong>3:00</strong> → Okul bitiyor!<br>🌙 Gece <strong>9:00</strong> → Uyku vakti!<br><br>💡 Günde 24 saat var. Sabah 12\'ye kadar olan saatlere "öğleden önce", sonrasına ise "öğleden sonra" deriz.'
        }
      ],
      questions: [
        {
          id: 'math-zo-001',
          type: 'multiple-choice',
          difficulty: 1,
          question: '🕒 Bu saat emojisi kaçı gösteriyor?',
          options: ['Saat tam 2', 'Saat tam 3', 'Saat tam 4', 'Saat tam 5'],
          correct: 'Saat tam 3',
          hint: '🕒 Yelkovan 12\'de, akrep 3\'te demektir.',
          points: 10
        },
        {
          id: 'math-zo-002',
          type: 'fill-blank',
          difficulty: 1,
          question: 'Yelkovan 12\'de, akrep 7\'de ise saat kaçtır? (Sadece rakam yazın)',
          correct: ['7', '07', '7:00', '07:00'],
          hint: 'Yelkovan 12\'de = tam saat. Akrep hangi sayıdaysa o saat.',
          points: 15
        },
        {
          id: 'math-zo-003',
          type: 'multiple-choice',
          difficulty: 1,
          question: '🕗 Bu saat emojisi kaçı gösteriyor?',
          options: ['Saat tam 6', 'Saat tam 7', 'Saat tam 8', 'Saat tam 9'],
          correct: 'Saat tam 8',
          hint: '🕗 sekiz o\'clock — yelkovan 12, akrep 8.',
          points: 10
        },
        {
          id: 'math-zo-004',
          type: 'true-false',
          difficulty: 1,
          question: 'Tam saatte yelkovan her zaman 12 rakamını gösterir.',
          options: ['Doğru', 'Yanlış'],
          correct: 'Doğru',
          hint: 'Yelkovan uzun koldur ve tam saatte hep 12\'dedir.',
          points: 10
        },
        {
          id: 'math-zo-005',
          type: 'match',
          difficulty: 2,
          question: 'Saat emojilerini doğru saatlerle eşleştir!',
          pairs: [
            { left: '🕒', right: 'Saat 3' },
            { left: '🕕', right: 'Saat 6' },
            { left: '🕘', right: 'Saat 9' },
            { left: '🕛', right: 'Saat 12' }
          ],
          points: 20
        },
        {
          id: 'math-zo-006',
          type: 'multiple-choice',
          difficulty: 1,
          question: '🕟 Bu saat emojisi kaçı gösteriyor? (Yelkovan 6\'da)',
          options: ['Saat 4 buçuk', 'Saat 5 buçuk', 'Saat 3 buçuk', 'Saat 6 buçuk'],
          correct: 'Saat 4 buçuk',
          hint: '🕟 = 4:30. Yelkovan 6\'da olunca buçuk geçmiş demektir.',
          points: 10
        },
        {
          id: 'math-zo-007',
          type: 'fill-blank',
          difficulty: 1,
          question: '🕤 Bu saat emojisi 9:30\'u gösteriyor. Yarım saat kaç dakikadır?',
          correct: ['30', 'otuz'],
          hint: 'Yarım saat = 30 dakika = buçuk.',
          points: 15
        },
        {
          id: 'math-zo-008',
          type: 'true-false',
          difficulty: 1,
          question: 'Yelkovan 6\'yı gösterdiğinde yarım saat geçmiş (buçuk) olur.',
          options: ['Doğru', 'Yanlış'],
          correct: 'Doğru',
          hint: 'Yelkovan 6 = 30 dakika = yarım saat = buçuk!',
          points: 10
        },
        {
          id: 'math-zo-009',
          type: 'multiple-choice',
          difficulty: 2,
          question: 'Yelkovan 3\'te, akrep 4 ile 5 arasında ise saat ne demektir?',
          options: ['Saat 4\'ü çeyrek geçiyor', 'Saat 5\'i çeyrek geçiyor', 'Saat 4 buçuk', 'Saat tam 4'],
          correct: 'Saat 4\'ü çeyrek geçiyor',
          hint: 'Yelkovan 3\'te = 15 dakika geçmiş. Akrep 4 civarında = 4\'ü çeyrek geçiyor.',
          points: 15
        },
        {
          id: 'math-zo-010',
          type: 'fill-blank',
          difficulty: 2,
          question: 'Saat 5\'i çeyrek geçiyor (5:15). Yelkovan hangi rakamın üzerindedir?',
          correct: ['3', 'üç'],
          hint: 'Çeyrek geçiyor = 15 dakika = yelkovan 3\'te.',
          points: 15
        },
        {
          id: 'math-zo-011',
          type: 'multiple-choice',
          difficulty: 2,
          question: 'Yelkovan 9\'da, akrep 7 ile 8 arasında ise saat ne demektir?',
          options: ['Saat 7\'yi çeyrek geçiyor', 'Saat 8\'e çeyrek var', 'Saat 8 buçuk', 'Saat tam 8'],
          correct: 'Saat 8\'e çeyrek var',
          hint: 'Yelkovan 9 = 45 dakika = bir sonraki saate 15 dakika kalmış.',
          points: 15
        },
        {
          id: 'math-zo-012',
          type: 'match',
          difficulty: 2,
          question: 'Zaman ifadelerini dakika sayılarıyla eşleştir!',
          pairs: [
            { left: 'Çeyrek saat', right: '15 dakika' },
            { left: 'Yarım saat', right: '30 dakika' },
            { left: 'Bir saat', right: '60 dakika' },
            { left: 'Çeyrek geçiyor', right: 'Yelkovan 3\'te' }
          ],
          points: 20
        },
        {
          id: 'math-zo-013',
          type: 'multiple-choice',
          difficulty: 2,
          question: 'Okul sabah 🕗 de (8:00) başlıyor. 4 saat sonra öğle tatili oluyor. Saat kaçtır?',
          options: ['🕛 Saat tam 12', '🕚 Saat tam 11', '🕐 Saat tam 1', '🕙 Saat tam 10'],
          correct: '🕛 Saat tam 12',
          hint: '8 + 4 = 12. Öğle saati 12:00!',
          points: 15
        },
        {
          id: 'math-zo-014',
          type: 'fill-blank',
          difficulty: 1,
          question: '1 saat kaç dakikadır?',
          correct: ['60', 'altmış'],
          hint: 'Yelkovan tam bir tur attığında 60 dakika geçer.',
          points: 10
        },
        {
          id: 'math-zo-015',
          type: 'multiple-choice',
          difficulty: 1,
          question: 'Akrep saate, yelkovan dakikaya göre şu bilgi doğru mu?',
          options: ['Evet, akrep=saat, yelkovan=dakika', 'Hayır, akrep=dakika, yelkovan=saat', 'İkisi de saati gösterir', 'İkisi de dakikayı gösterir'],
          correct: 'Evet, akrep=saat, yelkovan=dakika',
          hint: 'Akrep kısa = saat. Yelkovan uzun = dakika.',
          points: 10
        },
        {
          id: 'math-zo-016',
          type: 'true-false',
          difficulty: 1,
          question: 'Bir günde toplam 24 saat vardır.',
          options: ['Doğru', 'Yanlış'],
          correct: 'Doğru',
          hint: 'Gece 12 saat + Gündüz 12 saat = 24 saat.',
          points: 10
        },
        {
          id: 'math-zo-017',
          type: 'multiple-choice',
          difficulty: 2,
          question: 'Saat 10:00\'dan 10:30\'a kadar kaç dakika geçer?',
          options: ['15 dakika', '30 dakika', '45 dakika', '60 dakika'],
          correct: '30 dakika',
          hint: '10:00 → 10:30 arası yarım saat = 30 dakika.',
          points: 15
        },
        {
          id: 'math-zo-018',
          type: 'fill-blank',
          difficulty: 2,
          question: 'Saat 7:15\'i gösteriyor. Bu "7\'yi çeyrek geçiyor" demektir. Yelkovan hangi rakamın üzerindedir?',
          correct: ['3', 'üç'],
          hint: '15 dakika = çeyrek. Yelkovan 15. dakikada yani 3\'ün üzerindedir.',
          points: 15
        },
        {
          id: 'math-zo-019',
          type: 'multiple-choice',
          difficulty: 3,
          question: 'Bir film 🕑 (2:00) de başlıyor ve 90 dakika sürüyor. Film kaçta bitiyor?',
          options: ['🕝 3:30', '🕒 3:00', '🕞 3:30\'da değil 4:00\'da', '🕓 4:00'],
          correct: '🕝 3:30',
          hint: '2:00 + 90 dakika: 60 dakika = 1 saat → 3:00, kalan 30 dakika → 3:30.',
          points: 20
        },
        {
          id: 'math-zo-020',
          type: 'match',
          difficulty: 2,
          question: 'Günlük olayları doğru saatlerle eşleştir!',
          pairs: [
            { left: 'Sabah uyanma', right: '7:00' },
            { left: 'Okul başlangıcı', right: '8:30' },
            { left: 'Öğle yemeği', right: '12:00' },
            { left: 'Uyku vakti', right: '21:00' }
          ],
          points: 20
        }
      ]
    },
    {
      id: 'paralarımız',
      name: 'Paralarımız',
      icon: '💰',
      questCode: 'MAT-06',
      semester: 2,
      description: 'Lira ve kuruşu tanıma',
      introText: 'Marketten bir şey alırken para kullanırız. Paralarımızı tanıyalım!',
      lessons: [{ title: 'Lira ve Kuruş', text: '1 TL tam 100 kuruştur.'}],
      questions: [
        { id: 'math-para-001', type: 'multiple-choice', difficulty: 1, question: 'En büyük kağıt paramız hangisidir?', options: ['50 TL', '100 TL', '200 TL', '250 TL'], correct: '200 TL', points: 15 },
        { id: 'math-para-002', type: 'fill-blank', difficulty: 1, question: '2 tane 50 TL kaç TL eder?', correct: ['100'], points: 20 },
        { id: 'math-para-003', type: 'multiple-choice', difficulty: 1, question: '1 Lira (1 TL) kaç kuruştur?', options: ['10 Kuruş', '50 Kuruş', '100 Kuruş', '1000 Kuruş'], correct: '100 Kuruş', points: 10 },
        { id: 'math-para-004', type: 'match', difficulty: 2, question: 'Paraları toplayıp eşleştir!', pairs: [{left: '10 TL + 5 TL', right: '15 TL'}, {left: '20 TL + 20 TL', right: '40 TL'}, {left: '50 TL + 50 TL', right: '100 TL'}], points: 20 },
        { id: 'math-para-005', type: 'true-false', difficulty: 2, question: '3 tane 10 TL, 1 tane 50 TL den daha fazladır.', options: ['Doğru', 'Yanlış'], correct: 'Yanlış', hint: '3x10=30, 30<50!', points: 15 },
        { id: 'math-para-006', type: 'fill-blank', difficulty: 2, question: 'Cebimde 20 TL vardı. 5 TL ye simit aldım. Cebimde _____ TL kaldı.', correct: ['15'], points: 15 },
        { id: 'math-para-007', type: 'multiple-choice', difficulty: 1, question: 'En küçük madeni paramız hangisidir?', options: ['1 Kuruş', '5 Kuruş', '10 Kuruş', '1 Lira'], correct: '1 Kuruş', points: 10 },
        { id: 'math-para-008', type: 'fill-blank', difficulty: 2, question: '4 tane 25 kuruş _____ Lira eder.', correct: ['1'], hint: '100 Kuruş = 1 Lira', points: 15 }
      ]
    }
  ]
};
