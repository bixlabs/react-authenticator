import React, { useCallback, useState } from "react";
import MemoizedButton from "../MemoizedButton/MemoizedButton";

const OptimizedCounter: React.FC = () => {
  const [timesMemoizedBtnClicked, setTimesMemoizedBtnClicked] = useState(0);

  const incrementMemoizedButtonClicks = useCallback(
    (e: React.MouseEvent) => {
      setTimesMemoizedBtnClicked(
        (TimesMemoBtnClicked) => TimesMemoBtnClicked + 1
      );
    },
    [setTimesMemoizedBtnClicked]
  );

  return (
    <>
      <div>You've clicked the button {timesMemoizedBtnClicked} times</div>
      <MemoizedButton increment={incrementMemoizedButtonClicks} />
    </>
  );
};

export default OptimizedCounter;
