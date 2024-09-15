import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "./app/components";

import { PagesUrlsEnum } from "./app/common/enums";

import {HomePage, OurHistoryPage} from "./app/pages";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={PagesUrlsEnum.HOME} element={<HomePage />} />
        <Route path={PagesUrlsEnum.OUR_HISTORY} element={<OurHistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
