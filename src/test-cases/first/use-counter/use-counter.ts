import { useState } from "react";

export const useCounter = () => {
  const counter = useState<number>();
  const increment = () => {};
  const decrement = () => {};

  return { counter, increment, decrement };
};
