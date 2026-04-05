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
        { id: 'math-geo-006', type: 'true-false', difficulty: 1, question: 'Resimdeki şekil bir Üçgen prizmadır.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 }
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
      name: 'Zaman Ölçme',
      icon: '⏰',
      questCode: 'MAT-05',
      semester: 2,
      description: 'Saatleri okuma ve zaman problemleri',
      introText: 'Zaman geçiyor! Saatleri okuyabiliyor musun?',
      lessons: [{ title: 'Saatler', text: 'Tam saatlerde yelkovan 12 nin üzerindedir.'}],
      questions: [
        { id: 'math-zo-001', type: 'multiple-choice', difficulty: 1, question: 'Bir gün kaç saattir?', options: ['12', '24', '60', '7'], correct: '24', hint: 'Gece ve gündüz toplamı.', points: 15 },
        { id: 'math-zo-002', type: 'fill-blank', difficulty: 1, question: 'Yelkovan 12 de, akrep 9 da ise saat kaçtır? (Sayıyla yazın)', correct: ['9', '09:00'], points: 20 }
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
        { id: 'math-para-002', type: 'fill-blank', difficulty: 1, question: '2 tane 50 TL kaç TL eder?', correct: ['100'], points: 20 }
      ]
    }
  ]
};
