// ==========================================
// 🇬🇧 İngilizce Soru Havuzu (MEB %100 Uyumlu - 10 Ünite)
// ==========================================

const ENGLISH_QUESTIONS = {
  subject: 'english',
  subjectName: 'İngilizce Kalesi',
  icon: '🏰',
  units: [
    {
      id: 'words',
      name: 'Unit 1: Words',
      icon: '🔤',
      questCode: 'ENG-01',
      semester: 1,
      description: 'Alphabet, basic words (Pizza, Taxi, Gorilla)',
      introText: 'İngilizce aslında her yerde! Günlük hayatta kullandığımız kelimeleri keşfedelim.',
      lessons: [
        { title: 'Ortak Kelimeler 🍕', text: 'Bazı kelimeler hem Türkçe hem İngilizce aynıdır: <strong>Pizza, Taxi, Gorilla, Football, Robot</strong>.' }
      ],
      questions: [
        { id: 'eng-w-001', type: 'multiple-choice', difficulty: 1, question: 'Aşağıdakilerden hangisi bir hayvandır?', options: ['Taxi', 'Pizza', 'Gorilla', 'Robot'], correct: 'Gorilla', hint: 'Ormanda yaşar.', points: 10, englishText: 'Gorilla' },
        { id: 'eng-w-listen-1', type: 'audio-question', difficulty: 2, englishText: 'Ambulance', question: 'Duyduğun kelimenin Türkçe anlamı hangisidir?', options: ['Ambulans', 'Taksi', 'Polis', 'Doktor'], correct: 'Ambulans', hint: 'Hastaneye yolcu taşır.', points: 20 },
        { id: 'eng-w-002', type: 'match', difficulty: 1, question: 'Kelimeleri eşleştir!', pairs: [{left: 'Pizza', right: 'Yiyecek'}, {left: 'Taxi', right: 'Araba'}, {left: 'Robot', right: 'Makine'}], points: 20 },
        { id: 'eng-w-003', type: 'multiple-choice', difficulty: 1, question: '"Football" kelimesinin Türkçe anlamı nedir?', options: ['Basketbol', 'Futbol', 'Voleybol', 'Tenis'], correct: 'Futbol', hint: 'Ayakla oynanan bir spordur.', points: 10, englishText: 'Football' },
        { id: 'eng-w-004', type: 'fill-blank', difficulty: 1, question: 'Taksi kelimesinin İngilizcesi _____ şeklindedir.', correct: ['taxi'], hint: 'İçinde X harfi var.', points: 15 },
        { id: 'eng-w-005', type: 'true-false', difficulty: 1, question: '"Kangaroo" hayvanı Türkçede Kanguru demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Sesleri çok benzer.', points: 10 },
        { id: 'eng-w-006', type: 'multiple-choice', difficulty: 1, question: 'Hangi kelime ulaşım aracıdır?', options: ['Doctor', 'Lemon', 'Ambulance', 'Television'], correct: 'Ambulance', hint: 'Hastaları taşır.', points: 15 },
        { id: 'eng-w-007', type: 'fill-blank', difficulty: 2, question: 'Limon kelimesinin İngilizcesi _____ dır.', correct: ['lemon'], hint: 'L harfiyle başlar, sadece bir harf farklıdır.', points: 15 },
        { id: 'eng-w-008', type: 'multiple-choice', difficulty: 1, question: 'Hangisi bir meyvedir?', options: ['Gorilla', 'Lemon', 'Taxi', 'Microphone'], correct: 'Lemon', hint: 'Ekşidir.', points: 10 }
      ]
    },
    {
      id: 'friends',
      name: 'Unit 2: Friends',
      icon: '🤝',
      questCode: 'ENG-02',
      semester: 1,
      description: 'Greetings, saying Your Name',
      introText: 'Yeni arkadaşlar edinelim ve onlara ismimizi söylemeyi öğrenelim!',
      lessons: [
        { title: 'Ismimi Söylüyorum 👋', text: '"What is your name?" (Adın ne?) sorusuna <span class="rainbow-text">My name is...</span> diyerek cevap veririz.' }
      ],
      questions: [
        { id: 'eng-fr-001', type: 'multiple-choice', difficulty: 1, question: 'Birine ismini nasıl sorarsın?', options: ['How are you?', 'What is your name?', 'Fine, thanks', 'Goodbye'], correct: 'What is your name?', hint: 'Name isim demektir.', points: 10, englishText: 'What is your name?' },
        { id: 'eng-fr-listen-1', type: 'audio-question', difficulty: 2, englishText: 'Good morning', question: 'Duyduğun kelime ne zaman söylenir?', options: ['Sabahları', 'Akşamları', 'Öğlen', 'Gece'], correct: 'Sabahları', hint: 'Uyanınca söyleriz.', points: 20 },
        { id: 'eng-fr-002', type: 'fill-blank', difficulty: 1, question: '"My name _____ Serdar." (Eksik kelimeyi yazınız)', correct: ['is'], hint: 'I ile başlar.', points: 15 },
        { id: 'eng-fr-003', type: 'multiple-choice', difficulty: 1, question: '"Hello!" ne demektir?', options: ['Güle güle', 'Merhaba', 'Nasılsın', 'Teşekkürler'], correct: 'Merhaba', hint: 'Karşılaşınca söylenir.', points: 10, englishText: 'Hello!' },
        { id: 'eng-fr-004', type: 'true-false', difficulty: 1, question: '"Good morning" Günaydın demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Sabahları söylenir.', points: 10 },
        { id: 'eng-fr-005', type: 'multiple-choice', difficulty: 1, question: '"How are you?" ne demektir?', options: ['Adın ne', 'Nasılsın', 'Otur', 'Günaydın'], correct: 'Nasılsın', hint: 'Hatır sormaktır.', points: 10 },
        { id: 'eng-fr-006', type: 'fill-blank', difficulty: 2, question: '"I am fine" (İyiyim) demek için _____ fine deriz. (Eksik kelimeyi yazın)', correct: ['i am', 'I am', 'Iam'], hint: 'Ben anlamına gelir.', points: 15 },
        { id: 'eng-fr-007', type: 'multiple-choice', difficulty: 1, question: 'Ayrılırken ne söyleriz?', options: ['Hello', 'Good morning', 'Goodbye', 'Name'], correct: 'Goodbye', hint: 'Hoşçakal anlamındadır.', points: 10 },
        { id: 'eng-fr-008', type: 'match', difficulty: 2, question: 'Karşılıkları eşleştir!', pairs: [{left: 'Hello', right: 'Hi'}, {left: 'Goodbye', right: 'Bye'}, {left: 'How are you?', right: 'Fine, thanks!'}], points: 20 }
      ]
    },
    {
      id: 'in-the-classroom',
      name: 'Unit 3: In The Classroom',
      icon: '🎒',
      questCode: 'ENG-03',
      semester: 1,
      description: 'School objects and instructions',
      introText: 'Sınıfımızdaki eşyaları İngilizce tanıyalım!',
      lessons: [
        { title: 'Sınıf Eşyaları ✏️', text: 'Kitap: <strong>Book</strong>, Kalem: <strong>Pencil</strong>, Silgi: <strong>Eraser</strong>, Çanta: <strong>Bag</strong>.' }
      ],
      questions: [
        { id: 'eng-clr-001', type: 'multiple-choice', difficulty: 1, question: '"Book" ne demektir?', options: ['Kalem', 'Kitap', 'Silgi', 'Sıra'], correct: 'Kitap', hint: 'Okumak için kullanırız.', points: 10 },
        { id: 'eng-clr-002', type: 'match', difficulty: 2, question: 'Eşyaları eşleştir!', pairs: [{left: 'Pencil', right: 'Kalem'}, {left: 'Eraser', right: 'Silgi'}, {left: 'Bag', right: 'Çanta'}], points: 20 },
        { id: 'eng-clr-003', type: 'multiple-choice', difficulty: 1, question: '"Stand up" ne demektir?', options: ['Ayağa kalk', 'Otur', 'Kapıyı aç', 'Dinle'], correct: 'Ayağa kalk', hint: 'Stand = Durmak/Kalkmak.', points: 15 },
        { id: 'eng-clr-004', type: 'fill-blank', difficulty: 1, question: 'Sıra kelimesinin İngilizcesi _____ dır.', correct: ['desk'], hint: 'D harfi ile başlar.', points: 15 },
        { id: 'eng-clr-005', type: 'multiple-choice', difficulty: 1, question: '"Sit down" ne demektir?', options: ['Uyu', 'Ayağa kalk', 'Otur', 'Oku'], correct: 'Otur', hint: 'Sit = Oturmak.', points: 10 },
        { id: 'eng-clr-006', type: 'true-false', difficulty: 1, question: '"Open your book" Kitabını aç demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Open = Açmak.', points: 10 },
        { id: 'eng-clr-007', type: 'fill-blank', difficulty: 2, question: 'Öğretmen kelimesinin İngilizcesi _____ dır.', correct: ['teacher'], hint: 'T ile başlar.', points: 15 },
        { id: 'eng-clr-008', type: 'multiple-choice', difficulty: 2, question: 'Aşağıdakilerden hangisi çizecek (boya) kalemidir?', options: ['Pencil', 'Eraser', 'Crayon', 'Board'], correct: 'Crayon', hint: 'C ile başlar.', points: 15 }
      ]
    },
    {
      id: 'numbers',
      name: 'Unit 4: Numbers',
      icon: '🔢',
      questCode: 'ENG-04',
      semester: 1,
      description: 'Numbers 1 to 10',
      introText: 'Sayıları İngilizce saymayı öğreniyoruz!',
      lessons: [
        { title: '1-10 Arası 🔟', text: 'One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten!' }
      ],
      questions: [
        { id: 'eng-num-001', type: 'fill-blank', difficulty: 1, question: 'Seven kaç demektir? (Sayıyla yazınız)', correct: ['7'], hint: 'Altıdan sonra gelir.', points: 15 },
        { id: 'eng-num-002', type: 'multiple-choice', difficulty: 1, question: '"One" hangi sayıdır?', options: ['1', '2', '3', '4'], correct: '1', hint: 'İlk sayıdır.', points: 10 },
        { id: 'eng-num-003', type: 'match', difficulty: 2, question: 'Sayıları eşleştir!', pairs: [{left: 'Two', right: '2'}, {left: 'Five', right: '5'}, {left: 'Nine', right: '9'}], points: 20 },
        { id: 'eng-num-004', type: 'fill-blank', difficulty: 1, question: '8 sayısının İngilizce yazılışı _____ şeklindedir.', correct: ['eight'], hint: 'E ile başlar.', points: 15 },
        { id: 'eng-num-005', type: 'true-false', difficulty: 1, question: 'Ten 10 demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'İki basamaklı ilk sayı.', points: 10 },
        { id: 'eng-num-006', type: 'multiple-choice', difficulty: 1, question: '3 sayısının İngilizcesi nedir?', options: ['Tree', 'Three', 'Free', 'Two'], correct: 'Three', hint: 'Th ile başlar.', points: 10 },
        { id: 'eng-num-007', type: 'multiple-choice', difficulty: 2, question: 'Sıradaki sayıyı bulun: One, Two, Three, ____', options: ['Five', 'Six', 'Four', 'Seven'], correct: 'Four', hint: '4 sayısı gelmelidir.', points: 15 },
        { id: 'eng-num-008', type: 'fill-blank', difficulty: 2, question: 'Altı sayısının İngilizcesi _____ dır.', correct: ['six'], hint: 'S harfi ile başlar.', points: 15 }
      ]
    },
    {
      id: 'colors',
      name: 'Unit 5: Colors',
      icon: '🎨',
      questCode: 'ENG-05',
      semester: 1,
      description: 'Purple, Brown, Grey and more!',
      introText: 'Dünyamız çok renkli! Gökkuşağının renklerini öğrenelim.',
      lessons: [
        { title: 'Renkler 🌈', text: 'Red, Blue, Yellow, Green, Pink, Purple, Orange.' }
      ],
      questions: [
        { id: 'eng-col-001', type: 'multiple-choice', difficulty: 1, question: '"Mavi" hangisidir?', options: ['Red', 'Green', 'Blue', 'Yellow'], correct: 'Blue', hint: 'Gökyüzü rengi.', points: 10 },
        { id: 'eng-col-002', type: 'match', difficulty: 2, question: 'Renkleri eşleştir!', pairs: [{left: 'Red', right: 'Kırmızı'}, {left: 'Yellow', right: 'Sarı'}, {left: 'Black', right: 'Siyah'}], points: 20 },
        { id: 'eng-col-003', type: 'fill-blank', difficulty: 1, question: 'Yeşil rengin İngilizcesi _____ dır.', correct: ['green'], hint: 'G ile başlar.', points: 15 },
        { id: 'eng-col-004', type: 'true-false', difficulty: 1, question: '"Pink" pembe demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Genellikle kızların çok sevdiği renk.', points: 10 },
        { id: 'eng-col-005', type: 'multiple-choice', difficulty: 1, question: '"Orange" hangi renktir?', options: ['Turuncu', 'Kahverengi', 'Mor', 'Gri'], correct: 'Turuncu', hint: 'Portakal rengidir.', points: 15 },
        { id: 'eng-col-006', type: 'fill-blank', difficulty: 2, question: 'Beyaz rengin İngilizcesi _____ dır.', correct: ['white'], hint: 'W ile başlar.', points: 15 },
        { id: 'eng-col-007', type: 'multiple-choice', difficulty: 2, question: 'Hangisi Mor rengidir?', options: ['Purple', 'Brown', 'Grey', 'Black'], correct: 'Purple', hint: 'P ile başlar.', points: 10 },
        { id: 'eng-col-008', type: 'true-false', difficulty: 1, question: 'Güneşin rengi Yellow (Sarı) dur.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Güneş sarıdır.', points: 10 }
      ]
    },
    {
      id: 'playground',
      name: 'Unit 6: At The Playground',
      icon: '🛝',
      questCode: 'ENG-06',
      semester: 2,
      description: 'Let\'s play games!',
      introText: 'Bahçeye çıkalım ve oyunlar oynayalım!',
      lessons: [{ title: 'Hadi Oynayalım!', text: 'Salıncak: <strong>Swing</strong>, Kaydırak: <strong>Slide</strong>, Top: <strong>Ball</strong>.'}],
      questions: [
        { id: 'eng-play-001', type: 'multiple-choice', question: 'Kaydırak nedir?', options: ['Swing', 'Slide', 'Ball', 'Jump'], correct: 'Slide', points: 15 },
        { id: 'eng-play-002', type: 'multiple-choice', question: 'Salıncak nedir?', options: ['Swing', 'Run', 'Hide', 'Slide'], correct: 'Swing', points: 15 },
        { id: 'eng-play-003', type: 'fill-blank', question: 'Zıplamak kelimesinin İngilizcesi _____ dır.', correct: ['jump'], hint: 'J ile başlar.', points: 15 },
        { id: 'eng-play-004', type: 'true-false', question: 'Koşmak "Run" demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 },
        { id: 'eng-play-005', type: 'match', question: 'Oyunları eşleştir!', pairs: [{left: 'Hide and seek', right: 'Saklambaç'}, {left: 'Jump rope', right: 'İp atlamak'}], points: 20 },
        { id: 'eng-play-006', type: 'multiple-choice', question: 'Top nedir?', options: ['Doll', 'Ball', 'Car', 'Kite'], correct: 'Ball', points: 10 },
        { id: 'eng-play-007', type: 'fill-blank', question: '"Let\'s play!" ne anlama gelir?', correct: ['hadi oynayalım', 'oynayalım'], hint: 'Oyun oynamaya davet!', points: 20 }
      ]
    },
    {
      id: 'body-parts',
      name: 'Unit 7: Body Parts',
      icon: '💪',
      questCode: 'ENG-07',
      semester: 2,
      description: 'Head, shoulders, knees and toes!',
      introText: 'Vücudumuzu İngilizce tanıyalım!',
      lessons: [{ title: 'Uzuvlar', text: 'Eye (Göz), Ear (Kulak), Mouth (Ağız), Nose (Burun).'}],
      questions: [
        { id: 'eng-bd-001', type: 'match', question: 'Eşleştir!', pairs: [{left: 'Eye', right: 'Göz'}, {left: 'Nose', right: 'Burun'}, {left: 'Ear', right: 'Kulak'}], points: 20 },
        { id: 'eng-bd-002', type: 'multiple-choice', question: 'Baş (Kafa) İngilizcede nedir?', options: ['Head', 'Hand', 'Finger', 'Toe'], correct: 'Head', points: 15 },
        { id: 'eng-bd-003', type: 'fill-blank', question: 'Ağız kelimesinin İngilizcesi _____ dır.', correct: ['mouth'], hint: 'M ile başlar.', points: 15 },
        { id: 'eng-bd-004', type: 'true-false', question: '"Hand" el demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 },
        { id: 'eng-bd-005', type: 'multiple-choice', question: 'Omuz nedir?', options: ['Knee', 'Toe', 'Shoulder', 'Arm'], correct: 'Shoulder', points: 15 },
        { id: 'eng-bd-006', type: 'multiple-choice', question: 'Hangisi bacak demektir?', options: ['Leg', 'Arm', 'Nose', 'Eye'], correct: 'Leg', points: 10 },
        { id: 'eng-bd-007', type: 'fill-blank', question: 'Kol kelimesinin İngilizcesi _____ dır.', correct: ['arm'], hint: 'A ile başlar.', points: 15 },
        { id: 'eng-bd-008', type: 'true-false', question: '"Touch your nose" Burnuna dokun demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 }
      ]
    },
    {
      id: 'pets',
      name: 'Unit 8: Pets',
      icon: '🐈',
      questCode: 'ENG-08',
      semester: 2,
      description: 'Cats, Dogs and Rabbits',
      introText: 'Evcil hayvanlarımızı çok seviyoruz!',
      lessons: [{ title: 'Ev Dostları', text: 'Dog (Köpek), Cat (Kedi), Rabbit (Tavşan), Fish (Balık).'}],
      questions: [
        { id: 'eng-pet-001', type: 'multiple-choice', question: 'Tavşan hangisidir?', options: ['Dog', 'Cat', 'Rabbit', 'Bird'], correct: 'Rabbit', points: 15 },
        { id: 'eng-pet-002', type: 'fill-blank', question: 'Kedi kelimesinin İngilizcesi _____ dir.', correct: ['cat'], hint: 'C ile başlar.', points: 10 },
        { id: 'eng-pet-003', type: 'multiple-choice', question: 'Köpek hangisidir?', options: ['Cat', 'Dog', 'Turtle', 'Pig'], correct: 'Dog', points: 10 },
        { id: 'eng-pet-004', type: 'match', question: 'Hayvanları eşleştir!', pairs: [{left: 'Fish', right: 'Balık'}, {left: 'Bird', right: 'Kuş'}, {left: 'Dog', right: 'Köpek'}], points: 20 },
        { id: 'eng-pet-005', type: 'true-false', question: '"Turtle" kaplumbağa demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 },
        { id: 'eng-pet-006', type: 'fill-blank', question: 'Kuş kelimesinin İngilizcesi _____ dir.', correct: ['bird'], hint: 'B ile başlar.', points: 15 },
        { id: 'eng-pet-007', type: 'multiple-choice', question: 'Fare hangisidir?', options: ['Mouse', 'Cat', 'Dog', 'Bird'], correct: 'Mouse', points: 15 },
        { id: 'eng-pet-008', type: 'true-false', question: 'Fish suda yaşar ve yüzer.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 }
      ]
    },
    {
      id: 'fruits',
      name: 'Unit 9: Fruits',
      icon: '🍎',
      questCode: 'ENG-09',
      semester: 2,
      description: 'Apples, Bananas and Oranges',
      introText: 'Meyveler hem sağlıklı hem tatlı!',
      lessons: [{ title: 'Meyve Tabağı', text: 'Apple (Elma), Banana (Muz), Orange (Portakal), Grapes (Üzüm).'}],
      questions: [
        { id: 'eng-frt-001', type: 'fill-blank', question: 'Apple ne demektir?', correct: ['elma'], points: 15 },
        { id: 'eng-frt-002', type: 'multiple-choice', question: 'Muz hangisidir?', options: ['Apple', 'Banana', 'Orange', 'Lemon'], correct: 'Banana', points: 10 },
        { id: 'eng-frt-003', type: 'match', question: 'Meyveleri eşleştir!', pairs: [{left: 'Orange', right: 'Portakal'}, {left: 'Grapes', right: 'Üzüm'}], points: 20 },
        { id: 'eng-frt-004', type: 'true-false', question: '"Melon" kavun demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 },
        { id: 'eng-frt-005', type: 'fill-blank', question: 'Karpuzun İngilizcesi _____ dır.', correct: ['watermelon'], hint: 'water ile başlar!', points: 20 },
        { id: 'eng-frt-006', type: 'multiple-choice', question: 'Strawberry nedir?', options: ['Çilek', 'Elma', 'Kiraz', 'Erik'], correct: 'Çilek', points: 15 },
        { id: 'eng-frt-007', type: 'multiple-choice', question: 'Hangi meyve sarı renklidir?', options: ['Apple', 'Strawberry', 'Banana', 'Grapes'], correct: 'Banana', points: 10 },
        { id: 'eng-frt-008', type: 'true-false', question: 'Limon İngilizcede "Lemon" diye yazılır.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 }
      ]
    },
    {
      id: 'animals',
      name: 'Unit 10: Animals',
      icon: '🦁',
      questCode: 'ENG-10',
      semester: 2,
      description: 'Lion, Elephant and more!',
      introText: 'Vahşi doğadaki dev hayvanları tanıyalım!',
      lessons: [{ title: 'Vahşi Doğa', text: 'Lion (Aslan), Elephant (Fil), Monkey (Maymun), Tiger (Kaplan).'}],
      questions: [
        { id: 'eng-ani-001', type: 'multiple-choice', question: 'Lion nedir?', options: ['Kedi', 'Aslan', 'Fil', 'Zürafa'], correct: 'Aslan', points: 15 },
        { id: 'eng-ani-002', type: 'fill-blank', question: 'Fil kelimesinin İngilizcesi _____ dir.', correct: ['elephant'], hint: 'E ile başlar.', points: 15 },
        { id: 'eng-ani-003', type: 'match', question: 'Hayvanları eşleştir!', pairs: [{left: 'Monkey', right: 'Maymun'}, {left: 'Tiger', right: 'Kaplan'}], points: 20 },
        { id: 'eng-ani-004', type: 'multiple-choice', question: 'Uzun boyunlu hayvan hangisidir?', options: ['Bear', 'Giraffe', 'Lion', 'Snake'], correct: 'Giraffe', points: 15 },
        { id: 'eng-ani-005', type: 'true-false', question: '"Snake" yılan demektir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 },
        { id: 'eng-ani-006', type: 'fill-blank', question: 'At kelimesinin İngilizcesi _____ dir.', correct: ['horse'], hint: 'H ile başlar.', points: 15 },
        { id: 'eng-ani-007', type: 'multiple-choice', question: 'Hangisi siyah beyaz çizgili çizgili hayvandır?', options: ['Zebra', 'Lion', 'Tiger', 'Bear'], correct: 'Zebra', points: 10 },
        { id: 'eng-ani-008', type: 'true-false', question: '"Bear" ayı anlamına gelir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 }
      ]
    }
  ]
};
