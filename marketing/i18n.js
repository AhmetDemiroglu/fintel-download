/* Fintel · marketing landing copy (tr)
   Metinler uygulamanın ekranlarından ve mağaza açıklamasından alınır.
   Window.I18N olarak açılır; app.js (data-i18n) ve scene.js tüketir. */
(function () {
  const TR = {
    meta: {
      title: `Fintel · Evin hesabı, cebinde`,
      desc: `Maaş dönemini, günlük limitini ve taksitlerini tek yerde takip et. Harcamanı tek satırda kaydet, fişini okut, Nova'ya sor. Reklam yok.`,
    },
    nav: { features: `Özellikler`, how: `Nasıl çalışır`, faq: `SSS`, download: `İndir` },
    hero: {
      badge: `Aile bütçesi uygulaması`,
      title: `Evin hesabı, <span class="hl">cebinde</span>.`,
      desc: `Dönemini maaş gününe göre kur, bugün ne kadar harcayabileceğini hep gör. Harcamanı tek satırda kaydet, fişini okut, Nova'ya sor.`,
      ctaPrimary: `Ücretsiz indir`,
      ctaSecondary: `Nasıl çalışır?`,
      note: `Ücretsiz · Reklam yok · Hesap açmadan denenebilir`,
      scroll: `Kaydır`,
    },
    soon: `ÇOK YAKINDA`,
    marquee: `GÜNLÜK LİMİT · MAAŞ DÖNEMİ · TAKVİM · TAKSİT · DÜZENLİ ÖDEME · FİŞTEN KAYIT · NOVA · CSV · GECE TEMASI · REKLAM YOK`,
    features: {
      eyebrow: `Özellikler`,
      heading: `Evin hesabı için <span class="hl">ihtiyacın</span> olan her şey.`,
      sub: `Maaş gününden bir sonraki maaşa, her kuruş görünür.`,
      ozet: {
        tag: `Özet`,
        title: `Bugün ne kadar harcayabilirsin?`,
        desc: `Kalan bütçe, günlük limit ve bugün kalan tutar tek kartta. Limit gün içinde değişmez: sabah gördüğün sayı akşam da aynıdır.`,
        c1: `Kalan bütçe`, c2: `Günlük limit`, c3: `Haftalık çubuklar`,
      },
      takvim: {
        tag: `Takvim`,
        title: `Ayını gün gün gör.`,
        desc: `Her gün limit içinde, sınırda ya da aşımda olarak renklenir. Güne dokununca o günün limiti, harcaması ve kayıtları açılır.`,
        c1: `Limit içinde`, c2: `Aşım`, c3: `Gün detayı`,
      },
      hizli: {
        tag: `Kayıt`,
        title: `Tek satırda kayıt.`,
        desc: `"market 640" yaz, tutar ve kategori kendiliğinden ayrışır. İstersen tuş takımı ve kategori seçimiyle gir. Son kullandığın kategoriler önde gelir.`,
        c1: `Tek satır`, c2: `Tuş takımı`, c3: `Son kategoriler`,
      },
      taksit: {
        tag: `Taksit`,
        title: `Taksit ve düzenli ödemeler önceden ayrılır.`,
        desc: `Taksitli harcama aylara dağılır. Kira, fatura ve abonelikler bir kez tanımlanır, günü gelince kaydedilir ve kendi gününde limit aşımı gibi görünmez.`,
        c1: `Taksit`, c2: `Kira ve fatura`, c3: `Abonelik`,
      },
      fis: {
        tag: `Fiş`,
        title: `Fişi okut, kayıt hazır.`,
        desc: `Fişin fotoğrafını çek ya da PDF faturayı seç. Tutar, tarih, işletme ve kategori forma dolar, sen kontrol edip kaydedersin.`,
        c1: `Fotoğraf`, c2: `PDF fatura`, c3: `Sen onaylarsın`,
      },
      nova: {
        tag: `Nova`,
        title: `Nova dönemini okur, sorularını yanıtlar.`,
        desc: `Dönem raporu çıkarır, "Bu dönem markete ne kadar harcadım?" gibi sorulara yanıt verir. Tutarları uygulama hesaplar, Nova yorumlar. Yatırım tavsiyesi vermez.`,
        c1: `Dönem raporu`, c2: `Sohbet`, c3: `Tutarlar uygulamadan`,
      },
    },
    how: {
      eyebrow: `Nasıl çalışır`,
      heading: `Maaş gününden <span class="hl">hesaba</span> üç adım.`,
      s1t: `Dönemini kur`, s1d: `Gelirini ve sabit giderlerini bir kez gir, günlük limitin hesaplansın.`,
      s2t: `Harcamanı kaydet`, s2d: `Tek satırda yaz ya da fişini okut. Taksit ve düzenli ödemeler kendiliğinden işlenir.`,
      s3t: `Limitini izle`, s3d: `Özet ve takvimde bugünü, ayı ve kalan bütçeni gör.`,
    },
    stats: {
      additives: `satırda kayıt`,
      diets: `reklam`,
      allergens: `tema: gündüz ve gece`,
      scan: `giriş yöntemi`,
    },
    download: {
      eyebrow: `İndir`,
      heading: `Bu maaş dönemini bilerek başlat.`,
      desc: `Fintel ücretsizdir ve reklam içermez. Hesap açmadan deneyebilirsin: kayıtların yalnızca cihazında kalır.`,
      note: `Fintel finansal danışmanlık vermez. Nova yatırım tavsiyesi vermez; yorumlar yalnızca bilgilendirme amaçlıdır.`,
    },
    faq: {
      eyebrow: `SSS`,
      heading: `Sorular, yanıtlandı.`,
      items: [
        { q: `Fintel ücretsiz mi?`, a: `<p>Evet. Fintel ücretsizdir, reklam göstermez ve abonelik istemez.</p>` },
        { q: `Hesap açmak zorunda mıyım?`, a: `<p>Hayır. Hesapsız deneyebilirsin: kayıtların yalnızca bu cihazda tutulur ve sunucuya gitmez. Giriş yapınca kayıtların hesabına bağlanır ve Nova açılır. Giriş için Google, Apple (iOS) ya da e-posta kullanabilirsin.</p>` },
        { q: `Fişten kayıt nasıl çalışıyor?`, a: `<p>Fişin fotoğrafını çeker ya da PDF faturayı seçersin. Görsel okunmak üzere Google Gemini'ye gönderilir, tutar, tarih, işletme ve kategori forma dolar. Sen kontrol edip kaydedersin. Fiş görseli saklanmaz.</p>` },
        { q: `Nova yatırım tavsiyesi verir mi?`, a: `<p>Hayır. Nova dönem raporu çıkarır ve harcama verin hakkındaki soruları yanıtlar. Tutarları uygulama hesaplar, Nova yorumlar. Yatırım ya da finansal danışmanlık vermez.</p>` },
        { q: `Verilerimi nasıl silerim ya da destek alırım?`, a: `<p>Uygulama içinden: <strong>Ayarlar &gt; Verilerim</strong> ile kayıtlarını CSV olarak alabilir, hesabını ve tüm verini silebilirsin. Diğer her şey için <strong>info@septimuslab.com</strong> adresine yaz.</p>` },
      ],
    },
    footer: {
      tagline: `Evin hesabı, cebinde.`,
      product: `Ürün`, legal: `Yasal`, company: `Şirket`,
      privacy: `Gizlilik Politikası`, terms: `Kullanım Koşulları`, support: `Destek`, contact: `İletişim`,
      rights: `Tüm hakları saklıdır.`,
      disclaimer: `Fintel finansal danışmanlık vermez. Nova'nın yorumları yalnızca bilgilendirme amaçlıdır.`,
    },
  };

  window.I18N = { tr: TR };
})();
