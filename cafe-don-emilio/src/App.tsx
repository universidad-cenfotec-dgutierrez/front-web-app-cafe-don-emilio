import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "./app/components";

import { PagesUrlsEnum } from "./app/common/enums";

import { HomePage } from "./app/pages";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={PagesUrlsEnum.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
