import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useEffect, useState } from "react";
import UserCard from "../../components/user/UserCard";

export function Search({ handleSearch }) {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "100%" } }} variant="outlined">
      <OutlinedInput
        onChange={handleSearch}
        size="small"
        id="search"
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
  const { users, details } = useSelector((state) => state.blog);
  const { getUsers } = useBlogCalls();
  const [page, setPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    if (searchWord) {
      getUsers(`users?page=${page}&limit=2&search[username]=${searchWord}`);
    } else {
      getUsers(`users?page=${page}&limit=2`);
    }
  }, [page, searchWord]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (e) => {
    setSearchWord(e.target.value);
    setPage(1);
  };

  return (
    <>
      <CssBaseline enableColorScheme />
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
            <Search handleSearch={handleSearch} />
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
            <Search handleSearch={handleSearch} />
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
    </>
  );
}
