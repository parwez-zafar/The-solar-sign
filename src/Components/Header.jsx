import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { NavLink } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Product", path: "/product" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [showNavLinks, setShowNavLinks] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMobileNavLinkOpen = Boolean(showNavLinks);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileNavLinksClose = () => {
    setShowNavLinks(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileNavLinkOpen = (event) => {
    setShowNavLinks(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
    </Menu>
  );

  const renderMobileNavLink = (
    <Menu
      anchorEl={showNavLinks}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMobileNavLinkOpen}
      onClose={handleMobileNavLinksClose}
    >
      {pages.map((page) => (
        <MenuItem key={page.name}>
          <NavLink
            to={page.path}
            style={{
              textDecoration: "none",
              fontFamily: "Space Grotesk",
              color: "#141718",
            }}
          >
            <Typography noWrap>{page.name}</Typography>
          </NavLink>
        </MenuItem>
      ))}
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large">
          <AccountCircle />
        </IconButton>
        <Typography>Sign Up/Sign In</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton size="large">
          <Badge>
            <LocalMallIcon />
          </Badge>
        </IconButton>
        <Typography>Cart</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#fff" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleMobileNavLinkOpen}
              sx={{ color: "#141718" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            href="/"
            sx={{
              color: "#141718",
              fontFamily: "Poppins",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            3legant.
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography sx={{ display: "flex", flexGrow: 1 }}>
              {pages.map((page) => (
                <NavLink
                  key={page.name}
                  to={page.path}
                  style={{
                    textDecoration: "none",
                    fontFamily: "Space Grotesk",
                    color: "#141718",
                  }}
                >
                  <Typography noWrap sx={{ ml: 5 }}>
                    {page.name}
                  </Typography>
                </NavLink>
              ))}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" sx={{ color: "#141718" }}>
              <Badge>
                <SearchIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              onClick={handleProfileMenuOpen}
              sx={{ color: "#141718" }}
            >
              <AccountCircle />
            </IconButton>
            <IconButton size="large" sx={{ color: "#141718" }}>
              <Badge>
                <LocalMallIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleMobileMenuOpen}
              sx={{ color: "#141718" }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderMobileNavLink}
    </Box>
  );
};

export default Header;
