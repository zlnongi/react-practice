import React, { useState } from "react";

function App() {
  const [pro, setPro] = useState(["주술회전", "흑집사", "포켓몬"]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [input, setInput] = useState("");
  return (
    <>
      <div>App </div>
      {pro.map((item, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setModal(true);
              setTitle(i);
            }}
          >
            {item}
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />

      <button
        onClick={() => {
          let copy = [...pro]; // 복사해줌
          copy.push(input);
          setPro(copy);
          setInput("");
        }}
      >
        애니 넣기
      </button>
      <p>{input}</p>

      {modal == true ? <Modal pro={pro} title={title} /> : null}
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          <h3>title {props.pro[props.title]}</h3>
          <p>상세설명</p>
        </div>
      </div>
    </>
  );
}

export default App;
