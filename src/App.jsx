import { Routes, Route } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";
import { reducer } from "./util/reducer.js";
import "./App.scss";
import Home from "./pages/Home/Home.jsx";
import New from "./pages/New/New.jsx";
import Diary from "./pages/Diary/Diary.jsx";
import Edit from "./pages/Edit/Edit.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime(),
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime(),
    content: "mock3",
    emotionId: 3,
  },
];

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(0);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      id: idRef.current,
      date: new Date(date).getTime(),
      content,
      emotionId,
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
