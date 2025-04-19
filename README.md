# BlogApp-FullStack (Backend ve Frontend)

**BlogApp-FullStack**, kullanıcıların blog yazılarını paylaşabileceği bir platformdur. Proje iki ana bölümden oluşmaktadır:
- **Backend**: Node.js, Express.js ve MongoDB kullanılarak geliştirilmiş bir API.
- **Frontend**: React ve modern frontend teknolojileri kullanılarak geliştirilmiş kullanıcı arayüzü.

---

## Backend

### Kullanılan Teknolojiler
- **Node.js**: Sunucu tarafında çalıştırılan JavaScript ortamı.
- **Express.js**: API isteklerini yönetmek için minimalist web framework.
- **MongoDB**: NoSQL veritabanı.
- **dotenv**: Ortam değişkenlerini yönetmek için kullanılan bir modül.
- **jsonwebtoken**: Kimlik doğrulama için JSON Web Token kullanımı.
- **mongoose**: MongoDB için ODM (Object Data Modeling) kütüphanesi.
- **crypto**: Şifreleme ve hash işlemleri için.
- **multer**: Dosya yükleme işlemleri için.
- **Cloudinary**: Görsel yüklemeler için.
- **cors**: Cross-Origin Resource Sharing (CORS) yönetimi.
- **express-async-errors**: Asenkron hataları yönetmek için.
- **Swagger** ve **Redoc**: API dokümantasyonu için.
- **swagger-autogen**: Swagger otomatik oluşturma için. 
- **regex destekli arama**: Arama sorgularında büyük/küçük harf duyarsızlık.

### Özellikler
- **Veritabanı Bağlantısı**
  - MongoDB bağlantısı `dbConnection` fonksiyonu ile sağlanır.
  - Bağlantı hataları konsola loglanır.
- **Cloudinary Desteği**
  - Görsel yüklemeler için Cloudinary API entegrasyonu yapılabilir.
- **Görsel Yükleme**
  - **Multer**: Dosya yükleme işlemleri için kullanılır.
  - **Cloudinary**: Yüklenen dosyalar Cloudinary'e gönderilir.
  - **Desteklenen Formatlar**
    - JPEG, JPG, PNG, GIF, WEBP.
  - **Yükleme Süreci**
    - Yüklenen dosya adı düzenlenir (`fixFileName`).
    - Dosya geçici olarak kaydedilir ve ardından Cloudinary'e yüklenir.
- **Kimlik Doğrulama**
  - **JWT (Bearer Token)**: Kullanıcı kimlik doğrulaması için `jsonwebtoken` kullanılır.
  - **Simple Token**: Veritabanındaki `Token` modeli ile kaydedilen tokenlara göre doğrulama yapılır.
- **Yetkilendirme**
  - **isLogin**: Kullanıcının oturum açıp açmadığını kontrol eder. Kullanıcı oturum açmamışsa erişim engellenir.
  - **isAdmin**: Kullanıcının admin olup olmadığını kontrol eder. Sadece admin yetkisi olan kullanıcılar belirli işlemleri gerçekleştirebilir.
- **Global Hata Yönetimi**
  - **ErrorHandler Middleware**
    - Sunucu tarafında oluşan tüm hatalar bu middleware ile yakalanır ve anlamlı bir cevap döndürülür.
    - Dönen hata yanıtı şu bilgileri içerir:
      - `error`: Hata durumu.
      - `message`: Hata mesajı.
      - `cause`: Hatanın sebebi.
      - `body`: İstekle gönderilen veri.
      - `stack`: Hata yığını. 
