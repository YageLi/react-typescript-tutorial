export const Component = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      // hover over aria-posinset to see the error message.
      aria-posinset={1}
      // How do I figure out what type onChange expects?
      onChange={()=>console.log("clicked")}

      // How do I get autocomplete with JSX?
      // control + space
    />
  );
};

// type Example = React.FormEventHandler<HTMLDivElement> | undefined