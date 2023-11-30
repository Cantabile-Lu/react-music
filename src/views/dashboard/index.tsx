import { Outlet } from "react-router-dom";
import { memo, Suspense } from "react";
import SubHeader from "@/views/dashboard/SubHeader";

const App = () => {
  return (
    <div>
      <SubHeader />
      {/* 覆盖第一层的Suspense的默认效果 */}
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </div>
  );
};
export default memo(App);
