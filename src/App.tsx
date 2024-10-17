import "./App.css";
import { AllRoutes } from "./views/AllRouts";
import { CollectingRoute } from "./views/CollectingRoute";
import { WasteCollectorDashboard } from "./views/WasteCollectorDashboard";
import { DashBoard } from "./views/DashBoard";

function App() {
  return (
    <div className="m-4">
      {" "}
      {/* Add margin here */}
      {/* <div className="bg-red-700">Hello </div>
       */}
      <DashBoard></DashBoard>
      <WasteCollectorDashboard></WasteCollectorDashboard>
      <CollectingRoute></CollectingRoute>
      <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
