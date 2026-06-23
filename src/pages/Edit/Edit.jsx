import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../../App";
import useDiary from "../../hooks/useDiary";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Editor from "../../components/Editor/Editor";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onClickUpdate = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, content, emotionId } = data;
      console.log(data);
      onUpdate(id, date, content, emotionId);
      nav("/", { replace: true });
    }
  };

  const onClickDelete = () => {
    if (window.confirm("이 일기를 정말 삭제할까요? 다시 복구되지 않습니다!")) {
      nav("/", { replace: true });
      onDelete(id);
    }
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다.</div>;
  } else {
    return (
      <div>
        <Header
          title={"일기 수정하기"}
          leftChild={<Button text={"뒤로가기"} onClick={() => nav(-1)} />}
          rightChild={
            <Button
              text={"삭제하기"}
              type={"negative"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onClickUpdate} />
      </div>
    );
  }
};

export default Edit;
