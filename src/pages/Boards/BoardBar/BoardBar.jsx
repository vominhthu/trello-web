import Box from '@mui/material/Box'
import { Button, styled, Tooltip } from "@mui/material"
import Chip from "@mui/material/Chip"
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import PersonAddIcon from '@mui/icons-material/PersonAdd'


function BoardBar() {
  const BoxVerticalCenter = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
  }))

  return (
    <BoxVerticalCenter
      sx={{
        width: "100%",
        height: (theme) => theme.custom.boardBarHeight,
        justifyContent: "space-between",
        gap: 1,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
        px: 2
      }}
    >
      <BoxVerticalCenter sx={{ gap: 2 }}>
        <Chip
          sx={{ 
            color: 'primary.main', 
            bgcolor: 'white', 
            border: 'none', 
            paddingX: '5px', 
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
          }}
          icon={<DashboardIcon />} 
          label="Dashboard Icon" 
          onClick={() => { }} 
        />
        <Chip
          sx={{ 
            color: 'primary.main', 
            bgcolor: 'white', 
            border: 'none', 
            paddingX: '5px', 
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
          }}
          icon={<VpnLockIcon />} 
          label="Private/Public Workspace" 
          onClick={() => { }} 
        />
        <Chip
          sx={{ 
            color: 'primary.main', 
            bgcolor: 'white', 
            border: 'none', 
            paddingX: '5px', 
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
          }}
          icon={<AddToDriveIcon />} 
          label="Add to Drive" 
          onClick={() => { }} 
        />
        <Chip
          sx={{ 
            color: 'primary.main', 
            bgcolor: 'white', 
            border: 'none', 
            paddingX: '5px', 
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
          }}
          icon={<BoltIcon />} 
          label="Automation" 
          onClick={() => { }} 
        />
        <Chip
          sx={{ 
            color: 'primary.main', 
            bgcolor: 'white', 
            border: 'none', 
            paddingX: '5px', 
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
          }}
          icon={<FilterListIcon />} 
          label="Filters" 
          onClick={() => { }} 
        />

      </BoxVerticalCenter>

      <BoxVerticalCenter sx={{ gap: 2 }}>
        <Button startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup max={7} total={24}>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </BoxVerticalCenter>
    </BoxVerticalCenter>
  )
}

export default BoardBar
