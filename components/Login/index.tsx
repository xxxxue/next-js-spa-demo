import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
interface IProps {}
let Index: FC<IProps> = function (props) {
  let nav = useNavigate();
  return (
    <>
      <h1>Login\index.tsx</h1>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        click
      </button>
    </>
  );
};

export default memo(Index);
