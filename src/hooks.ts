import { useReducer } from "react";

export const useToggle = (initial: boolean) =>
  useReducer((current) => !current, initial);
