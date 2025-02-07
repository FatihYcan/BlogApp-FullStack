import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ColorModeIconDropdown from "./ColorModeIconDropdown";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";
import { Link, useLocation } from "react-router-dom";
import blog from "../img/blog-app.png";

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

const admin = [{ name: "Users", to: "/users", current: false }];
const notLogin = [
  { name: "New Blog", to: "/new-blog", current: false },
  { name: "About", to: "/about", current: false },
];
const login = [
  { name: "My Blog", to: "/my-blogs", current: false },
  { name: "Profile", to: "/profile", current: false },
];

export default function Navbar() {
  const { username, isAdmin } = useSelector((state) => state.auth);
  const { logout } = useAuthCalls();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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
              <h5 className="border border-black text-black dark:border-white dark:text-white rounded-md px-3 py-2 text-sm font-medium capitalize">
                {username}
              </h5>
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
                      : "text-white bg-black hover:bg-gray-600 hover:text-white  dark:text-black dark:bg-white dark:hover:bg-gray-600 dark:hover:text-black"
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
                  <h5 className="border border-black text-black dark:border-white dark:text-white rounded-md text-sm font-medium capitalize text-center px-3 py-2 mx-2.5">
                    {username}
                  </h5>
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
                            : "text-white bg-black hover:bg-gray-600 hover:text-white  dark:text-black dark:bg-white dark:hover:bg-gray-300 dark:hover:text-black"
                        } rounded-md px-3 py-2 text-sm font-medium text-center w-full border border-black`}
                      >
                        Sign up
                      </Link>
                    </MenuItem>
                  </>
                )}

                {!username && (
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
