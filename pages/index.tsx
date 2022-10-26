import dynamic from "next/dynamic";
import { FC, memo, Suspense } from "react";
const MyRouter = dynamic(() => import("../components/MyRouter"), { ssr: false });

interface IProps {}
let Index: FC<IProps> = function (props) {
  return (
    <Suspense fallback="loading">
      <MyRouter />
    </Suspense>
  );
};

export default memo(Index);
