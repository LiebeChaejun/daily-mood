import { useContext } from "react";
import { DiaryDispatchContext } from "../../App";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Editor from "../../components/Editor/Editor";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  usePageTitle("새 일기 쓰기");

  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
