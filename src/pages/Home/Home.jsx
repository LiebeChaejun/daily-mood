import { useState, useContext } from "react";
import { DiaryStateContext } from "../../App";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  const onIncreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseDate} />}
        rightChild={<Button text={">"} onClick={onIncreaseDate} />}
      />
    </div>
  );
};

export default Home;
