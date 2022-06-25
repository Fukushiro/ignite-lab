import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import Event from "./pages/Event";
import Subscribe from "./pages/Subscribe";
// import { Container } from './styles';

const RouterManager: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
};

export default RouterManager;
