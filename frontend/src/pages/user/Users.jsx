import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import UserCardSkeleton from "../../components/user/cards/UserCardSkeleton";
import UsersCard from "../../components/user/cards/UsersCard";
import useUserCalls from "../../hooks/useUserCalls";

export function Search({ handleSearch, searchUser }) {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "100%" } }} variant="outlined">
      <OutlinedInput
        onChange={handleSearch}
        size="small"
        id="search"
        value={searchUser}
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
}

export default function Users() {
  const { users, details } = useSelector((state) => state.user);
  const { getUsers } = useUserCalls();
  const theme = useTheme();

  const [userPage, setUserPage] = useState(
    sessionStorage.getItem("userPage") || 1
  );
  const [searchUser, setSearchUser] = useState(
    sessionStorage.getItem("searchUser") || ""
  );
  const [loading, setLoading] = useState(true);

  const generateBlogsUrl = () => {
    let url = `users?page=${userPage}&limit=8`;

    if (searchUser) {
      url += `&search[username]=${searchUser}`;
    }

    return url;
  };

  const handleChange = (event, value) => {
    setUserPage(value);
  };

  const handleSearch = (e) => {
    setSearchUser(e.target.value);
    setUserPage(1);
  };

  useEffect(() => {
    if (searchUser) {
      sessionStorage.setItem("searchUser", searchUser);
    } else {
      sessionStorage.removeItem("searchUser");
    }

    if (userPage) {
      sessionStorage.setItem("userPage", userPage);
    } else {
      sessionStorage.removeItem("userPage");
    }

    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("page");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
    sessionStorage.removeItem("myPage");
  }, [searchUser, userPage]);

  useEffect(() => {
    getUsers(generateBlogsUrl());
  }, [userPage, searchUser]);

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
          {users.map((_, index) => (
            <UserCardSkeleton key={index} />
          ))}
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
        <title>Köşe Yazısı - Users</title>
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
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "fit-content" },
            overflow: "auto",
          }}
        >
          <Search handleSearch={handleSearch} searchUser={searchUser} />
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "30%" },
            overflow: "auto",
            margin: "auto",
          }}
        >
          <Search handleSearch={handleSearch} searchUser={searchUser} />
        </Box>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          justifyContent="center"
        >
          {users.map((user) => (
            <UsersCard key={user._id} {...user} />
          ))}
        </Grid>

        <div>
          {details.totalRecords > details.limit && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 4,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  color="primary"
                  count={details?.pages?.total}
                  onChange={handleChange}
                  page={Number(userPage)}
                  showFirstButton
                  showLastButton
                />
              </Stack>
            </Box>
          )}
        </div>
      </Box>
    </Container>
  );
}
