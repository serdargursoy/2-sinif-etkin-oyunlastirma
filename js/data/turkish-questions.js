// ==========================================
// 🇹🇷 Türkçe Soru Havuzu (MEB Temaları)
// ==========================================

const TURKISH_QUESTIONS = {
  subject: 'turkish',
  subjectName: 'Türkçe Bahçesi',
  icon: '📚',
  units: [
    {
      id: 'erdemler',
      name: 'Tema 1: Erdemler',
      icon: '💎',
      questCode: 'TUR-01',
      semester: 1,
      description: 'Dürüstlük, sevgi ve saygı',
      introText: 'Erdemli bir çocuk olmak, her zaman dürüst davranmak demektir. Hazır mısın?',
      lessons: [{ title: 'Dürüstlük Nedir?', text: 'Hata yaptığımızda bunu saklamadan söylemek dürüst bir davranıştır. Dürüst olmak bizi güçlü kılar!' }],
      questions: [
        { id: 'tur-er-001', type: 'true-false', difficulty: 1, question: 'Arkadaşımızın kalemini izinsiz alabiliriz.', options: ['Doğru', 'Yanlış'], correct: 'Yanlış', hint: 'İzin almak saygılı bir davranıştır.', points: 10 },
        { id: 'tur-er-002', type: 'multiple-choice', difficulty: 1, question: 'Aşağıdakilerden hangisi güzel bir sözdür?', options: ['Bana ne', 'Sana ne', 'Teşekkür ederim', 'Git buradan'], correct: 'Teşekkür ederim', hint: 'Kibarca bir şey istediğinde veya aldığında dersin.', points: 10 },
        { id: 'tur-er-003', type: 'fill-blank', difficulty: 2, question: 'Yalan söylemeyen kişiye _____ denir.', correct: ['dürüst'], hint: 'D harfi ile başlar.', points: 15 },
        { id: 'tur-er-004', type: 'multiple-choice', difficulty: 1, question: 'Büyüklerimize nasıl davranmalıyız?', options: ['Saygılı', 'Kaba', 'İlgisiz', 'Sinirli'], correct: 'Saygılı', hint: 'Büyüklere saygı göstermek güzeldir.', points: 10 },
        { id: 'tur-er-005', type: 'true-false', difficulty: 1, question: 'Arkadaşımız üzgünken onu yalnız bırakmalıyız.', options: ['Doğru', 'Yanlış'], correct: 'Yanlış', hint: 'İyi bir arkadaş yanında olur.', points: 10 },
        { id: 'tur-er-006', type: 'multiple-choice', difficulty: 1, question: '"Özür dilerim" ne zaman söyleriz?', options: ['Gülerken', 'Hata yapınca', 'Uyurken', 'Yemek yerken'], correct: 'Hata yapınca', hint: 'Hata yapıp üzüldüğümüzde özür dileriz.', points: 10 },
        { id: 'tur-er-007', type: 'fill-blank', difficulty: 2, question: 'Başkalarının eşyalarına dokunmadan önce _____ almalıyız.', correct: ['izin'], hint: 'İ harfiyle başlar, izin anlamındadır.', points: 15 },
        { id: 'tur-er-008', type: 'true-false', difficulty: 1, question: 'İyi bir insan başkalarına yardım eder.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Yardımlaşmak güzeldir!', points: 10 },
        { id: 'tur-er-009', type: 'multiple-choice', difficulty: 2, question: 'Aşağıdakilerden hangisi erdemli bir davranıştır?', options: ['Yalan söylemek', 'Paylaşmak', 'Kavga etmek', 'Aldatmak'], correct: 'Paylaşmak', hint: 'Paylaşmak güzel bir erdemdir.', points: 15 },
        { id: 'tur-er-010', type: 'multiple-choice', difficulty: 1, question: 'Sınıfta öğretmen konuşurken ne yapmalıyız?', options: ['Bağırmalıyız', 'Dinlemeliyiz', 'Uyumalıyız', 'Konuşmalıyız'], correct: 'Dinlemeliyiz', hint: 'Öğretmeni dikkatle dinlemek saygı göstergesidir.', points: 10 }
      ]
    },
    {
      id: 'milli-kulturumuz',
      name: 'Tema 2: Milli Kültürümüz',
      icon: '🕌',
      questCode: 'TUR-02',
      semester: 1,
      description: 'Bayramlar, gelenekler ve Karagöz-Hacivat',
      introText: 'Kültürümüz bizim hazinemizdir. Geleneklerimizi yakından tanıyalım!',
      lessons: [{ title: 'Nasreddin Hoca', text: 'Nasreddin Hoca eşeğine ters binerek hepimizi güldüren, aynı zamanda çok bilge biridir. Karagöz ve Hacivat ise gölge oyununun sevilen kahramanlarıdır.' }],
      questions: [
        { id: 'tur-mk-001', type: 'multiple-choice', difficulty: 1, question: 'Eşeğine ters binen komik kahramanımız kimdir?', options: ['Karagöz', 'Hacivat', 'Nasreddin Hoca', 'Keloğlan'], correct: 'Nasreddin Hoca', hint: 'Eşeğiyle meşhurdur.', points: 15 },
        { id: 'tur-mk-002', type: 'multiple-choice', difficulty: 1, question: 'Aşağıdakilerden hangisi milli bir bayramımızdır?', options: ['Kurban Bayramı', 'Ramazan Bayramı', '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı', 'Anneler Günü'], correct: '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı', hint: 'Çocuklara armağan edilen bayramdır.', points: 10 },
        { id: 'tur-mk-003', type: 'fill-blank', difficulty: 2, question: 'Türk gölge oyununun iki kahramanı Karagöz ve _____ dir.', correct: ['Hacivat'], hint: 'H harfiyle başlar.', points: 15 },
        { id: 'tur-mk-004', type: 'true-false', difficulty: 1, question: 'Kültür, bir toplumun yaşayış biçimini içerir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Kültür çok geniş bir kavramdır.', points: 10 },
        { id: 'tur-mk-005', type: 'multiple-choice', difficulty: 1, question: 'Ramazan Bayramı kaç gün sürer?', options: ['1 gün', '2 gün', '3 gün', '4 gün'], correct: '3 gün', hint: 'Şeker bayramı da denir.', points: 10 },
        { id: 'tur-mk-006', type: 'multiple-choice', difficulty: 1, question: 'Hangi bayram Atatürk tarafından çocuklara armağan edilmiştir?', options: ['30 Ağustos', '29 Ekim', '23 Nisan', '19 Mayıs'], correct: '23 Nisan', hint: 'Ulusal Egemenlik ve Çocuk Bayramı.', points: 15 },
        { id: 'tur-mk-007', type: 'true-false', difficulty: 1, question: 'Halk oyunları Türk kültürünün bir parçasıdır.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Horon, zeybek gibi oyunlar kültürümüzdür.', points: 10 },
        { id: 'tur-mk-008', type: 'fill-blank', difficulty: 2, question: 'Türklerin geleneksel gölge tiyatrosuna _____ denir.', correct: ['Karagöz'], hint: 'İki karakterden birinin adıdır.', points: 15 },
        { id: 'tur-mk-009', type: 'multiple-choice', difficulty: 1, question: 'Bayramlarda büyüklerimizin elini ne için öperiz?', options: ['Oyun oynamak için', 'Saygı göstermek için', 'Hediye istemek için', 'Yemek yemek için'], correct: 'Saygı göstermek için', hint: 'El öpmek saygı ifadesidir.', points: 10 },
        { id: 'tur-mk-010', type: 'multiple-choice', difficulty: 1, question: 'Nasreddin Hoca neyle meşhurdur?', options: ['Resim yapmak', 'Şarkı söylemek', 'Fıkraları ve zekası', 'Yüzmek'], correct: 'Fıkraları ve zekası', hint: 'Eğlenceli ve akıllı hikayeleri vardır.', points: 10 }
      ]
    },
    {
      id: 'ataturk',
      name: 'Tema 3: Milli Mücadele ve Atatürk',
      icon: '🏛️',
      questCode: 'TUR-03',
      semester: 1,
      description: 'Atatürk\'ün hayatı ve başarıları',
      introText: 'Cumhuriyetimizin kurucusu Atatürk\'ü öğreniyoruz.',
      lessons: [{ title: 'Atatürk\'ün Hayatı', text: 'Mustafa Kemal Atatürk, Selanik\'te 1881 yılında doğmuştur. Türk milletini bağımsızlığa kavuşturmak için mücadele etmiştir. 29 Ekim 1923\'te Cumhuriyeti kurmuştur.' }],
      questions: [
        { id: 'tur-ata-001', type: 'multiple-choice', difficulty: 1, question: 'Atatürk nerede doğmuştur?', options: ['Ankara', 'İstanbul', 'Selanik', 'Bursa'], correct: 'Selanik', hint: 'S ile başlar.', points: 15 },
        { id: 'tur-ata-002', type: 'fill-blank', difficulty: 1, question: 'Atatürk\'ün babasının adı _____ Bey\'dir.', correct: ['Ali Rıza'], hint: 'A harfiyle başlar.', points: 20 },
        { id: 'tur-ata-003', type: 'multiple-choice', difficulty: 1, question: 'Türkiye Cumhuriyeti hangi tarihte kurulmuştur?', options: ['23 Nisan 1920', '30 Ağustos 1922', '29 Ekim 1923', '19 Mayıs 1919'], correct: '29 Ekim 1923', hint: '29 Ekim Cumhuriyet Bayramı olarak kutlanır.', points: 15 },
        { id: 'tur-ata-004', type: 'true-false', difficulty: 1, question: 'Atatürk Türkiye\'nin ilk Cumhurbaşkanı\'dır.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Cumhuriyeti kuran kişidir.', points: 10 },
        { id: 'tur-ata-005', type: 'fill-blank', difficulty: 2, question: 'Atatürk 10 Kasım _____ yılında vefat etmiştir.', correct: ['1938'], hint: 'Şu anda her yıl 10 Kasım\'da anıyoruz.', points: 15 },
        { id: 'tur-ata-006', type: 'multiple-choice', difficulty: 1, question: 'Atatürk\'ün annesi kimdir?', options: ['Fatma Hanım', 'Zübeyde Hanım', 'Ayşe Hanım', 'Emine Hanım'], correct: 'Zübeyde Hanım', hint: 'Z harfiyle başlar.', points: 15 },
        { id: 'tur-ata-007', type: 'true-false', difficulty: 1, question: 'Atatürk yeni Türk alfabesini oluşturmuştur.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Latin harflerine dayanan yeni alfabe 1928\'de kabul edildi.', points: 10 },
        { id: 'tur-ata-008', type: 'multiple-choice', difficulty: 1, question: 'Atatürk\'ün Ankara\'da kurduğu önemli eser nedir?', options: ['İzmir Çarşısı', 'Sakarya Nehri', 'Anıtkabir', 'Galata Kulesi'], correct: 'Anıtkabir', hint: 'Atatürk oraya defnedilmiştir.', points: 15 },
        { id: 'tur-ata-009', type: 'multiple-choice', difficulty: 1, question: 'Kurtuluş Savaşı kaç yılında kazanıldı?', options: ['1920', '1921', '1922', '1923'], correct: '1922', hint: '30 Ağustos 1922\'de şanlı zafer.', points: 15 },
        { id: 'tur-ata-010', type: 'fill-blank', difficulty: 2, question: 'Atatürk "Yurtta _____, dünyada _____" demiştir.', correct: ['sulh'], hint: 'Bu söz barışla ilgilidir.', points: 20 }
      ]
    },
    {
      id: 'saglik-ve-spor',
      name: 'Tema 4: Sağlık ve Spor',
      icon: '⚽',
      questCode: 'TUR-04',
      semester: 2,
      description: 'Sağlıklı yaşam ve spor dalları',
      introText: 'Hadi biraz hareket edelim! Spor yapmak bizi güçlendirir.',
      lessons: [{ title: 'Sağlıklı Yaşam', text: 'Günde 3 ana öğün yemek, düzenli uyku ve spor yapmak sağlıklı yaşamanın sırlarıdır. Su içmeyi de unutmayalım!' }],
      questions: [
        { id: 'tur-ss-001', type: 'multiple-choice', difficulty: 1, question: 'Hangi spor dalı topla oynanmaz?', options: ['Basketbol', 'Futbol', 'Voleybol', 'Yüzme'], correct: 'Yüzme', hint: 'Suda yapılır.', points: 10 },
        { id: 'tur-ss-002', type: 'true-false', difficulty: 1, question: 'Yemeklerden önce ve sonra ellerimizi yıkamalıyız.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Temizlik sağlığın temelidir!', points: 10 },
        { id: 'tur-ss-003', type: 'multiple-choice', difficulty: 1, question: 'Günde kaç bardak su içmeliyiz?', options: ['1-2 bardak', '3-4 bardak', '8-10 bardak', '20 bardak'], correct: '8-10 bardak', hint: 'Su çok önemlidir!', points: 10 },
        { id: 'tur-ss-004', type: 'fill-blank', difficulty: 2, question: 'Meyve ve sebzeler vitamin ve _____ içerir.', correct: ['mineral', 'lif'], hint: 'Sağlığımız için gerekli besinlerdir.', points: 15 },
        { id: 'tur-ss-005', type: 'true-false', difficulty: 1, question: 'Her gün en az 1 saat spor yapmalıyız.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Düzenli spor vücut için iyidir.', points: 10 },
        { id: 'tur-ss-006', type: 'multiple-choice', difficulty: 1, question: 'Hangisi fast-food yiyeceğidir?', options: ['Elma', 'Hamburger', 'Salata', 'Yoğurt'], correct: 'Hamburger', hint: 'Sağlıklı beslenmede az tüketilmeli.', points: 10 },
        { id: 'tur-ss-007', type: 'multiple-choice', difficulty: 1, question: 'Diş fırçalamayı günde kaç kez yapmalıyız?', options: ['Haftada bir', 'Yılda bir', 'Günde en az 2 kez', 'Ayda bir'], correct: 'Günde en az 2 kez', hint: 'Sabah ve akşam fırçala!', points: 10 },
        { id: 'tur-ss-008', type: 'true-false', difficulty: 1, question: 'Ekranların başında uzun süre oturmak gözlere iyi gelir.', options: ['Doğru', 'Yanlış'], correct: 'Yanlış', hint: 'Gözleri dinlendirmek gerekir.', points: 10 },
        { id: 'tur-ss-009', type: 'multiple-choice', difficulty: 1, question: 'Aşağıdakilerden hangisi kış sporu değildir?', options: ['Kayak', 'Buz pateni', 'Snowboard', 'Yüzme'], correct: 'Yüzme', hint: 'Yüzme yazın yapılır.', points: 10 },
        { id: 'tur-ss-010', type: 'fill-blank', difficulty: 2, question: 'Kemiklerimizin güçlenmesi için _____ içmeliyiz.', correct: ['süt'], hint: 'Beyaz renkli, bardakla içilen bir içecek.', points: 15 }
      ]
    },
    {
      id: 'doga-ve-evren',
      name: 'Tema 5: Doğa ve Evren',
      icon: '🌍',
      questCode: 'TUR-05',
      semester: 2,
      description: 'Güneş, ay, yıldızlar ve doğa olayları',
      introText: 'Gökyüzüne bak! Neler görüyorsun?',
      lessons: [{ title: 'Güneş Sistemi', text: 'Güneş bizim en büyük ısı ve ışık kaynağımızdır. Ay ise Dünya\'nın uydusudur. Geceleri yıldızlar parlıyor!' }],
      questions: [
        { id: 'tur-de-001', type: 'true-false', difficulty: 1, question: 'Ay, dünyamızın uydusudur.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Geceleri onu görürüz.', points: 15 },
        { id: 'tur-de-002', type: 'multiple-choice', difficulty: 1, question: 'Geceleri gökyüzünde ışıldayan küçük cisimlere ne denir?', options: ['Güneş', 'Bulut', 'Yıldız', 'Gökkuşağı'], correct: 'Yıldız', hint: 'Geceleri parlayanlar.', points: 10 },
        { id: 'tur-de-003', type: 'fill-blank', difficulty: 1, question: 'En büyük ısı ve ışık kaynağımız _____ tır.', correct: ['güneş'], hint: 'G harfiyle başlar, gündüzleri parlıyor.', points: 10 },
        { id: 'tur-de-004', type: 'true-false', difficulty: 1, question: 'Yağmur, bulutların içindeki su damlacıklarından oluşur.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Yağmur döngüsü var!', points: 10 },
        { id: 'tur-de-005', type: 'multiple-choice', difficulty: 1, question: 'Gökkuşağı kaç renkten oluşur?', options: ['4', '5', '6', '7'], correct: '7', hint: 'Kırmızı, turuncu, sarı, yeşil, mavi, lacivert, mor.', points: 15 },
        { id: 'tur-de-006', type: 'multiple-choice', difficulty: 1, question: 'Hangi mevsimde yapraklar dökülür?', options: ['İlkbahar', 'Yaz', 'Sonbahar', 'Kış'], correct: 'Sonbahar', hint: 'Kış öncesi gelir.', points: 10 },
        { id: 'tur-de-007', type: 'fill-blank', difficulty: 2, question: 'Yerin altında yandığında lav çıkaran dağa _____ dağ denir.', correct: ['yanardağ'], hint: 'Lav fışkırtır.', points: 15 },
        { id: 'tur-de-008', type: 'true-false', difficulty: 1, question: 'Güneş doğudan doğar.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Güneş hep doğudan doğar!', points: 10 },
        { id: 'tur-de-009', type: 'multiple-choice', difficulty: 1, question: 'Karın yağması için hava nasıl olmalıdır?', options: ['Sıcak', '0 dereced altında', 'Bulutlu ama ılık', 'Rüzgarlı'], correct: '0 dereced altında', hint: 'Su donunca kar olur.', points: 15 },
        { id: 'tur-de-010', type: 'multiple-choice', difficulty: 1, question: 'Bahar mevsiminde neler çiçek açar?', options: ['Buz', 'Çiçekler', 'Taşlar', 'Metal'], correct: 'Çiçekler', hint: 'Doğa bahar gelince canlanır!', points: 10 }
      ]
    },
    {
      id: 'bilim-teknoloji',
      name: 'Tema 6: Bilim ve Teknoloji',
      icon: '🚀',
      questCode: 'TUR-06',
      semester: 2,
      description: 'İcatlar ve teknolojik aletler',
      introText: 'Geleceği bilimle ve teknolojiyle kuracağız!',
      lessons: [{ title: 'Teknoloji ve İcatlar', text: 'Telefonu Alexander Graham Bell icat etmiştir. Thomas Edison ampulü icat etti. Teknoloji hayatımızı kolaylaştırdı.' }],
      questions: [
        { id: 'tur-bt-001', type: 'multiple-choice', difficulty: 1, question: 'Haberi nereden izleriz?', options: ['Radyo', 'Fırın', 'Televizyon', 'Buzdolabı'], correct: 'Televizyon', hint: 'Görüntülü cihaz.', points: 10 },
        { id: 'tur-bt-002', type: 'fill-blank', difficulty: 1, question: 'Bilgisayar kullanırken internete bağlanmak için _____ gereklidir.', correct: ['modem', 'internet'], hint: 'M harfiyle başlar.', points: 20 },
        { id: 'tur-bt-003', type: 'multiple-choice', difficulty: 1, question: 'Telefonu kim icat etmiştir?', options: ['Edison', 'Newton', 'Graham Bell', 'Einstein'], correct: 'Graham Bell', hint: 'G.B. diye kısaltılır.', points: 15 },
        { id: 'tur-bt-004', type: 'true-false', difficulty: 1, question: 'Ampulü Thomas Edison icat etmiştir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Edison çok önemli bir mucittir.', points: 10 },
        { id: 'tur-bt-005', type: 'multiple-choice', difficulty: 1, question: 'Tablette en çok ne yapmalıyız?', options: ['Sadece oyun oynamak', 'Eğitici içerikler izlemek', 'Sabaha kadar kullanmak', 'Ekranı kırmak'], correct: 'Eğitici içerikler izlemek', hint: 'Teknolojiyi doğru kullanmak önemlidir.', points: 10 },
        { id: 'tur-bt-006', type: 'fill-blank', difficulty: 2, question: 'Bilgisayarlarda harfleri yazmak için _____ kullanırız.', correct: ['klavye'], hint: 'K harfiyle başlar.', points: 15 },
        { id: 'tur-bt-007', type: 'true-false', difficulty: 1, question: 'Robot, insan yapımı bir makinedir.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Bilim kurgu filmlerinde çok görürüz!', points: 10 },
        { id: 'tur-bt-008', type: 'multiple-choice', difficulty: 1, question: 'Uzay araştırmalarında hangi araç kullanılır?', options: ['Otomobil', 'Uzay mekiği', 'Tekne', 'Bisiklet'], correct: 'Uzay mekiği', hint: 'Roket gibi fırlar!', points: 15 },
        { id: 'tur-bt-009', type: 'multiple-choice', difficulty: 1, question: 'İnterneti kullanırken dikkat etmemiz gereken şey nedir?', options: ['Her şeyi paylaşmak', 'Güvenli siteleri kullanmak', 'Kişisel bilgileri vermek', 'Herkesle görüntülü konuşmak'], correct: 'Güvenli siteleri kullanmak', hint: 'İnternette güvenlik çok önemlidir.', points: 15 },
        { id: 'tur-bt-010', type: 'fill-blank', difficulty: 2, question: 'Fotoğraf çekmek için _____ kullanırız.', correct: ['fotoğraf makinesi', 'kamera', 'telefon'], hint: 'Birkaç doğru cevap var!', points: 10 }
      ]
    }
  ]
};
