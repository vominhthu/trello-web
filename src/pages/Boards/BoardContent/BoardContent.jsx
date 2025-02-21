import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        display: "flex",
        height: (theme) => theme.custom.boardContentHeight,
        p: '10px 0'
      }}
    >
      <ListColumns />
    </Box>
  );
}

export default BoardContent;
