import { Box, Button, Drawer, Icon, IconButton, Stack } from "@mui/material";
import { Menu, Dashboard, Home, NavigateBefore } from "@mui/icons-material";
import { useState } from "react";

export const SideDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => setOpen(!open);

  const DrawerList = (
    <Box sx={{ width: 150, padding: 2 }}>
      <Stack
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "flex-start" }}
      >
        <Button
          component="a"
          href="/dashboard"
          disableRipple
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            textTransform: "none",
            color: "black",
          }}
          startIcon={<Dashboard />}
        >
          Dashboard
        </Button>
        <Button
          component="a"
          href="/home"
          disableRipple
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            textTransform: "none",
            color: "black",
          }}
          startIcon={<Home />}
        >
          Home
        </Button>
        <Button
          component="a"
          href="/settings"
          disableRipple
          startIcon={<Icon>settings</Icon>}
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            textTransform: "none",
            color: "black",
          }}
        >
          Settings
        </Button>
      </Stack>
    </Box>
  );

  return (
    <>
      <IconButton onClick={handleDrawer}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={handleDrawer}>
        <Box
          width="100%"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton onClick={handleDrawer}>
            <NavigateBefore />
          </IconButton>
        </Box>
        {DrawerList}
      </Drawer>
    </>
  );
};
