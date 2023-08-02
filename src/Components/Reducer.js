import React, { useReducer, useContext, useRef, createContext } from "react";

const StateContext = createContext(null);
const DispatchContext = createContext(null);
const NextId = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const initialTodoList = [
  {
    id: 1,
    text: "리액트 공부",
    done: true,
  },
  {
    id: 2,
    text: "게시판 만들기",
    done: true,
  },
  {
    id: 3,
    text: "스프링 공부",
    done: true,
  },
  {
    id: 4,
    text: "아키텍처 공부",
    done: true,
  },
];

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialTodoList);
  const nextId = useRef(5);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <NextId.Provider value={nextId}>
          {children}
        </NextId.Provider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function usetodoState() {
  return useContext(StateContext); // DispatchContext가 아닌 StateContext를 사용
}

export function useDispatch() {
  return useContext(DispatchContext);
}

export function useNextId() {
  return useContext(NextId); // DispatchContext가 아닌 NextId를 사용
}


export default reducer;