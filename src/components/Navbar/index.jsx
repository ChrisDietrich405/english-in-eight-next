"use client";
import Image from "next/image";
import Link from "next/link";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


import NounsSubmenuDropdown from "../NounsSubmenuDropdown";
import VerbsSubmenuDropdown from "../VerbsSubmenuDropdown";
import AdjectivesSubmenuDropdown from "../AdjectivesSubmenuDropdown";
import OtherTopicsSubmenuDropdown from "../OtherTopicsSubmenuDropdown";

const drawerWidth = 240;
const navItems = ["Home", "Nouns"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Image
        src="/images/logo.svg"
        width={50}
        height={50}
        alt="Picture of the author"
      />

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", my: "4" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "white" }}>
        <Toolbar style={{ display: "flex" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Image
            src="/images/logo.svg"
            width={50}
            height={50}
            alt="Picture of the logo"
          />
          <Box style={{ display: "flex", marginLeft: "auto" }}>
            <Button
              variant="contained"
              sx={{
                height: "20px",
                color: "#fff",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
                Home
              </Link>
            </Button>
            <Button>
              <NounsSubmenuDropdown
                sx={{ color: "#fff", marginRight: "20px" }}
              />
            </Button>
            <Button>
              <VerbsSubmenuDropdown sx={{ color: "#fff" }} />
            </Button>
            <Button>
              <AdjectivesSubmenuDropdown sx={{ color: "#fff" }} />
            </Button>
            <Button>
              <OtherTopicsSubmenuDropdown sx={{ color: "#fff" }} />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
