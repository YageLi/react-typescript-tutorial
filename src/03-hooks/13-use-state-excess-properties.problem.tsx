import { useState } from "react";

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}
type GetTagState = () => TagState;


// this one is not throwing typescript error is because the type check
// is more loose, and it is the check the function type 
const getTagState: GetTagState = () =>({
  tagSelected:1,
  tags:[],
  foo:124
})

// in this one -- adding TagState will check the return value type. 
const getTagState2: GetTagState = (): TagState =>({
  tagSelected:1,
  tags:[],
})

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState((currentState) : TagState => ({
                ...currentState,
                tagSelected: tag.id,
              }));
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState((currentState): TagState => ({
            ...currentState,
            tags: [
              ...currentState.tags,
              {
                id: new Date().getTime(),
                value: "New",
              },
            ],
          }));
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
