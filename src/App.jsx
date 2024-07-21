import { SupportCard } from "./components/SupportCard/SupportCard";

function App() {
  return (
    <div className="flex justify-center p-4">
      <div className="flex items-center gap-12">
        <h1 className="text-2xl text-[#484446]">Account overview</h1>
        <SupportCard />
      </div>
    </div>
  );
}

export default App;
