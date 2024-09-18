import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const listCnt = 10;
  const pagerCnt = 5;
  const [data, setData] = useState([]);
  const [totalpage, setTotalpage] = useState(1);
  const [currentpage, setCurrentpage] = useState(1);

  const api = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data); // 받아온 array data를 콘솔에 보여줌
      setData(res.data);
      console.log("total data: " + res.data.length); // 총 데이터 개수
      console.log("total page: " + res.data.length / listCnt); // 총 페이지 수

      setTotalpage(res.data.length / listCnt);
    });
  };

  useEffect(() => {
    api();
  }, []); // 빈 배열을 전달하여 첫 렌더링 때만 실행되도록 설정

  const pageViewNumber = () => {
    const pageNumbers = [];
    const startPage = Math.floor(((currentpage - 1) / pagerCnt) * pagerCnt + 1);
    const endPage = Math.min(startPage + pagerCnt - 1, totalpage);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          onClick={() => {
            setCurrentpage(i);
          }}
          style={{
            cursor: "pointer",
            margin: "0 5px",
            color: currentpage === i ? "red" : "black",
          }}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  const currentPageData = () => {
    const startIndex = (currentpage - 1) * listCnt;
    const endIndex = startIndex + listCnt;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <div>totalpage: {totalpage}</div>
      {currentPageData().map((item, i) => {
        return (
          <div key={i}>
            {item.id}. {item.title}
          </div>
        );
      })}

      <div style={{ fontSize: "2em" }}>{pageViewNumber()}</div>
      <div>
        {currentpage > 1 && (
          <button
            onClick={() => {
              setCurrentpage(currentpage - 1);
            }}
          >
            이전
          </button>
        )}
        {currentpage < totalpage && (
          <button
            onClick={() => {
              setCurrentpage(currentpage + 1);
            }}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
