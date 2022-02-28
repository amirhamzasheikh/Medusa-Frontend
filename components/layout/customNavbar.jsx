import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { quantity, sum } from "../../utils/helper-functions";
import DisplayContext from "../../context/display-context";
import StoreContext from "../../context/store-context";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Container from "@mui/material/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Facebook, Twitter } from "@mui/icons-material";

const pages = ["Products", "Pricing", "Blog"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 34,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "9px 4px",
  },
}));

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

export default function CustomNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { updateCartViewDisplay } = useContext(DisplayContext);
  const { cart } = useContext(StoreContext);
  const [isCheckout, setIsCheckout] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/checkout" || router.pathname === "/payment") {
      setIsCheckout(true);
    } else {
      setIsCheckout(false);
    }
  }, [router.pathname]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Box display="flex" justifyContent="space-between">
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <Button color="inherit">Home</Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit">About MDB</Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit">Free download</Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit">Free tutorials</Button>
        </MenuItem>
        <Box display="flex">
          <MenuItem>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Facebook />
            </IconButton>
            <p>Facebook</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <Twitter />
            </IconButton>
            <p>Twitter</p>
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static" style={{ background: "white", color: "grey" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-around" }}>
          <Link href="/">
            <a style={{ width: "125px" }}>
              <Box
                style={{
                  color: "#2196f3",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                <span>MDB</span>
              </Box>
            </a>
          </Link>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About MDB</Button>
            <Button color="inherit">Free download</Button>
            <Button color="inherit">Free tutorials</Button>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {!isCheckout ? (
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={() => updateCartViewDisplay()}
              >
                <Box
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "0px 5px",
                    borderRadius: "4px",
                    fontSize: "17px",
                    marginRight: "5px",
                  }}
                >
                  <span>
                    {cart.items.length > 0
                      ? cart.items.map(quantity).reduce(sum)
                      : 0}
                  </span>
                </Box>
                <ShoppingCartIcon />{" "}
              </IconButton>
            ) : null}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Facebook />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Twitter />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
