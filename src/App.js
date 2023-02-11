import "./App.css";
import Navigation from "./components/Navigation/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import MachinesOverview from "./components/Navigation/Navigation/MachinesOverview";
import MediaOverview from "./components/Navigation/Navigation/MediaOverview";
import AddMachine from "./components/Navigation/Navigation/AddMachine";
import PageLayout from "./components/Navigation/Navigation/PageLayout";
import AddMedia from "./components/Navigation/Navigation/AddMedia";
import AddFlavor from "./components/Navigation/Navigation/AddFlavor";
import FlavorOverview from "./components/Navigation/Navigation/FlavorOverview";
import AuthenticationMethods from "./components/Navigation/Navigation/AuthenticationMethods";
import AddAuthentication from "./components/Navigation/Navigation/AddAuthentication";
import MachineUpdate from "./components/Navigation/Navigation/MachineUpdate";
import MachineDelete from "./components/Navigation/Navigation/MachineDelete";
import FlavorUpdate from "./components/Navigation/Navigation/FlavorUpdate";
import LocationOverview from "./components/Navigation/Navigation/LocationOverview";
import AddLocation from "./components/Navigation/Navigation/AddLocation";
import FlavorDelete from "./components/Navigation/Navigation/FlavorDelete";

//import FlavorOverview from "./components/Navigation/Navigation/FlavorOverview";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="machines-overview" element={<MachinesOverview />} />
      </Routes>
      <Routes>
        <Route path="location-overview" element={<LocationOverview />} />
      </Routes>
      <Routes>
        <Route path="add-location" element={<AddLocation />} />
      </Routes>
      <Routes>
        <Route path="flavor-overview" element={<FlavorOverview />} />
      </Routes>
      <Routes>
        <Route path="delete-flavor" element={<FlavorDelete />} />
      </Routes>
      <Routes>
        <Route path="add-machines" element={<AddMachine />} />
      </Routes>
      <Routes>
        <Route path="delete-machines" element={<MachineDelete />} />
      </Routes>
      <Routes>
        <Route path="media-overview" element={<MediaOverview />} />
      </Routes>
      <Routes>
        <Route path="machine-update" element={<MachineUpdate />} />
      </Routes>
      <Routes>
        <Route path="add-media" element={<AddMedia />} />
      </Routes>
      <Routes>
        <Route path="add-flavor" element={<AddFlavor />} />
      </Routes><Routes>
        <Route path="update-flavor" element={<FlavorUpdate />} />
      </Routes>
      <Routes>
        <Route path="page-layout" element={<PageLayout />} />
      </Routes>
      <Routes>
        <Route
          path="authentication-methods"
          element={<AuthenticationMethods />}
        />
      </Routes>
      <Routes>
        <Route path="add-authentication" element={<AddAuthentication />} />
      </Routes>
    </div>
  );
}

export default App;
