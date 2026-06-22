import { useParams } from "react-router-dom";
import useDiary from "../../hooks/useDiary";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);

  return <div>Diary 페이지 입니다.</div>;
};

export default Diary;
