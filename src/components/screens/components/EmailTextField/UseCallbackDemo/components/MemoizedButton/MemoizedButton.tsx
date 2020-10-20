import { Button } from "@material-ui/core";
import React, { useEffect, useRef } from "react";

interface MemoizedButtonProps {
  increment: (event: React.MouseEvent) => void;
}

const INITIAL_RENDER_TIMES = 0;
const MAX_LOOP_COUNT_FOR_HEAVY_FUNCTION = 2000000000;

const MemoizedButton: React.FC<MemoizedButtonProps> = React.memo(
  ({ increment }) => {
    const timesRendered = useRef(INITIAL_RENDER_TIMES);
    timesRendered.current++;

    const heavyFunction = () => {
      let count = 0;
      while (count <= MAX_LOOP_COUNT_FOR_HEAVY_FUNCTION) {
        count++;
      }
    };

    useEffect(() => {
      heavyFunction();
    });

    return (
      <Button onClick={increment} variant="contained" color="primary">
        Press Me, I've Rendered {timesRendered.current} times
      </Button>
    );
  }
);

export default MemoizedButton;
