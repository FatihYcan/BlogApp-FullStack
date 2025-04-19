# BlogApp-FullStack

**BlogApp-FullStack** is a platform where users can share blog posts. The project consists of two main parts:
- **Backend**: An API developed using Node.js, Express.js, and MongoDB.
- **Frontend**: A user interface developed using React and modern frontend technologies.

---

## Backend

### Technologies Used
- **Node.js**: JavaScript runtime for server-side execution.
- **Express.js**: Minimalist web framework for handling API requests.
- **MongoDB**: NoSQL database.
- **dotenv**: Module for managing environment variables.
- **jsonwebtoken**: JSON Web Token for authentication.
- **mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **crypto**: For encryption and hashing.
- **multer**: For file upload handling.
- **Cloudinary**: For image uploads.
- **cors**: Cross-Origin Resource Sharing (CORS) management.
- **express-async-errors**: For handling asynchronous errors.
- **Swagger** and **Redoc**: For API documentation.
- **swagger-autogen**: Automatic generation of Swagger documentation.
- **Regex-supported search**: Case-insensitive search queries.

### Features

- **Database Connection**: MongoDB connection via `dbConnection`, with errors logged to the console.
- **Image Uploading**: 
  - **Multer**: Used for file uploads.
  - **Cloudinary**: Images are uploaded to Cloudinary (supports JPEG, JPG, PNG, GIF, WEBP).
  - **fixFileName**: File names are fixed, and the upload is completed.
- **Authentication**: 
  - **JWT**: User authentication using `jsonwebtoken`.
  - **Simple Token**: Authentication using the `Token` model in the database.
- **Authorization**: 
  - **isLogin**: Session control.
  - **isAdmin**: Admin privilege control.
- **Error Management**: 
  - **ErrorHandler Middleware**: Captures server errors and returns meaningful responses (`error`, `message`, `cause`, `body`, `stack`).

#### Auth Controller (Auth)
- **Login**: Allows login via username/email and password validation, generates a token.
- **Forgot Password**: Allows password reset using username/email.
- **Logout**: Deletes the token and ends the session.

#### User Controller (Users)
- **Listing**: Admin can view all users, others can view only their information.
- **Creation**: Registers a new user, profile pictures are uploaded to Cloudinary.
- **Update**: Users can update their own information, admins can update others' information.
- **Deletion**: Users cannot delete themselves, but admins can delete other users.

#### Blog Controller (Blogs)
- **Listing**: Supports filtering, sorting, and searching.
- **Creation/Update**: Users can create and update their blogs.
- **Likes**: Blogs can be liked/unliked.

#### Comments and Sub-Comments (Comments & BottomComments)
- **Listing**: Supports search, filtering, and sorting.
- **Creation/Update/Deletion**: Comments can be managed by users or admins.

#### Likes
- Adding/removing likes to blogs and viewing the total count.

#### Views
- Blog view information is recorded (`userId` or `deviceId`).

#### Category Controller (Categories)
- Admin users can create/update categories.
- Categories with assigned blogs cannot be deleted.

#### Content Controller (Contents)
- Contents can be added, updated, and images uploaded to Cloudinary.

#### Middleware
- **Authentication**: Checks user session status (`isLogin`, `isAdmin`).
- **Filtering and Pagination**: Supports filtering, searching, and sorting for data queries.
- **Error Management**: Returns meaningful error messages using `errorHandler`.

#### Documentation
- **Swagger & Redoc**: API documentation is accessible at `/documents/swagger` and `/documents/redoc`.

**API Documentation**
   - [SWAGGER](https://koseyazisi.onrender.com/documents/swagger/)
   - [REDOC](https://koseyazisi.onrender.com/documents/redoc)
   - [JSON](https://koseyazisi.onrender.com/documents/json)

---

## Frontend

### Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For global state management and slice configurations.
- **Redux Persist**: For session data management.
- **Material-UI (MUI)**: Advanced React components.
- **React-Toastify**: For user notifications.
- **React Router**: For routing.
- **MUI Theme Customization**: For theme and component customizations.
- **Formik and Yup**: For form management and validation.
- **Axios**: For HTTP requests with custom API clients.
- **React-Quill**: Rich text editor.
- **Emoji Mart**: Emoji picker support.
- **React Helmet**: Dynamic management of `<head>` content like page titles and meta tags.
- **Tailwind CSS**: A utility-first CSS framework for quick and flexible styling.

### Features

- Powerful and modern structure with **React** and **Redux Toolkit**.
- **Redux Persist**: Stores session information.
- Customizable and responsive design using **Material-UI (MUI)** and **Tailwind CSS**.
- **React Toastify**: For user notifications.
- Theme customization with light and dark mode support.

### Key Features
- **useAxios Hook**: API calls for public, token-required, and multipart requests.
- **Authentication (useAuthCalls)**:
  - Login, registration, password reset, logout.
- **Blog Operations (useBlogCalls)**:
  - Listing, creating, updating, deleting, and liking blogs.
  - Pagination, filtering, and most liked/viewed blogs.
- **Content Operations (useContentCalls)**:
  - Adding, editing, and deleting blog content.
- **Comment and Sub-Comment Operations (useCommentCalls, useBottomCommentCalls)**:
  - Adding, editing, and deleting comments and sub-comments.
- **Category Operations (useCategoryCalls)**:
  - Listing, adding, editing, and deleting categories.
- **User Operations (useUserCalls)**:
  - Listing users, viewing details, updating, and deleting.

### Slices
- **authSlice**: State management for authentication operations.
- **blogSlice**: State management for blog-related operations.
- **contentSlice**: For adding, updating, and deleting blog content.
- **commentSlice**: State management for adding, editing, and deleting comments.
- **bottomCommentSlice**: Sub-comment management.
- **categorySlice**: For creating, editing, and deleting categories.
- **userSlice**: Managing user information and operation statuses.

### Components
- **Navbar**: Theme switcher, login modal.
- **Blogs**: Blog cards, like/view lists.
- **BlogDetail**: Blog details, content, and comment management.
- **Users**: Listing user cards and viewing details.
- **UserDetail**: Viewing, updating, and deleting user information.
- **NewCategory**: Form for adding new categories.
- **Categories**: Category cards, edit/delete modal.
- **NewBlog**: Creating new blogs and adding content.
- **About**: Information about the platform's purpose and vision.
- **MyBlogs**: Managing and listing user blogs.
- **MyBlogDetail**: Managing blog details and adding content/comments.
- **Profile**: User profile details and editing.
- **Login & Register**: Form validation using **Formik** and **Yup**.

### Extra Features
- **React-Quill**: Rich text editor.
- **Emoji-Mart**: Emoji picker.
- **ScrollToTop**: Automatically scrolls to the top during page transitions.
- **Tailwind CSS**: Supports dark mode and quick design.

### Responsive and User-Friendly Design
- Mobile-friendly **Drawer (Menu)**.
- Skeleton components for loading screens (**Skeletons**).
- User-friendly modals and forms.

---

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
- **İçerik İşlemleri (useContentCalls)**
  - İçerik ekleme, düzenleme, silme.
- **Yorum ve Alt Yorum İşlemleri (useCommentCalls, useBottomCommentCalls)**:
  - Yorum ve alt yorum ekleme, düzenleme, silme .
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
