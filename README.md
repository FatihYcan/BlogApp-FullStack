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
- **Login**: Kullanıcı adı/e-posta ve şifre doğrulamasıyla giriş yapılır, token üretilir.
- **Forgot Password**: Kullanıcı adı/e-posta ile şifre sıfırlama işlemi yapılır.
- **Logout**: Token silinir, oturum kapatılır.

#### Kullanıcı Modeli (User)
- **Alanlar**:
  - `username` (String): Benzersiz, zorunlu.
  - `firstName` / `lastName` (String): Ad ve soyad, zorunlu.
  - `email` (String): Benzersiz, doğrulamalı.
  - `password` (String): Şifre kurallara uygun, hashlenmiş.
  - `image` (Array): Kullanıcı görselleri.
  - `isActive` / `isAdmin` (Boolean): Aktiflik ve adminlik durumu.
- **Şifre Doğrulama**:
  - Büyük/küçük harf, rakam, özel karakter içermeli, min. 8 karakter.
- **Şifreleme**:
  - `crypto.pbkdf2Sync` ile hashlenir ve saklanır.

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

## Frontend

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **Redux Toolkit**: Global state yönetimi ve slice yapılandırmaları.
- **Redux Persist**: Oturum verisi yönetimi.
- **Material-UI (MUI)**: Gelişmiş React bileşenleri.
- **React-Toastify**: Kullanıcı bildirimleri için.
- **React Router**: Yönlendirme işlemleri.
- **MUI Theme Customization**: Tema ve bileşen özelleştirmeleri.
- **Formik ve Yup**: Form yönetimi ve doğrulama.
- **Axios**: HTTP istekleri için özelleştirilmiş API istemcileri.
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji Mart**: Emoji seçici desteği.
- **React Helmet**: Sayfa başlığı ve meta etiketleri gibi <head> içeriğini dinamik olarak yönetmek için.
- **Tailwind CSS**: Utility-first yapısı sayesinde hızlı ve esnek stil oluşturmayı sağlayan CSS framework’ü.

## Özellikler

- **React** ve **Redux Toolkit** ile güçlü ve modern yapı.
- **Redux Persist**: Oturum bilgilerini saklama.
- **Material-UI (MUI)** ve **Tailwind CSS** ile özelleştirilebilir ve responsive tasarım.
- **React Toastify**: Kullanıcı bildirimleri.
- Işık ve karanlık mod destekli tema özelleştirmeleri.

### Öne Çıkan Özellikler
- **useAxios Hook**: Public, token gerektiren ve multipart API çağrıları.
- **Kimlik Doğrulama (useAuthCalls)**:
  - Giriş yapma, kayıt olma, şifre sıfırlama, çıkış yapma.
- **Blog İşlemleri (useBlogCalls)**:
  - Blog listeleme, oluşturma, güncelleme, silme, beğenme.
  - Sayfalama, filtreleme, en çok beğenilen/görüntülenen bloglar.
- **Yorum ve Alt Yorum İşlemleri**:
  - Yorum ekleme, düzenleme, silme (useCommentCalls, useBottomCommentCalls).
- **Kategori İşlemleri (useCategoryCalls)**:
  - Kategori listeleme, ekleme, düzenleme, silme.
- **Kullanıcı İşlemleri (useUserCalls)**:
  - Kullanıcı listeleme, detay, güncelleme, silme.

### Slice’lar
- **authSlice**: Kimlik doğrulama işlemleri için durum yönetimi.
- **blogSlice**: Bloglarla ilgili işlem ve durum yönetimi.
- **contentSlice**: Blog içeriklerini ekleme, güncelleme ve silme işlemleri.
- **commentSlice**: Yorum ekleme, düzenleme ve silme işlemleri.
- **bottomCommentSlice**: Alt yorum yönetimi.
- **categorySlice**: Kategori oluşturma, düzenleme ve silme işlemleri.
- **userSlice**: Kullanıcı bilgileri ve işlem durumları yönetimi.

### Bileşenler
- **Navbar**: Tema geçişi, giriş yapma modalı.
- **Blogs**: Blog kartları, beğeni/görüntüleme listeleri.
- **BlogDetail**: Blog detayları, içerik ve yorum yönetimi.
- **Users**: Kullanıcı kartlarını listeleme ve detaylarını görüntüleme.
- **UserDetail**: Kullanıcı bilgilerini detaylı görüntüleme, güncelleme ve silme.
- **NewCategory**: Yeni kategori ekleme formu.
- **Categories**: Kategori kartları, düzenleme/silme modalı.
- **NewBlog**: Yeni blog oluşturma ve içerik ekleme.
- **About**: Platformun amacı ve vizyonu hakkında bilgi.
- **MyBlogs**: Kullanıcının yazdığı blogları listeleme ve yönetme.
- **MyBlogDetail**: Kullanıcının blog detaylarını yönetme ve içerik/görüş ekleme.
- **Profile**: Kullanıcı profili bilgileri ve düzenleme.
- **Login & Register**: Form doğrulama için **Formik** ve **Yup**.

### Ekstra Özellikler
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji-Mart**: Emoji seçici.
- **ScrollToTop**: Sayfa geçişlerinde otomatik yukarı kaydırma.
- **Tailwind CSS**: Karanlık mod desteği ve hızlı tasarım.

### Responsive ve Kullanıcı Dostu Tasarım
- Mobil uyumlu **Drawer (Menu)**.
- Yükleme ekranları için iskelet bileşenler (**Skeletons**).
- Kullanıcı dostu modallar ve formlar.
