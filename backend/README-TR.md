# BlogApp-FullStack - Backend

Bu proje, blog yazılarınızı paylaşabileceğiniz bir platform olan **BlogApp-FullStack** uygulamasının backend kısmını içermektedir. Proje Node.js, Express.js ve MongoDB kullanılarak geliştirilmiştir.

## Kullanılan Teknolojiler

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

---

## Proje Özellikleri

### Veritabanı Bağlantısı
- MongoDB bağlantısı `dbConnection` fonksiyonu ile sağlanır.
- Bağlantı hataları konsola loglanır.

### Cloudinary Desteği
- Görsel yüklemeler için Cloudinary API entegrasyonu yapılabilir.

### Görsel Yükleme
- **Multer**: Dosya yükleme işlemleri için kullanılır.
- **Cloudinary**: Yüklenen dosyalar Cloudinary'e gönderilir.
- **Desteklenen Formatlar**
  - JPEG, JPG, PNG, GIF, WEBP.
- **Yükleme Süreci**
  - Yüklenen dosya adı düzenlenir (`fixFileName`).
  - Dosya geçici olarak kaydedilir ve ardından Cloudinary'e yüklenir.

### Kimlik Doğrulama
- **JWT (Bearer Token)**: Kullanıcı kimlik doğrulaması için `jsonwebtoken` kullanılır.
- **Simple Token**: Veritabanındaki `Token` modeli ile kaydedilen tokenlara göre doğrulama yapılır.

### Yetkilendirme
- **isLogin**: Kullanıcının oturum açıp açmadığını kontrol eder. Kullanıcı oturum açmamışsa erişim engellenir.
- **isAdmin**: Kullanıcının admin olup olmadığını kontrol eder. Sadece admin yetkisi olan kullanıcılar belirli işlemleri gerçekleştirebilir.

### Global Hata Yönetimi
- **ErrorHandler Middleware**
  - Sunucu tarafında oluşan tüm hatalar bu middleware ile yakalanır ve anlamlı bir cevap döndürülür.
  - Dönen hata yanıtı şu bilgileri içerir:
    - `error`: Hata durumu.
    - `message`: Hata mesajı.
    - `cause`: Hatanın sebebi.
    - `body`: İstekle gönderilen veri.
    - `stack`: Hata yığını. 

### Auth Controller (Auth)
- **Login**
  - Kullanıcı adı veya e-posta ile giriş yapılır.
  - Şifre doğrulaması yapılır ve token üretilir.
- **Forgot Password**
  - Kullanıcı adı veya e-posta ile şifre sıfırlama işlemi yapılır.
- **Logout**
  - Token silinir ve oturum kapatılır.
  
### Kullanıcı Modeli (User)
- **Alanlar**
  - `username` (String): Kullanıcı adı, benzersiz ve zorunlu.
  - `firstName` (String): Kullanıcının adı, zorunlu.
  - `lastName` (String): Kullanıcının soyadı, zorunlu.
  - `email` (String): Kullanıcının e-posta adresi, benzersiz ve doğrulama içerir.
  - `password` (String): Şifre, özel kurallara göre doğrulanır ve şifrelenir.
  - `image` (Array): Kullanıcı görselleri.
  - `isActive` (Boolean): Kullanıcının aktiflik durumu.
  - `isAdmin` (Boolean): Kullanıcının adminlik durumu.
- **Şifre Doğrulama**
  - En az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.
  - Minimum 8 karakter uzunluğunda olmalıdır.
- **Şifreleme**
  - Şifreler `crypto.pbkdf2Sync` ile hashlenir ve güvenli bir şekilde veritabanında saklanır.

### Kullanıcı Controller (Users)
- **Listeleme (`list`)**
  - Sadece admin yetkisine sahip kullanıcılar tüm kullanıcıları listeleyebilir.
  - Admin olmayan kullanıcılar yalnızca kendi bilgilerini görebilir.
  - Sorgu parametreleri ile filtreleme, sıralama, arama ve sayfalama yapılabilir.
- **Kullanıcı Oluşturma (`create`)**
  - Yeni bir kullanıcı kaydı oluşturulur.
  - Kullanıcı profil resmi yüklendiyse, Cloudinary'e yüklenir.
  - Kayıt oluşturulduğunda otomatik olarak giriş yapılır ve bir token oluşturulur.
- **Kullanıcı Okuma (`read`)**
  - Sadece oturum açmış kullanıcılar kendi bilgilerini görebilir.
  - Admin yetkisine sahip kullanıcılar herhangi bir kullanıcıyı görüntüleyebilir.
- **Kullanıcı Güncelleme (`update`)**
  - Kullanıcılar yalnızca kendi bilgilerini güncelleyebilir.
  - Admin yetkisine sahip kullanıcılar diğer kullanıcıların bilgilerini güncelleyebilir ancak kendi `isAdmin` ve `isActive` durumlarını değiştiremez.
  - Kullanıcı profil resmi yüklendiyse Cloudinary'e yüklenir veya silindiyse boş bir dizi olarak kaydedilir.
- **Kullanıcı Silme (`delete`)**
  - Kullanıcılar kendi hesaplarını silemez.
  - Admin yetkisine sahip kullanıcılar diğer kullanıcıların hesaplarını silebilir.
  - Silinen kullanıcıya ait bloglar da otomatik olarak silinir. 

### Token Modeli (Token)
- **Alanlar**
  - `userId` (ObjectId): Token'e ait kullanıcı.
  - `token` (String): Token değeri.

### Token Controller (Tokens)
- **Listeleme (`list`)**
  - Tüm token kayıtlarını listeler.
  - Sadece admin yetkisine sahip kullanıcılar bu işlemi gerçekleştirebilir.
- **Token Oluşturma (`create`)**
  - Yeni bir token kaydı oluşturur.
  - Sadece admin yetkisine sahip kullanıcılar bu işlemi gerçekleştirebilir.
- **Token Okuma (`read`)**
  - Belirli bir token kaydının detaylarını döner.
  - Sadece admin yetkisine sahip kullanıcılar bu işlemi gerçekleştirebilir.
- **Token Güncelleme (`update`)**
  - Belirli bir token kaydını günceller.
  - Sadece admin yetkisine sahip kullanıcılar bu işlemi gerçekleştirebilir.
- **Token Silme (`delete`)**
  - Belirli bir token kaydını siler.
  - Sadece admin yetkisine sahip kullanıcılar bu işlemi gerçekleştirebilir.

### Blog Modeli (Blog)
- **Alanlar**
  - `categoryId` (ObjectId): Bloga ait kategori.
  - `userId` (ObjectId): Blogun yazarı.
  - `commentsId`, `contentsId`, `likesId`, `viewsId`: Bloga ait yorumlar, içerikler, beğeniler ve görüntülemeler.
  - `title` (String): Blog başlığı.
  - `image` (Array): Blog görselleri.
  - `viewCount` ve `likeCount` (Number): Blogun toplam görüntüleme ve beğeni sayıları.
  - `isPublish` (Boolean): Blogun yayınlanma durumu.

### Blog Controller (Blogs)
- **Listeleme (`list`**)
  - Sorgu parametreleri ile filtreleme, sıralama, arama ve sayfalama yapılabilir.
- **Blog Oluşturma (`create`)**
  - Kullanıcı oturum açtıktan sonra blog oluşturabilir.
  - Blog oluşturulurken görsel yüklenirse Cloudinary'e yüklenir.
- **Blog Güncelleme (`update`)**
  - Sadece blogu yazan kullanıcı veya admin tarafından güncellenebilir.
  - Görsel değişiklikleri Cloudinary'e yüklenerek güncellenir.
- **Blog Silme (`delete`)**
  - Bloga ait içerik, görüntüleme, beğeni ve yorumlar da silinir.
- **Blog Okuma (`read`)**
  - Blog detayında kategori, yorumlar, içerik, beğeniler ve yazar bilgisi bulunur.
  - Kullanıcının blogu görüntülemesi `View` modeli ile kaydedilir.
- **Beğeni İşlemleri (`getLike`, `postLike`)**
  - **getLike**: Kullanıcının blogu beğenip beğenmediğini ve toplam beğeni sayısını döner.
  - **postLike**: Bloga beğeni ekler veya beğeniyi kaldırır.
- **Blog ID Oluşturma (`createId`)**
  - Taslak blog oluşturur ve ID'sini döner.

### Kategori Modeli (Category)
- **Alanlar**
  - `name` (String): Kategori adı.

### Kategori Controller (Categories)
- **Listeleme (`list`)**
  - Sorgu parametreleri ile filtreleme, sıralama, arama ve sayfalama yapılabilir.
- **Kategori Oluşturma (`create`)**
  - Admin yetkisine sahip kullanıcılar yeni kategori oluşturabilir.
- **Kategori Okuma (`read`)**
  - Belirli bir kategorinin detaylarını döner.
- **Kategori Güncelleme (`update`)**
  - Admin yetkisine sahip kullanıcılar kategorileri güncelleyebilir.
- **Kategori Silme (`delete`)**
  - Admin yetkisine sahip kullanıcılar kategoriyi silebilir.
  - Ancak kategoriye ait bloglar varsa, kategori silinemez.

### İçerik Modeli (Content)
- **Alanlar**
  - `blogId` (ObjectId): İçeriğin ait olduğu blog.
  - `userId` (ObjectId): İçeriği oluşturan kullanıcı.
  - `content` (String): İçeriğin metni.
  - `images` (Array): İçeriğe ait görseller.

### İçerik Controller (Contents)
- **Listeleme (`list`**)
  - Sorgu parametreleri ile filtreleme, sıralama, arama ve sayfalama yapılabilir.
- **İçerik Oluşturma (`create`)**
  - Kullanıcı oturum açtıktan sonra bloglara içerik oluşturabilir.
  - Görseller Cloudinary'e yüklenir ve URL'leri kaydedilir.
- **İçerik Okuma (`read`)**
  - Belirli bir içeriğin detaylarını döner.
- **İçerik Güncelleme (`update`)**
  - Sadece içeriği oluşturan kullanıcı veya admin tarafından güncellenebilir.
  - Görseller güncellenirken mevcut görseller silinebilir, yeni görseller eklenebilir veya var olanlarla birlikte kullanılabilir.
- **İçerik Silme (`delete`)**
  - Sadece içeriği oluşturan kullanıcı veya admin tarafından silinebilir.

### Yorum Modeli (Comment)
- **Alanlar**
  - `blogId` (ObjectId): Yorumun ait olduğu blog.
  - `userId` (ObjectId): Yorumu yazan kullanıcı.
  - `comment` (String): Yorumun içeriği.
  - `bottomCommentsId` (Array): Alt yorumlara referanslar. 

### Yorum Controller (Comments)
- **Listeleme (`list`)**
  - Sorgu parametreleri ile filtreleme, sıralama, arama ve sayfalama yapılabilir.
- **Yorum Oluşturma (`create`)**
  - Kullanıcı oturum açtıktan sonra bloglara yorum ekleyebilir.
  - Yeni bir yorum oluşturulurken, ilgili blogun `commentsId` alanına bu yorum eklenir.
- **Yorum Okuma (`read`)**
  - Belirli bir yorumun detaylarını döner.
- **Yorum Güncelleme (`update`)**
  - Sadece yorumu yazan kullanıcı veya admin tarafından güncellenebilir.
- **Yorum Silme (`delete`)**
  - Sadece yorumu yazan kullanıcı veya admin tarafından silinebilir.
  - Silinen yorum, ilgili blogun `commentsId` alanından kaldırılır ve yorumun alt yorumları da silinir. 

### Bottom Comment Modeli (BottomComment)
- **Alanlar**
  - `commentId` (ObjectId): Yorumun ait olduğu ana yorum.
  - `userId` (ObjectId): Yorumun yazarı.
  - `bottomComment` (String): Alt yorumun içeriği.

### Bottom Comment Controller (BottomComments)
- **Listeleme (`list`)**
 - Sorgu parametreleri ile filtreleme, sıralama, arama ve sayfalama yapılabilir.
- **Alt Yorum Oluşturma (`create`)**
  - Kullanıcı oturum açtıktan sonra alt yorum oluşturabilir.
  - Yeni bir alt yorum oluşturulurken, ilgili ana yorumun `bottomCommentsId` alanına bu alt yorum eklenir.
- **Alt Yorum Okuma (`read`)**
  - Belirli bir alt yorumun detaylarını döner.
- **Alt Yorum Güncelleme (`update`)**
  - Sadece alt yorumu yazan kullanıcı veya admin tarafından güncellenebilir.
- **Alt Yorum Silme (`delete`)**
  - Sadece alt yorumu yazan kullanıcı veya admin tarafından silinebilir.
  - Silinen alt yorum, ilgili ana yorumun `bottomCommentsId` alanından da kaldırılır.

### Beğeni Modeli (Like)
- **Alanlar**
  - `blogId` (ObjectId): Beğeninin ait olduğu blog.
  - `userId` (ObjectId): Beğeniyi yapan kullanıcı. 

### Beğeni Controller (Likes)
- **Beğeni Ekleme veya Kaldırma**
  - Bloglara beğeni eklenebilir veya mevcut beğeni kaldırılabilir.
  - Kullanıcı bir blogu beğendiğinde, ilgili blogun `likesId` alanına referans eklenir.
- **Beğeni Bilgisi Alma**
  - Bir blogun toplam beğeni sayısı ve kullanıcı tarafından beğenilip beğenilmediği bilgisi döner.

### Görüntüleme Modeli (View)
- **Alanlar**
  - `blogId` (ObjectId): Görüntülemenin ait olduğu blog.
  - `userId` (ObjectId): Blogu görüntüleyen kullanıcı.
  - `deviceId` (String): Kullanıcının cihaz ID'si (anonim görüntülemeler için). 

### Görüntüleme Controller (Views)
- **Görüntülemeyi Kaydetme**
  - Bloglar her görüntülendiğinde bir `View` kaydı oluşturulur.
  - Giriş yapmış kullanıcılar için `userId` kaydedilir.
  - Giriş yapmamış kullanıcılar için `deviceId` kullanılarak anonim görüntüleme kaydedilir.


### Dokümantasyon Yönlendirmeleri (Documents)
- **Swagger ve Redoc**:
  - Swagger ve Redoc dokümantasyonu için `swagger.json` dosyası kullanılır.
  - Swagger ve Redoc, API dokümantasyonunu kolayca görüntülemek için farklı kullanıcı arayüzleri sağlar.
- **Dokümantasyon URL'leri**:
  - `/documents/json`: API dokümantasyonunun JSON formatında içeriği.
  - `/documents/redoc`: Redoc arayüzü üzerinden API dokümantasyonu.
  - `/documents/swagger`: Swagger UI üzerinden API dokümantasyonu.

### Middleware’ler
- **Kimlik Doğrulama Middleware**:
  - Header'daki `Authorization` değeri ile oturum kontrolü yapılır.
  - Kullanıcı oturum açmamışsa, belirli işlemlere erişim engellenir. 
- **Yetkilendirme Middleware**:
  - `isLogin`: Kullanıcının oturum açtığını doğrular.
  - `isAdmin`: Kullanıcının admin yetkisine sahip olduğunu doğrular.
- **Filtreleme, Arama, Sıralama ve Sayfalama Middleware**:
  - Parametreler:
    - `filter`: Filtreleme sorguları.
    - `search`: Büyük/küçük harf duyarsız arama.
    - `sort`: Kayıtları sıralama (varsayılan: `createdAt: 'desc'`).
    - `page` ve `limit`: Sayfalama ayarları.
  - `res.getModelList` ve `res.getModelListDetails` fonksiyonları ile model bazlı veri sorgulama.

### Hata Yönetimi
- `errorHandler` middleware ile tüm hatalar yakalanır ve yanıt olarak döndürülür.

**API Dokümantasyonu**
   - [SWAGGER](https://koseyazisi.onrender.com/documents/swagger/)
   - [REDOC](https://koseyazisi.onrender.com/documents/redoc)
   - [JSON](https://koseyazisi.onrender.com/documents/json)
