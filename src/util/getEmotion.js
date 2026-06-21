import emotion1 from "../assets/img/emotion1.png";
import emotion2 from "../assets/img/emotion2.png";
import emotion3 from "../assets/img/emotion3.png";
import emotion4 from "../assets/img/emotion4.png";
import emotion5 from "../assets/img/emotion5.png";

export const getEmotionById = (emotionId) => {
  const targetEmoitonId = String(emotionId);

  switch (targetEmoitonId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const emotionList = [
  { id: 1, name: "완전 좋음", img: getEmotionById(1) },
  { id: 2, name: "좋음", img: getEmotionById(2) },
  { id: 3, name: "그럭저럭", img: getEmotionById(3) },
  { id: 4, name: "나쁨", img: getEmotionById(4) },
  { id: 5, name: "끔찍함", img: getEmotionById(5) },
];
