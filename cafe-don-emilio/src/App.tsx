import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "./app/components";

import { PagesUrlsEnum } from "./app/common/enums";

import { HomePage, OurHistoryPage, Shop } from "./app/pages";

import { ReservationPage } from "./app/pages/reservation";
import CartPage from "./app/pages/cart-page/CartPage"; 
import { CartProvider } from './app/components/cart/CartContext'; 

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <Routes>
          <Route path={PagesUrlsEnum.HOME} element={<HomePage />} />
          <Route path={PagesUrlsEnum.OUR_HISTORY} element={<OurHistoryPage />} />
          <Route path={PagesUrlsEnum.RESERVATION} element={<ReservationPage />} />
          <Route path={PagesUrlsEnum.SHOP} element={<Shop />} />
          <Route path={PagesUrlsEnum.CART} element={<CartPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
