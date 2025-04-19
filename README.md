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

- **Veritabanı Bağlantısı**: MongoDB bağlantısı `dbConnection` ile yapılır, hatalar konsola loglanır.
- **Görsel Yükleme**: 
  - **Multer**: Dosya yükleme için kullanılır.
  - **Cloudinary**: Görseller Cloudinary'e yüklenir (JPEG, JPG, PNG, GIF, WEBP desteklenir).
  - **fixFileName**: Dosya adları düzenlenir ve yükleme tamamlanır.
- **Kimlik Doğrulama**: 
  - **JWT**: Kullanıcı doğrulaması `jsonwebtoken` ile yapılır.
  - **Simple Token**: Veritabanındaki `Token` modeli ile doğrulama.
- **Yetkilendirme**: 
  - **isLogin**: Oturum kontrolü.
  - **isAdmin**: Admin yetkisi kontrolü.
- **Hata Yönetimi**: 
  - **ErrorHandler Middleware**: Sunucu hatalarını yakalar ve anlamlı bir yanıt döndürür (`error`, `message`, `cause`, `body`, `stack`).

#### Auth Controller (Auth)
- **Login**: Kullanıcı adı/e-posta ile giriş yapılır, şifre doğrulanır ve token üretilir.
- **Forgot Password**: Şifre sıfırlama işlemi yapılır.
- **Logout**: Token silinir ve oturum kapatılır.

#### Kullanıcı Controller (Users)
- **Listeleme**: Admin tüm kullanıcıları, diğerleri sadece kendi bilgilerini görebilir.
- **Oluşturma**: Yeni kullanıcı kaydı oluşturulur, profil resmi Cloudinary'e yüklenir.
- **Güncelleme**: Kullanıcılar kendi bilgilerini, admin başkalarının bilgilerini güncelleyebilir.
- **Silme**: Kullanıcılar kendilerini silemez, admin diğerlerini silebilir.

#### Blog Controller (Blogs)
- **Listeleme**: Filtreleme, sıralama ve arama desteklenir.
- **Oluşturma/Güncelleme**: Kullanıcılar kendi bloglarını oluşturup güncelleyebilir.
- **Beğeni**: Blog beğenisi eklenebilir/kaldırılabilir.

#### Yorumlar ve Alt Yorumlar (Comments & BottomComments)
- **Listeleme**: Arama, filtreleme ve sıralama desteklenir.
- **Oluşturma/Güncelleme/Silme**: Yorumlar kullanıcı veya admin tarafından yönetilir.

#### Beğeniler (Likes)
- Blog beğeni ekleme/kaldırma ve toplam sayısını görüntüleme.

#### Görüntülemeler (Views)
- Blog görüntüleme bilgileri kaydedilir (`userId` veya `deviceId`).

#### Kategori Controller (Categories)
- Admin kullanıcılar kategorileri oluşturabilir/güncelleyebilir.
- Blog ataması yapılmış kategoriler silinemez.

#### İçerik Controller (Contents)
- Bloglara içerik eklenir, güncellenir ve görseller Cloudinary'e yüklenir.

#### Middleware’ler
- **Kimlik Doğrulama**: Kullanıcı oturum durumu (`isLogin`, `isAdmin`) kontrolü.
- **Filtreleme ve Sayfalama**: Veri sorguları için filtreleme, arama ve sıralama desteği.
- **Hata Yönetimi**: `errorHandler` ile anlamlı hata mesajları döndürülür.

#### Dokümantasyon
- **Swagger & Redoc**: API dokümantasyonuna `/documents/swagger` ve `/documents/redoc` adreslerinden erişilebilir.

**API Dokümantasyonu**
   - [SWAGGER](https://koseyazisi.onrender.com/documents/swagger/)
   - [REDOC](https://koseyazisi.onrender.com/documents/redoc)
   - [JSON](https://koseyazisi.onrender.com/documents/json)

---
