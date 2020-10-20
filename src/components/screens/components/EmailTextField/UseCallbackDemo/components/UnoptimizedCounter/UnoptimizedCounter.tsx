import React, { useState } from "react";
import MemoizedButton from "../MemoizedButton/MemoizedButton";

const UnoptimizedCounter: React.FC = () => {
  const [timesMemoizedButtonClicked, setTimesMemoizedButtonClicked] = useState(
    0
  );

  const incrementMemoizedButtonClicks = (e: React.MouseEvent) => {
    setTimesMemoizedButtonClicked(
      (TimesMemoBtnClicked) => TimesMemoBtnClicked + 1
    );
  };

  return (
    <>
      <div>You've clicked the button {timesMemoizedButtonClicked} times</div>
      <MemoizedButton increment={incrementMemoizedButtonClicks} />
    </>
  );
};

export default UnoptimizedCounter;
