import { Dashboard } from "./components/Dashboard/Dashboard";
import { SupportCard } from "./components/SupportCard/SupportCard";

function App() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center gap-12">
        <h1 className="text-2xl text-[#484446]">Account Overview</h1>
        <SupportCard />
      </div>

      <Dashboard />
    </div>
  );
}

export default App;
