import Box from "@mui/material/Box";
import CardComponent from "./Card/Card";
import PropTypes from "prop-types"

function ListCards({ cards }) {
  return (
    <>
      {/** Board column list card */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: "0 5px",
          m: "0 5px",
          maxHeight: (theme) =>
            `calc(${theme.custom.boardContentHeight} - ${theme.spacing(
              5
            )} - ${theme.custom.columnHeaderHeight} - ${theme.custom.columnFooterHeight})`,
          overflowX: "hidden",
          overflowY: "auto",
          "&::-webkit-scrollbar-thumb": { backgroundColor: "#ced0da" },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bfc2cf",
          },
        }}
      >
        {
          cards?.map(card => <CardComponent key={card._id} card={card} />)
        }
      </Box>
    </>
  );
}
ListCards.propTypes = {
  cards: PropTypes.array,
}
export default ListCards;
