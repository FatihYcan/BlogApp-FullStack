import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import UserCard from "../../components/user/cards/UserCard";
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
  const { getUsers } = useUserCalls();
  const { users, details } = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  const [searchUser, setSearchUser] = useState(
    sessionStorage.getItem("searchUser") || ""
  );

  useEffect(() => {
    if (searchUser) {
      sessionStorage.setItem("searchUser", searchUser);
    } else {
      sessionStorage.removeItem("searchUser");
    }
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
  }, [searchUser]);

  const generateBlogsUrl = () => {
    let url = `users?page=${page}&limit=2`;

    if (searchUser) {
      url += `&search[username]=${searchUser}`;
    }

    return url;
  };

  useEffect(() => {
    getUsers(generateBlogsUrl());
  }, [page, searchUser]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (e) => {
    setSearchUser(e.target.value);
    setPage(1);
  };

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ display: "flex", flexDirection: "column", mt: 16, mb: 8, gap: 4 }}
    >
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
            <UserCard key={user._id} {...user} page={page} />
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
                  page={page}
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
