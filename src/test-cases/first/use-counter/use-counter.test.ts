import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "./use-counter";

describe("First case - counter", () => {
  test("The hook should return a zero number, and two funcitons to increment and decrement", () => {
    const { result } = renderHook(() => useCounter());
  });
  test("The functions should work as expected", () => {
    const { result } = renderHook(() => useCounter());
  });
  test("Once the number is 10 the counter should restart if the increment function is called", () => {
    const { result } = renderHook(() => useCounter());
  });
  test("The counter should not show negative numbers", () => {
    const { result } = renderHook(() => useCounter());
  });
});
