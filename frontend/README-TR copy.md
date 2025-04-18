# BlogApp-FullStack - Frontend

Bu proje, blog yazılarınızı paylaşabileceğiniz bir platform olan **BlogApp-FullStack** uygulamasının frontend kısmını içermektedir. Modern web teknolojileri kullanılarak geliştirilmiştir ve kullanıcı dostu bir deneyim sunmayı hedeflemektedir.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme için.
- **Redux Toolkit**: Global state yönetimi ve slice yapılandırmaları için.
- **Redux Persist**: Oturum verisi yönetimi için.
- **Material-UI (MUI)**: Gelişmiş React bileşenleri.
- **React-Toastify**: Kullanıcı bildirimleri için.
- **React Router**: Yönlendirme işlemleri için.
- **MUI Theme Customization**: Tema ve bileşen özelleştirmeleri için.
- **Formik ve Yup**: Form yönetimi ve doğrulama için.
- **Axios**: HTTP istekleri için özelleştirilmiş API istemcileri.
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji Mart**: Emoji seçici desteği.
- **React Helmet**: Sayfa başlığı ve meta etiketleri gibi `<head>` içeriğini dinamik olarak yönetmek için.
- **Tailwind CSS**: Hızlı ve esnek stil oluşturmayı sağlayan utility-first CSS framework'ü.

---

## Proje Özellikleri

- **React** ile oluşturulmuş bir kullanıcı arayüzü.

- **Redux Toolkit** ile güçlü ve kolay durum yönetimi.

- **Redux Persist** ile oturum bilgilerini saklama (`Session Storage` kullanılarak).

- **Material-UI (MUI)** ile modern ve özelleştirilebilir tasarım.

- **React Toastify** ile kullanıcı bildirimleri.

- Tüm cihazlara uyumlu, responsive tasarım.

- Farklı ışık ve karanlık modları destekleyen tema özelleştirmeleri.

- **useAxios Hook**
  - Public API çağrıları.
  - Token gerektiren API çağrıları.
  - Multipart veri içeren API çağrıları.

- **useAuthCalls Hook**
  - Giriş yapma (`Login`)
  - Kayıt olma (`Register`)
  - Şifre sıfırlama (`Forgot Password`)
  - Çıkış yapma (`Logout`)

- **useBlogCalls Hook**
  - Tüm blogları listeleme (`getAllBlogs`).
  - Sayfalama ve filtreleme ile blog listeleme (`getBlogs`).
  - En çok görüntülenen blogları listeleme (`getBlogsView`).
  - En çok beğenilen blogları listeleme (`getBlogsLike`).
  - Tek bir blogu detaylı olarak getirme (`getSingleBlog`).
  - Blog oluşturma (`postBlogId` ve `postBlog`).
  - Blog güncelleme (`putBlog`).
  - Blog silme (`deleteBlog`).
  - Blog beğenme (`postBlogLike`).
  - Kullanıcıya ait tüm blogları listeleme (`getAllUserBlog` ve `getUserBlog`).

- **useContentCalls Hook**
  - İçerik ekleme (`postContent`).
  - İçerik güncelleme (`putContent`).
  - İçerik silme (`deleteContent`).

- **useCommentCalls Hook**
  - Yorum ekleme (`postComment`).
  - Yorum güncelleme (`putComment`).
  - Yorum silme (`deleteComment`).

- **useBottomCommentCalls Hook**
  - Alt yorum ekleme (`postBottomComment`).
  - Alt yorum güncelleme (`putBottomComment`).
  - Alt yorum silme (`deleteBottomComment`).

- **useCategoryCalls Hook**
  - Kategorileri listeleme (`getCategories`).
  - Kategori ekleme (`postCategory`).
  - Kategori güncelleme (`putCategory`).
  - Kategori silme (`deleteCategory`).

- **useUserCalls Hook**
  - Kullanıcıları listeleme (`getUsers`).
  - Tek bir kullanıcı bilgisi getirme (`getSingleUser`).
  - Kullanıcı güncelleme (`putUser` ve `putMyUser`).
  - Kullanıcı silme (`deleteUser`).

- **Slices**
  - authSlice.
  - blogSlice.
  - contentSlice.
  - commentSlice.
  - bottomCommentSlice.
  - categorySlice.
  - userSlice.

- **React Router** ile sayfalar arası geçiş.

- Sayfa geçişlerinde otomatik olarak en üste kaydırma işlemi için **ScrollToTop**.

- **React-Quill** kullanılarak metin editörü entegrasyonu.

- **Emoji-Mart** ile emoji seçici entegrasyonu.

- **Tailwind CSS** ile şık ve hızlı tasarım.
  - `darkMode: "class"` kullanılarak karanlık mod desteği.
  - Tailwind'in **base**, **components** ve **utilities** yapılarını uygulama genelinde kullanma.

- **Navbar.jsx** ve **Footer.jsx** gibi ortak bileşenler.
  - **Footer.jsx**: Sosyal medya bağlantılarını (GitHub, LinkedIn ve Email) ve telif hakkı bilgilerini içerir.

### Navbar Bileşeni
- **Drawer (Menu)**: Mobil cihazlar için açılır menü desteği.
- **ColorModeIconDropdown.jsx**: Işık ve karanlık tema arasında geçiş yapmayı sağlayan bileşen.
- **LoginModal.jsx**: Blog oluşturma gibi işlemlerde giriş yapmayı zorunlu kılan kullanıcı dostu modal.
- **LoginForm.jsx**: Kullanıcı giriş formu.
- Form yönetimi ve doğrulama için **Formik** ve **Yup** kullanımı.
- **ForgotPasswordForm.jsx**: Şifre sıfırlama için kullanıcı dostu modal form.

### Blogs Bileşeni
- **BlogCardSkeleton.jsx**: Yükleme sırasında iskelet ekranı.
- **BlogCard.jsx**: Blog detaylarını görüntüler ve işlem yapılmasını sağlar.
- **LoginModal.jsx**: Blog oluşturma gibi işlemler için giriş yapmayı zorunlu kılar.
- **BlogLikesModal.jsx**: Blog beğenilerini listelemek için modal.
- **MostLikedBlogCard.jsx**: En çok beğenilen blogları görüntüler.
- **MostViewedBlogCard.jsx**: En çok görüntülenen blogları görüntüler.

### BlogDetail Bileşeni
- Tek bir blogun detaylarını görüntüler ve yönetir.
- Blog beğenme, yorum ekleme ve görüntüleme işlemleri.
- Blog güncelleme, silme veya içerik ekleme.
- En çok beğenilen ve görüntülenen blogları listeleme.
- Blog içeriği, yorumlar ve alt yorumları yönetme.
- Farklı işlemler için modallar ve formlar içerir:
  - **UpdateBlogModal.jsx** ve **UpdateBlogForm.jsx**: Blog güncelleme işlemleri için.
  - **AddContentModal.jsx** ve **AddContentForm.jsx**: Bloglara içerik eklemek için.
  - **TextEditor.jsx**: Blog içeriği için zengin metin düzenleyici.
  - **DeleteBlogModal.jsx**: Blog silme işlemleri için modal.
  - **ImageBlogModal.jsx**: Blog görsellerini büyütmek ve optimize edilmiş halde göstermek için modal.
  - **CommentForm.jsx**: Bloga yorum eklemek için form.
  - **CommentCard.jsx**: Blog yorumlarını görüntülemek için kart.
  - **EditCommentForm.jsx**: Yorumları düzenlemek için form.
  - **BottomCommentForm.jsx**: Yorumlara alt yorum eklemek için form.
  - **BottomCommentCard.jsx**: Alt yorumları görüntülemek için kart.
  - **EditBottomCommentForm.jsx**: Alt yorumları düzenlemek için form.
  - **CommentBottomForm.jsx**: Alt yorumlara alt yorum eklemek için form.

### Users Bileşeni
- **UserCardSkeleton.jsx**: Yükleme sırasında iskelet ekranı.
- **UsersCard.jsx**: Kullanıcı detaylarını görüntüler ve işlemler yapılmasını sağlar.

### UserDetail Bileşeni
- Tek bir kullanıcının detaylarını görüntüler ve yönetir.
- Kullanıcı bilgilerini güncelleme ve silme işlemleri:
  - **UpdateUserModal.jsx**: Kullanıcı güncelleme için modal.
  - **DeleteUserModal.jsx**: Kullanıcı silme için modal.

### NewCategory Bileşeni
- **NewCategoryForm.jsx**: Yeni kategori eklemek için form.

### Categories Bileşeni
- **CategoryCard.jsx**: Kategori bilgilerini görüntüler ve işlemler yapılmasını sağlar.
- **UpdateCategoryModal.jsx**: Kategori güncelleme için modal.
- **DeleteCategoryModal.jsx**: Kategori silme için modal.

### NewBlog Bileşeni
- **NewBlogForm.jsx**: Yeni blog eklemek için form.
- **ContentForm.jsx**: Blog içeriği eklemek için form.
- **TextEditor.jsx**: Blog içeriği için zengin metin düzenleyici.

### About Bileşeni
- Platformun amacı, vizyonu ve kullanıcı deneyimi hakkında bilgi verir.

### MyBlogs Bileşeni
- Kullanıcının yazdığı blogları listeleme ve yönetme.
- Şunları içerir:
  - **UserBlogCard.jsx**: Blog detaylarını görüntüler ve işlemler yapılmasını sağlar.
  - **BlogLikesModal.jsx**: Blog beğenilerini listelemek için modal.

### MyBlogDetail Bileşeni
- Kullanıcının yazdığı bir blogun detaylarını görüntüler ve yönetir.
- Blog içeriği ve yorum yönetimi.
- Şunları içerir:
  - **UpdateMyBlogModal.jsx**: Blog güncelleme için modal.
  - **AddContentModal.jsx** ve **AddContentForm.jsx**: Bloglara içerik eklemek için.
  - **DeleteMyBlogModal.jsx**: Blog silme için modal.

### Profile Bileşeni
- Kullanıcı profili bilgilerini listeleme ve detaylarını görüntüleme.
- Şunları içerir:
  - **ProfileCardSkeleton.jsx**: Yükleme sırasında iskelet ekranı.
  - **ProfileCard.jsx**: Profil bilgilerini listelemek ve işlemler yapmak için.
  - **UpdateMyUserModal.jsx**: Profil güncelleme için modal.

### Login Bileşeni
- **LoginForm.jsx**: Kullanıcı giriş formu.
- Şifre sıfırlama modalını içerir.

### Register Bileşeni
- **RegisterForm.jsx**: Kullanıcı kayıt formu.
- **Formik** ve **Yup** ile doğrulama içerir.