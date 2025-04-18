# BlogApp-FullStack - Frontend

Bu proje, blog yazılarınızı paylaşabileceğiniz bir platform olan **BlogApp-FullStack** uygulamasının frontend kısmını içermektedir. Proje, modern web teknolojileri kullanılarak geliştirilmiştir ve kullanıcı dostu bir deneyim sunmayı hedeflemektedir.

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

---

## Projenin Özellikleri

- **React** kullanılarak oluşturulmuş bir kullanıcı arayüzü.

- **Redux Toolkit** ile güçlü ve kolay durum yönetimi.

- **Redux Persist** ile oturum bilgilerini saklama (Session Storage ile).

- **Material-UI (MUI)** ile modern ve özelleştirilebilir tasarım.

- **React Toastify** ile kullanıcı bildirimleri.

- Responsive tasarım ile tüm cihazlarda uyumlu görüntü.

- Tema özelleştirmeleri ile farklı ışık ve karanlık modları destekler.

- **useAxios Hook**
  - Public API çağrıları.
  - Token gerektiren API çağrıları.
  - Multipart veri içeren API çağrıları.

### useAuthCalls Hook
  - Giriş (Login)
  - Kayıt (Register)
  - Şifre Sıfırlama (Forgot Password)
  - Çıkış (Logout)

### useBlogCalls Hook
  - Tüm blogları listeleme (getAllBlogs)
  - Blogları sayfalama ve filtreleme ile listeleme (getBlogs)
  - En çok görüntülenen blogları listeleme (getBlogsView)
  - En çok beğenilen blogları listeleme (getBlogsLike)
  - Tek bir blogu detaylı olarak getirme (getSingleBlog)
  - Blog oluşturma (postBlogId ve postBlog)
  - Blog güncelleme (putBlog)
  - Blog silme (deleteBlog)
  - Blog beğenme (postBlogLike)
  - Kullanıcıya ait tüm blogları listeleme (getAllUserBlog ve getUserBlog)

### useContentCalls Hook
  - İçerik ekleme (postContent)
  - İçerik güncelleme (putContent)
  - İçerik silme (deleteContent)

### useCommentCalls Hook
  - Yorum ekleme (postComment).
  - Yorum güncelleme (putComment).
  - Yorum silme (deleteComment).

### useBottomCommentCalls Hook
  - Alt yorum ekleme (postBottomComment).
  - Alt yorum güncelleme (putBottomComment).
  - Alt yorum silme (deleteBottomComment).

### useCategoryCalls Hook
  - Kategori listeleme (getCategories).
  - Kategori ekleme (postCategory).
  - Kategori güncelleme (putCategory).
  - Kategori silme (deleteCategory).

### useUserCalls Hook 
  - Kullanıcı listeleme (getUsers).
  - Tek bir kullanıcıyı getirme (getSingleUser).
  - Kullanıcı güncelleme (putUser ve putMyUser).
  - Kullanıcı silme (deleteUser).

### Slice’lar
  - authSlice
  - blogSlice
  - contentSlice
  - commentSlice
  - bottomCommentSlice
  - categorySlice
  - userSlice

- **React Router** ile sayfalar arası gezinme.

**ScrollToTop** ile sayfa geçişlerinde otomatik olarak en üste kaydırma.

- **React-Quill** ile metin editörü entegrasyonu.

- **Emoji-Mart** ile emoji seçici entegrasyonu.

- **Tailwind CSS** ile şık ve hızlı tasarım.
  - `darkMode: "class"` kullanılarak karanlık mod desteği.
  - Uygulama genelinde Tailwind'in **base**, **components** ve 

- **Navbar.jsx** ve **Footer.jsx** gibi ortak bileşenler.
  - **Footer.jsx**: Sosyal medya bağlantıları (GitHub, LinkedIn ve Email) ve telif hakkı bilgilerini içerir.

- Navbar Komponenti:
  - **Drawer (Menu)**: Mobil cihazlar için açılır menü desteği.
  - **ColorModeIconDropdown.jsx**: Karanlık ve aydınlık tema arasında geçiş yapmayı sağlayan bileşen.
  - **LoginModal.jsx**: Blog oluşturma gibi işlemlerde giriş yapmayı zorunlu kılan kullanıcı dostu modal.
  - **LoginForm.jsx**: Kullanıcı giriş formu.
  - **Formik** ile form yönetimi ve doğrulama.
  - **Yup** ile doğrulama şemaları.
  - **ForgotPasswordForm.jsx**: Şifre sıfırlama için kullanıcı dostu modal formu.
- **Blogs.jsx**: Kullanıcıların yazdığı blogları listeleme ve yönetme sayfası.
- Blogs Komponenti:
  - **BlogCardSkeleton.jsx**: Yükleme sırasında iskelet ekranı sağlamak için.
  - **BlogCard.jsx**: Blog detaylarını görüntülemek ve işlem yapmak için.
  - **LoginModal.jsx**: Blog oluşturma gibi işlemlerde giriş yapmayı zorunlu kılan kullanıcı dostu modal.
  - **LoginForm.jsx**: Kullanıcı giriş formu.
  - **Formik** ile form yönetimi ve doğrulama.
  - **Yup** ile doğrulama şemaları.
  - **ForgotPasswordForm.jsx**: Şifre sıfırlama için kullanıcı dostu modal formu.
  - **BlogLikesModal.jsx**: Blog beğenilerini listelemek için modal.
  - **MostLikedBlogCard.jsx**: En çok beğenilen blogları görüntülemek için.
  - **MostViewedBlogCard.jsx**: En çok görüntülenen blogları göstermek için.
- **BlogDetail.jsx**: Tek bir blogun detaylarını görüntüleme bileşeni.
- BlogDetail Komponenti:
  - Blog içeriğini ve detaylarını listeleme.
  - Blog beğenme, yorum yapma ve görüntüleme.
  - Blog güncelleme, silme ve içerik ekleme işlemleri.
  - En çok beğenilen ve görüntülenen blogların listesi.
  - Blog içeriklerini listeleme, düzenleme ve silme.
  - Blog yorumlarını görüntüleme, düzenleme/silme ve yanıtlama.
  - Alt yorumları görüntüleme, düzenleme/silme ve yanıtlama.
  - **LoginModal.jsx**: Blog oluşturma gibi işlemlerde giriş yapmayı zorunlu kılan kullanıcı dostu modal.
  - **LoginForm.jsx**: Kullanıcı giriş formu.
  - **Formik** ile form yönetimi ve doğrulama.
  - **Yup** ile doğrulama şemaları.
  - **ForgotPasswordForm.jsx**: Şifre sıfırlama için kullanıcı dostu modal formu.
  - **BlogLikesModal.jsx**: Blog beğenilerini listelemek için modal.
  - **ContentCard.jsx**: Blog içeriklerini görselleştirmek ve düzenleme/silme işlemleri için bileşen.
  - **UpdateContentModal.jsx** ve **UpdateContentForm.jsx**:  Blog içeriklerini güncelleme işlemleri için modal ve form bileşenleri.
  - **TextEditor.jsx**: React-Quill tabanlı metin editörü.
  - **DeleteContentModal.jsx**: Blog içeriklerini silmek için modal bileşeni.
  - **ImageBlogModal.jsx**: Blog görsellerini büyütmek ve optimize edilmiş halde göstermek için modal bileşeni.
  - **CommentForm.jsx**: Blog yorum yapmak için kullanılan form bileşeni.
  - **CommentCard.jsx**: Blog yorumlarını görüntülemek için kullanılan kart bileşeni.
  - **EditCommentForm.jsx**: Blog yorumlarını düzenlemek için kullanılan form bileşeni.
  - **BottomCommentForm.jsx**: Blog yapılan yorumlara alt yorum(cevap vermek) yapmak için kullanılan form bileşeni.
  - **BottomCommentCard.jsx**: Alt yorumları görüntülemek için kullanılan kart bileşeni.
  - **EditBottomCommentForm.jsx**: Alt yorumları düzenlemek için kullanılan form bileşeni.
  - **CommentBottomForm.jsx**: Alt yoruma alt yorum(cevap vermek) yapmak için kullanılan form bileşeni.
  - **UpdateBlogModal.jsx** ve **UpdateBlogForm.jsx**: Blog güncelleme işlemleri için modal ve form bileşenleri.
  - **AddContentModal.jsx** ve **AddContentForm.jsx**: Blog içerik ekleme işlemleri için modal ve form bileşenleri.
  - **TextEditor.jsx**: React-Quill tabanlı metin editörü.
  - **DeleteBlogModal**: Blog silme işlemleri için modal bileşeni.
  - **LikedBlogCard.jsx**: Beğenilen blogları göstermek için.
  - **ViewedBlogCard.jsx**: Görüntülenen blogları göstermek için.
- **Users.jsx**: Kullanıcı listesi bileşeni
- Users Komponenti:
  - **UserCardSkeleton.jsx**: Yükleme sırasında iskelet ekranı sağlamak için. 
  - **UsersCard.jsx**: Kullanıcı detaylarını görüntülemek ve işlem yapmak için.
- **UserDetail.jsx**: Tek bir kullanıcı detaylarını görüntüleme bileşeni.
- UserDetail Komponenti:
  - Kullanıcı içeriğini ve detaylarını listeleme.
  - Kullanıcı güncelleme ve silme işlemleri.
  - **UpdateUserModal.jsx**: Kullanıcı güncelleme işlemleri için modal.
  - **DeleteUserModal.jsx**: Kullanıcı silme işlemleri için modal.
- **NewCategory.jsx**: Yeni kategori ekleme bileşeni.
- NewCategory Komponenti:
  - **NewCategoryForm.jsx**: Yeni kategori eklemek için form bileşeni.
- **Categories.jsx**: Kategori listesi bileşeni.
- Categories Komponenti:
  - **CategoryCard.jsx**: Kategori bilgilerini listelemek ve işlemler yapmak için.
  - **UpdateCategoryModal.jsx**: Kategori güncelleme işlemleri için modal.
  - **DeleteCategoryModal.jsx**: Kategori silme işlemleri için modal.
- **NewBlog.jsx**: Yeni blog oluşturma bileşeni.
- NewBlog Komponenti:
  - **NewBlogForm.jsx**: Yeni blog eklemek için form bileşeni.
  - **ContentForm.jsx**: Blog içerik eklemek için form bileşeni.
  - **TextEditor.jsx**: React-Quill tabanlı metin editörü.
- **About.jsx**: Platformun amacı, vizyonu ve kullanıcı deneyimi hakkında bilgi veren sayfa.
- **MyBlogs.jsx**: Kullanıcının yazdığı blogları listeleme ve yönetme sayfası.
- MyBlogs Komponenti:
  - **BlogCardSkeleton.jsx**: Yükleme sırasında iskelet ekranı sağlamak için.
  - **UserBlogCard.jsx**: Kullanıcının yazdığı blogların detaylarını görüntülemek ve işlem yapmak için.
  - **BlogLikesModal.jsx**: Blog beğenilerini listelemek için modal.
- **MyBlogDetail.jsx**: Kullanıcın yazdığı bir blogun detaylarını görüntüleme bileşeni.
- MyBlogDetail Komponenti:
  - Blog içeriğini ve detaylarını listeleme.
  - Blog beğenme, yorum yapma ve görüntüleme.
  - Blog güncelleme, silme ve içerik ekleme işlemleri.
  - En çok beğenilen ve görüntülenen blogların listesi.
  - Blog içeriklerini listeleme, düzenleme ve silme.
  - Blog yorumlarını görüntüleme, düzenleme/silme ve yanıtlama.
  - Alt yorumları görüntüleme, düzenleme/silme ve yanıtlama.
  - Blog yazarı için güncelleme, içerik ekleme ve silme işlemleri.
  - **BlogLikesModal.jsx**: Blog beğenilerini listelemek için modal.
  - **ContentCard.jsx**: Blog içeriklerini görselleştirmek ve düzenleme/silme işlemleri için bileşen.
  - **UpdateContentModal.jsx** ve **UpdateContentForm.jsx**:  Blog içeriklerini güncelleme işlemleri için modal ve form bileşenleri.
  - **TextEditor.jsx**: React-Quill tabanlı metin editörü.
  - **DeleteContentModal.jsx**: Blog içeriklerini silmek için modal bileşeni.
  - **ImageBlogModal.jsx**: Blog görsellerini büyütmek ve optimize edilmiş halde göstermek için modal bileşeni.
  - **CommentForm.jsx**: Blog yorum yapmak için kullanılan form bileşeni.
  - **CommentCard.jsx**: Blog yorumlarını görüntülemek için kullanılan kart bileşeni.
  - **EditCommentForm.jsx**: Blog yorumlarını düzenlemek için kullanılan form bileşeni.
  - **BottomCommentForm.jsx**: Blog yapılan yorumlara alt yorum(cevap vermek) yapmak için kullanılan form bileşeni.
  - **BottomCommentCard.jsx**: Alt yorumları görüntülemek için kullanılan kart bileşeni.
  - **EditBottomCommentForm.jsx**: Alt yorumları düzenlemek için kullanılan form bileşeni.
  - **CommentBottomForm.jsx**: Alt yoruma alt yorum(cevap vermek) yapmak için kullanılan form bileşeni.
  - **UpdateBlogModal.jsx** ve **UpdateBlogForm.jsx**: Blog güncelleme işlemleri için modal ve form bileşenleri.
  - **AddContentModal.jsx** ve **AddContentForm.jsx**: Blog içerik ekleme işlemleri için modal ve form bileşenleri.
  - **TextEditor.jsx**: React-Quill tabanlı metin editörü.
  - **DeleteMyBlogModal.jsx**: Blog silme işlemleri için modal bileşeni.
  - **LikedBlogCard.jsx**: Beğenilen blogları göstermek için.
  - **ViewedBlogCard.jsx**: Görüntülenen blogları göstermek için.
- **Profile.jsx.js**: Kullanıcının profil bilgilerini listeleme ve detaylarını görüntüleme sayfası.
- Profile Komponenti:
  - **ProfileCardSkeleton.jsx**: Yükleme sırasında iskelet ekranı sağlamak için.
  - **ProfileCard.jsx**: Profil bilgilerini listelemek ve işlemler yapmak için.
  - **UpdateMyUserModal.jsx**: Profil güncelleme işlemleri için modal.
- **Login.jsx**: Kullanıcı giriş işlemleri bileşeni
- Login Komponenti:
  - **LoginForm.jsx**: Kullanıcı giriş formu.
  - **Formik** ile form yönetimi ve doğrulama.
  - **Yup** ile doğrulama şemaları.
  - **ForgotPasswordForm.jsx**: Şifre sıfırlama için kullanıcı dostu modal formu. 
- **Register.jsx**: Kullanıcı kayıt işlemleri bileşeni
- Register Komponenti:
  - **RegisterForm.jsx**: Kullanıcı kayıt formu.
  - **Formik** ile form yönetimi ve doğrulama.
  - **Yup** ile doğrulama şemaları.