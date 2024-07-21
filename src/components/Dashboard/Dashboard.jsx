export function Dashboard() {
  const uploads = 0;
  const LinesAdded = 0;
  const linesSaved = 0;

  return (
    <div className="mt-8 bg-white w-full max-w-lg rounded-sm m-4 pt-3 shadow-sm">
      <div className="px-3">
        <h2 className="font-semibold">Sales</h2>
      </div>
      <p className="my-4 text-sm text-[#4b4849] px-3">
        You had <strong>{uploads} uploads</strong> and{" "}
        <strong>{LinesAdded}</strong> lines added.
      </p>

      <div className="grid grid-cols-2 border-t-[1px]">
        <div className="border-r-2 p-4">
          <p className="text-[#22ab55] font-bold text-2xl">{uploads}%</p>
          <p className="text-[#9e9c9c] text-sm font-semibold">UPLOAD SUCCESS</p>
        </div>

        <div className="p-4">
          <p className="text-[#22ab55] font-bold text-2xl">{linesSaved}%</p>
          <p className="text-[#9e9c9c] text-sm font-semibold">LINES SAVED</p>
        </div>
      </div>
    </div>
  );
}
