import { useRef } from "react";

export const Component = () => {


  // passing null here means you want React to manage this ref for you. 
  // to fix it, we can just delete the null
  const ref = useRef<string>(null);

  // Why is this not allowed?
  ref.current = "Hello";

  return null;
};
