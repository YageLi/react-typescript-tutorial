import React from "react";

interface Props {
  className: string;
}

// why do we need this line here to stop the error instead of fixing it?
/* @ts-expect-error */
export const Button: React.FC<Props> = (props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
