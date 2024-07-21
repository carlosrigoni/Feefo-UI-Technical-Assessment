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

const uploads = 0;
const linesAdded = 0;
const linesSaved = 0;

function App() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col sm:flex-row items-center gap-12">
        <h1 className="text-2xl text-gray-800">Account Overview</h1>
        <SupportCard />
      </div>
      <Dashboard
        uploads={uploads}
        linesAdded={linesAdded}
        linesSaved={linesSaved}
      />
    </div>
  );
}

export default App;
