import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "./app/components";

import { PagesUrlsEnum } from "./app/common/enums";

import {HomePage, OurHistoryPage, Shop} from "./app/pages";

import { ReservationPage } from "./app/pages/reservation";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={PagesUrlsEnum.HOME} element={<HomePage />} />
        <Route path={PagesUrlsEnum.OUR_HISTORY} element={<OurHistoryPage />} />
        <Route path={PagesUrlsEnum.RESERVATION} element={<ReservationPage />} />
        <Route path={PagesUrlsEnum.SHOP} element={<Shop/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
