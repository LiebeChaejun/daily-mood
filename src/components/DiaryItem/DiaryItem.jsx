import "./DiaryItem.scss";
import { useNavigate } from "react-router-dom";
import { getEmotionById } from "../../util/getEmotion";
import Button from "../Button/Button";

const DiaryItem = ({ id, emotionId, content, date }) => {
  const nav = useNavigate();

  const goDetail = () => {
    nav(`/diary/${id}`);
  };

  const goEdit = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={`img_section ${`img_section_${emotionId}`}`}
      >
        <img src={getEmotionById(emotionId)} alt={`emotion${emotionId}`} />
      </div>
      <div className="info_section">
        <div onClick={goDetail} className="date_wrapper">
          {new Date(date).toLocaleDateString()}
        </div>
        <div className="content_wrapper">{content.slice(0, 25)}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
