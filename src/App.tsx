import { Routes, Route } from "react-router-dom";
import { useReducer, useRef } from "react";
import { reducer } from "./util/reducer.js";
import "./App.scss";
import Home from "./pages/Home/Home";
import New from "./pages/New/New";
import Diary from "./pages/Diary/Diary";
import Edit from "./pages/Edit/Edit";
import NotFound from "./pages/NotFound/NotFound";

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
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
