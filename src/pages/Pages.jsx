import { HomePage, DesPage, CrewPage, TechPage } from "./index";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DesPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
