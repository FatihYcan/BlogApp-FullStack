import { alpha, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import useAuthCalls from "../../hooks/useAuthCalls";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import blog from "../../assets/images/blog-app.png";
import ColorModeIconDropdown from "./ColorModeIconDropdown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import avatar from "../../assets/icons/avatar.png";
import { useSelector } from "react-redux";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

const admin = [
  { name: "Users", to: "/users" },
  { name: "New Category", to: "/new-category" },
  { name: "Categories", to: "/categories" },
];
const notLogin = [
  { name: "New Blog", to: "/new-blog" },
  { name: "About", to: "/about" },
];
const login = [
  { name: "My Blogs", to: "/my-blogs" },
  { name: "Profile", to: "/profile" },
];

export default function Navbar() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { myUser } = useSelector((state) => state.blog);

  const { logout } = useAuthCalls();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const { username, isAdmin, image } = userInfo || {};

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "32px",
                cursor: "pointer",
              }}
            >
              <Link to="/">
                <img style={{ height: 70, width: 100 }} src={blog} alt={blog} />
              </Link>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  alignItems: "center",
                },
              }}
            >
              {isAdmin &&
                admin.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`${
                      location.pathname === item.to
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                    } rounded-md px-3 py-2 text-sm font-medium mr-3`}
                  >
                    {item.name}
                  </Link>
                ))}

              {notLogin.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`${
                    location.pathname === item.to
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "text-black hover:bg-black hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-black "
                  } rounded-md px-3 py-2 text-sm font-medium mr-3`}
                >
                  {item.name}
                </Link>
              ))}

              {username &&
                login.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`${
                      location.pathname === item.to
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "text-black hover:bg-black hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-black"
                    } rounded-md px-3 py-2 text-sm font-medium mr-3`}
                  >
                    {item.name}
                  </Link>
                ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {username && (
              <div className="border border-black flex px-3 py-2 gap-4 items-center">
                <img
                  alt={username}
                  src={
                    image && image.length > 0
                      ? `http://127.0.0.1:8000${image[0].slice(1)}`
                      : avatar
                  }
                  className="h-6 w-8 rounded-full"
                  referrerPolicy="no-referrer"
                />
                <h5 className=" text-black dark:border-white dark:text-white rounded-md text-sm font-medium capitalize">
                  {username}
                </h5>
              </div>
            )}

            {!username && (
              <>
                <Link
                  to="/login"
                  className={`${
                    location.pathname === "/login"
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "text-black hover:bg-gray-600 hover:text-white  dark:text-white dark:hover:bg-gray-600 dark:hover:text-black"
                  } rounded-md px-3 py-2 text-sm font-medium`}
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className={`${
                    location.pathname === "/register"
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : location.pathname === "/login"
                      ? "bg-white text-black dark:bg-black dark:text-white hover:bg-gray-600 hover:text-white dark:hover:bg-gray-600 dark:hover:text-black"
                      : "text-white bg-black hover:bg-gray-600 hover:text-white dark:text-black dark:bg-white"
                  } rounded-md px-3 py-2 text-sm font-medium`}
                >
                  Sign up
                </Link>
              </>
            )}

            {username && (
              <Link
                to="/"
                className="bg-black text-white dark:bg-white dark:text-black  dark:hover:bg-gray-600  hover:bg-gray-600 rounded-md px-3 py-2 text-sm font-medium"
                onClick={logout}
              >
                Logout
              </Link>
            )}

            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {isAdmin &&
                  admin.map((item) => (
                    <MenuItem style={{ background: "none" }} key={item.name}>
                      <Link
                        to={item.to}
                        className={`${
                          location.pathname === item.to
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "text-black hover:bg-black hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-black"
                        } rounded-md px-2 py-3 text-sm font-medium w-full h-100`}
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                {notLogin.map((item) => (
                  <MenuItem style={{ background: "none" }} key={item.name}>
                    <Link
                      to={item.to}
                      className={`${
                        location.pathname === item.to
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "text-black hover:bg-black hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-black "
                      } rounded-md px-2 py-3 text-sm font-medium w-full h-100`}
                    >
                      {item.name}
                    </Link>
                  </MenuItem>
                ))}
                {username &&
                  login.map((item) => (
                    <MenuItem style={{ background: "none" }} key={item.name}>
                      <Link
                        to={item.to}
                        className={`${
                          location.pathname === item.to
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "text-black hover:bg-black hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-black"
                        } rounded-md px-2 py-3 text-sm font-medium w-full h-100`}
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                <Divider sx={{ my: 3 }} />

                {username && (
                  <div className="border border-black flex px-3 py-2 gap-4 justify-center items-center">
                    <img
                      alt={username}
                      src={
                        image && image.length > 0
                          ? `http://127.0.0.1:8000${image[0].slice(1)}`
                          : avatar
                      }
                      className="h-8 w-8 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                    <h5 className=" text-black dark:border-white dark:text-white rounded-md text-sm font-medium capitalize">
                      {username}
                    </h5>
                  </div>
                )}
                <Divider sx={{ my: 1 }} />
                {!username && (
                  <>
                    <MenuItem style={{ background: "none" }}>
                      <Link
                        to="/login"
                        className={`${
                          location.pathname === "/login"
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "text-black hover:bg-gray-600 hover:text-white  dark:text-white dark:hover:bg-gray-300 dark:hover:text-black"
                        } rounded-md px-3 py-2 text-sm font-medium text-center w-full border border-gray-500 `}
                      >
                        Sign in
                      </Link>
                    </MenuItem>
                    <MenuItem style={{ background: "none" }}>
                      <Link
                        to="/register"
                        className={`${
                          location.pathname === "/register"
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : location.pathname === "/login"
                            ? "bg-white text-black dark:bg-black dark:text-white hover:bg-gray-600 hover:text-white dark:hover:bg-gray-600 dark:hover:text-black"
                            : "text-white bg-black hover:bg-gray-600 hover:text-white dark:text-black dark:bg-white"
                        } rounded-md px-3 py-2 text-sm font-medium text-center w-full border border-black`}
                      >
                        Sign up
                      </Link>
                    </MenuItem>
                  </>
                )}

                {username && (
                  <MenuItem style={{ background: "none" }}>
                    <Link
                      to="/"
                      className="bg-black text-white dark:bg-white dark:text-black  dark:hover:bg-gray-600  hover:bg-gray-600 rounded-md px-3 py-2 text-sm font-medium  text-center w-full border border-black"
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  </MenuItem>
                )}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
