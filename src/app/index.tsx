import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./styles/styles.scss";

import MainPage from "../pages/MainPages";
import InfoPages from "../pages/InfoPages/ui";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <AppTest /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/info/:id" element={<InfoPages />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
