# BlogApp-FullStack

**BlogApp-FullStack** is a platform where users can share their blog posts. The project consists of two main parts:
- **Backend**: An API developed using Node.js, Express.js, and MongoDB.
- **Frontend**: A user interface developed using React and modern frontend technologies.

---

## Backend

### Technologies Used
- **Node.js**: JavaScript runtime for server-side execution.
- **Express.js**: A minimalist web framework to handle API requests.
- **MongoDB**: NoSQL database.
- **dotenv**: A module for managing environment variables.
- **jsonwebtoken**: JSON Web Token for authentication.
- **mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **crypto**: For encryption and hashing operations.
- **multer**: For handling file uploads.
- **Cloudinary**: For image uploads.
- **cors**: Cross-Origin Resource Sharing (CORS) management.
- **express-async-errors**: For handling asynchronous errors.
- **Swagger** and **Redoc**: For API documentation.
- **swagger-autogen**: For automatically generating Swagger documentation.
- **Regex-supported search**: Case-insensitive search queries.

### Features

- **Database Connection**: MongoDB connection is established using `dbConnection`, and any errors are logged to the console.
- **Image Upload**: 
  - **Multer**: Used for file uploads.
  - **Cloudinary**: Images are uploaded to Cloudinary (supports JPEG, JPG, PNG, GIF, WEBP).
  - **fixFileName**: File names are fixed and then uploaded.
- **Authentication**: 
  - **JWT**: User authentication is performed using `jsonwebtoken`.
  - **Simple Token**: Authentication based on tokens stored in the `Token` model in the database.
- **Authorization**: 
  - **isLogin**: Checks if a user is logged in.
  - **isAdmin**: Checks if a user has admin privileges.
- **Error Handling**: 
  - **ErrorHandler Middleware**: Captures server-side errors and returns a meaningful response (`error`, `message`, `cause`, `body`, `stack`).

#### Auth Controller (Auth)
- **Login**: Login using a username/email and password. A token is generated upon successful validation.
- **Forgot Password**: Password reset via username/email.
- **Logout**: Deletes the token and ends the session.

#### User Controller (Users)
- **List**: Admin users can view all users, while other users can only view their own information.
- **Create**: Creates a new user record, and the profile image is uploaded to Cloudinary.
- **Read**: Users can view their own information, while admins can view other users' information.
- **Update**: Users can update their own information, while admins can update others' information.
- **Delete**: Users cannot delete their own accounts, but admins can delete other users' accounts.

#### Token Controller (Tokens)
- **List**: Only admin users can view all token records.
- **Create**: Only admin users can create new token records.
- **Read**: Only admin users can view details of a specific token record.
- **Update**: Only admin users can update a specific token record.
- **Delete**: Only admin users can delete a specific token record.

#### Blog Controller (Blogs)
- **List**: View all blog records.
- **Create**: Logged-in users can create blog posts, and blog images are uploaded to Cloudinary.
- **Read**: View blog details, and a `View` record is generated during viewing.
- **Update**: Users can update their own blogs, while admins can update others' blogs.
- **Delete**: Users can delete their own blogs, while admins can delete others' blogs.
- **Likes**: Blogs can be liked or unliked.

#### Category Controller (Categories)
- **List**: View all category records.
- **Create**: Only admin users can create new category records.
- **Read**: View details of a specific category record.
- **Update**: Only admin users can update a specific category record.
- **Delete**: Only admin users can delete a specific category record; however, categories associated with blogs cannot be deleted.

### Content Controller (Contents)
- **List**: View all content records.
- **Create**: Logged-in users can create content for blogs, and content images are uploaded to Cloudinary.
- **Read**: View details of a specific content record.
- **Update**: Users can update their own content, while admins can update others' content. Images can be updated, removed, or added.
- **Delete**: Users can delete their own content, while admins can delete others' content.

#### Comment and BottomComment Controller (Comments & BottomComments)
- **List**: View all comment and sub-comment records.
- **Create**: Logged-in users can add comments and sub-comments to blogs.
- **Read**: View details of a specific comment or sub-comment record.
- **Update**: Users can update their own comments and sub-comments, while admins can update others' comments and sub-comments.
- **Delete**: Users can delete their own comments and sub-comments, while admins can delete others' comments and sub-comments.

#### Likes
- Add/remove likes to blogs and view the total count.

#### Views
- Blog view information is recorded (`userId` or `deviceId`).

#### Middleware
- **Authentication**: Checks the user's session status (`isLogin`, `isAdmin`).
- **Filtering and Pagination**: Provides support for filtering, searching, and sorting data queries.
- **Error Handling**: Returns meaningful error messages using `errorHandler`.

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
- **React Helmet**: For dynamically managing `<head>` content like page titles and meta tags.
- **Tailwind CSS**: A utility-first CSS framework for quick and flexible styling.

### Features

- Strong and modern architecture with **React** and **Redux Toolkit**.
- **Redux Persist**: For storing session information.
- Customizable and responsive design with **Material-UI (MUI)** and **Tailwind CSS**.
- **React Toastify**: For user notifications.
- Theme customization with light and dark mode support.

### Key Features
- **useAxios Hook**: API calls for public, token-required, and multipart requests.
- **Authentication (useAuthCalls)**:
  - Login, registration, password reset, logout.
- **Blog Operations (useBlogCalls)**:
  - List, create, update, delete, and like blogs.
  - Pagination, filtering, and most liked/viewed blogs.
- **Content Operations (useContentCalls)**
  - Add, edit, and delete blog content.
- **Comment and Sub-Comment Operations (useCommentCalls, useBottomCommentCalls)**:
  - Add, edit, and delete comments and sub-comments.
- **Category Operations (useCategoryCalls)**:
  - List, add, edit, and delete categories.
- **User Operations (useUserCalls)**:
  - List users, view details, update, and delete.

### Slices
- **authSlice**: State management for authentication operations.
- **blogSlice**: State management for blog-related operations.
- **contentSlice**: For adding, updating, and deleting blog content.
- **commentSlice**: State management for adding, editing, and deleting comments.
- **bottomCommentSlice**: Sub-comment management.
- **categorySlice**: For creating, editing, and deleting categories.
- **userSlice**: Managing user information and operation statuses.

### Extra Features
- **React-Quill**: Rich text editor.
- **Emoji-Mart**: Emoji picker.
- **ScrollToTop**: Automatically scrolls to the top during page transitions.
- **Tailwind CSS**: Dark mode support and quick styling.

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

#### User Controller (Users)
- **Listeleme**: Admin tüm kullanıcıları, diğerleri sadece kendi bilgilerini görebilir.
- **Oluşturma**: Yeni kullanıcı kaydı oluşturulur, profil resmi Cloudinary'e yüklenir.
- **Okuma**: Kullanıcılar kendi bilgilerini, admin başkalarının bilgilerini görüntüleyebilir.
- **Güncelleme**: Kullanıcılar kendi bilgilerini, admin başkalarının bilgilerini güncelleyebilir.
- **Silme**: Kullanıcılar kendilerini silemez, admin başka kullanıcıları silebilir.

#### Token Controller (Tokens)
- **Listeleme**: Sadece admin yetkisine sahip kullancılar tüm token kayıtlarını görebilir.
- **Oluşturma**: Sadece admin yetkisine sahip kullancılar yeni token kaydı oluştur.
- **Okuma**: Sadece admin yetkisine sahip kullancılar belirli bir token kaydının detaylarını görebilir.
- **Güncelleme**: Sadece admin yetkisine sahip kullancılar belirli bir token kaydını günceller.
- **Silme**: Sadece admin yetkisine sahip kullancılar belirli bir token kaydını siler.

#### Blog Controller (Blogs)
- **Listeleme**: Tüm blog kayıtlarını görebilir.
- **Oluşturma**: Oturum açmış kullanıcı blog kaydı oluşturabilir, blog resmi Cloudinary'e yüklenir.
- **Okuma**: Blog bilgilerini görüntüleyebilir ve görüntüleme sırasında `View` kaydı oluşur.
- **Güncelleme**: Kullanıcılar kendi bloglarını, admin başkalarının bloglarını güncelleyebilir.
- **Silme**: Kullanıcılar kendi bloglarını, admin başkalarının bloglarını silebilir.
- **Beğeni**: Blog beğenisi eklenebilir/kaldırılabilir.

#### Category Controller (Categories)
- **Listeleme**: Tüm kategori kayıtlarını görebilir.
- **Oluşturma**: Sadece admin yetkisine sahip kullancılar yeni kategori kaydı oluştur.
- **Okuma**: Belirli bir kategori kaydının detaylarını görebilir.
- **Güncelleme**: Sadece admin yetkisine sahip kullancılar belirli bir kategori kaydını günceller.
- **Silme**:  Sadece admin yetkisine sahip kullancılar belirli bir kategori kaydını siler ancak kategoriye ait bloglar varsa, kategori silinemez.

### Content Controller (Contents)
- **Listeleme**: Tüm içerik kayıtlarını görebilir.
- **Oluşturma**: Oturum açmış kullanıcı bloglara içerik kaydı oluşturabilir, içerik resmi Cloudinary'e yüklenir.
- **Okuma**: Belirli bir içerik kaydının detaylarını görebilir.
- **Güncelleme**: Kullanıcılar kendi içeriklerini, admin başkalarının içeriklerini güncelleyebilir ve görseller güncellenirken mevcut görseller silinebilir, yeni görseller eklenebilir veya var olanlarla birlikte kullanılabilir.
- **Silme**: Kullanıcılar kendi içeriklerini, admin başkalarının içeriklerini silebilir.

#### Comment ve BottomComment Controller (Comments & BottomComments)
- **Listeleme**: Tüm yorum ve alt yorum kayıtlarını görebilir.
- **Oluşturma**: Oturum açmış kullanıcı bloglara yorum ve alt yorum kaydı oluşturabilir.
- **Okuma**: Belirli bir yorum ve alt yorum kaydının detaylarını görebilir.
- **Güncelleme**: Kullanıcılar kendi yorumlarını ve alt yorumlarını, admin başkalarının yorumlarını ve alt yorumlarını güncelleyebilir.
- **Silme**: Kullanıcılar kendi yorumlarını ve alt yorumlarını, admin başkalarının yorumlarını ve alt yorumlarını silebilir.

#### Beğeniler (Likes)
- Blog beğeni ekleme/kaldırma ve toplam sayısını görüntüleme.

#### Görüntülemeler (Views)
- Blog görüntüleme bilgileri kaydedilir (`userId` veya `deviceId`).

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
  - Yorum ve alt yorum ekleme, düzenleme, silme.
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

### Ekstra Özellikler
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji-Mart**: Emoji seçici.
- **ScrollToTop**: Sayfa geçişlerinde otomatik yukarı kaydırma.
- **Tailwind CSS**: Karanlık mod desteği ve hızlı tasarım.

### Responsive ve Kullanıcı Dostu Tasarım
- Mobil uyumlu **Drawer (Menu)**.
- Yükleme ekranları için iskelet bileşenler (**Skeletons**).
- Kullanıcı dostu modallar ve formlar.

**Canlı Site**
(https://koseyazisi.netlify.app/)
