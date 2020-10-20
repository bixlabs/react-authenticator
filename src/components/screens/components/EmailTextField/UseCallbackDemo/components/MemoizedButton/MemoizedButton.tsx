import { Button } from "@material-ui/core";
import React, { useEffect, useRef } from "react";

interface MemoizedButtonProps {
  increment: (event: React.MouseEvent) => void;
}

const MemoizedButton: React.FC<MemoizedButtonProps> = React.memo(
  ({ increment }) => {
    const timesRendered = useRef(0);
    timesRendered.current++;

    const heavyFunction = () => {
      let count = 0;
      while (count < 2000000000) {
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
