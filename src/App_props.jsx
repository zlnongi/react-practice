import React, { useState } from "react";

function App() {
  const [data, setData] = useState("test");

  function dataChange() {
    setData("testChange");
  }

  function dataChange1() {
    setData("testChange1");
  }

  return (
    <div style={{ background: "pink", padding: "10px" }}>
      App
      <SubCom1 data={data} dataMode1={dataChange} dataMode2={dataChange1} />
    </div>
  );
}

function SubCom1(props) {
  return (
    <>
      <div style={{ background: "skyblue", padding: "10px" }}>
        <h3>subcom1</h3>
        <p>{props.data}</p>
        <button onClick={props.dataMode1}>변경1</button>
        <SubCom2 sData={props.data} sdataMode2={props.dataMode2} />
      </div>
    </>
  );
}

function SubCom2(props) {
  return (
    <>
      <div style={{ background: "green" }}>
        <h3>subcom2</h3>
        <p>{props.sData}</p>
        <button onClick={props.sdataMode2}>변경2</button>
      </div>
    </>
  );
}

export default App;
