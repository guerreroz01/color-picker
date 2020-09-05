import React, { useState } from "react";
import useStyles from "./Grid.styles";
import { v4 as uuidV4 } from "uuid";

const offset = {
  on: false,
  color: "white",
};

const initialCells = Array.from({ length: 80 }, () => offset);

function Grid({ currentColor }) {
  const classes = useStyles({ currentColor });
  const [cells, setCells] = useState(initialCells);

  const setCellCollor = (i, defaultState) => (e) => {
    e.preventDefault();
    setCells(
      cells.map((cell, cellIndex) => {
        if (cellIndex === i) {
          if (defaultState) return defaultState;
          return {
            on: true,
            color: currentColor,
          };
        }
        return cell;
      })
    );
  };

  return (
    <div className={classes.grid}>
      {cells.map((cell, i) => (
        <div
          key={uuidV4()}
          style={{ background: cell.on ? cell.color : "#fff" }}
          className={classes.cell}
          onClick={setCellCollor(i)}
          onContextMenu={setCellCollor(i, offset)}
        ></div>
      ))}
    </div>
  );
}

export default Grid;
