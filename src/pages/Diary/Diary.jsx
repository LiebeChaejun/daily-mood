import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../../hooks/useDiary";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { getFormattedDate } from "../../util/getFormattedDate";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const nav = useNavigate();

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;

    return (
      <div>
        <Header
          title={title}
          leftChild={<Button text={"뒤로 가기"} onClick={() => nav(-1)} />}
          rightChild={
            <Button text={"수정하기"} onClick={() => nav(`/edit/${id}`)} />
          }
        />
        <div>Diary 페이지입니다.</div>
      </div>
    );
  }
};

export default Diary;
