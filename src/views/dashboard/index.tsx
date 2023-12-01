import { Outlet } from "react-router-dom";
import { memo, Suspense } from "react";
import SubHeader from "@/views/dashboard/SubHeader";
import { DashboardWrap } from "@/views/dashboard/style.ts";

const App = () => {
  return (
    <DashboardWrap>
      <SubHeader />

      {/* 覆盖第一层的Suspense的默认效果 */}
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </DashboardWrap>
  );
};
export default memo(App);
