import Box from "@mui/material/Box"
import { Button, styled, TextField, Tooltip } from "@mui/material"
import ModeSelect from "../ModeSelect/ModeSelect"
import AppIcons from "@mui/icons-material/Apps"
import SvgIcon from "@mui/material/SvgIcon"
import TrelloLogo from "~/assets/icons/trello-icon.svg?react"
import Typography from "@mui/material/Typography"
import Workspaces from "~/components/AppBar/Menus/Workspaces"
import Recent from "./Menus/Recent"
import Starred from "./Menus/Starred"
import Templates from "./Menus/Templates"
import { HelpOutlineOutlined, NotificationsNoneOutlined } from "@mui/icons-material"
import Profile from "./Menus/Profile"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const BoxVerticalCenter = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}))

const colorPrimaryMain = { color: "primary.main" }

function AppBar() {
  return (
    <>
      <BoxVerticalCenter
        sx={{
          width: "100%",
          height: (theme) => theme.custom.appBarHeight,
          justifyContent: "space-between",
          gap: 2,
          overflowX: 'auto',
          px: 2
        }}
      >
        <BoxVerticalCenter sx={{ gap: 2 }}>
          {/** App icon on the left */}
          <AppIcons sx={colorPrimaryMain} />

          {/** Logo */}
          <BoxVerticalCenter sx={{ gap: 0.5 }}>
            <SvgIcon
              component={TrelloLogo}
              inheritViewBox
              fontSize="small"
              sx={colorPrimaryMain}
            />
            <Typography
              variant="span"
              sx={{
                ...colorPrimaryMain,
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Trello
            </Typography>
          </BoxVerticalCenter>

          {/** Menus */}
          <BoxVerticalCenter sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Workspaces />
              <Recent />
              <Starred />
              <Templates />
              <Button variant="outlined" startIcon={<LibraryAddIcon />}>Create</Button>
          </BoxVerticalCenter>
        </BoxVerticalCenter>
        <BoxVerticalCenter sx={{ gap: 1 }}>
          <TextField label="Search..." type="Search" size="small" sx={{ minWidth: 120 }} />
          <ModeSelect />
          <Tooltip title="Notification">
            <NotificationsNoneOutlined sx={{ color: 'primary.main' }} />
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineOutlined sx={{ color: 'primary.main' }} />
          </Tooltip>
          <Profile />
        </BoxVerticalCenter>
      </BoxVerticalCenter>
    </>
  )
}

export default AppBar
