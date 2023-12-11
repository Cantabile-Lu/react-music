import { useRoutes } from "react-router-dom";
import routes from "@/router";
import { ConfigProvider } from "antd";
import { Suspense, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlayerTools from "@/views/player/PlayerTools";
import { useAppDispatch } from "@/store";
import { featchSongAction } from "@/store/modules/playerStore/player.ts";
const theme = {
  components: {
    Carousel: {
      dotWidth: 12
    }
  }
};
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(featchSongAction(346576));
  }, []);
  return (
    <>
      <div>
        <Header />
        <ConfigProvider theme={theme}>
          <Suspense fallback={<div>...loading</div>}>
            <div className="app-main">{useRoutes(routes)}</div>
          </Suspense>
        </ConfigProvider>
        <Footer />

        <PlayerTools />
      </div>
    </>
  );
}

export default App;
