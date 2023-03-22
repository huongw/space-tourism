import { HomePage, DesPage, CrewPage, TechPage } from "./index";
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destination" element={<DesPage />} />
      <Route path="/crew" element={<CrewPage />} />
      <Route path="/technology" element={<TechPage />} />
    </Routes>
  );
};

export default Pages;
