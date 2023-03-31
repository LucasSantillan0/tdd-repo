import { useState } from "react";

interface Reponse {}

export const useFetch = () => {
  const data = useState<Reponse>();
  const error = useState<string>();
  const fetch = () => {};

  return { data, fetch, error };
};
