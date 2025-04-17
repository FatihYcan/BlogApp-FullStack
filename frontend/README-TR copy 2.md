# BlogApp-FullStack - Frontend (1)

Bu proje, blog yazılarınızı paylaşabileceğiniz bir platform olan **BlogApp-FullStack** uygulamasının frontend kısmını içermektedir. Uygulama, modern web teknolojileri kullanılarak geliştirilmiştir ve kullanıcı dostu bir deneyim sunmayı hedeflemektedir.

## Projenin Özellikleri

- **React** kullanılarak oluşturulmuş bir kullanıcı arayüzü.
- **Redux Toolkit** ile güçlü ve kolay durum yönetimi.
- **Redux Persist** ile oturum bilgilerini saklama (Session Storage ile).
- **Material-UI (MUI)** ile modern ve özelleştirilebilir tasarım.
- **React Toastify** ile kullanıcı bildirimleri.
- **PersistGate** ile verilerin kalıcı hale getirilmesi.
- Responsive tasarım ile tüm cihazlarda uyumlu görüntü.
- Tema özelleştirmeleri ile farklı ışık ve karanlık modları destekler.
- Redux dilimleri (slices) ile ayrılmış ve yönetilen state yapıları:
  - Kullanıcı yönetimi.
  - Blog yönetimi.
  - Kategori yönetimi.
  - Yorum yönetimi.
  - İçerik yönetimi.
  - Alt yorum yönetimi.
- **React Router** ile sayfalar arası gezinme.
- **Navbar** ve **Footer** gibi ortak bileşenler.
- **ScrollToTop** ile sayfa geçişlerinde otomatik olarak en üste kaydırma.
- **Drawer (Menu)**: Mobil cihazlar için açılır menü desteği.
- **LoginModal**: Blog oluşturma gibi işlemlerde giriş yapmayı zorunlu kılan kullanıcı dostu modal.
- **ColorModeIconDropdown**: Karanlık ve aydınlık tema arasında geçiş yapmayı sağlayan bileşen.
- **Formik** ile form yönetimi ve doğrulama.
- **Yup** ile doğrulama şemaları.
- **LoginForm** ve **RegisterForm**: Kullanıcı giriş ve kayıt formları.
- **ForgotPasswordForm**: Şifre sıfırlama için kullanıcı dostu modal formu.
- Kullanıcı oturum yönetimi için **useAuthCalls** hook'u:
  - Giriş (Login)
  - Kayıt (Register)
  - Şifre Sıfırlama (Forgot Password)
  - Çıkış (Logout)
- **Axios** ile API çağrıları için özel yapılandırmalar (**useAxios** hook'u):
  - Public API çağrıları.
  - Token gerektiren API çağrıları.
  - Multipart veri içeren API çağrıları.
- Blog Kartları:
  - **BlogCard**: Blog detaylarını görüntülemek ve işlem yapmak için.
  - **BlogCardSkeleton**: Yükleme sırasında iskelet ekranı sağlamak için.
  - **UserBlogCard**: Kullanıcının yazdığı blogları listelemek için kart bileşeni.
  - **MostLikedBlogCard**: En çok beğenilen blogları görüntülemek için bileşen.
  - **MostViewedBlogCard**: En çok görüntülenen blogları listelemek için bileşen.
  - **LikedBlogCard**: Beğenilen blogları listelemek ve detaylarını göstermek için.
  - **ViewedBlogCard**: Görüntülenen blogları listelemek ve detaylarını göstermek için.
  - **UsersCard**: Kullanıcı bilgilerini listelemek ve detaylarını göstermek için.
  - **UserCardSkeleton**: Yükleme sırasında kullanıcı kartı için iskelet ekranı.
  - **UpdateUserModal**: Kullanıcı güncelleme işlemleri için modal.
  - **DeleteUserModal**: Kullanıcı silme işlemleri için modal.
  - **CategoryCard**: Kategori bilgilerini listelemek ve işlemler yapmak için.
  - Kullanıcının yazdığı blogları listelemek için **UserBlogCard** bileşeni.
  - Blog beğenme, yorum ve görüntüleme sayılarını görüntüleme.
  - Blog detaylarına yönlendirme ve beğenme işlemleri.
- **BlogLikesModal**: Blog beğenilerini listelemek için modal.
- Blog işlemleri için **useBlogCalls** hook'u:
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
- Blog Detay Sayfası:
  - Blog içeriğini ve detaylarını listeleme.
  - Blog beğenme, yorum yapma ve görüntüleme.
  - Blog güncelleme, silme ve içerik ekleme işlemleri.
  - En çok beğenilen ve görüntülenen blogların listesi.
  - Blog içeriklerini listeleme, düzenleme ve silme.
  - Blog yorumlarını görüntüleme, düzenleme/silme ve yanıtlama.
  - Alt yorumları görüntüleme, düzenleme/silme ve yanıtlama.
  - Blog yazarı için güncelleme, içerik ekleme ve silme işlemleri.
- **ContentCard**: Blog içeriklerini görselleştirmek için bileşen.
- **UpdateBlogModal** ve **UpdateBlogForm**: Blog güncelleme işlemleri için modal ve form bileşenleri.
- **AddContentModal** ve **AddContentForm**: Blog içerik ekleme işlemleri için modal ve form bileşenleri.
- **DeleteBlogModal**: Blog silme işlemleri için modal bileşeni.
- **CommentForm** ve **CommentCard**: Blog yorumlarını yönetmek ve görselleştirmek için bileşenler.
- **UpdateContentModal** ve **DeleteContentModal**: Blog içeriklerini düzenleme ve silme işlemleri için modal bileşenleri.
- Blog içerikleri için **useContentCalls** hook'u:
  - İçerik listeleme (getContents)
  - İçerik ekleme (postContent)
  - İçerik güncelleme (putContent)
  - İçerik silme (deleteContent)
- **UpdateContentForm**: Blog içeriklerini düzenlemek için kullanılan form bileşeni.
- **React-Quill** ile metin editörü entegrasyonu.
- **TextEditor**: React-Quill tabanlı metin editörü.
- **Emoji-Mart** ile emoji seçici entegrasyonu.
- Blog yorumları için **useCommentCalls** hook'u:
  - Yorum ekleme (postComment).
  - Yorum güncelleme (putComment).
  - Yorum silme (deleteComment).
- **ImageBlogModal**: Blog görsellerini büyütmek ve optimize edilmiş halde göstermek için modal bileşeni.
- **BottomCommentForm** ve **BottomCommentCard**: Alt yorumları görüntülemek, yanıtlama ve düzenleme işlemleri için bileşenler.
- Alt yorumlar için **useBottomCommentCalls** hook'u:
  - Alt yorum ekleme (postBottomComment).
  - Alt yorum güncelleme (putBottomComment).
  - Alt yorum silme (deleteBottomComment).
- **EditCommentForm**: Kullanıcı yorumlarını düzenlemek için kullanılan form bileşeni.
- **EditBottomCommentForm**: Alt yorumları düzenlemek için kullanılan form bileşeni.
- **CommentBottomForm**: Alt yorum ekleme için kullanılan form bileşeni.
- Blog oluşturma ve güncelleme işlemleri:
  - Blog başlığı, kategorisi ve yayınlanma durumu gibi bilgilerin düzenlenmesi.
  - Blog görsellerinin değiştirilmesi veya yeni görseller eklenmesi.
- Kategoriler için **useCategoryCalls** hook'u:
  - Kategori listeleme (getCategories).
  - Yeni kategori ekleme (postCategory).
  - Kategori güncelleme (putCategory).
  - Kategori silme (deleteCategory).
- Kullanıcı yönetimi için **useUserCalls** hook'u:
  - Kullanıcı listeleme (getUsers).
  - Tek bir kullanıcıyı getirme (getSingleUser).
  - Kullanıcı güncelleme (putUser ve putMyUser).
  - Kullanıcı silme (deleteUser).
- Kullanıcı listesi ve arama:
  - Kullanıcıların listelenmesi ve sayfalama (Pagination).
  - Kullanıcı arama (Search).
- **Users** ve **Search.js**: Kullanıcı arama ve listeleme işlemleri için bileşenler.
- Kullanıcı detayları:
  - Kullanıcı bilgilerini görüntüleme (ad, soyad, e-posta, kullanıcı adı, oluşturulma tarihi).
  - Kullanıcı güncelleme ve silme işlemleri.
- **UserDetail**: Tek bir kullanıcı detaylarını görüntüleme bileşeni.
- Yeni kategori oluşturma:
  - Kategori adını belirleme ve yeni kategori ekleme.
- **NewCategory**: Yeni kategori ekleme bileşeni.
- Kategori yönetimi:
  - Kategorilerin listelenmesi, güncellenmesi ve silinmesi.
- **Categories**: Kategori listesi bileşeni.
- Yeni blog oluşturma ve içerik ekleme:
  - Blog başlığı, kategori, görseller ve içerik gibi bilgilerin girilmesi.
  - Blog oluşturulduktan sonra içerik ekleme işlemleri.
- **NewBlog**: Yeni blog oluşturma bileşeni.
- **Hakkında Sayfası**:
  - Platformun amacı, vizyonu ve misyonu hakkında bilgi verir.
  - Kullanıcı deneyimi ve içerik kalitesine verdiği önemi açıklar.
  - Blog yazmaya başlama adımlarını detaylandırır.
- **About**: Platformun amacı, vizyonu ve kullanıcı deneyimi hakkında bilgi veren sayfa.
- Kullanıcı blogları sayfası:
  - Kullanıcının yazdığı tüm blogların listelenmesi.
  - Blogları kategoriye veya başlığa göre arama ve filtreleme.
  - Blog beğenme işlemleri.
  - Sayfalama desteği ile blogların listelenmesi.
- **MyBlogs**: Kullanıcının yazdığı blogları listeleme ve yönetme sayfası.
- **MyBlogDetail.js**: Kullanıcının yazdığı bir blogun detaylarını gösteren sayfa.
- Kullanıcı profili:
  - Kullanıcının profil bilgilerini listeleme.
  - Profil sayfasında kullanıcı bilgilerini ve detaylarını görüntüleme.
- **Profile.js**: Kullanıcının profil bilgilerini listeleme ve detaylarını görüntüleme sayfası.
- Kullanıcı profili için iskelet ekranı:
  - Kullanıcı bilgileri yüklenirken **ProfileCardSkeleton** bileşeni ile iskelet ekranı gösterimi.
- Kullanıcı güncelleme:
  - Kullanıcı bilgilerini düzenlemek için **UpdateMyUserModal** bileşeni.
  - Formik ve Yup kullanılarak güçlü form yönetimi ve doğrulama.
  - Şifre düzenleme ve profil resmi kaldırma veya değiştirme.
- Kimlik doğrulama:
  - Kullanıcı giriş işlemleri için **Login** bileşeni.
  - Kullanıcı kayıt işlemleri için **Register** bileşeni.
  - Formik ve Yup kullanılarak giriş ve kayıt formu yönetimi.
  - Şifre sıfırlama ve yeni hesap oluşturma yönlendirmesi.
- **RegisterForm**:
  - Kullanıcı adı, ad, soyad, e-posta, şifre ve profil resmi ile kayıt yapma desteği.
  - Güçlü form doğrulama ve kullanıcı dostu hata mesajları.
  - Şifre görünürlüğü kontrolü ve resim dosyası yükleme desteği.
  - **Footer**: Sosyal medya bağlantıları (GitHub, LinkedIn ve Email) ve telif hakkı bilgilerini içerir.
- **Tailwind CSS** ile şık ve hızlı tasarım.
  - `darkMode: "class"` kullanılarak karanlık mod desteği.
  - Uygulama genelinde Tailwind'in **base**, **components** ve **utilities** stillerinin kullanımı:


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

## Proje Yapısı

### Önemli Dosyalar ve Klasörler

- **index.html**: Uygulamanın temel HTML yapısı.
- **App.js**: Uygulamanın ana bileşeni.
- **store.jsx**: Redux store yapılandırması.
- **theme/**: Material-UI için tema özelleştirmeleri.
- **router/**: Uygulamanın yönlendirme yapılandırması. Örneğin:
  - `AppRouter.js`: Tüm sayfa yönlendirmelerinin yapılandırıldığı dosya.
- **components/**: Uygulama içerisindeki ortak bileşenler, örneğin:
  - `Navbar.js`: Navigasyon çubuğu.
  - `Footer.js`: Sayfa alt bilgisi.
  - `ScrollToTop.js`: Sayfa geçişlerinde otomatik kaydırma.
  - `LoginModal.js`: Giriş yapılması gereken işlemler için modal.
  - `ColorModeIconDropdown.js`: Tema değiştirme bileşeni.
  - `LoginForm.js`: Kullanıcı giriş formu.
  - `ForgotPasswordForm.js`: Şifre sıfırlama işlemleri için modal.
  - `BlogCardSkeleton.js`: Yükleme sırasında iskelet ekranı için bileşen.
  - `BlogCard.js`: Blog detaylarını görüntülemek ve işlem yapmak için bileşen.
  - `MostLikedBlogCard.js`: En çok beğenilen blogları görüntülemek için bileşen.
  - `MostViewedBlogCard.js`: En çok görüntülenen blogları göstermek için bileşen.
  - `LikedBlogCard.js`: Beğenilen blogları listelemek ve detaylarını göstermek için bileşen.
  - `ViewedBlogCard.js`: Görüntülenen blogları listelemek ve detaylarını göstermek için bileşen.
  - `UsersCard.js` ve `UserCardSkeleton.js`: Kullanıcı listeleme ve yükleme sırasında iskelet ekranı için bileşenler.
  - `UserBlogCard.js`: Kullanıcıya ait blogları listelemek için kart bileşeni.
  - `ProfileCard.js` ve `ProfileCardSkeleton.js`: Kullanıcı profil bilgilerini ve yükleme sırasında iskelet ekranını göstermek için bileşenler.
  - `UpdateMyUserModal.js`: Kullanıcı bilgilerini düzenlemek için modal bileşeni.
  - `UserDetail.js`: Tek bir kullanıcı detaylarını görüntülemek ve işlemler yapmak için bileşen.
  - `UpdateUserModal.js`: Kullanıcı güncelleme işlemleri için modal bileşeni.
  - `DeleteUserModal.js`: Kullanıcı silme işlemleri için modal bileşeni.
  - `CategoryCard.js`: Kategori detaylarını görüntülemek ve işlemler yapmak için bileşen.
  - `NewCategoryForm.js`: Yeni kategori ekleme formu.
  - `UpdateCategoryModal.js`: Kategori güncelleme işlemleri için modal bileşeni.
  - `DeleteCategoryModal.js`: Kategori silme işlemleri için modal bileşeni.
  - `BlogLikesModal.js`: Blog beğenilerini listelemek için modal.
  - `NewBlogForm.js`: Yeni blog oluşturma ve içerik ekleme formu.
  - `ContentForm.js`: Blog içeriklerini ekleme veya düzenleme formu.
  - `ContentCard.js`: Blog içeriklerini görselleştirmek için bileşen.
  - `UpdateContentModal.js` ve `DeleteContentModal.js`: Blog içeriklerini düzenleme ve silme işlemleri için modal bileşenleri.
  - `UpdateContentForm.js`: Blog içeriklerini düzenlemek için kullanılan form bileşeni.
  - `TextEditor.js`: React-Quill tabanlı metin editörü bileşeni.
  - `ImageBlogModal.js`: Blog görsellerini büyütmek ve optimize edilmiş halde göstermek için modal bileşeni.
  - `UpdateBlogModal.js` ve `UpdateBlogForm.js`: Blog güncelleme işlemleri için modal ve form bileşenleri.
  - `AddContentModal.js` ve `AddContentForm.js`: Blog içerik ekleme işlemleri için modal ve form bileşenleri.
  - `DeleteBlogModal.js`: Blog silme işlemleri için modal bileşeni.
  - `CommentForm.js` ve `CommentCard.js`: Blog yorumlarını yönetmek ve görselleştirmek için bileşenler.
  - `BottomCommentForm.js` ve `BottomCommentCard.js`: Alt yorumları görüntülemek, yanıtlama ve düzenleme işlemleri için bileşenler.
  - `EditCommentForm.js`: Kullanıcı yorumlarını düzenlemek için kullanılan form bileşeni.
  - `EditBottomCommentForm.js`: Alt yorumları düzenlemek için kullanılan form bileşeni.
  - `CommentBottomForm.js`: Alt yorum ekleme için kullanılan form bileşeni.
  - `Users.js` ve `Search.js`: Kullanıcı arama ve listeleme işlemleri için bileşenler. 
- **primitives/themePrimitives.js**: Tema için temel yapılandırma (renk paletleri, tipografi, gölgeler vb.).
- **features/**: Redux dilimlerini içeren klasör. Örneğin:
  - `authSlice.js`: Kullanıcı kimlik doğrulama işlemleri için.
  - `blogSlice.js`: Blog verisi yönetimi için.
  - `bottomCommentSlice.js`: Yorumlar için alt düzey durum yönetimi.
  - `categorySlice.js`: Kategorilerle ilgili işlemler için.
  - `commentSlice.js`: Yorumlar için durum yönetimi.
  - `contentSlice.js`: İçerik yönetimi için.
  - `userSlice.js`: Kullanıcı verilerinin yönetimi için.
- **pages/**: Uygulama içerisindeki sayfa bileşenleri, örneğin:
  - `Dashboard.js`: Ana sayfa.
  - `BlogDetail.js`: Blog detay sayfası.
  - `Users.js`: Kullanıcı listeleme ve arama sayfası.
  - `UserDetail.js`: Kullanıcı detay sayfası.
  - `Profile.js`: Kullanıcı profil sayfası.
  - `Categories.js`: Kategori listeleme sayfası.
  - `NewCategory.js`: Yeni kategori ekleme sayfası.
  - `NewBlog.js`: Yeni blog oluşturma sayfası.
  - `MyBlogs.js`: Kullanıcının yazdığı blogları listeleme sayfası.
  - `MyBlogDetail.js`: Kullanıcının yazdığı bir blogun detaylarını gösteren sayfa.
  - `Profile.js`: Kullanıcının profil bilgilerini listeleme ve detaylarını görüntüleme sayfası.
  - `About.js`: Platform hakkında bilgi veren sayfa.
  - `Login.js` ve `Register.js`: Kimlik doğrulama sayfaları.
- **hooks/**:
  - `useAuthCalls.js`: Kimlik doğrulama işlemleri için özel hook.
  - `useBlogCalls.js`: Blog işlemleri için özel hook.
  - `useContentCalls.js`: Blog içerik işlemleri için özel hook.
  - `useCategoryCalls.js`: Kategori işlemleri için özel hook.
  - `useCommentCalls.js`: Blog yorum işlemleri için özel hook.
  - `useUserCalls.js`: Kullanıcı işlemleri için özel hook.
  - `useBottomCommentCalls.js`: Alt yorum işlemleri için özel hook.
  - `useAxios.js`: API çağrıları için özel yapılandırmalar.
- **helper/**:
  - `ToastNotify.js`: Kullanıcı bildirimleri için yardımcı işlevler.
  - `Device.js`: Cihaz kimliği oluşturma işlevi.
- **tailwind.config.js**: Tailwind CSS yapılandırması. İçerik dosyaları `./src/**/*.{js,jsx,ts,tsx}` altında tanımlıdır ve `darkMode: "class"` ile karanlık mod desteği bulunmaktadır:


### Tema Özelleştirmesi

Material-UI teması, `baseThemeConfig` ile yapılandırılmış ve aşağıdaki özelleştirmeleri içermektedir:

- **Renk Paleti**: Açık ve koyu modlar için özel renk paletleri tanımlanmıştır.
- **Bileşen Özelleştirmeleri**: Örneğin, `MuiList`, `MuiIconButton`, `MuiCard` gibi bileşenler özelleştirilmiştir.
- **Kaydırma Çubuğu Stilleri**: Kullanıcı deneyimini artırmak için özelleştirilmiştir.

### Redux Yapılandırması

Redux yapılandırması, `@reduxjs/toolkit` ve `redux-persist` kullanılarak yapılmıştır:

- **Store**: `configureStore` ile oluşturulmuş ve `persistReducer` ile oturum bilgileri saklanmıştır.
- **Slices**: Kullanıcı kimlik doğrulama, bloglar, kategoriler, yorumlar, içerikler gibi farklı state yapılarını yöneten dilimler.

#### authSlice Örneği

`authSlice`, kullanıcı kimlik doğrulama işlemlerini yönetmek için aşağıdaki gibi tanımlanmıştır:

- **Initial State**: Kullanıcı bilgileri ve durumlar saklanır.
- **Reducers**:
  - `fetchStart`: Yüklenme durumunu başlatır.
  - `loginSuccess`: Kullanıcının giriş yapmasını sağlar.
  - `logoutSuccess`: Kullanıcı oturumunu kapatır.
  - `fetchFail`: Hata durumlarını işler.

### blogSlice Örneği

`blogSlice`, blog verilerini yönetmek için aşağıdaki gibi yapılandırılmıştır:

- **Initial State**: Blog verileri ve durumları saklanır.
- **Reducers**:
  - `fetchStart`: Yüklenme durumunu başlatır.
  - `getAllBlogSuccess`: Tüm blogların başarılı bir şekilde alınmasını sağlar.
  - `getBlogSuccess`: Belirli blogların alınmasını sağlar.
  - `getBlogViewSuccess`: Görüntüleme sayısına göre blogları alır.
  - `getBlogLikeSuccess`: Beğeni sayısına göre blogları alır.
  - `fetchFail`: Hata durumlarını işler.

#### categorySlice Örneği

Kategorilerle ilgili işlemleri yönetmek için `categorySlice` tanımlanmıştır:

- **Initial State**: Kategoriler ve durumlar saklanır.
- **Reducers**:
  - `fetchStart`: Yüklenme durumunu başlatır.
  - `getCategorySuccess`: Kategorilerin başarılı bir şekilde alınmasını sağlar.
  - `fetchFail`: Hata durumlarını işler.

#### Örnek Slice: userSlice

`userSlice`, kullanıcı verilerini yönetmek için aşağıdaki gibi yapılandırılmıştır:

- **Initial State**: Kullanıcı bilgileri ve durumları saklanır.
- **Reducers**:
  - `fetchStart`: Yüklenme durumunu başlatır.
  - `getUserSuccess`: Kullanıcı verilerini alır.
  - `getSingleUserSuccess`: Tek bir kullanıcının detaylarını alır.
  - `putMyUserSuccess`: Kullanıcı verilerini günceller.
  - `fetchFail`: Hata durumlarını işler.

#### Yönlendirme: AppRouter

`AppRouter` ile uygulamada sayfa yönlendirmesi yapılır. Örnek rotalar:

- `/` → `Dashboard` (Ana Sayfa)
- `/blogs/:username/:_id` → `BlogDetail` (Belirli bir blogun detayları)
- `/users` → `Users` (Kullanıcılar)
- `/login` → `Login` (Giriş Sayfası)
- `/register` → `Register` (Kayıt Sayfası)

### Navbar (Navigasyon Çubuğu)

`Navbar` bileşeni, kullanıcının oturum açma durumuna ve yetkisine göre dinamik olarak bağlantılar sağlar:

- **Admin Kullanıcılar** için ek bağlantılar:
  - Kullanıcılar (`/users`)
  - Yeni Kategori (`/new-category`)
  - Kategoriler (`/categories`)
- **Tüm Kullanıcılar** için:
  - Yeni Blog (`/new-blog`)
  - Hakkında (`/about`)
- **Giriş Yapmış Kullanıcılar** için:
  - Bloglarım (`/my-blogs`)
  - Profilim (`/:username`)
  - Çıkış Yap (`Logout`)
- **Giriş Yapmamış Kullanıcılar** için:
  - Giriş Yap (`/login`)
  - Kayıt Ol (`/register`)

Mobil cihazlarda, menü açılır bir **Drawer** ile sunulur.

### ColorModeIconDropdown (Tema Geçiş Bileşeni)

`ColorModeIconDropdown` bileşeni, kullanıcıların karanlık ve aydınlık mod arasında geçiş yapmasını sağlar. Seçilen mod, belgenin kök sınıfına uygulanır:

- **Karanlık Mod**: `dark` sınıfı uygulanır.
- **Aydınlık Mod**: `light` sınıfı uygulanır.

### LoginModal (Giriş Modalı)

`LoginModal` bileşeni, giriş yapılmadan erişilemeyecek özelliklere (örneğin blog oluşturma) kolay erişim sağlamak için tasarlanmıştır:

- **Formik** ile form yönetimi.
- **Validation Schema** kullanılarak form doğrulaması yapılır.
- Giriş başarılı olursa modal kapanır ve form sıfırlanır.

### LoginForm (Giriş Formu)

`LoginForm` bileşeni, kullanıcı giriş işlemi için tasarlanmıştır:

- **Formik** ve **Yup** kullanılarak form yönetimi ve doğrulama sağlanır.
- E-posta ve şifre alanları için özel doğrulama kuralları:
  - E-posta, geçerli bir e-posta formatında olmalıdır.
  - Şifre, en az 8 karakter uzunluğunda olmalı, bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.
- Şifre alanı için görünürlük geçişi (Gizle/Göster).
- Şifremi Unuttum bağlantısı ile modal üzerinden şifre sıfırlama işlemi yapılabilir.

### ForgotPasswordForm (Şifre Sıfırlama Formu)

`ForgotPasswordForm` bileşeni, kullanıcıların şifrelerini sıfırlamasını sağlar:

- **Formik** ve **Yup** kullanılarak form yönetimi ve doğrulama sağlanır.
- E-posta alanı için özel doğrulama kuralları:
  - E-posta, geçerli bir e-posta formatında olmalıdır.
- Şifre alanı için özel doğrulama kuralları:
  - En az 8 karakter uzunluğunda olmalı.
  - Bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.
- Şifre alanı için görünürlük geçişi (Gizle/Göster).
- Şifre sıfırlama işlemi tamamlandıktan sonra form sıfırlanır ve modal kapanır.

### useAuthCalls (Kimlik Doğrulama Hook'u)

`useAuthCalls` özel hook'u, kimlik doğrulama işlemleri için aşağıdaki işlevleri sağlar:

1. **Register**: Kullanıcı kayıt işlemi.
2. **Login**: Kullanıcı giriş işlemi.
3. **Forgot Password**: Şifre sıfırlama işlemi.
4. **Logout**: Kullanıcı çıkış işlemi.

- **Register**:
  - Kullanıcı bilgilerini alır ve `/users` endpointine POST isteği gönderir.
  - Başarılı kayıt sonrası kullanıcı bilgileri `localStorage`'a kaydedilir ve ana sayfaya yönlendirilir.
- **Login**:
  - Kullanıcı bilgilerini alır ve `/auth/login` endpointine POST isteği gönderir.
  - Başarılı giriş sonrası kullanıcı bilgileri `localStorage`'a kaydedilir ve ana sayfaya yönlendirilir.
- **Forgot Password**:
  - Kullanıcı e-posta adresini alır ve `/auth/forgot-password` endpointine POST isteği gönderir.
- **Logout**:
  - Kullanıcıyı `/auth/logout/` endpointine POST isteği göndererek sistemden çıkarır.
  - Çıkış sonrası `localStorage` temizlenir.

### useAxios (API Çağrıları için Hook)

`useAxios` özel hook'u, farklı türde API çağrıları için aşağıdaki yapılandırmaları sağlar:

1. **axiosPublic**: Public API çağrıları için.
2. **axiosData**: Multipart form-data ile gönderilen API çağrıları için.
3. **axiosWithToken**: Token gerektiren API çağrıları için.
4. **axiosWithTokenAndData**: Token ve multipart form-data gerektiren API çağrıları için.

### BlogCard (Blog Kartı Bileşeni)

`BlogCard` bileşeni, blog detaylarını görüntülemek ve işlem yapmak için kullanılır:

- Blog detayları gösterilir (başlık, kategori, içerik vb.).
- Beğeni, yorum ve görüntüleme sayıları görüntülenir.
- Blog beğenme işlemi yapılabilir.
- Kullanıcı detayı ve oluşturulma tarihi gösterilir.
- **LoginModal**: Giriş yapılmadan beğeni işlemi yapılamaz, bu durumda modal açılır.
- **BlogLikesModal**: Blog beğenileri detaylı olarak listelenir.

### BlogCardSkeleton (Yükleme İskeleti)

`BlogCardSkeleton` bileşeni, blog verileri yüklenirken bir iskelet ekranı gösterir:

- Görseller ve metinler için iskelet yapılar kullanılır.
- Kullanıcı deneyimini artırır.

### BlogLikesModal (Blog Beğeni Modali)

`BlogLikesModal` bileşeni, bir blogu beğenen kullanıcıları listelemek için kullanılır. Kullanıcıların avatarları ve kullanıcı adları modal içinde görselleştirilir.

### MostLikedBlogCard (En Çok Beğenilen Blog Kartı)

`MostLikedBlogCard` bileşeni, en çok beğenilen blogları görselleştirmek için kullanılır. Blog detayları, yazar bilgileri ve tarih bilgisi yer alır.

### MostViewedBlogCard (En Çok Görüntülenen Blog Kartı)

`MostViewedBlogCard` bileşeni, en çok görüntülenen blogları görselleştirmek için kullanılır. Blog detayları, yazar bilgileri ve tarih bilgisi yer alır.

### useBlogCalls (Blog İşlemleri için Hook)

`useBlogCalls` özel hook'u, blog işlemleri için aşağıdaki işlevleri sağlar:

1. **getAllBlogs**: Tüm blogları listeleme.
2. **getBlogs**: Blogları sayfalama ve filtreleme ile listeleme.
3. **getBlogsView**: En çok görüntülenen blogları listeleme.
4. **getBlogsLike**: En çok beğenilen blogları listeleme.
5. **postBlogId**: Blog için ID oluşturma.
6. **postBlog**: Blog oluşturma.
7. **getSingleBlog**: Tek bir blogu detaylı olarak getirme.
8. **putBlog**: Blog güncelleme.
9. **deleteBlog**: Blog silme.
10. **postBlogLike**: Blog beğenme.
11. **getAllUserBlog**: Kullanıcıya ait tüm blogları listeleme.
12. **getUserBlog**: Kullanıcıya ait blogları detaylı olarak listeleme.

### BlogDetail (Blog Detay Sayfası)

`BlogDetail` bileşeni, bir blogun detaylarını ve içeriklerini görüntülemek için kullanılan sayfadır. Kullanıcıların blogu beğenmesi, yorum yapması, içeriği görüntülemesi ve yazarıysa blog üzerinde düzenleme yapması sağlanır.

#### Özellikler:
- Blog görseli, başlığı, kategorisi ve oluşturulma tarihi detayları.
- Blog içeriği ve multimedya destekli içerik kartları.
- Blog beğenme, yorum yapma ve görüntüleme sayıları.
- Blog güncelleme, içerik ekleme ve silme işlemleri (eğer kullanıcı blogun sahibi ise).
- En çok beğenilen ve görüntülenen blogların listesi.

## ContentCard (Blog İçerik Kartı)

`ContentCard` bileşeni, bir blogun içeriklerini (metin ve görseller) görselleştirmek ve düzenleme/silme işlemleri yapmak için kullanılır.

### UpdateContentModal (İçerik Güncelleme Modali)

`UpdateContentModal` bileşeni, bir blog içeriğini güncellemek için kullanılan modal bileşenidir. Kullanıcı, içeriği düzenledikten sonra kaydedebilir.

### UpdateContentForm (İçerik Güncelleme Formu)

`UpdateContentForm` bileşeni, bir blog içeriğini düzenlemek için kullanılır. Kullanıcılar içerik metnini ve görselleri güncelleyebilir.

#### Özellikler:
- İçeriğin HTML formatında düzenlenmesi.
- Görsel ekleme ve kaldırma işlemleri.
- İçeriğin bloga ait ID ile birlikte güncellenmesi.
- Düzenleme işleminin tamamlanması sonrası blog detaylarının güncellenmesi.

### TextEditor (Metin Editörü)

`TextEditor` bileşeni, blog içeriklerini oluşturmak ve düzenlemek için kullanılan bir metin editörüdür. **React-Quill** tabanlıdır ve özelleştirilmiş bir araç çubuğu içerir.

#### Özellikler:
- Zengin metin düzenleme (başlıklar, kalın/italik/altı çizili metinler, listeleme, hizalama vb.).
- İçerik alanının zorunlu olduğuna dair kullanıcı uyarıları.
- İçeriklerin kolayca düzenlenebilmesi ve görselleştirilmesi.

### DeleteContentModal (İçerik Silme Modali)

`DeleteContentModal` bileşeni, bir blog içeriğini silmek için kullanılan modal bileşenidir. Kullanıcı, içeriği silmek istediğini onayladıktan sonra işlem gerçekleşir.

#### Özellikler:
- İçeriğin silinmesi için kullanıcı onayı alır.
- Silme işlemi sonrası blog detayları güncellenir.

### ImageBlogModal (Görsel Blog Modali)

`ImageBlogModal` bileşeni, bir blog görselini büyütmek ve optimize edilmiş halde göstermek için kullanılan modal bileşenidir.

#### Özellikler:
- Optimize edilmiş görsel gösterimi (Cloudinary gibi bir hizmet kullanılarak).
- Kullanıcı dostu ve responsive tasarım.

### CommentForm (Yorum Formu)

`CommentForm` bileşeni, kullanıcıların bloglara yorum yapmasını sağlar. Emoji ekleme özelliği içerir.

#### Özellikler:
- Kullanıcı yorumlarını yazabilir ve gönderebilir.
- Emoji seçici (Emoji-Mart) ile yorumlara emoji eklenebilir.
- Yorum yapabilmek için giriş zorunluluğu.

### CommentCard (Yorum Kartı)

`CommentCard` bileşeni, blog yorumlarını görüntülemek ve yönetmek için kullanılır. Kullanıcılar yorumları düzenleyebilir, silebilir veya yanıtlama yapabilir.

#### Özellikler:
- Yorum detaylarının gösterimi (yazar bilgisi, oluşturulma tarihi vb.).
- Yorum düzenleme ve silme işlemleri.
- Yorum yanıtlama ve alt yorumların yönetimi (yanıtlar için alt yorum bileşenleriyle entegrasyon).

### useCommentCalls (Yorum İşlemleri için Hook)

`useCommentCalls` özel hook'u, yorumlarla ilgili işlemleri gerçekleştirmek için kullanılır.

#### Fonksiyonlar:
1. **postComment**: Yeni bir yorum ekler.
2. **putComment**: Mevcut bir yorumu günceller.
3. **deleteComment**: Mevcut bir yorumu siler.

### EditBottomCommentForm (Alt Yorum Düzenleme Formu)

`EditBottomCommentForm` bileşeni, kullanıcıların alt yorumlarını düzenlemesini sağlar. Emoji seçici özelliği içerir.

#### Özellikler:
- Mevcut alt yorumun düzenlenmesi.
- Emoji ekleme desteği.
- Kullanıcı dostu ve responsive tasarım.

### BottomCommentCard (Alt Yorum Kartı)

`BottomCommentCard` bileşeni, alt yorumları görüntülemek ve yönetmek için kullanılır. Alt yorumlar düzenlenebilir, silinebilir veya yanıtlama yapabilir.

#### Özellikler:
- Alt yorum detaylarının gösterimi (yazar bilgisi, oluşturulma tarihi vb.).
- Alt yorum düzenleme ve silme işlemleri.
- Yanıt verme özelliği.

### CommentBottomForm (Alt Yorum Ekleme Formu)

`CommentBottomForm` bileşeni, alt yorum eklemek için kullanılır. Emoji seçici özelliği içerir ve alt yorumları kolayca eklemeyi sağlar.

#### Özellikler:
- Yeni alt yorum ekleme.
- Yanıtlanan kullanıcının adını görüntüleme.
- Emoji ekleme desteği.
- Kullanıcı dostu ve responsive tasarım.

### EditBottomCommentForm (Alt Yorum Düzenleme Formu)

`EditBottomCommentForm` bileşeni, kullanıcıların alt yorumlarını düzenlemesini sağlar. Emoji seçici özelliği içerir.

#### Özellikler:
- Mevcut alt yorumun düzenlenmesi.
- Emoji ekleme desteği.
- Kullanıcı dostu ve responsive tasarım.

### UpdateBlogModal (Blog Güncelleme Modali)

`UpdateBlogModal` bileşeni, bir blogun bilgilerini düzenlemek için kullanılan modal bileşenidir.

#### Özellikler:
- Blog başlığı, kategorisi, görselleri ve yayın durumu düzenlenebilir.
- Kullanıcı dostu ve responsive tasarım.

### UpdateBlogForm (Blog Güncelleme Formu)

`UpdateBlogForm` bileşeni, bir blogun bilgilerini düzenlemek için kullanılan form bileşenidir.

#### Özellikler:
- Blog başlığı, kategori seçimi ve yayın durumu düzenlenebilir.
- Yeni görseller eklenebilir veya mevcut görseller değiştirilebilir.
- Kullanıcı dostu ve responsive tasarım.

### AddContentModal (Blog İçerik Ekleme Modali)

`AddContentModal` bileşeni, bir bloga yeni içerikler eklemek için kullanılan modal bileşenidir.

#### Özellikler:
- Yeni içerik ekleme işlemleri yapılabilir.
- Blog yazılarına birden fazla içerik ekleme desteği.

### AddContentForm (Blog İçerik Ekleme Formu)

`AddContentForm` bileşeni, bir bloga içerik eklemek için kullanılan form bileşenidir.

#### Özellikler:
- İçerik ve görseller eklenebilir.
- İçeriğin HTML formatıyla düzenlenmesi.
- Yeni içerikler eklenirken form sıfırlanabilir.

### DeleteBlogModal (Blog Silme Modali)

`DeleteBlogModal` bileşeni, bir blogu silmek için kullanılan modal bileşenidir.

#### Özellikler:
- Blogun silinmesini onaylamak için kullanıcıdan onay alır.
- Blog silindikten sonra ilgili bilgiler temizlenir ve ana sayfaya yönlendirilir.

### LikedBlogCard (Beğenilen Blog Kartı)

`LikedBlogCard` bileşeni, en çok beğenilen blogları göstermek için kullanılan bir kart bileşenidir.

#### Özellikler:
- Blog görseli, başlığı ve kısa içeriği görüntülenebilir.
- Yazar bilgisi ve oluşturulma tarihi gösterilir.
- Tıklanabilir görsel ve başlık ile detay sayfasına yönlendirme yapılır.

### ViewedBlogCard (Görüntülenen Blog Kartı)

`ViewedBlogCard` bileşeni, en çok görüntülenen blogları göstermek için kullanılan bir kart bileşenidir.

#### Özellikler:
- Blog görseli, başlığı ve kısa içeriği görüntülenebilir.
- Yazar bilgisi ve oluşturulma tarihi gösterilir.
- Tıklanabilir görsel ve başlık ile detay sayfasına yönlendirme yapılır.

### Users.js (Kullanıcı Listeleme ve Arama Sayfası)

`Users.js` bileşeni, kullanıcıların listelenmesi, arama ve sayfalama (pagination) işlemleri için kullanılır.

#### Özellikler:
- Kullanıcı listesi gösterimi.
- Kullanıcı arama (Search).
- Sayfalama (Pagination) desteği.

### Search.js (Kullanıcı Arama Bileşeni)

`Search.js` bileşeni, kullanıcı arama işlemlerini gerçekleştirmek için kullanılır.

#### Özellikler:
- Kullanıcı adıyla arama yapma.
- Arama sonuçlarını listeleme.

### UsersCard.js (Kullanıcı Kartı)

`UsersCard` bileşeni, kullanıcıların detaylarını göstermek ve kullanıcı profiline yönlendirmek için kullanılır.

#### Özellikler:
- Kullanıcı adı, e-posta adresi ve oluşturulma tarihi gösterilir.
- Kullanıcı detaylarına yönlendirme yapılabilir.

### UserCardSkeleton.js (Kullanıcı Kartı İskeleti)

`UserCardSkeleton` bileşeni, kullanıcı kartları yüklenirken iskelet ekranı göstermek için kullanılır.

#### Özellikler:
- Yükleme sırasında placeholder kartların görüntülenmesi.

### UserDetail.js (Kullanıcı Detay Sayfası)

`UserDetail.js` bileşeni, tek bir kullanıcıya ait detayları göstermek ve kullanıcı üzerinde güncelleme veya silme işlemleri yapmak için kullanılır.

#### Özellikler:
- Kullanıcı adı, e-posta adresi, ad-soyad ve oluşturulma tarihi gösterilir.
- Kullanıcı bilgilerini güncelleme ve silme işlemleri yapılabilir.

### UpdateUserModal.js (Kullanıcı Güncelleme Modali)

`UpdateUserModal` bileşeni, bir kullanıcının bilgilerini güncellemek için kullanılan modal bileşenidir.

#### Özellikler:
- Kullanıcı adı, ad, soyad, e-posta adresi ve şifre gibi bilgilerin güncellenmesi.
- Kullanıcı görselinin eklenmesi veya düzenlenmesi.
- Admin ve aktiflik durumlarının değiştirilmesi.

### DeleteUserModal.js (Kullanıcı Silme Modali)

`DeleteUserModal` bileşeni, bir kullanıcıyı silmek için kullanılan modal bileşenidir.

#### Özellikler:
- Kullanıcıyı silme işlemi onaylatılır.
- Kullanıcı silindikten sonra kullanıcı listesine yönlendirme yapılır.

### NewCategory.js (Yeni Kategori Ekleme Sayfası)

`NewCategory.js` bileşeni, bir kategoriyi eklemek için kullanılan sayfa bileşenidir.

#### Özellikler:
- Yeni kategori adını girerek kategori oluşturma işlemi yapılır.

### CategoryCard.js (Kategori Kartı)

`CategoryCard` bileşeni, bir kategoriyi göstermek ve kategori üzerinde işlemler yapmak için kullanılır.

#### Özellikler:
- Kategori detaylarını görüntüleme.
- Kategori güncelleme ve silme işlemleri.


### Categories.js (Kategori Listeleme Sayfası)

`Categories.js` bileşeni, tüm kategorileri listelemek ve görüntülemek için kullanılır.

#### Özellikler:
- Tüm kategorilerin listelenmesi.
- Kategori kartlarını düzenleyebilme veya silebilme.

### NewCategoryForm.js (Yeni Kategori Ekleme Formu)

`NewCategoryForm` bileşeni, yeni bir kategori eklemek için kullanılan form bileşenidir.

#### Özellikler:
- Kategori adını belirleyerek yeni kategori ekleme işlemi.
- Form verilerinin temizlenmesi ve oturum bilgisi temizliği.

### NewCategory.js (Yeni Kategori Ekleme Sayfası)

`NewCategory.js` bileşeni, yeni bir kategori eklemek için kullanılan sayfa bileşenidir.

#### Özellikler:
- Yeni kategori formu gösterimi.
- Kategoriyi kaydetme işlemi.


### UpdateCategoryModal.js (Kategori Güncelleme Modali)

`UpdateCategoryModal` bileşeni, bir kategoriyi güncellemek için kullanılan modal bileşenidir.

#### Özellikler:
- Kategori adını düzenleme.
- Güncelleme işleminden sonra kategori listesinin yenilenmesi.

### DeleteCategoryModal.js (Kategori Silme Modali)

`DeleteCategoryModal` bileşeni, bir kategoriyi silmek için kullanılan modal bileşenidir.

#### Özellikler:
- Kategori silme işlemi onaylatılır.
- Silme işleminden sonra kategori listesinin yenilenmesi.

### NewBlog.js (Yeni Blog Oluşturma Sayfası)

`NewBlog.js` bileşeni, yeni bir blog oluşturmak için kullanılan sayfa bileşenidir.

#### Özellikler:
- Blog başlığı, içerik, kategori ve görseller gibi bilgilerin girilmesi.
- Yeni blog oluşturma formunun gösterimi.

### NewBlogForm.js (Yeni Blog Ve İçerik Ekleme Formu)

`NewBlogForm` bileşeni, yeni bir blog oluşturmak ve bloga içerik eklemek için kullanılan form bileşenidir.

#### Özellikler:
- Blog başlığı, kategori, görsel ve yayın durumu gibi bilgilerin girilmesi.
- Blog oluşturulduktan sonra içerik ekleme işlemleri.
- Birden fazla içerik ekleme seçeneği.

### About.js (Hakkında Sayfası)

`About.js` bileşeni, Köşe Yazısı platformunun amacı, vizyonu, kullanıcı deneyimi ve içerik kalitesine verdiği önemi açıklayan bir sayfa bileşenidir.

#### Özellikler:
- Platformun amacını ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik kalitesi hakkında bilgi verme.
- Blog yazmaya başlama sürecini adım adım açıklama.

### ContentForm.js (Blog İçerik Formu)

`ContentForm.js` bileşeni, blog içeriklerini eklemek veya düzenlemek için kullanılan bir form bileşenidir.

#### Özellikler:
- Blog içeriği ve görseller eklenebilir.
- Birden fazla içerik ekleme seçeneği.

### MyBlogs.js (Kullanıcının Blogları Sayfası)

`MyBlogs.js` bileşeni, kullanıcının yazdığı blogları listelemek ve yönetmek için kullanılan bir sayfa bileşenidir.

#### Özellikler:
- Kullanıcının yazdığı tüm blogları listeleme.
- Blogları kategoriye veya başlığa göre arama ve filtreleme.
- Blog beğenme işlemleri.
- Sayfalama desteği ile blogların listelenmesi.

### UserBlogCard.js (Kullanıcı Blog Kartı)

`UserBlogCard.js` bileşeni, bir kullanıcının yazdığı blogları listelemek ve etkileşimde bulunmak için kullanılan bir kart bileşenidir.

#### Özellikler:
- Blog başlığı, içerik özeti, kategori ve görselleri gösterir.
- Beğenme, yorum sayısı ve görüntüleme sayısını görüntüler.
- Blog detaylarına yönlendirme.
- Blog beğenme işlemleri.

### MyBlogDetail.js (Kullanıcı Blog Detay Sayfası)

`MyBlogDetail.js` bileşeni, kullanıcının yazdığı bir blogun detaylarını gösterir ve kullanıcının blog üzerinde işlem yapmasına olanak tanır.

#### Özellikler:
- Blog başlığı, içeriği, görselleri, kategori, beğenme, yorum ve görüntüleme sayısını gösterir.
- Blog beğenme, içerik ekleme, güncelleme ve silme işlemleri.
- En çok beğenilen ve görüntülenen blogların listelenmesi.
- Kullanıcı yorumları ve alt yorumların yönetimi.

### DeleteMyBlogModal.js (Blog Silme Modali)

`DeleteMyBlogModal.js` bileşeni, bir blogu silmek için kullanılan modal bileşenidir.

#### Özellikler:
- Blog silme işlemi onaylatılır.
- Blog silindikten sonra kullanıcı bloglar sayfasına yönlendirilir.

### Profile.js (Kullanıcı Profil Sayfası)

`Profile.js` bileşeni, kullanıcının profil bilgilerini listelemek ve detaylarını görüntülemek için kullanılan bir sayfa bileşenidir.

#### Özellikler:
- Kullanıcının adı, soyadı, e-posta adresi ve diğer profil bilgilerini görüntüler.
- Kullanıcı bilgileri yüklenirken iskelet ekranı gösterir.

### ProfileCardSkeleton.js (Profil İskelet Kartı)

`ProfileCardSkeleton.js` bileşeni, kullanıcı profil bilgileri yüklenirken geçici olarak gösterilen iskelet ekranı sağlar.

#### Özellikler:
- Kullanıcı profil bilgileri yüklenirken placeholder içerik sunar.
- Skeleton yapılar içerir.

### ProfileCard.js (Profil Kartı)

`ProfileCard.js` bileşeni, bir kullanıcının profil bilgilerini göstermek için kullanılan bir kart bileşenidir.

#### Özellikler:
- Kullanıcı adı, tam adı, e-posta, profil resmi ve oluşturulma tarihini görüntüler.
- Kullanıcı bilgilerini güncellemek için modal açar.

### UpdateMyUserModal.js (Kullanıcı Güncelleme Modali)

`UpdateMyUserModal.js` bileşeni, bir kullanıcının bilgilerini güncellemek için kullanılan modal bileşenidir.

#### Özellikler:
- Kullanıcı adı, ad, soyad, e-posta, şifre ve profil resmi düzenlenebilir.
- Formik ve Yup ile güçlü form yönetimi ve doğrulama.
- Şifre değiştirme ve profil resmi kaldırma desteği.

### Login.js (Kullanıcı Giriş Sayfası)

`Login.js` bileşeni, kullanıcı giriş işlemleri için kullanılan bir sayfa bileşenidir.

#### Özellikler:
- Kullanıcı e-posta ve şifre ile giriş yapabilir.
- Formik ve Yup ile form yönetimi ve doğrulama.
- Yeni hesap oluşturma ve şifre sıfırlama yönlendirmesi içerir.

### Register.js (Kullanıcı Kayıt Sayfası)

`Register.js` bileşeni, kullanıcı kayıt işlemleri için kullanılan bir sayfa bileşenidir.

#### Özellikler:
- Kullanıcı adı, ad, soyad, e-posta, şifre ve profil resmi ile kayıt yapabilir.
- Formik ve Yup ile form yönetimi ve doğrulama.
- Giriş sayfasına yönlendirme içerir.

### RegisterForm.js (Kayıt Formu)

`RegisterForm.js` bileşeni, kullanıcı kayıt işlemleri için kullanılan bir form bileşenidir.

#### Özellikler:
- Kullanıcı adı, ad, soyad, e-posta, şifre ve profil resmi ile kayıt yapabilir.
- Formik ve Yup ile form yönetimi ve doğrulama.
- Şifre görünürlüğü kontrolü ve resim dosyası yükleme desteği.

### Footer.js (Altbilgi Bileşeni)

`Footer.js` bileşeni, uygulamanın alt kısmında yer alan bir bileşendir.

#### Özellikler:
- Telif hakkı bilgilerini ve güncel yılı gösterir.
- GitHub, LinkedIn ve Email sosyal medya bağlantılarını içerir.

