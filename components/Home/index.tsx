import { FC, memo } from "react";

interface IProps {}
let Index: FC<IProps> = function (props) {
  return (
    <>
      <h1>Home\index.tsx</h1>
    </>
  );
};

export default memo(Index);
