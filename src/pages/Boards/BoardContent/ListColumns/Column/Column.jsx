import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import Cloud from "@mui/icons-material/Cloud";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ContentCopy, ContentPaste } from "@mui/icons-material";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Button } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ListCards from "./ListCards/ListCard";
import PropTypes from "prop-types"
import { mapOrder } from "~/utils/sorts";


function Column({ column }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const orderedCards = mapOrder(column?.cards, column.cardOrderIds, '_id')

  return (
    <>
      <Box
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          borderRadius: "6px",
          ml: 2,
          height: "fit-content",
        }}
      >
        {/** Board column header */}
        <Box
          sx={{
            height: (theme) => (theme.custom.columnHeaderHeight),
            padding: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            variant="h6"
          >
            {column.title}
          </Typography>
          <Box>
            <Tooltip title="More options">
              <ExpandMoreOutlined
                aria-controls={open ? "menu-workspaces" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  color: "text.primary",
                  cursor: "pointer",
                }}
              />
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "menu-workspaces-button",
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddCardIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <DeleteForeverIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/** Board list cards */}
        <ListCards cards={orderedCards} />
        {/** Board column footer */}
        <Box
          sx={{
            height: (theme) => theme.custom.columnFooterHeight,
            padding: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button startIcon={<AddCardIcon />}>Add new card</Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{ cursor: "pointer" }} />
          </Tooltip>
        </Box>
      </Box>
    </>
  );
}
Column.propTypes = {
  column: PropTypes.object,
}

export default Column;
