import { useState, useCallback } from "react";
import "./styles.css";

import { ChildArea } from "./ChiledArea";

export default function App() {
  const [txt, settxt] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeTxt = (e) => {
    settxt(e.target.value);
  };
  const onCliclOpen = () => {
    setOpen(!open);
  };
  const onCliclClose = useCallback(() => setOpen(false), [open]);
  return (
    <div classname="App">
      <input value={txt} onChange={onChangeTxt}></input>
      <button onClick={onCliclOpen}>表示</button>
      <ChildArea open={open} />
      <button onClick={onCliclClose}>閉じる</button>
    </div>
  );
}
