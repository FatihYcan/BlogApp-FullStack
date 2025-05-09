import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

export default function About() {
  useEffect(() => {
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("page");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
    sessionStorage.removeItem("myPage");
    sessionStorage.removeItem("userPage");
  }, []);

  return (
    <Container
      maxWidth="md"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 16,
        mb: 8,
        gap: 4,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Köşe Yazısı - About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography
          variant="h6"
          color="textSecondary"
          textAlign="center"
          mb={2}
        >
          🚀 Köşe Yazısı, bireylerin düşüncelerini özgürce paylaşabilecekleri,
          içerik üreterek bilgi ve deneyimlerini aktarabilecekleri modern bir
          blog platformudur. Amacımız, herkesin kolayca içerik üretebilmesini ve
          kaliteli bilgilere erişebilmesini sağlamaktır.
        </Typography>

        <Box>
          <Typography variant="h5" fontWeight="bold" color="secondary">
            📌 Kullanıcı Deneyimi
          </Typography>
          <Typography variant="body1" color="textSecondary" my={1}>
            Köşe Yazısı, kullanıcı dostu tasarımı ve sade arayüzü sayesinde
            herkesin kolayca blog yazmasını sağlar. İster yeni bir yazar olun,
            ister tecrübeli bir içerik üretici, platformumuz size yazılarınızı
            paylaşma ve okuyucularla etkileşim kurma imkanı sunar.
          </Typography>
          <List>
            <ListItem>🖋️ Kolay kullanılabilir blog yazma editörü</ListItem>
            <ListItem>📚 Farklı kategorilerde içerik oluşturma imkanı</ListItem>
            <ListItem>💬 Yorum ve beğenilerle etkileşim</ListItem>
            <ListItem>
              🔍 Köşe yazıları için gelişmiş arama ve keşif özellikleri
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h5" fontWeight="bold" color="secondary">
            🌟 Vizyonumuz ve Misyonumuz
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={1}>
            Köşe Yazısı, olarak hedefimiz, herkesin özgürce düşüncelerini
            paylaşabileceği, çok yönlü içerik üretebileceği ve kaliteli
            bilgilere kolayca ulaşabileceği bir ortam oluşturmaktır.
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={1}>
            <strong>Vizyonumuz:</strong> Köşe yazarlığını herkes için
            erişilebilir hale getirmek, içerik üreticilerini desteklemek ve
            bilgi paylaşımını teşvik etmektir.
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={1}>
            <strong>Misyonumuz:</strong> İnsanların kolayca yazı yazmasını,
            paylaşmasını ve etkileşimde bulunmasını sağlayan yenilikçi bir
            platform sunmaktır.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" fontWeight="bold" color="secondary">
            🔍 Güvenilirlik ve Kalite
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={1}>
            İçerik kalitesi bizim için çok önemli. Platformumuzda paylaşılan
            içeriklerin bilgi verici, doğru ve etik kurallara uygun olmasına
            büyük önem veriyoruz. Kullanıcılarımızın katkılarıyla Köşe Yazısı
            dünyasını daha güvenilir hale getirmek için çalışıyoruz.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" fontWeight="bold" color="secondary">
            ✍️ Köşe Yazısı Yazmaya Nasıl Başlarsınız?
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={1}>
            Köşe Yazısı yazmaya başlamak çok kolay! Aşağıdaki adımları takip
            ederek ilk yazınızı yayınlayabilirsiniz:
          </Typography>
          <List>
            <ListItem>📌 Köşe Yazısı'na, üye olun veya giriş yapın.</ListItem>
            <ListItem>
              📝 Yeni bir yazı oluşturun ve içeriğinizi ekleyin.
            </ListItem>
            <ListItem>📷 Görseller ekleyerek yazınızı zenginleştirin.</ListItem>
            <ListItem>✅ Yayınlayarak okuyucularınızla paylaşın!</ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
}
