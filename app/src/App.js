import React from "react";

// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";

import Effects from "./components/Effects.jsx";

function App() {
  let [value, setValue] = React.useState("Test text");

  return (
    <div className="wrapper">
      {/* <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      /> */}

      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      <Effects post={{ id: 1, title: "javascript", text: "hello" }} />
    </div>
  );
}

export default App;
