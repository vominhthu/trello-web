import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import PropTypes from "prop-types"
import { mapOrder } from "~/utils/sorts";

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board.columns, board.columnOrderIds, '_id')
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
      <ListColumns columns={orderedColumns} />
    </Box>
  );
}
BoardContent.propTypes = {
  board: PropTypes.object
}
export default BoardContent;
