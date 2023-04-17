import React from "react";
import Header from "./components/Header/Header";
import { clx } from "./utils/clx";

const App = () => {
  const classes = clx('w-screen h-auto flex flex-col bg-primary');
  return (
    <div className={classes}>
      <Header />
      {/* <main>hellor</main> */}
    </div>
  );
};

export default App;
