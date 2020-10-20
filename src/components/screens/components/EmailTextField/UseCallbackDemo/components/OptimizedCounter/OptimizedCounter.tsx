import React, { useCallback, useState } from "react";
import MemoizedButton from "../MemoizedButton/MemoizedButton";
import { INITIAL_BUTTON_CLICKED_TIMES } from "../constants";

const OptimizedCounter: React.FC = () => {
  const [timesMemoizedButtonClicked, setTimesMemoizedButtonClicked] = useState(
    INITIAL_BUTTON_CLICKED_TIMES
  );

  const incrementMemoizedButtonClicks = useCallback(
    (e: React.MouseEvent) => {
      setTimesMemoizedButtonClicked((actualValue) => actualValue + 1);
    },
    [setTimesMemoizedButtonClicked]
  );

  return (
    <>
      <div>You've clicked the button {timesMemoizedButtonClicked} times</div>
      <MemoizedButton increment={incrementMemoizedButtonClicks} />
    </>
  );
};

export default OptimizedCounter;
