import { FC, memo, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

interface IProps {}
let Index: FC<IProps> = function (props) {
  return (
    <>
      <h1>Layout\index.tsx</h1>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/log">log</Link>
        </li>
      </ul>
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </>
  );
};

export default memo(Index);
