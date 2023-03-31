import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "./use-fetch";

describe("Second case - Fetch", () => {
  test("The hook should return two states (data and error) and a function", () => {
    const { result } = renderHook(() => useFetch());
  });
  test("The funciton should fetch data and refresh the data value", () => {
    const { result } = renderHook(() => useFetch());
  });
  test("The function should refresh the error if something goes wrong", () => {
    const { result } = renderHook(() => useFetch());
  });
});
