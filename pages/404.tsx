import { useRouter } from "next/router";
import { FC, memo, useEffect } from "react";
interface IProps {}
let Index: FC<IProps> = function () {
  let router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);

  return <></>;
};

export default memo(Index);
