import { createUseStyles } from "react-jss";

export default createUseStyles({
  grid: {
    display: "grid",
    gridTemplateRows: "repeat(8, 1fr)",
    gridTemplateColumns: "repeat(10, 1fr)",
    width: "50vw",
    height: "50vh",
    border: "2px solid black",
  },
  cell: {
    cursor: "pointer",
    border: "1px solid black",
    transition: "all 200ms linear",
    "&:hover": {
      transform: "scale(1.1)",
      background: (props) => props.currentColor,
    },
  },
});
