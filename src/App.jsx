import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faUpload,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { SupportCard } from "./components/SupportCard/SupportCard";

library.add(faEnvelope, faUpload, faInfoCircle);

function App() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col sm:flex-row items-center gap-12">
        <h1 className="text-2xl text-gray-800">Account Overview</h1>
        <SupportCard />
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
