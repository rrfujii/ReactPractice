import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundcolor: "red"
};

//memo ＝propsが変わらない限りレンダリングしないよ
//基本的に子には、親の影響を受けないようにmemoで囲ってあげる
export const ChildArea = memo((props) => {
  // console.log("レンダリングされた");
  const { open } = props;
  // const data = [...Array(2000).keys()];
  // console.log(data);
  // data.forEach(() => {
  //   console.log("...");
  // });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポネント</p>
        </div>
      ) : null}
    </>
  );
});
