import React, { useState } from "react";
import "./index.css";

function App() {
  let text = "hello";
  const [box, setBox] = useState("yeo");
  const [num, setNum] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState("안녕하세요");
  let [shop, setShop] = useState(["사과", "복숭아", "메론"]);

  return (
    <>
      <div
        className="container"
        style={{ background: "orange", fontSize: "20px" }}
      >
        test
        <h2>{text}</h2>
        <p>{box}</p>
        {num}
      </div>
      <header>header</header>

      <button
        onClick={() => {
          // alert("test")
          setBox("changeYeo");
        }}
      >
        값변화
      </button>

      <button
        onClick={() => {
          setNum(10);
        }}
      >
        num
      </button>

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달
      </button>
      {modal == true ? <Modal title={title} image="test1" /> : null}

      {shop.map((item, i) => {
        return (
          <>
            <div key={i}>{item}</div>
          </>
        );
      })}
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>공지사항{props.title}</h3>
        <p>상세내용{props.image}</p>
      </div>
    </>
  );
}

export default App;
