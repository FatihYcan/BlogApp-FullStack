import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import ProfileCard from "../../components/user/cards/ProfileCard";
import useUserCalls from "../../hooks/useUserCalls";
import ProfileCardSkeleton from "../../components/user/cards/ProfileCardSkeleton";

export default function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { _id } = userInfo || {};

  const { getSingleUser } = useUserCalls();
  const { singleUser } = useSelector((state) => state.user);
  const theme = useTheme();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleUser(_id);
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("page");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
    sessionStorage.removeItem("myPage");
    sessionStorage.removeItem("userPage");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Container
        maxWidth="xl"
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 16,
          mb: 8,
          gap: 4,
          [theme.breakpoints.up("xl")]: {
            minHeight: "67vh",
          },
        }}
      >
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          justifyContent="center"
        >
          <ProfileCardSkeleton />
        </Grid>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 16,
        mb: 8,
        gap: 4,
        justifyContent: "center",
        [theme.breakpoints.up("xl")]: {
          minHeight: "67vh",
        },
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Köşe Yazısı${
          singleUser?.username
            ? " - " +
              singleUser.username.charAt(0).toUpperCase() +
              singleUser.username.slice(1)
            : ""
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
