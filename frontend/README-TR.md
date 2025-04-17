# Köşe Yazısı - Frontend

Bu proje, köşe yazılarınızı paylaşabileceğiniz bir platform olan **Köşe Yazısı** uygulamasının frontend kısmını içermektedir. Proje, kullanıcı dostu bir arayüz ve modern web teknolojileri kullanılarak geliştirilmiştir.

## Özellikler

- Kullanıcı dostu ve duyarlı tasarım.
- Redux Toolkit ile state yönetimi.
- **Axios** ile HTTP istekleri ve özelleştirilebilir API istemcileri.
- **Formik ve Yup** ile form yönetimi ve doğrulama.
- **TailwindCSS** ile özelleştirilebilir stil desteği.
- **Material-UI (MUI)** kullanılarak modern bileşenler.
- React Router ile sayfa yönlendirme.
- React-Toastify ile bildirim desteği.
- Tema desteği (Karanlık mod ve özel tema özelleştirmeleri).
- Kaydırma çubuğu özelleştirmeleri.
- Hiyerarşik ve yeniden kullanılabilir bileşen yapısı.
- **Navbar** ve **Footer** bileşenleri ile kullanıcı dostu gezinme.
- **Login**, **Register**, **Logout**, ve **Şifre Sıfırlama** işlemleri için tam kimlik doğrulama desteği.
- **Blog**, **Kategori**, ve **Kullanıcı** yönetimi için farklı sayfalar.
- **Redux Toolkit** ile kimlik doğrulama işlemleri.
- Redux Store ile kullanıcı bilgileri ve kimlik doğrulama durumunun yönetimi.
- Kullanıcı cihazlarına özel `deviceId` oluşturma ve saklama mekanizması.
- **Tema Modu Seçici** ile karanlık ve aydınlık mod arasında geçiş yapma.
- **Login Modali** ve **Şifre Sıfırlama Formu** ile kullanıcı dostu giriş işlemi.
- **Kategori CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Güncelleme Modali ve Formu**.
- **Blog Silme Modali**.
- **Blog İçerik Ekleme Modali ve Formu**.
- **Blog İçerik Güncelleme Modali ve Formu**.
- **Blog İçerik Silme Modali**.
- **Blog İçerik Güncelleme ve Silme İşlemleri**.
- **Zengin Metin Düzenleyici** ile içerikleri kolayca düzenleme.
- **Blog İçerik CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Arama, Kategori Filtreleme ve Sayfalama** desteği.
- **Kullanıcı Yönetimi** özelliği ile kullanıcı listeleme, tekil kullanıcı bilgilerini görüntüleme, kullanıcı güncelleme ve silme işlemleri.
- **Kategori Yönetimi** özelliği ile kategori oluşturma, listeleme, güncelleme ve silme işlemleri.
- **Blog Yönetimi** özelliği ile yeni blog oluşturma ve içerik ekleme.
- **Blog Detay Sayfası** ile blog içeriklerini, beğenileri ve yorumları görüntüleme.
- **Kullanıcı Blog Detay Sayfası** ile kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri.
- **Profil Sayfası** ile kullanıcı profili detaylarını görüntüleme.
- **Hakkında Sayfası** ile platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi edinme.
- **En Popüler ve En Çok Beğenilen Bloglar** için özel listeleme.
- **Blog Kartları** ile blogların görsel ve metinsel içeriklerinin listelenmesi.
- **Popüler Blog Kartı** ile kullanıcıların en çok görüntülediği blogları listeleme.
- **Beğenilen Blog Kartı** ile kullanıcıların en çok beğendiği blogları listeleme.
- **Kullanıcı Blog Kartı** ile kullanıcı bloglarını listeleme ve beğenme.
- **Kullanıcı Kartları ve Yükleme İskeleti** ile kullanıcı bilgilerini görsel olarak sunma.
- **Tekil Kullanıcı Detay Sayfası** ile kullanıcı bilgilerini detaylı inceleme.
- **Kullanıcı Güncelleme Modalı** ile kullanıcı bilgilerini güncelleme.
- **Kategori Güncelleme ve Silme Modalı** ile kategori güncelleme ve silme işlemleri.
- **Blog Beğeni Modalı** ile blogu beğenen kullanıcıların detaylarının gösterimi.
- **Blog Kart İskeleti** ile yükleme sırasında kullanıcı deneyimini artırma.
- **En Popüler Blog Kartı** ile detaylı görüntüleme ve görselleştirme.
- **En Çok Beğenilen Blog Kartı** ile detaylı görüntüleme ve görselleştirme.
- **Blog Beğenme İşlemleri**.
- **Blog Görsel Modalı** ile büyük görselleri görüntüleme.
- **Yorum Yapma** özelliği ile bloglara yorum ekleme, düzenleme, silme ve emoji desteği.
- **Alt Yorumlar** (cevap) ile hiyerarşik yorum desteği.
- **Alt Yorum CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.



# Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **Redux Toolkit**: Global state yönetimi ve slice yapılandırmaları.
- **Axios**: HTTP istekleri için özelleştirilmiş API istemcileri.
- **React Router**: Yönlendirme işlemleri.
- **Formik ve Yup**: Form yönetimi ve doğrulama.
- **TailwindCSS**: Hızlı ve verimli stil oluşturma.
- **Material-UI (MUI)**: Gelişmiş React bileşenleri.
- **React-Toastify**: Kullanıcı bildirimleri için.
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji Mart**: Emoji seçici desteği.
- **MUI Theme Customization**: Tema ve bileşen özelleştirmeleri.


## Proje Yapısı

#### Önemli Dosyalar ve Diziler

- `index.css`: TailwindCSS entegrasyonu.
- `AppTheme.jsx`: Tema özelleştirmesi ve tematik bileşen yapılandırmaları.
- `inputsCustomizations.js`: Form ve button bileşenleri için özel özelleştirmeler.
- `dataDisplayCustomizations.js`: Liste tasarımı için özelleştirmeler.
- `surfacesCustomizations.js`: Kart gibi yüzey bileşenleri için özel stiller.
- `themePrimitives.js`: Tema renkleri, tipografi, gölgeler ve CSS değişkenleri gibi temel yapılandırmalar.
- `useAuthCalls.js`: Kimlik doğrulama işlemleri için özelleştirilmiş hook.
- `useBlogCalls.js`: Blog işlemleri için özelleştirilmiş hook.
- `useCategoryCalls.js`: Kategori işlemleri için özelleştirilmiş hook.
- `useUserCalls.js`: Kullanıcı işlemleri için özelleştirilmiş hook.
- `useContentCalls.js`: Blog içerik işlemleri için özelleştirilmiş hook.
- `useCommentCalls.js`: Blog yorum işlemleri için özelleştirilmiş hook.
- `useBottomCommentCalls.js`: Alt yorum işlemleri için özelleştirilmiş hook.
- `useAxios.js`: Axios tabanlı özelleştirilmiş istemciler.
- `authSlice.js`: Redux Toolkit ile kimlik doğrulama işlemleri için slice.
- `blogSlice.js`: Redux Toolkit ile blog işlemleri için slice.
- `categorySlice.js`: Redux Toolkit ile kategori işlemleri için slice.
- `userSlice.js`: Redux Toolkit ile kullanıcı işlemleri için slice.
- `contentSlice.js`: Redux Toolkit ile blog içerik işlemleri için slice.
- `commentSlice.js`: Redux Toolkit ile blog yorum işlemleri için slice.
- `bottomCommentSlice.js`: Redux Toolkit ile alt yorum işlemleri için slice.
- `ToastNotify.js`: Başarı ve hata bildirimleri için Toastify entegrasyonu.
- `AppRouter.jsx`: Uygulama yönlendirme işlemleri ve sayfa rotaları.
- `Navbar.jsx`: Kullanıcı gezinmesi için üst gezinme çubuğu.
- `ColorModeIconDropdown.jsx`: Tema modu seçici bileşeni.
- `LoginModal.jsx`: Kullanıcı giriş işlemleri için modal.
- `LoginForm.jsx`: Giriş formu ve validasyon.
- `ForgotPasswordForm.jsx`: Şifre sıfırlama formu ve validasyon.
- `Dashboard.jsx`: Anasayfa bileşeni.
- `MainContent.jsx`: Blog listeleme, kategori filtreleme, arama ve sayfalama.
- `Users.jsx`: Kullanıcıları listeleme, arama ve sayfalama işlemleri.
- `UserDetail.jsx`: Tekil kullanıcı detaylarını görüntüleme.
- `Profile.jsx`: Kullanıcı profili detaylarını görüntüleme.
- `UpdateUserModal.jsx`: Kullanıcı güncelleme işlemleri için modal.
- `DeleteUserModal.jsx`: Kullanıcı silme işlemleri için modal.
- `NewCategory.jsx`: Yeni kategori oluşturma sayfası.
- `NewCategoryForm.jsx`: Yeni kategori eklemek için kullanılan form.
- `Categories.jsx`: Kategorileri listeleme sayfası.
- `CategoryCard.jsx`: Kategori bilgilerini listeleme, güncelleme ve silme işlemleri için kart.
- `UpdateCategoryModal.jsx`: Kategori güncelleme işlemleri için modal.
- `DeleteCategoryModal.jsx`: Kategori silme işlemleri için modal.
- `NewBlog.jsx`: Yeni blog sayfası.
- `NewBlogForm.jsx`: Yeni blog eklemek ve içerik eklemek için kullanılan form.
- `ContentForm.jsx`: Blog içeriklerini düzenleme ve ekleme işlemleri için form.
- `About.jsx`: Platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi veren sayfa.
- `MyBlogs.jsx`: Kullanıcıya ait blogların listelendiği ve yönetildiği sayfa
- `UserBlogCard.jsx`: Kullanıcı bloglarını listeleme ve beğenme işlemleri için kart.
- `MyBlogDetail.jsx`: Kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri için sayfa.
- `DeleteMyBlogModal.jsx`: Kullanıcı bloglarını silme işlemleri için modal.
- `BlogDetail.jsx`: Blog detaylarını ve içeriğini görüntüleme.
- `UpdateBlogModal.jsx`: Blog güncelleme işlemleri için modal.
- `UpdateBlogForm.jsx`: Blog güncelleme işlemleri için form.
- `AddContentModal.jsx`: Blog içeriği ekleme işlemleri için modal.
- `AddContentForm.jsx`: Blog içeriği ekleme işlemleri için form.
- `UpdateContentModal.jsx`: Blog içeriği güncelleme işlemleri için modal.
- `UpdateContentForm.jsx`: Blog içeriği güncelleme işlemleri için form.
- `DeleteBlogModal.jsx`: Blog silme işlemleri için modal.
- `DeleteContentModal.jsx`: Blog içeriği silme işlemleri için modal.
- `ImageBlogModal.jsx`: Blog görsellerini görüntüleme modalı.
- `CommentForm.jsx`: Blog yorumları eklemek için form.
- `EditCommentForm.jsx`: Yorum düzenlemek için form.
- `CommentCard.jsx`: Blog yorumlarını listeleme, düzenleme ve silme işlemleri için kart.
- `BottomCommentForm.jsx`: Alt yorumlar (cevaplar) için form.
- `CommentBottomForm.jsx`: Alt yorumlar için cevap ekleme formu.
- `EditBottomCommentForm.jsx`: Alt yorumları düzenlemek için form.
- `BottomCommentCard.jsx`: Alt yorumları listelemek ve düzenlemek için kart.
- `PopularBlogCard.jsx`: Popüler blogları listelemek için kart.
- `LikedBlogCard.jsx`: Beğenilen blogları listelemek için kart.
- `ViewedBlogCard.jsx`: En çok görüntülenen blogları listelemek için kart.
- `UsersCard.jsx`: Kullanıcı kart bileşeni.
- `UserCardSkeleton.jsx`: Kullanıcı kartı yükleme iskeleti.
- `ProfileCard.jsx`: Kullanıcı profili kart bileşeni.
- `ProfileCardSkeleton.jsx`: Kullanıcı profili yükleme iskeleti.
- `ContentCard.jsx`: Blog içeriği kart bileşeni.
- `TextEditor.jsx`: Zengin metin düzenleyici.
- `Search.jsx`: Kullanıcı ve blog arama bileşeni.
- `BlogCard.jsx`: Blog kart bileşeni.
- `MostPopularBlogCard.jsx`: En popüler blog kartı bileşeni.
- `MostLikedBlogCard.jsx`: En çok beğenilen blog kartı bileşeni.
- `BlogLikesModal.jsx`: Blog beğeni detayları için modal.
- `BlogCardSkeleton.jsx`: Blog kartı yükleme iskeleti.
- `store.jsx`: Redux store tanımı ve yapılandırması.
- `Device.js`: Kullanıcı cihaz kimliklerini (`deviceId`) yönetmek için yardımcı fonksiyon.

## Profil Yönetimi

**Profile.jsx**, **ProfileCard.jsx**, ve **ProfileCardSkeleton.jsx** kullanıcı profili detaylarını görüntüleme ve güncelleme işlemleri için kullanılır. Kullanıcılar, profil bilgilerini detaylı şekilde görebilir ve düzenleyebilir.

### İşlevler:
- Kullanıcı profilini detaylı görüntüleme.
- Kullanıcı bilgilerini düzenleme.
- Kullanıcı bilgilerini yükleme sırasında iskelet ekran gösterimi.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, **MyBlogs.jsx**, **UserBlogCard.jsx**, **MyBlogDetail.jsx**, **DeleteMyBlogModal.jsx**, ve **ContentForm.jsx**; yeni blog oluşturma, kullanıcı bloglarını yönetme, detay görüntüleme ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, bloglarını yönetebilir, mevcut bloglarını düzenleyebilir ve içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Kullanıcı bloglarını listeleme, beğenme ve yönetme.
- Kullanıcı blog detaylarını görüntüleme ve düzenleme.
- Blogları silme işlemleri.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, **MyBlogs.jsx**, **UserBlogCard.jsx**, **MyBlogDetail.jsx**, **DeleteMyBlogModal.jsx**, ve **ContentForm.jsx**; yeni blog oluşturma, kullanıcı bloglarını yönetme, detay görüntüleme ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, bloglarını yönetebilir, mevcut bloglarını düzenleyebilir ve içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Kullanıcı bloglarını listeleme, beğenme ve yönetme.
- Kullanıcı blog detaylarını görüntüleme ve düzenleme.
- Blogları silme işlemleri.
- Formik ve Yup ile form yönetimi ve doğrulama.

## Profil Yönetimi

**Profile.jsx**, kullanıcı profilini detaylı bir şekilde görüntüleme ve kullanıcıya özel bilgileri sağlama özelliği sunar. Kullanıcıların profil bilgilerini düzenleme ve görüntüleme işlemleri bu sayfa üzerinden yapılır.

### İşlevler:
- Kullanıcı profilini detaylı görüntüleme.
- Kullanıcı bilgilerini yükleme sırasında iskelet ekran gösterimi.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, **MyBlogs.jsx**, **UserBlogCard.jsx**, **MyBlogDetail.jsx**, ve **ContentForm.jsx**; yeni blog oluşturma, kullanıcı bloglarını yönetme, detay görüntüleme ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, bloglarını yönetebilir, mevcut bloglarını düzenleyebilir ve içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Kullanıcı bloglarını listeleme, beğenme ve yönetme.
- Kullanıcı blog detaylarını görüntüleme ve düzenleme.
- Formik ve Yup ile form yönetimi ve doğrulama.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, **MyBlogs.jsx**, **UserBlogCard.jsx**, ve **ContentForm.jsx**; yeni blog oluşturma, kullanıcı bloglarını yönetme ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, bloglarını yönetebilir, mevcut bloglarını düzenleyebilir ve içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Kullanıcı bloglarını listeleme, beğenme ve yönetme.
- Formik ve Yup ile form yönetimi ve doğrulama.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, **MyBlogs.jsx**, ve **ContentForm.jsx**; yeni blog oluşturma, kullanıcı bloglarını yönetme ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, bloglarını yönetebilir, mevcut bloglarını düzenleyebilir ve içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Kullanıcı bloglarını listeleme ve yönetme.
- Formik ve Yup ile form yönetimi ve doğrulama.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.


## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, ve **ContentForm.jsx** yeni blog oluşturma ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, yeni blog oluşturma sayfasında detaylı bir form doldurarak içeriklerini paylaşabilir ve bloglarına içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Formik ve Yup ile form yönetimi ve doğrulama.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, ve **ContentForm.jsx** yeni blog oluşturma ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, yeni blog oluşturma sayfasında detaylı bir form doldurarak içeriklerini paylaşabilir ve bloglarına içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Formik ve Yup ile form yönetimi ve doğrulama.

## Blog Yönetimi

**NewBlog.jsx** ve **NewBlogForm.jsx**, yeni blog oluşturma işlemleri için kullanılır. Kullanıcılar, yeni blog oluşturma sayfasında detaylı bir form doldurarak içeriklerini paylaşabilir.

### İşlevler:
- Yeni blog oluşturma.
- Formik ve Yup ile form yönetimi ve doğrulama.
- İlgili kategori ve içerik bilgilerinin eklenmesi.

## Kategori Yönetimi

**Categories.jsx**, **CategoryCard.jsx**, **NewCategoryForm.jsx**, **UpdateCategoryModal.jsx**, ve **DeleteCategoryModal.jsx** bileşenleri, kategori yönetimi ile ilgili tüm işlemleri sağlar. Bu işlemler arasında kategorileri listeleme, yeni kategori oluşturma, mevcut kategorileri güncelleme ve silme bulunmaktadır.

### İşlevler:
- Kategorileri listeleme.
- Yeni kategori oluşturma.
- Mevcut kategorileri güncelleme.
- Kategorileri silme.

## Kategori Yönetimi

**Categories.jsx**, **CategoryCard.jsx**, **NewCategoryForm.jsx**, **UpdateCategoryModal.jsx**, ve **DeleteCategoryModal.jsx** bileşenleri, kategori yönetimi ile ilgili tüm işlemleri sağlar. Bu işlemler arasında kategorileri listeleme, yeni kategori oluşturma, mevcut kategorileri güncelleme ve silme bulunmaktadır.

### İşlevler:
- Kategorileri listeleme.
- Yeni kategori oluşturma.
- Mevcut kategorileri güncelleme.
- Kategorileri silme.

## Yeni Kategori Oluşturma

**NewCategory.jsx** ve **NewCategoryForm.jsx**, yeni kategori oluşturma işlemleri için kullanılır. Kullanıcılar, kategori oluşturma sayfasında detaylı bir form doldurarak yeni kategoriler ekleyebilir.

### İşlevler:
- Yeni kategori oluşturma.
- Formik ve Yup ile form yönetimi ve doğrulama.
- Kullanıcı dostu bir arayüz ile kategori yönetimini kolaylaştırma.


## Kullanıcı Güncelleme Modalı

**UpdateUserModal.jsx**, kullanıcı bilgilerini güncellemek için kullanılan bir modal bileşenidir. Kullanıcı adı, ad, soyad, e-posta, şifre, aktiflik durumu, admin durumu ve profil resmi gibi bilgileri güncelleme özellikleri sunar.

### İşlevler:
- Kullanıcı bilgilerini doğrulama ve güncelleme.
- Şifre ve profil resmi değiştirme.
- Formik ve Yup kullanılarak form yönetimi ve doğrulama.

## Kullanıcı Detay Sayfası İşlemleri

**UserDetail.jsx**, **UpdateUserModal.jsx**, ve **DeleteUserModal.jsx** kullanılarak, tekil kullanıcı detaylarının görüntülenmesi, güncellenmesi ve silinmesi işlemleri gerçekleştirilir.

### İşlevler:
- Kullanıcı detaylarını görsel olarak görüntüleme.
- Kullanıcı bilgilerini güncelleme.
- Kullanıcıyı silme işlemleri.

## Kullanıcı Kartları ve Yükleme İskeleti

**Users.jsx**, **UsersCard.jsx**, ve **UserCardSkeleton.jsx** kullanıcı yönetimi için gerekli olan tüm işlemleri sağlar. Bu işlemler arasında kullanıcı listeleme, tekil kullanıcı bilgisi alma, kullanıcı güncelleme ve silme işlemleri bulunmaktadır.

### İşlevler:
- **getUsers**: Kullanıcıları listeleme.
- **getSingleUser**: Tekil kullanıcı bilgilerini getirme.
- **putUser**: Kullanıcı bilgilerini güncelleme.
- **putMyUser**: Kullanıcı kendi bilgilerini güncelleme.
- **deleteUser**: Kullanıcı silme.

### İşlevler:
- Kullanıcı bilgilerini görsel kartlar ile listeleme.
- Kullanıcılar üzerinde arama yapma.
- Sayfalama desteği ile kullanıcı listesi gezintisi.
- Kullanıcı detay sayfasına yönlendirme.
- Yükleme sırasında iskelet ekranı gösterimi.

## Beğenilen Blog Kartı

**LikedBlogCard.jsx** dosyası, kullanıcıların en çok beğendiği blogları listelemek için bir kart bileşenidir. Bu bileşen, blog başlıklarını, içeriklerini, yazar bilgilerini ve oluşturulma tarihlerini görsel ve metinsel olarak sunar.

### İşlevler:
- Beğenilen blogların başlık, içerik, yazar ve tarih bilgilerini listeleme.
- Kullanıcıların detay sayfasına yönlendirilmesini sağlama.
- Görsellerin optimize edilerek yüklenmesi.

## Popüler Blog Kartı

**PopularBlogCard.jsx** dosyası, popüler blogları listelemek için bir kart bileşenidir. Bu bileşen, blog başlıklarını, içeriklerini, yazar bilgilerini ve oluşturulma tarihlerini görsel ve metinsel olarak sunar.

### İşlevler:
- Popüler blogların başlık, içerik, yazar ve tarih bilgilerini listeleme.
- Kullanıcıların detay sayfasına yönlendirilmesini sağlama.
- Görsellerin optimize edilerek yüklenmesi.

## Alt Yorum İşlemleri

**BottomCommentCard.jsx**, **BottomCommentForm.jsx**, **EditBottomCommentForm.jsx**, **CommentBottomForm.jsx**, ve **useBottomCommentCalls.js** dosyaları, alt yorumlar (cevaplar) eklemek, düzenlemek ve silmek için gerekli olan kullanıcı arayüzü ve işlevselliği sağlar.

### İşlevler:
- **Form Alanları**:
  - Alt Yorumlar (`bottomComment`)
  - Emoji Desteği
- **CRUD İşlemleri**:
  - Alt yorum ekleme.
  - Alt yorum düzenleme.
  - Alt yorum silme.



## Blog Yorum İşlemleri

**EditCommentForm.jsx**, **CommentCard.jsx**, **CommentForm.jsx**, ve **useCommentCalls.js** dosyaları, bloglara yorum eklemek, düzenlemek, silmek için gerekli olan kullanıcı arayüzü ve işlevselliği sağlar.

### İşlevler:
- **Form Alanları**:
  - Yorum (`comment`)
  - Alt Yorumlar (`reply`)
  - Emoji Desteği
- **CRUD İşlemleri**:
  - Yorum ekleme.
  - Yorum düzenleme.
  - Yorum silme.

## Blog Görsel Modalı

**ImageBlogModal.jsx** dosyası, blog görsellerini tam ekran veya büyük boyutlu modal içinde görüntüleme işlevselliği sağlar.

## Kategori İşlemleri

**useCategoryCalls.js** ve **categorySlice.js** dosyaları, kategori CRUD işlemleri için gerekli işlevleri sağlar:

### Sağlanan İşlevler:
1. **getCategories**: Tüm kategorileri listeleme.
2. **postCategory**: Yeni kategori ekleme.
3. **putCategory**: Mevcut kategori güncelleme.
4. **deleteCategory**: Kategori silme.

### Toastify Bildirimleri:
- **Başarı**: Kategori ekleme, güncelleme veya silme işlemleri başarıyla tamamlandığında kullanıcıya bilgi verir.
- **Hata**: Kategori adı çakışmaları gibi durumlarda hata bildirimi gösterir.

## Blog İçerik İşlemleri

**AddContentForm.jsx**, **ContentCard.jsx**, **DeleteContentModal.jsx**, **UpdateContentModal.jsx**, **UpdateContentForm.jsx**, **useContentCalls.js** ve **contentSlice.js** dosyaları, bloglara içerik ekleme, güncelleme ve silme işlemleri için kullanıcı arayüzü ve işlevsellik sağlar.


### İşlevler:
- **Form Alanları**:
  - Blog İçeriği (`content`)
  - Görsel Ekleme (`images`)
- **Çoklu İçerik Ekleme**: Kullanıcı birden fazla içerik ekleyebilir.
- **Redux Entegrasyonu**: Yeni içerik ekleme işlemleri Redux state'ine yansıtılır.
- **Görsel Optimize Etme**: Yüklenen görseller optimize edilir.
- **CRUD İşlemleri**:
  - Yeni içerik ekleme.
  - Mevcut içeriği güncelleme.
  - İçerik silme işlemleri.

## Blog İşlemleri

**useBlogCalls.js** dosyası, bloglarla ilgili CRUD işlemlerini ve diğer işlemleri sağlar:

### Sağlanan İşlevler:
1. **getAllBlogs**: Tüm blogları listeleme.
2. **getBlogs**: Belirli sorgulara göre blogları listeleme.
3. **getBlogsView**: En çok görüntülenen blogları listeleme.
4. **getBlogsLike**: En çok beğenilen blogları listeleme.
5. **postBlogId**: Blog ID'si oluşturma.
6. **postBlog**: Yeni blog ekleme.
7. **getSingleBlog**: Tek bir blogun detaylarını getirme.
8. **putBlog**: Mevcut blogu güncelleme.
9. **deleteBlog**: Blog silme.
10. **postBlogLike**: Blogu beğenme.
11. **getAllUserBlog**: Tüm kullanıcı bloglarını listeleme.
12. **getUserBlog**: Belirli bir kullanıcının bloglarını listeleme.

## Blog Güncelleme İşlemleri

**UpdateBlogModal.jsx** ve **UpdateBlogForm.jsx** dosyaları, blogları güncellemek için gerekli olan kullanıcı arayüzü ve işlevselliği sağlar. Blog başlığı, kategorisi, görseli ve yayın durumu gibi alanlar düzenlenebilir.

### Sağlanan İşlevler:
1. **Form Alanları**:
   - Blog Başlığı (`title`)
   - Blog Kategorisi (`categoryId`)
   - Görsel Ekleme ve Değiştirme
   - Yayın Durumu (`isPublish`)
2. **Görsel Optimize Etme**: Yüklenen görsellerin kalite ve format ayarları optimize edilmiştir.
3. **Redux Entegrasyonu**: Güncelleme sonrası değişiklikler Redux state'ine yansıtılır.

## Anasayfa İşlevleri

**MainContent.jsx** dosyası, anasayfa için aşağıdaki ana özellikleri sağlar:

1. **Blog Listeleme**: Tüm blogları grid yapısında listeler.
2. **Kategori Filtreleme**: Bloglar belirli kategorilere göre filtrelenebilir.
3. **Arama Özelliği**: Kullanıcı blog başlıklarına göre arama yapabilir.
4. **Sayfalama**: Bloglar sayfa sayfa görüntülenebilir.
5. **En Popüler Bloglar**: Görüntülenme sayısına göre sıralanmış bloglar.
6. **En Çok Beğenilen Bloglar**: Beğeni sayısına göre sıralanmış bloglar.

## Blog Kartları

**BlogCard.jsx** bileşeni, blogların görsel ve metinsel içeriğini kullanıcıya sunar. Aşağıdaki özellikleri içerir:

1. **Görsel İçerik**: Blogların kapak görseli optimize edilerek gösterilir.
2. **Kategori ve Başlık**: Blogun kategorisi ve başlığı görüntülenir.
3. **Beğeni, Yorum ve Görüntülenme Sayısı**: Blogun etkileşim istatistikleri gösterilir.
4. **Kullanıcı ve Tarih Bilgisi**: Blogu oluşturan kullanıcı ve oluşturulma tarihi belirtilir.
5. **Beğeni Detayları**: Blogu beğenen kullanıcıların detayları modal ile gösterilir.

## Blog Kartları ve Modaller

1. **BlogCard.jsx**: Blogların görsel ve metinsel içeriğini kullanıcıya sunar. Etkileşim istatistiklerini (beğeni, yorum, görüntülenme) ve kullanıcı bilgilerini gösterir.
2. **BlogLikesModal.jsx**: Blogu beğenen kullanıcıların detaylarını modal içinde gösterir.
3. **BlogCardSkeleton.jsx**: Blog kartlarının yükleme sırasında iskelet görünümünü sağlar.
4. **MostPopularBlogCard.jsx**: En popüler blogların görsel, kategori ve içerik detaylarını kullanıcıya sunar.
5. **MostLikedBlogCard.jsx**: En çok beğenilen blogların görsel, kategori ve içerik detaylarını kullanıcıya sunar.


## Kimlik Doğrulama İşlemleri

Bu projede kullanıcı kimlik doğrulama işlemleri için `useAuthCalls.js` adlı özel bir hook ve `authSlice.js` adlı bir Redux slice yapılandırması bulunmaktadır. Bu özellikler aşağıdaki işlemleri içerir:

- **Register (Kayıt Olma)**: Kullanıcı bilgilerini server'a gönderir ve başarı durumunda kullanıcıyı localStorage'e kaydeder.
- **Login (Giriş Yapma)**: Kullanıcı giriş bilgilerini doğrular ve localStorage'e kaydeder.
- **Forgot Password (Şifre Sıfırlama)**: Kullanıcıya şifre sıfırlama seçeneği sunar.
- **Logout (Çıkış Yapma)**: Kullanıcı bilgilerini localStorage'den temizler ve Redux state'ini sıfırlar.

## Giriş ve Şifre Sıfırlama Formları

1. **LoginForm.jsx**: Kullanıcı giriş işlemleri için form bileşeni. Form doğrulaması `Formik` ve `Yup` kullanılarak gerçekleştirilir. Şifre alanı için görünürlük geçişi sağlanır.
2. **ForgotPasswordForm.jsx**: Şifre sıfırlama işlemleri için form bileşeni. Kullanıcıdan e-posta bilgisi alır ve doğrulama işlemini gerçekleştirir.

## Tema Modu Yönetimi

`ColorModeIconDropdown.jsx` bileşeni, kullanıcıların karanlık ve aydınlık mod arasında geçiş yapmasını sağlar. Kullanıcı tercihi, `@mui/material`'in `useColorScheme` hook'u ile yönetilir ve seçilen mod, HTML elementine uygulanır.

## Login Modali

`LoginModal.jsx` bileşeni, kullanıcı giriş işlemleri için bir modal sağlar. Form doğrulaması `Formik` ve `Yup` ile gerçekleştirilir. Başarılı giriş durumunda kullanıcı ana sayfaya yönlendirilir.

## Axios İstemcileri

`useAxios.js` dosyasında, API istekleri için dört farklı Axios istemcisi tanımlanmıştır:

1. **axiosPublic**: Genel istekler için.
2. **axiosData**: Multipart veri gönderimi için.
3. **axiosWithToken**: Kimlik doğrulama gerektiren istekler için.
4. **axiosWithTokenAndData**: Hem kimlik doğrulama hem de multipart veri gönderimi için.

-------------------------------------------------------

# Köşe Yazısı - Frontend (45)

Bu proje, köşe yazılarınızı paylaşabileceğiniz bir platform olan **Köşe Yazısı** uygulamasının frontend kısmını içermektedir. Proje, kullanıcı dostu bir arayüz ve modern web teknolojileri kullanılarak geliştirilmiştir.

## Özellikler

- Kullanıcı dostu ve duyarlı tasarım.
- Redux Toolkit ile state yönetimi.
- **Axios** ile HTTP istekleri ve özelleştirilebilir API istemcileri.
- **Formik ve Yup** ile form yönetimi ve doğrulama.
- **TailwindCSS** ile özelleştirilebilir stil desteği.
- **Material-UI (MUI)** kullanılarak modern bileşenler.
- React Router ile sayfa yönlendirme.
- React-Toastify ile bildirim desteği.
- Tema desteği (Karanlık mod ve özel tema özelleştirmeleri).
- Kaydırma çubuğu özelleştirmeleri.
- Hiyerarşik ve yeniden kullanılabilir bileşen yapısı.
- **Login**, **Register**, **Logout**, ve **Şifre Sıfırlama** işlemleri için tam kimlik doğrulama desteği.
- Redux Store ile kullanıcı bilgileri ve kimlik doğrulama durumunun yönetimi.
- Kullanıcı cihazlarına özel `deviceId` oluşturma ve saklama mekanizması.
- **Tema Modu Seçici** ile karanlık ve aydınlık mod arasında geçiş yapma.
- **Kategori CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Güncelleme Modali ve Formu**.
- **Blog Silme Modali**.
- **Blog İçerik Ekleme Modali ve Formu**.
- **Blog İçerik Güncelleme Modali ve Formu**.
- **Blog İçerik Silme Modali**.
- **Blog İçerik Güncelleme ve Silme İşlemleri**.
- **Zengin Metin Düzenleyici** ile içerikleri kolayca düzenleme.
- **Blog İçerik CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Arama, Kategori Filtreleme ve Sayfalama** desteği.
- **Kullanıcı Yönetimi** özelliği ile kullanıcı listeleme, tekil kullanıcı bilgilerini görüntüleme, kullanıcı güncelleme ve silme işlemleri.
- **Kategori Yönetimi** özelliği ile kategori oluşturma, listeleme, güncelleme ve silme işlemleri.
- **Blog Yönetimi** özelliği ile yeni blog oluşturma, kullanıcı bloglarını görüntüleme ve içerik ekleme.
- **Blog Detay Sayfası** ile blog içeriklerini, beğenileri ve yorumları görüntüleme.
- **Kullanıcı Blog Detay Sayfası** ile kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri.
- **Profil Sayfası** ile kullanıcı profili detaylarını görüntüleme ve güncelleme.
- **Hakkında Sayfası** ile platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi edinme.
- **En Popüler ve En Çok Beğenilen Bloglar** için özel listeleme.
- **Blog Kartları** ile blogların görsel ve metinsel içeriklerinin listelenmesi.
- **Popüler Blog Kartı** ile popüler blogların görsel ve metinsel içeriklerini listeleme.
- **Beğenilen Blog Kartı** ile kullanıcıların en çok beğendiği blogları listeleme.
- **Kullanıcı Blog Kartı** ile kullanıcı bloglarını listeleme ve beğenme.
- **Kullanıcı Kartları ve Yükleme İskeleti** ile kullanıcı bilgilerini görsel olarak sunma.
- **Tekil Kullanıcı Detay Sayfası** ile kullanıcı bilgilerini detaylı inceleme.
- **Kullanıcı Güncelleme ve Silme Modalı** ile kullanıcı bilgilerini düzenleme ve silme.
- **Kategori Güncelleme ve Silme Modalı** ile kategorileri düzenleme ve silme.
- **Blog Beğeni Modalı** ile blogu beğenen kullanıcıların detaylarının gösterimi.
- **Blog Kart İskeleti** ile yükleme sırasında kullanıcı deneyimini artırma.
- **Blog Görsel Modalı** ile büyük görselleri görüntüleme.
- **Yorum Yapma** özelliği ile bloglara yorum ekleme, düzenleme ve silme.
- **Alt Yorumlar** (cevap) ile hiyerarşik yorum desteği.
- **Alt Yorum CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **Redux Toolkit**: Global state yönetimi ve slice yapılandırmaları.
- **Axios**: HTTP istekleri için özelleştirilmiş API istemcileri.
- **Formik ve Yup**: Form yönetimi ve doğrulama.
- **TailwindCSS**: Hızlı ve verimli stil oluşturma.
- **Material-UI (MUI)**: Gelişmiş React bileşenleri.
- **React-Toastify**: Kullanıcı bildirimleri için.
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji Mart**: Emoji seçici desteği.
- **MUI Theme Customization**: Tema ve bileşen özelleştirmeleri.

## Proje Yapısı

#### Önemli Dosyalar ve Diziler

- `index.css`: TailwindCSS entegrasyonu.
- `AppTheme.jsx`: Tema özelleştirmesi ve tematik bileşen yapılandırmaları.
- `inputsCustomizations.js`: Form ve button bileşenleri için özel özelleştirmeler.
- `dataDisplayCustomizations.js`: Liste tasarımı için özelleştirmeler.
- `surfacesCustomizations.js`: Kart gibi yüzey bileşenleri için özel stiller.
- `themePrimitives.js`: Tema renkleri, tipografi, gölgeler ve CSS değişkenleri gibi temel yapılandırmalar.
- `useAuthCalls.js`: Kimlik doğrulama işlemleri için özelleştirilmiş hook.
- `useBlogCalls.js`: Blog işlemleri için özelleştirilmiş hook.
- `useCategoryCalls.js`: Kategori işlemleri için özelleştirilmiş hook.
- `useContentCalls.js`: Blog içerik işlemleri için özelleştirilmiş hook.
- `useCommentCalls.js`: Blog yorum işlemleri için özelleştirilmiş hook.
- `useBottomCommentCalls.js`: Alt yorum işlemleri için özelleştirilmiş hook.
- `useUserCalls.js`: Kullanıcı işlemleri için özelleştirilmiş hook.
- `useAxios.js`: Axios tabanlı özelleştirilmiş istemciler.
- `authSlice.js`: Redux Toolkit ile kimlik doğrulama işlemleri için slice.
- `blogSlice.js`: Redux Toolkit ile blog işlemleri için slice.
- `categorySlice.js`: Redux Toolkit ile kategori işlemleri için slice.
- `userSlice.js`: Redux Toolkit ile kullanıcı işlemleri için slice.
- `contentSlice.js`: Redux Toolkit ile blog içerik işlemleri için slice.
- `commentSlice.js`: Redux Toolkit ile blog yorum işlemleri için slice.
- `bottomCommentSlice.js`: Redux Toolkit ile alt yorum işlemleri için slice.
- `ToastNotify.js`: Başarı ve hata bildirimleri için Toastify entegrasyonu.
- `AppRouter.jsx`: Uygulama yönlendirme işlemleri ve sayfa rotaları.
- `Navbar.jsx`: Kullanıcı gezinmesi için üst gezinme çubuğu.
- `ColorModeIconDropdown.jsx`: Tema modu seçici bileşeni.
- `LoginModal.jsx`: Kullanıcı giriş işlemleri için modal.
- `LoginForm.jsx`: Giriş formu ve validasyon.
- `ForgotPasswordForm.jsx`: Şifre sıfırlama formu ve validasyon.
- `Dashboard.jsx`: Anasayfa bileşeni.
- `MainContent.jsx`: Blog listeleme, kategori filtreleme, arama ve sayfalama.
- `Users.jsx`: Kullanıcıları listeleme, arama ve sayfalama işlemleri.
- `UserDetail.jsx`: Tekil kullanıcı detaylarını görüntüleme.
- `Profile.jsx`: Kullanıcı profili detaylarını görüntüleme ve güncelleme işlemleri.
- `UpdateMyUserModal.jsx`: Kullanıcı güncelleme işlemleri için modal.
- `UpdateUserModal.jsx`: Kullanıcı güncelleme işlemleri için modal.
- `DeleteUserModal.jsx`: Kullanıcı silme işlemleri için modal.
- `NewCategory.jsx`: Yeni kategori oluşturma sayfası.
- `NewCategoryForm.jsx`: Yeni kategori eklemek için kullanılan form.
- `Categories.jsx`: Kategorileri listeleme sayfası.
- `CategoryCard.jsx`: Kategori bilgilerini listeleme, güncelleme ve silme işlemleri için kart.
- `UpdateCategoryModal.jsx`: Kategori güncelleme işlemleri için modal.
- `DeleteCategoryModal.jsx`: Kategori silme işlemleri için modal.
- `NewBlog.jsx`: Yeni blog oluşturma sayfası.
- `NewBlogForm.jsx`: Yeni blog eklemek ve içerik eklemek için kullanılan form.
- `ContentForm.jsx`: Blog içeriklerini düzenleme ve ekleme işlemleri için form.
- `About.jsx`: Platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi veren sayfa.
- `MyBlogs.jsx`: Kullanıcıya ait blogların listelendiği ve yönetildiği sayfa.
- `Search.jsx`: Blog ve kullanıcı arama bileşeni.
- `UserBlogCard.jsx`: Kullanıcı bloglarını listeleme ve beğenme işlemleri için kart.
- `MyBlogDetail.jsx`: Kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri için sayfa.
- `DeleteMyBlogModal.jsx`: Kullanıcı bloglarını silme işlemleri için modal.
- `BlogDetail.jsx`: Blog detaylarını ve içeriğini görüntüleme.
- `UpdateBlogModal.jsx`: Blog güncelleme işlemleri için modal.
- `AddContentModal.jsx`: Blog içeriği ekleme işlemleri için modal.
- `DeleteBlogModal.jsx`: Blog silme işlemleri için modal.
- `UpdateBlogForm.jsx`: Blog güncelleme işlemleri için form.
- `AddContentForm.jsx`: Blog içeriği ekleme işlemleri için form.
- `UpdateContentModal.jsx`: Blog içeriği güncelleme işlemleri için modal.
- `UpdateContentForm.jsx`: Blog içeriği güncelleme işlemleri için form.
- `DeleteContentModal.jsx`: Blog içeriği silme işlemleri için modal.
- `ImageBlogModal.jsx`: Blog görsellerini görüntüleme modalı.
- `CommentForm.jsx`: Blog yorumları eklemek için form.
- `EditCommentForm.jsx`: Yorum düzenlemek için form.
- `CommentCard.jsx`: Blog yorumlarını listeleme, düzenleme ve silme işlemleri için kart.
- `BottomCommentForm.jsx`: Alt yorumlar (cevaplar) için form.
- `CommentBottomForm.jsx`: Alt yorumlar için cevap ekleme formu.
- `EditBottomCommentForm.jsx`: Alt yorumları düzenlemek için form.
- `BottomCommentCard.jsx`: Alt yorumları listelemek ve düzenlemek için kart.
- `PopularBlogCard.jsx`: Popüler blogları listelemek için kart.
- `LikedBlogCard.jsx`: Beğenilen blogları listelemek için kart.
- `ViewedBlogCard.jsx`: En çok görüntülenen blogları listelemek için kart.
- `UsersCard.jsx`: Kullanıcı kart bileşeni.
- `UserCardSkeleton.jsx`: Kullanıcı kartı yükleme iskeleti.
- `ProfileCard.jsx`: Kullanıcı profili kart bileşeni.
- `ProfileCardSkeleton.jsx`: Kullanıcı profili yükleme iskeleti.
- `ContentCard.jsx`: Blog içeriği kart bileşeni.
- `TextEditor.jsx`: Zengin metin düzenleyici.
- `BlogCardSkeleton.jsx`: Blog kartı yükleme iskeleti.
- `BlogLikesModal.jsx`: Blog beğeni detayları için modal.
- `MostPopularBlogCard.jsx`: En popüler blog kartı bileşeni.
- `MostLikedBlogCard.jsx`: En çok beğenilen blog kartı bileşeni.
- `store.jsx`: Redux store tanımı ve yapılandırması.
- `Device.js`: Kullanıcı cihaz kimliklerini (`deviceId`) yönetmek için yardımcı fonksiyon.

## Profil Yönetimi

**Profile.jsx**, **UpdateMyUserModal.jsx**, **ProfileCard.jsx**, ve **ProfileCardSkeleton.jsx** kullanıcı profili detaylarını görüntüleme ve güncelleme işlemleri için kullanılır. Kullanıcılar, profil bilgilerini detaylı şekilde görebilir ve düzenleyebilir.

### İşlevler:
- Kullanıcı profilini detaylı görüntüleme.
- Kullanıcı bilgilerini düzenleme.
- Kullanıcı bilgilerini yükleme sırasında iskelet ekran gösterimi.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, **MyBlogs.jsx**, **UserBlogCard.jsx**, **MyBlogDetail.jsx**, **DeleteMyBlogModal.jsx**, ve **ContentForm.jsx**; yeni blog oluşturma, kullanıcı bloglarını yönetme, detay görüntüleme ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, bloglarını yönetebilir, mevcut bloglarını düzenleyebilir ve içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Kullanıcı bloglarını listeleme, beğenme ve yönetme.
- Kullanıcı blog detaylarını görüntüleme ve düzenleme.
- Blogları silme işlemleri.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.

 ------------------------------------------------------------

 # Köşe Yazısı - Frontend (46)
 
Bu proje, köşe yazılarınızı paylaşabileceğiniz bir platform olan **Köşe Yazısı** uygulamasının frontend kısmını içermektedir. Proje, kullanıcı dostu bir arayüz ve modern web teknolojileri kullanılarak geliştirilmiştir.

## Özellikler

- Kullanıcı dostu ve duyarlı tasarım.
- Redux Toolkit ile state yönetimi.
- **Axios** ile HTTP istekleri ve özelleştirilebilir API istemcileri.
- **Formik ve Yup** ile form yönetimi ve doğrulama.
- **TailwindCSS** ile özelleştirilebilir stil desteği.
- **Material-UI (MUI)** kullanılarak modern bileşenler.
- React Router ile sayfa yönlendirme.
- React-Toastify ile bildirim desteği.
- Tema desteği (Karanlık mod ve özel tema özelleştirmeleri).
- Kaydırma çubuğu özelleştirmeleri.
- Hiyerarşik ve yeniden kullanılabilir bileşen yapısı.
- **Login**, **Register**, **Logout**, ve **Şifre Sıfırlama** işlemleri için tam kimlik doğrulama desteği.
- Redux Store ile kullanıcı bilgileri ve kimlik doğrulama durumunun yönetimi.
- Kullanıcı cihazlarına özel `deviceId` oluşturma ve saklama mekanizması.
- **Tema Modu Seçici** ile karanlık ve aydınlık mod arasında geçiş yapma.
- **Kategori CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Güncelleme Modali ve Formu**.
- **Blog Silme Modali**.
- **Blog İçerik Ekleme Modali ve Formu**.
- **Blog İçerik Güncelleme Modali ve Formu**.
- **Blog İçerik Silme Modali**.
- **Blog İçerik Güncelleme ve Silme İşlemleri**.
- **Zengin Metin Düzenleyici** ile içerikleri kolayca düzenleme.
- **Blog İçerik CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Arama, Kategori Filtreleme ve Sayfalama** desteği.
- **Kullanıcı Yönetimi** özelliği ile kullanıcı listeleme, tekil kullanıcı bilgilerini görüntüleme, kullanıcı güncelleme ve silme işlemleri.
- **Kategori Yönetimi** özelliği ile kategori oluşturma, listeleme, güncelleme ve silme işlemleri.
- **Blog Yönetimi** özelliği ile yeni blog oluşturma, kullanıcı bloglarını görüntüleme ve içerik ekleme.
- **Blog Detay Sayfası** ile blog içeriklerini, beğenileri ve yorumları görüntüleme.
- **Kullanıcı Blog Detay Sayfası** ile kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri.
- **Profil Sayfası** ile kullanıcı profili detaylarını görüntüleme ve güncelleme.
- **Hakkında Sayfası** ile platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi edinme.
- **En Popüler ve En Çok Beğenilen Bloglar** için özel listeleme.
- **Blog Kartları** ile blogların görsel ve metinsel içeriklerinin listelenmesi.
- **Popüler Blog Kartı** ile popüler blogların görsel ve metinsel içeriklerini listeleme.
- **Beğenilen Blog Kartı** ile kullanıcıların en çok beğendiği blogları listeleme.
- **Kullanıcı Blog Kartı** ile kullanıcı bloglarını listeleme ve beğenme.
- **Kullanıcı Kartları ve Yükleme İskeleti** ile kullanıcı bilgilerini görsel olarak sunma.
- **Tekil Kullanıcı Detay Sayfası** ile kullanıcı bilgilerini detaylı inceleme.
- **Kullanıcı Güncelleme ve Silme Modalı** ile kullanıcı bilgilerini düzenleme ve silme.
- **Kategori Güncelleme ve Silme Modalı** ile kategorileri düzenleme ve silme.
- **Blog Beğeni Modalı** ile blogu beğenen kullanıcıların detaylarının gösterimi.
- **Blog Kart İskeleti** ile yükleme sırasında kullanıcı deneyimini artırma.
- **Blog Görsel Modalı** ile büyük görselleri görüntüleme.
- **Yorum Yapma** özelliği ile bloglara yorum ekleme, düzenleme ve silme.
- **Alt Yorumlar** (cevap) ile hiyerarşik yorum desteği.
- **Alt Yorum CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **Redux Toolkit**: Global state yönetimi ve slice yapılandırmaları.
- **Axios**: HTTP istekleri için özelleştirilmiş API istemcileri.
- **React Router**: Yönlendirme işlemleri.
- **Formik ve Yup**: Form yönetimi ve doğrulama.
- **TailwindCSS**: Hızlı ve verimli stil oluşturma.
- **Material-UI (MUI)**: Gelişmiş React bileşenleri.
- **React-Toastify**: Kullanıcı bildirimleri için.
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji Mart**: Emoji seçici desteği.
- **MUI Theme Customization**: Tema ve bileşen özelleştirmeleri.

## Proje Yapısı

#### Önemli Dosyalar ve Diziler

- `index.css`: TailwindCSS entegrasyonu.
- `AppTheme.jsx`: Tema özelleştirmesi ve tematik bileşen yapılandırmaları.
- `inputsCustomizations.js`: Form ve button bileşenleri için özel özelleştirmeler.
- `dataDisplayCustomizations.js`: Liste tasarımı için özelleştirmeler.
- `surfacesCustomizations.js`: Kart gibi yüzey bileşenleri için özel stiller.
- `themePrimitives.js`: Tema renkleri, tipografi, gölgeler ve CSS değişkenleri gibi temel yapılandırmalar.
- `useAuthCalls.js`: Kimlik doğrulama işlemleri için özelleştirilmiş hook.
- `useBlogCalls.js`: Blog işlemleri için özelleştirilmiş hook.
- `useCategoryCalls.js`: Kategori işlemleri için özelleştirilmiş hook.
- `useContentCalls.js`: Blog içerik işlemleri için özelleştirilmiş hook.
- `useCommentCalls.js`: Blog yorum işlemleri için özelleştirilmiş hook.
- `useBottomCommentCalls.js`: Alt yorum işlemleri için özelleştirilmiş hook.
- `useUserCalls.js`: Kullanıcı işlemleri için özelleştirilmiş hook.
- `useAxios.js`: Axios tabanlı özelleştirilmiş istemciler.
- `authSlice.js`: Redux Toolkit ile kimlik doğrulama işlemleri için slice.
- `blogSlice.js`: Redux Toolkit ile blog işlemleri için slice.
- `categorySlice.js`: Redux Toolkit ile kategori işlemleri için slice.
- `userSlice.js`: Redux Toolkit ile kullanıcı işlemleri için slice.
- `contentSlice.js`: Redux Toolkit ile blog içerik işlemleri için slice.
- `commentSlice.js`: Redux Toolkit ile blog yorum işlemleri için slice.
- `bottomCommentSlice.js`: Redux Toolkit ile alt yorum işlemleri için slice.
- `ToastNotify.js`: Başarı ve hata bildirimleri için Toastify entegrasyonu.
- `AppRouter.jsx`: Uygulama yönlendirme işlemleri ve sayfa rotaları.
- `Navbar.jsx`: Kullanıcı gezinmesi için üst gezinme çubuğu.
- `ColorModeIconDropdown.jsx`: Tema modu seçici bileşeni.
- `LoginModal.jsx`: Kullanıcı giriş işlemleri için modal.
- `LoginForm.jsx`: Kullanıcı giriş formu ve validasyonu.
- `ForgotPasswordForm.jsx`: Şifre sıfırlama formu ve validasyon.
- `Dashboard.jsx`: Anasayfa bileşeni.
- `MainContent.jsx`: Blog listeleme, kategori filtreleme, arama ve sayfalama.
- `Users.jsx`: Kullanıcıları listeleme, arama ve sayfalama işlemleri.
- `UserDetail.jsx`: Tekil kullanıcı detaylarını görüntüleme.
- `Profile.jsx`: Kullanıcı profili detaylarını görüntüleme ve güncelleme işlemleri.
- `UpdateUserModal.jsx`: Kullanıcı güncelleme işlemleri için modal.
- `DeleteUserModal.jsx`: Kullanıcı silme işlemleri için modal.
- `NewCategory.jsx`: Yeni kategori oluşturma sayfası.
- `NewCategoryForm.jsx`: Yeni kategori eklemek için kullanılan form.
- `Categories.jsx`: Kategorileri listeleme sayfası.
- `CategoryCard.jsx`: Kategori bilgilerini listeleme, güncelleme ve silme işlemleri için kart.
- `UpdateCategoryModal.jsx`: Kategori güncelleme işlemleri için modal.
- `DeleteCategoryModal.jsx`: Kategori silme işlemleri için modal.
- `NewBlog.jsx`: Yeni blog oluşturma sayfası.
- `NewBlogForm.jsx`: Yeni blog eklemek ve içerik eklemek için kullanılan form.
- `ContentForm.jsx`: Blog içeriklerini düzenleme ve ekleme işlemleri için form.
- `About.jsx`: Platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi veren sayfa.
- `MyBlogs.jsx`: Kullanıcıya ait blogların listelendiği ve yönetildiği sayfa.
- `Search.jsx`: Blog ve kullanıcı arama bileşeni.
- `UserBlogCard.jsx`: Kullanıcı bloglarını listeleme ve beğenme işlemleri için kart.
- `MyBlogDetail.jsx`: Kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri için sayfa.
- `DeleteMyBlogModal.jsx`: Kullanıcı bloglarını silme işlemleri için modal.
- `BlogDetail.jsx`: Blog detaylarını ve içeriğini görüntüleme.
- `UpdateBlogModal.jsx`: Blog güncelleme işlemleri için modal.
- `AddContentModal.jsx`: Blog içeriği ekleme işlemleri için modal.
- `DeleteBlogModal.jsx`: Blog silme işlemleri için modal.
- `UpdateBlogForm.jsx`: Blog güncelleme işlemleri için form.
- `AddContentForm.jsx`: Blog içeriği ekleme işlemleri için form.
- `UpdateContentModal.jsx`: Blog içeriği güncelleme işlemleri için modal.
- `UpdateContentForm.jsx`: Blog içeriği güncelleme işlemleri için form.
- `DeleteContentModal.jsx`: Blog içeriği silme işlemleri için modal.
- `ImageBlogModal.jsx`: Blog görsellerini görüntüleme modalı.
- `CommentForm.jsx`: Blog yorumları eklemek için form.
- `EditCommentForm.jsx`: Yorum düzenlemek için form.
- `CommentCard.jsx`: Blog yorumlarını listeleme, düzenleme ve silme işlemleri için kart.
- `BottomCommentForm.jsx`: Alt yorumlar (cevaplar) için form.
- `CommentBottomForm.jsx`: Alt yorumlar için cevap ekleme formu.
- `EditBottomCommentForm.jsx`: Alt yorumları düzenlemek için form.
- `BottomCommentCard.jsx`: Alt yorumları listelemek ve düzenlemek için kart.
- `PopularBlogCard.jsx`: Popüler blogları listelemek için kart.
- `LikedBlogCard.jsx`: Beğenilen blogları listelemek için kart.
- `ViewedBlogCard.jsx`: En çok görüntülenen blogları listelemek için kart.
- `UsersCard.jsx`: Kullanıcı kart bileşeni.
- `UserCardSkeleton.jsx`: Kullanıcı kartı yükleme iskeleti.
- `ProfileCard.jsx`: Kullanıcı profili kart bileşeni.
- `ProfileCardSkeleton.jsx`: Kullanıcı profili yükleme iskeleti.
- `Login.jsx`: Kullanıcı giriş sayfası.
- `ContentCard.jsx`: Blog içeriği kart bileşeni.
- `TextEditor.jsx`: Zengin metin düzenleyici.
- `BlogCardSkeleton.jsx`: Blog kartı yükleme iskeleti.
- `BlogLikesModal.jsx`: Blog beğeni detayları için modal.
- `MostPopularBlogCard.jsx`: En popüler blog kartı bileşeni.
- `MostLikedBlogCard.jsx`: En çok beğenilen blog kartı bileşeni.
- `store.jsx`: Redux store tanımı ve yapılandırması.
- `Device.js`: Kullanıcı cihaz kimliklerini (`deviceId`) yönetmek için yardımcı fonksiyon.

## Login Yönetimi

**Login.jsx** ve **LoginForm.jsx**, kullanıcı giriş işlemlerini gerçekleştirmek için kullanılır. Kullanıcılar, giriş sayfasında e-posta ve şifre bilgilerini girerek sisteme erişebilir.

### İşlevler:
- Kullanıcı giriş işlemlerini gerçekleştirme.
- Formik ve Yup ile giriş formu yönetimi ve doğrulama.
- Hata durumlarında kullanıcıyı bilgilendirme.
- Kayıt sayfasına yönlendirme.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, **MyBlogs.jsx**, **UserBlogCard.jsx**, **MyBlogDetail.jsx**, **DeleteMyBlogModal.jsx**, ve **ContentForm.jsx**; yeni blog oluşturma, kullanıcı bloglarını yönetme, detay görüntüleme ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, bloglarını yönetebilir, mevcut bloglarını düzenleyebilir ve içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Kullanıcı bloglarını listeleme, beğenme ve yönetme.
- Kullanıcı blog detaylarını görüntüleme ve düzenleme.
- Blogları silme işlemleri.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.

------------------------------

# Köşe Yazısı - Frontend (47)

Bu proje, köşe yazılarınızı paylaşabileceğiniz bir platform olan **Köşe Yazısı** uygulamasının frontend kısmını içermektedir. Proje, kullanıcı dostu bir arayüz ve modern web teknolojileri kullanılarak geliştirilmiştir.

## Özellikler

- Kullanıcı dostu ve duyarlı tasarım.
- Redux Toolkit ile state yönetimi.
- **Axios** ile HTTP istekleri ve özelleştirilebilir API istemcileri.
- **Formik ve Yup** ile form yönetimi ve doğrulama.
- **TailwindCSS** ile özelleştirilebilir stil desteği.
- **Material-UI (MUI)** kullanılarak modern bileşenler.
- React Router ile sayfa yönlendirme.
- React-Toastify ile bildirim desteği.
- Tema desteği (Karanlık mod ve özel tema özelleştirmeleri).
- Kaydırma çubuğu özelleştirmeleri.
- Hiyerarşik ve yeniden kullanılabilir bileşen yapısı.
- **Login**, **Register**, **Logout**, ve **Şifre Sıfırlama** işlemleri için tam kimlik doğrulama desteği.
- Redux Store ile kullanıcı bilgileri ve kimlik doğrulama durumunun yönetimi.
- Kullanıcı cihazlarına özel `deviceId` oluşturma ve saklama mekanizması.
- **Tema Modu Seçici** ile karanlık ve aydınlık mod arasında geçiş yapma.
- **Kategori CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Güncelleme Modali ve Formu**.
- **Blog Silme Modali**.
- **Blog İçerik Ekleme Modali ve Formu**.
- **Blog İçerik Güncelleme Modali ve Formu**.
- **Blog İçerik Silme Modali**.
- **Blog İçerik Güncelleme ve Silme İşlemleri**.
- **Zengin Metin Düzenleyici** ile içerikleri kolayca düzenleme.
- **Blog İçerik CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Arama, Kategori Filtreleme ve Sayfalama** desteği.
- **Kullanıcı Yönetimi** özelliği ile kullanıcı listeleme, tekil kullanıcı bilgilerini görüntüleme, kullanıcı güncelleme ve silme işlemleri.
- **Kategori Yönetimi** özelliği ile kategori oluşturma, listeleme, güncelleme ve silme işlemleri.
- **Blog Yönetimi** özelliği ile yeni blog oluşturma, kullanıcı bloglarını görüntüleme ve içerik ekleme.
- **Blog Detay Sayfası** ile blog içeriklerini, beğenileri ve yorumları görüntüleme.
- **Kullanıcı Blog Detay Sayfası** ile kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri.
- **Profil Sayfası** ile kullanıcı profili detaylarını görüntüleme ve güncelleme.
- **Kayıt Sayfası** ile yeni kullanıcılar için kayıt olma özelliği.
- **Hakkında Sayfası** ile platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi edinme.
- **En Popüler ve En Çok Beğenilen Bloglar** için özel listeleme.
- **Blog Kartları** ile blogların görsel ve metinsel içeriklerinin listelenmesi.
- **Popüler Blog Kartı** ile popüler blogların görsel ve metinsel içeriklerini listeleme.
- **Beğenilen Blog Kartı** ile kullanıcıların en çok beğendiği blogları listeleme.
- **Kullanıcı Blog Kartı** ile kullanıcı bloglarını listeleme ve beğenme.
- **Kullanıcı Kartları ve Yükleme İskeleti** ile kullanıcı bilgilerini görsel olarak sunma.
- **Tekil Kullanıcı Detay Sayfası** ile kullanıcı bilgilerini detaylı inceleme.
- **Kullanıcı Güncelleme ve Silme Modalı** ile kullanıcı bilgilerini düzenleme ve silme.
- **Kategori Güncelleme ve Silme Modalı** ile kategorileri düzenleme ve silme.
- **Blog Beğeni Modalı** ile blogu beğenen kullanıcıların detaylarının gösterimi.
- **Blog Kart İskeleti** ile yükleme sırasında kullanıcı deneyimini artırma.
- **Blog Görsel Modalı** ile büyük görselleri görüntüleme.
- **Yorum Yapma** özelliği ile bloglara yorum ekleme, düzenleme ve silme.
- **Alt Yorumlar** (cevap) ile hiyerarşik yorum desteği.
- **Alt Yorum CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **Redux Toolkit**: Global state yönetimi ve slice yapılandırmaları.
- **Axios**: HTTP istekleri için özelleştirilmiş API istemcileri.
- **React Router**: Yönlendirme işlemleri.
- **Formik ve Yup**: Form yönetimi ve doğrulama.
- **TailwindCSS**: Hızlı ve verimli stil oluşturma.
- **Material-UI (MUI)**: Gelişmiş React bileşenleri.
- **React-Toastify**: Kullanıcı bildirimleri için.
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji Mart**: Emoji seçici desteği.
- **MUI Theme Customization**: Tema ve bileşen özelleştirmeleri.

## Proje Yapısı

#### Önemli Dosyalar ve Diziler

- `index.css`: TailwindCSS entegrasyonu.
- `AppTheme.jsx`: Tema özelleştirmesi ve tematik bileşen yapılandırmaları.
- `inputsCustomizations.js`: Form ve button bileşenleri için özel özelleştirmeler.
- `dataDisplayCustomizations.js`: Liste tasarımı için özelleştirmeler.
- `surfacesCustomizations.js`: Kart gibi yüzey bileşenleri için özel stiller.
- `themePrimitives.js`: Tema renkleri, tipografi, gölgeler ve CSS değişkenleri gibi temel yapılandırmalar.
- `useAuthCalls.js`: Kimlik doğrulama işlemleri için özelleştirilmiş hook.
- `useBlogCalls.js`: Blog işlemleri için özelleştirilmiş hook.
- `useCategoryCalls.js`: Kategori işlemleri için özelleştirilmiş hook.
- `useContentCalls.js`: Blog içerik işlemleri için özelleştirilmiş hook.
- `useCommentCalls.js`: Blog yorum işlemleri için özelleştirilmiş hook.
- `useBottomCommentCalls.js`: Alt yorum işlemleri için özelleştirilmiş hook.
- `useUserCalls.js`: Kullanıcı işlemleri için özelleştirilmiş hook.
- `useAxios.js`: Axios tabanlı özelleştirilmiş istemciler.
- `authSlice.js`: Redux Toolkit ile kimlik doğrulama işlemleri için slice.
- `blogSlice.js`: Redux Toolkit ile blog işlemleri için slice.
- `categorySlice.js`: Redux Toolkit ile kategori işlemleri için slice.
- `userSlice.js`: Redux Toolkit ile kullanıcı işlemleri için slice.
- `contentSlice.js`: Redux Toolkit ile blog içerik işlemleri için slice.
- `commentSlice.js`: Redux Toolkit ile blog yorum işlemleri için slice.
- `bottomCommentSlice.js`: Redux Toolkit ile alt yorum işlemleri için slice.
- `ToastNotify.js`: Başarı ve hata bildirimleri için Toastify entegrasyonu.
- `AppRouter.jsx`: Uygulama yönlendirme işlemleri ve sayfa rotaları.
- `Navbar.jsx`: Kullanıcı gezinmesi için üst gezinme çubuğu.
- `ColorModeIconDropdown.jsx`: Tema modu seçici bileşeni.
- `LoginModal.jsx`: Kullanıcı giriş işlemleri için modal.
- `LoginForm.jsx`: Kullanıcı giriş formu ve validasyonu.
- `Register.jsx`: Kullanıcı kayıt sayfası.
- `RegisterForm.jsx`: Kullanıcı kayıt formu ve validasyonu.
- `ForgotPasswordForm.jsx`: Şifre sıfırlama formu ve validasyon.
- `Dashboard.jsx`: Anasayfa bileşeni.
- `MainContent.jsx`: Blog listeleme, kategori filtreleme, arama ve sayfalama.
- `Users.jsx`: Kullanıcıları listeleme, arama ve sayfalama işlemleri.
- `UserDetail.jsx`: Tekil kullanıcı detaylarını görüntüleme.
- `Profile.jsx`: Kullanıcı profili detaylarını görüntüleme ve güncelleme işlemleri.
- `UpdateUserModal.jsx`: Kullanıcı güncelleme işlemleri için modal.
- `DeleteUserModal.jsx`: Kullanıcı silme işlemleri için modal.
- `NewCategory.jsx`: Yeni kategori oluşturma sayfası.
- `NewCategoryForm.jsx`: Yeni kategori eklemek için kullanılan form.
- `Categories.jsx`: Kategorileri listeleme sayfası.
- `CategoryCard.jsx`: Kategori bilgilerini listeleme, güncelleme ve silme işlemleri için kart.
- `UpdateCategoryModal.jsx`: Kategori güncelleme işlemleri için modal.
- `DeleteCategoryModal.jsx`: Kategori silme işlemleri için modal.
- `NewBlog.jsx`: Yeni blog oluşturma sayfası.
- `NewBlogForm.jsx`: Yeni blog eklemek ve içerik eklemek için kullanılan form.
- `ContentForm.jsx`: Blog içeriklerini düzenleme ve ekleme işlemleri için form.
- `About.jsx`: Platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi veren sayfa.
- `MyBlogs.jsx`: Kullanıcıya ait blogların listelendiği ve yönetildiği sayfa.
- `Search.jsx`: Blog ve kullanıcı arama bileşeni.
- `UserBlogCard.jsx`: Kullanıcı bloglarını listeleme ve beğenme işlemleri için kart.
- `MyBlogDetail.jsx`: Kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri için sayfa.
- `DeleteMyBlogModal.jsx`: Kullanıcı bloglarını silme işlemleri için modal.
- `BlogDetail.jsx`: Blog detaylarını ve içeriğini görüntüleme.
- `UpdateBlogModal.jsx`: Blog güncelleme işlemleri için modal.
- `AddContentModal.jsx`: Blog içeriği ekleme işlemleri için modal.
- `DeleteBlogModal.jsx`: Blog silme işlemleri için modal.
- `UpdateBlogForm.jsx`: Blog güncelleme işlemleri için form.
- `AddContentForm.jsx`: Blog içeriği ekleme işlemleri için form.
- `UpdateContentModal.jsx`: Blog içeriği güncelleme işlemleri için modal.
- `UpdateContentForm.jsx`: Blog içeriği güncelleme işlemleri için form.
- `DeleteContentModal.jsx`: Blog içeriği silme işlemleri için modal.
- `ImageBlogModal.jsx`: Blog görsellerini görüntüleme modalı.
- `CommentForm.jsx`: Blog yorumları eklemek için form.
- `EditCommentForm.jsx`: Yorum düzenlemek için form.
- `CommentCard.jsx`: Blog yorumlarını listeleme, düzenleme ve silme işlemleri için kart.
- `BottomCommentForm.jsx`: Alt yorumlar (cevaplar) için form.
- `CommentBottomForm.jsx`: Alt yorumlar için cevap ekleme formu.
- `EditBottomCommentForm.jsx`: Alt yorumları düzenlemek için form.
- `BottomCommentCard.jsx`: Alt yorumları listelemek ve düzenlemek için kart.
- `PopularBlogCard.jsx`: Popüler blogları listelemek için kart.
- `LikedBlogCard.jsx`: Beğenilen blogları listelemek için kart.
- `ViewedBlogCard.jsx`: En çok görüntülenen blogları listelemek için kart.
- `UsersCard.jsx`: Kullanıcı kart bileşeni.
- `UserCardSkeleton.jsx`: Kullanıcı kartı yükleme iskeleti.
- `ProfileCard.jsx`: Kullanıcı profili kart bileşeni.
- `ProfileCardSkeleton.jsx`: Kullanıcı profili yükleme iskeleti.
- `ContentCard.jsx`: Blog içeriği kart bileşeni.
- `TextEditor.jsx`: Zengin metin düzenleyici.
- `BlogCardSkeleton.jsx`: Blog kartı yükleme iskeleti.
- `BlogLikesModal.jsx`: Blog beğeni detayları için modal.
- `MostPopularBlogCard.jsx`: En popüler blog kartı bileşeni.
- `MostLikedBlogCard.jsx`: En çok beğenilen blog kartı bileşeni.
- `store.jsx`: Redux store tanımı ve yapılandırması.
- `Device.js`: Kullanıcı cihaz kimliklerini (`deviceId`) yönetmek için yardımcı fonksiyon.

## Kullanıcı Kayıt Yönetimi

**Register.jsx** ve **RegisterForm.jsx**, kullanıcıların sisteme kayıt olmalarını sağlar. Kullanıcılar, form üzerinden bilgilerini girerek hesap oluşturabilir.

### İşlevler:
- Kullanıcı kayıt işlemlerini gerçekleştirme.
- Formik ve Yup ile kayıt formu yönetimi ve doğrulama.
- Hata durumlarında kullanıcıyı bilgilendirme.
- Giriş sayfasına yönlendirme.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, **MyBlogs.jsx**, **UserBlogCard.jsx**, **MyBlogDetail.jsx**, **DeleteMyBlogModal.jsx**, ve **ContentForm.jsx**; yeni blog oluşturma, kullanıcı bloglarını yönetme, detay görüntüleme ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, bloglarını yönetebilir, mevcut bloglarını düzenleyebilir ve içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Kullanıcı bloglarını listeleme, beğenme ve yönetme.
- Kullanıcı blog detaylarını görüntüleme ve düzenleme.
- Blogları silme işlemleri.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.

------------------------------------------------

# Köşe Yazısı - Frontend (48)

Bu proje, köşe yazılarınızı paylaşabileceğiniz bir platform olan **Köşe Yazısı** uygulamasının frontend kısmını içermektedir. Proje, kullanıcı dostu bir arayüz ve modern web teknolojileri kullanılarak geliştirilmiştir.

## Özellikler

- Kullanıcı dostu ve duyarlı tasarım.
- Redux Toolkit ile state yönetimi.
- **Axios** ile HTTP istekleri ve özelleştirilebilir API istemcileri.
- **Formik ve Yup** ile form yönetimi ve doğrulama.
- **TailwindCSS** ile özelleştirilebilir stil desteği.
- **Material-UI (MUI)** kullanılarak modern bileşenler.
- React Router ile sayfa yönlendirme.
- React-Toastify ile bildirim desteği.
- Tema desteği (Karanlık mod ve özel tema özelleştirmeleri).
- Kaydırma çubuğu özelleştirmeleri.
- Hiyerarşik ve yeniden kullanılabilir bileşen yapısı.
- **Login**, **Register**, **Logout**, ve **Şifre Sıfırlama** işlemleri için tam kimlik doğrulama desteği.
- Redux Store ile kullanıcı bilgileri ve kimlik doğrulama durumunun yönetimi.
- Kullanıcı cihazlarına özel `deviceId` oluşturma ve saklama mekanizması.
- **Tema Modu Seçici** ile karanlık ve aydınlık mod arasında geçiş yapma.
- **Kategori CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Güncelleme Modali ve Formu**.
- **Blog Silme Modali**.
- **Blog İçerik Ekleme Modali ve Formu**.
- **Blog İçerik Güncelleme Modali ve Formu**.
- **Blog İçerik Silme Modali**.
- **Blog İçerik Güncelleme ve Silme İşlemleri**.
- **Zengin Metin Düzenleyici** ile içerikleri kolayca düzenleme.
- **Blog İçerik CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Arama, Kategori Filtreleme ve Sayfalama** desteği.
- **Kullanıcı Yönetimi** özelliği ile kullanıcı listeleme, tekil kullanıcı bilgilerini görüntüleme, kullanıcı güncelleme ve silme işlemleri.
- **Kategori Yönetimi** özelliği ile kategori oluşturma, listeleme, güncelleme ve silme işlemleri.
- **Blog Yönetimi** özelliği ile yeni blog oluşturma, kullanıcı bloglarını görüntüleme ve içerik ekleme.
- **Blog Detay Sayfası** ile blog içeriklerini, beğenileri ve yorumları görüntüleme.
- **Kullanıcı Blog Detay Sayfası** ile kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri.
- **Profil Sayfası** ile kullanıcı profili detaylarını görüntüleme ve güncelleme.
- **Kayıt Sayfası** ile yeni kullanıcılar için kayıt olma özelliği.
- **Hakkında Sayfası** ile platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi edinme.
- **En Popüler ve En Çok Beğenilen Bloglar** için özel listeleme.
- **Blog Kartları** ile blogların görsel ve metinsel içeriklerinin listelenmesi.
- **Popüler Blog Kartı** ile popüler blogların görsel ve metinsel içeriklerini listeleme.
- **Beğenilen Blog Kartı** ile kullanıcıların en çok beğendiği blogları listeleme.
- **Kullanıcı Blog Kartı** ile kullanıcı bloglarını listeleme ve beğenme.
- **Kullanıcı Kartları ve Yükleme İskeleti** ile kullanıcı bilgilerini görsel olarak sunma.
- **Tekil Kullanıcı Detay Sayfası** ile kullanıcı bilgilerini detaylı inceleme.
- **Kullanıcı Güncelleme ve Silme Modalı** ile kullanıcı bilgilerini düzenleme ve silme.
- **Kategori Güncelleme ve Silme Modalı** ile kategorileri düzenleme ve silme.
- **Blog Beğeni Modalı** ile blogu beğenen kullanıcıların detaylarının gösterimi.
- **Blog Kart İskeleti** ile yükleme sırasında kullanıcı deneyimini artırma.
- **Blog Görsel Modalı** ile büyük görselleri görüntüleme.
- **Yorum Yapma** özelliği ile bloglara yorum ekleme, düzenleme ve silme.
- **Alt Yorumlar** (cevap) ile hiyerarşik yorum desteği.
- **Alt Yorum CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **Redux Toolkit**: Global state yönetimi ve slice yapılandırmaları.
- **Axios**: HTTP istekleri için özelleştirilmiş API istemcileri.
- **React Router**: Yönlendirme işlemleri.
- **Formik ve Yup**: Form yönetimi ve doğrulama.
- **TailwindCSS**: Hızlı ve verimli stil oluşturma.
- **Material-UI (MUI)**: Gelişmiş React bileşenleri.
- **React-Toastify**: Kullanıcı bildirimleri için.
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji Mart**: Emoji seçici desteği.
- **MUI Theme Customization**: Tema ve bileşen özelleştirmeleri.

## Proje Yapısı

#### Önemli Dosyalar ve Diziler

- `index.css`: TailwindCSS entegrasyonu.
- `AppTheme.jsx`: Tema özelleştirmesi ve tematik bileşen yapılandırmaları.
- `inputsCustomizations.js`: Form ve button bileşenleri için özel özelleştirmeler.
- `dataDisplayCustomizations.js`: Liste tasarımı için özelleştirmeler.
- `surfacesCustomizations.js`: Kart gibi yüzey bileşenleri için özel stiller.
- `themePrimitives.js`: Tema renkleri, tipografi, gölgeler ve CSS değişkenleri gibi temel yapılandırmalar.
- `useAuthCalls.js`: Kimlik doğrulama işlemleri için özelleştirilmiş hook.
- `useBlogCalls.js`: Blog işlemleri için özelleştirilmiş hook.
- `useCategoryCalls.js`: Kategori işlemleri için özelleştirilmiş hook.
- `useContentCalls.js`: Blog içerik işlemleri için özelleştirilmiş hook.
- `useCommentCalls.js`: Blog yorum işlemleri için özelleştirilmiş hook.
- `useBottomCommentCalls.js`: Alt yorum işlemleri için özelleştirilmiş hook.
- `useUserCalls.js`: Kullanıcı işlemleri için özelleştirilmiş hook.
- `useAxios.js`: Axios tabanlı özelleştirilmiş istemciler.
- `authSlice.js`: Redux Toolkit ile kimlik doğrulama işlemleri için slice.
- `blogSlice.js`: Redux Toolkit ile blog işlemleri için slice.
- `categorySlice.js`: Redux Toolkit ile kategori işlemleri için slice.
- `userSlice.js`: Redux Toolkit ile kullanıcı işlemleri için slice.
- `contentSlice.js`: Redux Toolkit ile blog içerik işlemleri için slice.
- `commentSlice.js`: Redux Toolkit ile blog yorum işlemleri için slice.
- `bottomCommentSlice.js`: Redux Toolkit ile alt yorum işlemleri için slice.
- `ToastNotify.js`: Başarı ve hata bildirimleri için Toastify entegrasyonu.
- `AppRouter.jsx`: Uygulama yönlendirme işlemleri ve sayfa rotaları.
- `Navbar.jsx`: Kullanıcı gezinmesi için üst gezinme çubuğu.
- `ColorModeIconDropdown.jsx`: Tema modu seçici bileşeni.
- `LoginModal.jsx`: Kullanıcı giriş işlemleri için modal.
- `LoginForm.jsx`: Kullanıcı giriş formu ve validasyonu.
- `Register.jsx`: Kullanıcı kayıt sayfası.
- `RegisterForm.jsx`: Kullanıcı kayıt formu ve validasyonu.
- `ForgotPasswordForm.jsx`: Şifre sıfırlama formu ve validasyon.
- `Dashboard.jsx`: Anasayfa bileşeni.
- `MainContent.jsx`: Blog listeleme, kategori filtreleme, arama ve sayfalama.
- `Users.jsx`: Kullanıcıları listeleme, arama ve sayfalama işlemleri.
- `UserDetail.jsx`: Tekil kullanıcı detaylarını görüntüleme.
- `Profile.jsx`: Kullanıcı profili detaylarını görüntüleme ve güncelleme işlemleri.
- `UpdateUserModal.jsx`: Kullanıcı güncelleme işlemleri için modal.
- `DeleteUserModal.jsx`: Kullanıcı silme işlemleri için modal.
- `NewCategory.jsx`: Yeni kategori oluşturma sayfası.
- `NewCategoryForm.jsx`: Yeni kategori eklemek için kullanılan form.
- `Categories.jsx`: Kategorileri listeleme sayfası.
- `CategoryCard.jsx`: Kategori bilgilerini listeleme, güncelleme ve silme işlemleri için kart.
- `UpdateCategoryModal.jsx`: Kategori güncelleme işlemleri için modal.
- `DeleteCategoryModal.jsx`: Kategori silme işlemleri için modal.
- `NewBlog.jsx`: Yeni blog oluşturma sayfası.
- `NewBlogForm.jsx`: Yeni blog eklemek ve içerik eklemek için kullanılan form.
- `ContentForm.jsx`: Blog içeriklerini düzenleme ve ekleme işlemleri için form.
- `About.jsx`: Platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi veren sayfa.
- `MyBlogs.jsx`: Kullanıcıya ait blogların listelendiği ve yönetildiği sayfa.
- `Search.jsx`: Blog ve kullanıcı arama bileşeni.
- `UserBlogCard.jsx`: Kullanıcı bloglarını listeleme ve beğenme işlemleri için kart.
- `MyBlogDetail.jsx`: Kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri için sayfa.
- `DeleteMyBlogModal.jsx`: Kullanıcı bloglarını silme işlemleri için modal.
- `BlogDetail.jsx`: Blog detaylarını ve içeriğini görüntüleme.
- `UpdateBlogModal.jsx`: Blog güncelleme işlemleri için modal.
- `AddContentModal.jsx`: Blog içeriği ekleme işlemleri için modal.
- `DeleteBlogModal.jsx`: Blog silme işlemleri için modal.
- `UpdateBlogForm.jsx`: Blog güncelleme işlemleri için form.
- `AddContentForm.jsx`: Blog içeriği ekleme işlemleri için form.
- `UpdateContentModal.jsx`: Blog içeriği güncelleme işlemleri için modal.
- `UpdateContentForm.jsx`: Blog içeriği güncelleme işlemleri için form.
- `DeleteContentModal.jsx`: Blog içeriği silme işlemleri için modal.
- `ImageBlogModal.jsx`: Blog görsellerini görüntüleme modalı.
- `CommentForm.jsx`: Blog yorumları eklemek için form.
- `EditCommentForm.jsx`: Yorum düzenlemek için form.
- `CommentCard.jsx`: Blog yorumlarını listeleme, düzenleme ve silme işlemleri için kart.
- `BottomCommentForm.jsx`: Alt yorumlar (cevaplar) için form.
- `CommentBottomForm.jsx`: Alt yorumlar için cevap ekleme formu.
- `EditBottomCommentForm.jsx`: Alt yorumları düzenlemek için form.
- `BottomCommentCard.jsx`: Alt yorumları listelemek ve düzenlemek için kart.
- `PopularBlogCard.jsx`: Popüler blogları listelemek için kart.
- `LikedBlogCard.jsx`: Beğenilen blogları listelemek için kart.
- `ViewedBlogCard.jsx`: En çok görüntülenen blogları listelemek için kart.
- `UsersCard.jsx`: Kullanıcı kart bileşeni.
- `UserCardSkeleton.jsx`: Kullanıcı kartı yükleme iskeleti.
- `ProfileCard.jsx`: Kullanıcı profili kart bileşeni.
- `ProfileCardSkeleton.jsx`: Kullanıcı profili yükleme iskeleti.
- `ContentCard.jsx`: Blog içeriği kart bileşeni.
- `TextEditor.jsx`: Zengin metin düzenleyici.
- `BlogCardSkeleton.jsx`: Blog kartı yükleme iskeleti.
- `BlogLikesModal.jsx`: Blog beğeni detayları için modal.
- `MostPopularBlogCard.jsx`: En popüler blog kartı bileşeni.
- `MostLikedBlogCard.jsx`: En çok beğenilen blog kartı bileşeni.
- `store.jsx`: Redux store tanımı ve yapılandırması.
- `Device.js`: Kullanıcı cihaz kimliklerini (`deviceId`) yönetmek için yardımcı fonksiyon.

## Kullanıcı Kayıt Yönetimi

**Register.jsx** ve **RegisterForm.jsx**, kullanıcıların sisteme kayıt olmalarını sağlar. Kullanıcılar, form üzerinden bilgilerini girerek hesap oluşturabilir.

### İşlevler:
- Kullanıcı kayıt işlemlerini gerçekleştirme.
- Formik ve Yup ile kayıt formu yönetimi ve doğrulama.
- Hata durumlarında kullanıcıyı bilgilendirme.
- Giriş sayfasına yönlendirme.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, **MyBlogs.jsx**, **UserBlogCard.jsx**, **MyBlogDetail.jsx**, **DeleteMyBlogModal.jsx**, ve **ContentForm.jsx**; yeni blog oluşturma, kullanıcı bloglarını yönetme, detay görüntüleme ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, bloglarını yönetebilir, mevcut bloglarını düzenleyebilir ve içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Kullanıcı bloglarını listeleme, beğenme ve yönetme.
- Kullanıcı blog detaylarını görüntüleme ve düzenleme.
- Blogları silme işlemleri.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.

------------------------------------------------------------

# Köşe Yazısı - Frontend (49)

Bu proje, köşe yazılarınızı paylaşabileceğiniz bir platform olan **Köşe Yazısı** uygulamasının frontend kısmını içermektedir. Proje, kullanıcı dostu bir arayüz ve modern web teknolojileri kullanılarak geliştirilmiştir.

## Özellikler

- Kullanıcı dostu ve duyarlı tasarım.
- Redux Toolkit ile state yönetimi.
- **Axios** ile HTTP istekleri ve özelleştirilebilir API istemcileri.
- **Formik ve Yup** ile form yönetimi ve doğrulama.
- **TailwindCSS** ile özelleştirilebilir stil desteği.
- **Material-UI (MUI)** kullanılarak modern bileşenler.
- React Router ile sayfa yönlendirme.
- React-Toastify ile bildirim desteği.
- Tema desteği (Karanlık mod ve özel tema özelleştirmeleri).
- Kaydırma çubuğu özelleştirmeleri.
- Hiyerarşik ve yeniden kullanılabilir bileşen yapısı.
- **Login**, **Register**, **Logout**, ve **Şifre Sıfırlama** işlemleri için tam kimlik doğrulama desteği.
- Redux Store ile kullanıcı bilgileri ve kimlik doğrulama durumunun yönetimi.
- Kullanıcı cihazlarına özel `deviceId` oluşturma ve saklama mekanizması.
- **Tema Modu Seçici** ile karanlık ve aydınlık mod arasında geçiş yapma.
- **Kategori CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Güncelleme Modali ve Formu**.
- **Blog Silme Modali**.
- **Blog İçerik Ekleme Modali ve Formu**.
- **Blog İçerik Güncelleme Modali ve Formu**.
- **Blog İçerik Silme Modali**.
- **Blog İçerik Güncelleme ve Silme İşlemleri**.
- **Zengin Metin Düzenleyici** ile içerikleri kolayca düzenleme.
- **Blog İçerik CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Arama, Kategori Filtreleme ve Sayfalama** desteği.
- **Kullanıcı Yönetimi** özelliği ile kullanıcı listeleme, tekil kullanıcı bilgilerini görüntüleme, kullanıcı güncelleme ve silme işlemleri.
- **Kategori Yönetimi** özelliği ile kategori oluşturma, listeleme, güncelleme ve silme işlemleri.
- **Blog Yönetimi** özelliği ile yeni blog oluşturma, kullanıcı bloglarını görüntüleme ve içerik ekleme.
- **Blog Detay Sayfası** ile blog içeriklerini, beğenileri ve yorumları görüntüleme.
- **Kullanıcı Blog Detay Sayfası** ile kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri.
- **Profil Sayfası** ile kullanıcı profili detaylarını görüntüleme ve güncelleme.
- **Kayıt Sayfası** ile yeni kullanıcılar için kayıt olma özelliği.
- **Hakkında Sayfası** ile platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi edinme.
- **Footer** bileşeni ile sosyal medya bağlantıları ve iletişim bilgileri.
- **En Popüler ve En Çok Beğenilen Bloglar** için özel listeleme.
- **Blog Kartları** ile blogların görsel ve metinsel içeriklerinin listelenmesi.
- **Popüler Blog Kartı** ile popüler blogların görsel ve metinsel içeriklerini listeleme.
- **Beğenilen Blog Kartı** ile kullanıcıların en çok beğendiği blogları listeleme.
- **Kullanıcı Blog Kartı** ile kullanıcı bloglarını listeleme ve beğenme.
- **Kullanıcı Kartları ve Yükleme İskeleti** ile kullanıcı bilgilerini görsel olarak sunma.
- **Tekil Kullanıcı Detay Sayfası** ile kullanıcı bilgilerini detaylı inceleme.
- **Kullanıcı Güncelleme ve Silme Modalı** ile kullanıcı bilgilerini düzenleme ve silme.
- **Kategori Güncelleme ve Silme Modalı** ile kategorileri düzenleme ve silme.
- **Blog Beğeni Modalı** ile blogu beğenen kullanıcıların detaylarının gösterimi.
- **Blog Kart İskeleti** ile yükleme sırasında kullanıcı deneyimini artırma.
- **Blog Görsel Modalı** ile büyük görselleri görüntüleme.
- **Yorum Yapma** özelliği ile bloglara yorum ekleme, düzenleme ve silme.
- **Alt Yorumlar** (cevap) ile hiyerarşik yorum desteği.
- **Alt Yorum CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **Redux Toolkit**: Global state yönetimi ve slice yapılandırmaları.
- **Axios**: HTTP istekleri için özelleştirilmiş API istemcileri.
- **React Router**: Yönlendirme işlemleri.
- **Formik ve Yup**: Form yönetimi ve doğrulama.
- **TailwindCSS**: Hızlı ve verimli stil oluşturma.
- **Material-UI (MUI)**: Gelişmiş React bileşenleri.
- **React-Toastify**: Kullanıcı bildirimleri için.
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji Mart**: Emoji seçici desteği.
- **MUI Theme Customization**: Tema ve bileşen özelleştirmeleri.

## Proje Yapısı

#### Önemli Dosyalar ve Diziler

- `index.css`: TailwindCSS entegrasyonu.
- `AppTheme.jsx`: Tema özelleştirmesi ve tematik bileşen yapılandırmaları.
- `inputsCustomizations.js`: Form ve button bileşenleri için özel özelleştirmeler.
- `dataDisplayCustomizations.js`: Liste tasarımı için özelleştirmeler.
- `surfacesCustomizations.js`: Kart gibi yüzey bileşenleri için özel stiller.
- `themePrimitives.js`: Tema renkleri, tipografi, gölgeler ve CSS değişkenleri gibi temel yapılandırmalar.
- `useAuthCalls.js`: Kimlik doğrulama işlemleri için özelleştirilmiş hook.
- `useBlogCalls.js`: Blog işlemleri için özelleştirilmiş hook.
- `useCategoryCalls.js`: Kategori işlemleri için özelleştirilmiş hook.
- `useContentCalls.js`: Blog içerik işlemleri için özelleştirilmiş hook.
- `useCommentCalls.js`: Blog yorum işlemleri için özelleştirilmiş hook.
- `useBottomCommentCalls.js`: Alt yorum işlemleri için özelleştirilmiş hook.
- `useUserCalls.js`: Kullanıcı işlemleri için özelleştirilmiş hook.
- `useAxios.js`: Axios tabanlı özelleştirilmiş istemciler.
- `authSlice.js`: Redux Toolkit ile kimlik doğrulama işlemleri için slice.
- `blogSlice.js`: Redux Toolkit ile blog işlemleri için slice.
- `categorySlice.js`: Redux Toolkit ile kategori işlemleri için slice.
- `userSlice.js`: Redux Toolkit ile kullanıcı işlemleri için slice.
- `contentSlice.js`: Redux Toolkit ile blog içerik işlemleri için slice.
- `commentSlice.js`: Redux Toolkit ile blog yorum işlemleri için slice.
- `bottomCommentSlice.js`: Redux Toolkit ile alt yorum işlemleri için slice.
- `ToastNotify.js`: Başarı ve hata bildirimleri için Toastify entegrasyonu.
- `AppRouter.jsx`: Uygulama yönlendirme işlemleri ve sayfa rotaları.
- `Navbar.jsx`: Kullanıcı gezinmesi için üst gezinme çubuğu.
- `ColorModeIconDropdown.jsx`: Tema modu seçici bileşeni.
- `LoginModal.jsx`: Kullanıcı giriş işlemleri için modal.
- `LoginForm.jsx`: Kullanıcı giriş formu ve validasyonu.
- `Register.jsx`: Kullanıcı kayıt sayfası.
- `RegisterForm.jsx`: Kullanıcı kayıt formu ve validasyonu.
- `ForgotPasswordForm.jsx`: Şifre sıfırlama formu ve validasyon.
- `Dashboard.jsx`: Anasayfa bileşeni.
- `MainContent.jsx`: Blog listeleme, kategori filtreleme, arama ve sayfalama.
- `Users.jsx`: Kullanıcıları listeleme, arama ve sayfalama işlemleri.
- `UserDetail.jsx`: Tekil kullanıcı detaylarını görüntüleme.
- `Profile.jsx`: Kullanıcı profili detaylarını görüntüleme ve güncelleme işlemleri.
- `UpdateUserModal.jsx`: Kullanıcı güncelleme işlemleri için modal.
- `DeleteUserModal.jsx`: Kullanıcı silme işlemleri için modal.
- `NewCategory.jsx`: Yeni kategori oluşturma sayfası.
- `NewCategoryForm.jsx`: Yeni kategori eklemek için kullanılan form.
- `Categories.jsx`: Kategorileri listeleme sayfası.
- `CategoryCard.jsx`: Kategori bilgilerini listeleme, güncelleme ve silme işlemleri için kart.
- `UpdateCategoryModal.jsx`: Kategori güncelleme işlemleri için modal.
- `DeleteCategoryModal.jsx`: Kategori silme işlemleri için modal.
- `NewBlog.jsx`: Yeni blog oluşturma sayfası.
- `NewBlogForm.jsx`: Yeni blog eklemek ve içerik eklemek için kullanılan form.
- `ContentForm.jsx`: Blog içeriklerini düzenleme ve ekleme işlemleri için form.
- `About.jsx`: Platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi veren sayfa.
- `Footer.jsx`: Footer bileşeni ile sosyal medya bağlantıları ve iletişim bilgileri.
- `MyBlogs.jsx`: Kullanıcıya ait blogların listelendiği ve yönetildiği sayfa.
- `Search.jsx`: Blog ve kullanıcı arama bileşeni.
- `UserBlogCard.jsx`: Kullanıcı bloglarını listeleme ve beğenme işlemleri için kart.
- `MyBlogDetail.jsx`: Kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri için sayfa.
- `DeleteMyBlogModal.jsx`: Kullanıcı bloglarını silme işlemleri için modal.
- `BlogDetail.jsx`: Blog detaylarını ve içeriğini görüntüleme.
- `UpdateBlogModal.jsx`: Blog güncelleme işlemleri için modal.
- `AddContentModal.jsx`: Blog içeriği ekleme işlemleri için modal.
- `DeleteBlogModal.jsx`: Blog silme işlemleri için modal.
- `UpdateBlogForm.jsx`: Blog güncelleme işlemleri için form.
- `AddContentForm.jsx`: Blog içeriği ekleme işlemleri için form.
- `UpdateContentModal.jsx`: Blog içeriği güncelleme işlemleri için modal.
- `UpdateContentForm.jsx`: Blog içeriği güncelleme işlemleri için form.
- `DeleteContentModal.jsx`: Blog içeriği silme işlemleri için modal.
- `ImageBlogModal.jsx`: Blog görsellerini görüntüleme modalı.
- `CommentForm.jsx`: Blog yorumları eklemek için form.
- `EditCommentForm.jsx`: Yorum düzenlemek için form.
- `CommentCard.jsx`: Blog yorumlarını listeleme, düzenleme ve silme işlemleri için kart.
- `BottomCommentForm.jsx`: Alt yorumlar (cevaplar) için form.
- `CommentBottomForm.jsx`: Alt yorumlar için cevap ekleme formu.
- `EditBottomCommentForm.jsx`: Alt yorumları düzenlemek için form.
- `BottomCommentCard.jsx`: Alt yorumları listelemek ve düzenlemek için kart.
- `PopularBlogCard.jsx`: Popüler blogları listelemek için kart.
- `LikedBlogCard.jsx`: Beğenilen blogları listelemek için kart.
- `ViewedBlogCard.jsx`: En çok görüntülenen blogları listelemek için kart.
- `UsersCard.jsx`: Kullanıcı kart bileşeni.
- `UserCardSkeleton.jsx`: Kullanıcı kartı yükleme iskeleti.
- `ProfileCard.jsx`: Kullanıcı profili kart bileşeni.
- `ProfileCardSkeleton.jsx`: Kullanıcı profili yükleme iskeleti.
- `ContentCard.jsx`: Blog içeriği kart bileşeni.
- `TextEditor.jsx`: Zengin metin düzenleyici.
- `BlogCardSkeleton.jsx`: Blog kartı yükleme iskeleti.
- `BlogLikesModal.jsx`: Blog beğeni detayları için modal.
- `MostPopularBlogCard.jsx`: En popüler blog kartı bileşeni.
- `MostLikedBlogCard.jsx`: En çok beğenilen blog kartı bileşeni.
- `store.jsx`: Redux store tanımı ve yapılandırması.
- `Device.js`: Kullanıcı cihaz kimliklerini (`deviceId`) yönetmek için yardımcı fonksiyon.

## Footer Yönetimi

**Footer.jsx**, kullanıcıların uygulamayla ilgili telif hakkı bilgilerini ve sosyal medya bağlantılarını görüntülemesini sağlar.

### İşlevler:
- Telif hakkı bilgilerini dinamik olarak güncelleme.
- Sosyal medya bağlantılarını sunma (GitHub, LinkedIn, Email).
- Kullanıcı dostu ve duyarlı bir tasarım sunma.

## Blog Yönetimi

**NewBlog.jsx**, **NewBlogForm.jsx**, **MyBlogs.jsx**, **UserBlogCard.jsx**, **MyBlogDetail.jsx**, **DeleteMyBlogModal.jsx**, ve **ContentForm.jsx**; yeni blog oluşturma, kullanıcı bloglarını yönetme, detay görüntüleme ve içerik ekleme işlemleri için kullanılır. Kullanıcılar, bloglarını yönetebilir, mevcut bloglarını düzenleyebilir ve içerik ekleyebilir.

### İşlevler:
- Yeni blog oluşturma.
- Bloglara içerik ekleme.
- Kullanıcı bloglarını listeleme, beğenme ve yönetme.
- Kullanıcı blog detaylarını görüntüleme ve düzenleme.
- Blogları silme işlemleri.

## Hakkında Sayfası

**About.jsx**, platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi sağlayan bir sayfadır. Kullanıcılar, Köşe Yazısı'nın amacını ve nasıl kullanılacağını bu sayfa üzerinden öğrenebilir.

### İşlevler:
- Platformun vizyon ve misyonunu açıklama.
- Kullanıcı deneyimi ve içerik oluşturma süreçlerini detaylandırma.

-----------------------------------------

# Köşe Yazısı - Frontend (50)

Bu proje, köşe yazılarınızı paylaşabileceğiniz bir platform olan **Köşe Yazısı** uygulamasının frontend kısmını içermektedir. Proje, kullanıcı dostu bir arayüz ve modern web teknolojileri kullanılarak geliştirilmiştir.

## Özellikler

- Kullanıcı dostu ve duyarlı tasarım.
- Redux Toolkit ile state yönetimi.
- **Redux Persist** ile oturum yönetimi (session storage).
- **Axios** ile HTTP istekleri ve özelleştirilebilir API istemcileri.
- **Formik ve Yup** ile form yönetimi ve doğrulama.
- **TailwindCSS** ile özelleştirilebilir stil desteği.
- **Material-UI (MUI)** kullanılarak modern bileşenler.
- React Router ile sayfa yönlendirme.
- React-Toastify ile bildirim desteği.
- Tema desteği (Karanlık mod ve özel tema özelleştirmeleri).
- Kaydırma çubuğu özelleştirmeleri.
- Hiyerarşik ve yeniden kullanılabilir bileşen yapısı.
- **Login**, **Register**, **Logout**, ve **Şifre Sıfırlama** işlemleri için tam kimlik doğrulama desteği.
- Redux Store ile kullanıcı bilgileri ve oturum durumunun yönetimi.
- Kullanıcı cihazlarına özel `deviceId` oluşturma ve saklama mekanizması.
- **Tema Modu Seçici** ile karanlık ve aydınlık mod arasında geçiş yapma.
- **Kategori CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Güncelleme Modali ve Formu**.
- **Blog Silme Modali**.
- **Blog İçerik Ekleme Modali ve Formu**.
- **Blog İçerik Güncelleme Modali ve Formu**.
- **Blog İçerik Silme Modali**.
- **Blog İçerik Güncelleme ve Silme İşlemleri**.
- **Zengin Metin Düzenleyici** ile içerikleri kolayca düzenleme.
- **Blog İçerik CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.
- **Blog Arama, Kategori Filtreleme ve Sayfalama** desteği.
- **Kullanıcı Yönetimi** özelliği ile kullanıcı listeleme, tekil kullanıcı bilgilerini görüntüleme, kullanıcı güncelleme ve silme işlemleri.
- **Kategori Yönetimi** özelliği ile kategori oluşturma, listeleme, güncelleme ve silme işlemleri.
- **Blog Yönetimi** özelliği ile yeni blog oluşturma, kullanıcı bloglarını görüntüleme ve içerik ekleme.
- **Blog Detay Sayfası** ile blog içeriklerini, beğenileri ve yorumları görüntüleme.
- **Kullanıcı Blog Detay Sayfası** ile kullanıcı bloglarının detaylarını ve içeriklerini görüntüleme, güncelleme ve silme işlemleri.
- **Profil Sayfası** ile kullanıcı profili detaylarını görüntüleme ve güncelleme.
- **Kayıt Sayfası** ile yeni kullanıcılar için kayıt olma özelliği.
- **Hakkında Sayfası** ile platformun vizyonu, misyonu ve kullanıcı deneyimi hakkında bilgi edinme.
- **Footer** bileşeni ile sosyal medya bağlantıları ve iletişim bilgileri.
- **En Popüler ve En Çok Beğenilen Bloglar** için özel listeleme.
- **Blog Kartları** ile blogların görsel ve metinsel içeriklerinin listelenmesi.
- **Popüler Blog Kartı** ile popüler blogların görsel ve metinsel içeriklerini listeleme.
- **Beğenilen Blog Kartı** ile kullanıcıların en çok beğendiği blogları listeleme.
- **Kullanıcı Blog Kartı** ile kullanıcı bloglarını listeleme ve beğenme.
- **Kullanıcı Kartları ve Yükleme İskeleti** ile kullanıcı bilgilerini görsel olarak sunma.
- **Tekil Kullanıcı Detay Sayfası** ile kullanıcı bilgilerini detaylı inceleme.
- **Kullanıcı Güncelleme ve Silme Modalı** ile kullanıcı bilgilerini düzenleme ve silme.
- **Kategori Güncelleme ve Silme Modalı** ile kategorileri düzenleme ve silme.
- **Blog Beğeni Modalı** ile blogu beğenen kullanıcıların detaylarının gösterimi.
- **Blog Kart İskeleti** ile yükleme sırasında kullanıcı deneyimini artırma.
- **Blog Görsel Modalı** ile büyük görselleri görüntüleme.
- **Yorum Yapma** özelliği ile bloglara yorum ekleme, düzenleme ve silme.
- **Alt Yorumlar** (cevap) ile hiyerarşik yorum desteği.
- **Alt Yorum CRUD İşlemleri** (Oluşturma, Güncelleme, Silme) desteği.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **Redux Toolkit**: Global state yönetimi ve slice yapılandırmaları.
- **Redux Persist**: Oturum verisi yönetimi.
- **Axios**: HTTP istekleri için özelleştirilmiş API istemcileri.
- **React Router**: Yönlendirme işlemleri.
- **Formik ve Yup**: Form yönetimi ve doğrulama.
- **TailwindCSS**: Hızlı ve verimli stil oluşturma.
- **Material-UI (MUI)**: Gelişmiş React bileşenleri.
- **React-Toastify**: Kullanıcı bildirimleri için.
- **React-Quill**: Zengin metin düzenleyici.
- **Emoji Mart**: Emoji seçici desteği.
- **MUI Theme Customization**: Tema ve bileşen özelleştirmeleri.

## Proje Yapısı

#### Önemli Dosyalar ve Diziler

- `store.jsx`: Redux Store ve Redux Persist entegrasyonu.
- `authSlice.js`: Kimlik doğrulama işlemleri için Redux Slice.
- `blogSlice.js`: Blog işlemleri için Redux Slice.
- `categorySlice.js`: Kategori işlemleri için Redux Slice.
- `userSlice.js`: Kullanıcı işlemleri için Redux Slice.
- `commentSlice.js`: Blog yorum işlemleri için Redux Slice.
- `bottomCommentSlice.js`: Alt yorum işlemleri için Redux Slice.
- `contentSlice.js`: Blog içerik işlemleri için Redux Slice.
- `AppTheme.jsx`: Tema özelleştirmesi ve tematik bileşen yapılandırmaları.
- `AppRouter.jsx`: Uygulama yönlendirme işlemleri ve sayfa rotaları.
- `Navbar.jsx`: Kullanıcı gezinmesi için üst gezinme çubuğu.
- `Footer.jsx`: Footer bileşeni ile sosyal medya bağlantıları ve iletişim bilgileri.

## Redux Persist Entegrasyonu

**store.jsx** dosyası, Redux Persist'i kullanarak oturum yönetimi sağlar. Kullanıcı oturum bilgileri session storage'da saklanır. `persistReducer` ve `persistStore` ile Redux Store'un oturum verilerini koruyacak şekilde yapılandırılması sağlanır.

### Avantajlar:
- Kullanıcı oturumunun sayfalar arasında devamlılığını sağlar.
- Session storage kullanımı sayesinde güvenli ve hızlı bir oturum yönetimi sunar.