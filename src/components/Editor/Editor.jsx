import "./Editor.scss";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../../util/getEmotion";
import { getFormattedDate } from "../../util/getFormattedDate";
import Button from "../Button/Button";
import EmotionItem from "../EmotionItem/EmotionItem";

const Editor = ({ initData, onSubmit }) => {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });
  const nav = useNavigate();

  const handleChangeDate = (e) => {
    setState((prev) => ({
      ...prev,
      date: e.target.value,
    }));
  };

  const handleChangeEmotion = useCallback((emotionId) => {
    setState((prev) => ({
      ...prev,
      emotionId: emotionId,
    }));
  }, []);

  const handleChangeContent = (e) => {
    setState((prev) => ({
      ...prev,
      content: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        {/* 감정 */}
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.id}
              {...item}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === item.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          ></textarea>
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button
          text={"취소하기"}
          onClick={() => {
            nav(-1);
          }}
        />
        <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
