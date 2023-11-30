import { useRoutes } from "react-router-dom";
import routes from "@/router";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const theme = {
  components: {
    Carousel: {
      dotWidth: 12
    }
  }
};
function App() {
  return (
    <>
      <div className={"app-main"}>
        <Header />
        <ConfigProvider theme={theme}>
          <Suspense fallback={<div>...loading</div>}>
            {useRoutes(routes)}
          </Suspense>
        </ConfigProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
