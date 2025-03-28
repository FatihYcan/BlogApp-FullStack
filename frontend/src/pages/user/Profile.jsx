import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../../components/user/cards/ProfileCard";
import useUserCalls from "../../hooks/useUserCalls";
import { Helmet } from "react-helmet";

export default function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { _id } = userInfo || {};

  const { getSingleUser } = useUserCalls();
  const { singleUser } = useSelector((state) => state.user);

  useEffect(() => {
    getSingleUser(_id);
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
  }, []);

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ display: "flex", flexDirection: "column", mt: 16, mb: 8, gap: 4 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Blog App${
          singleUser?.username ? " - " + singleUser.username : ""
        }`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginTop: "1rem",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          justifyContent="center"
        >
          <ProfileCard singleUser={singleUser} _id={_id} />
        </Grid>
      </Box>
    </Container>
  );
}
