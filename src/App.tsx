import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllRoutes } from "./views/AllRouts";
import { CollectingRoute } from "./views/CollectingRoute";
import { WasteCollectorProfile } from "./views/WasteCollectorProfile";
import { DashBoard } from "./views/DashBoard";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="m-4">
      {" "}
      {/* Add margin here */}
      {/* <div className="bg-red-700">Hello </div>
       */}
      {/* <DashBoard></DashBoard>
      <WasteCollectorProfile></WasteCollectorProfile>
      <CollectingRoute></CollectingRoute>
      <AllRoutes></AllRoutes> */}
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route
              path="/waste-collector"
              element={<WasteCollectorProfile />}
            />
            <Route path="/collecting-route" element={<CollectingRoute />} />
            <Route path="/all-routes" element={<AllRoutes />} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
