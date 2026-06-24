import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../../App";
import { getMonthlyDate } from "../../util/getFormattedDate";
import usePageTitle from "../../hooks/usePageTitle";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import DiaryList from "../../components/DiaryList/DiaryList";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;
  usePageTitle("감정 일기장");

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthlyDate(pivotDate);
      setFilteredData(
        data.filter(
          (item) => beginTimeStamp <= item.date && item.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

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
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
