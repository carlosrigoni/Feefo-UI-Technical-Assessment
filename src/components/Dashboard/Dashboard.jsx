import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";

export function Dashboard({ uploads, linesAdded, linesSaved }) {
  return (
    <div className="mt-8 bg-white w-full max-w-xl rounded-md m-4 pt-4 shadow-sm">
      <div className="px-4 flex items-center justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon="upload" className="mr-2" color="#3eb0eb" />
          <h2 className="font-semibold">Sales</h2>
        </div>
        <FontAwesomeIcon
          icon="info-circle"
          className="mr-1"
          color="#bfbbbb"
          data-tooltip-id="infoTooltip"
        />
        <Tooltip id="infoTooltip" place="top" type="dark" effect="solid">
          Additional sales information
        </Tooltip>
      </div>
      <p className="my-4 text-sm text-gray-500 px-4">
        You had <strong>{uploads} uploads</strong> and <strong>{linesAdded}</strong> lines added.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-t">
        <div className="sm:border-r-2 p-4">
          <p className="text-green-600 font-bold text-4xl">{uploads}%</p>
          <p className="text-gray-400 text-sm font-semibold">UPLOAD SUCCESS</p>
        </div>
        <div className="p-4 border-t sm:border-0">
          <p className="text-green-600 font-bold text-4xl">{linesSaved}%</p>
          <p className="text-gray-400 text-sm font-semibold">LINES SAVED</p>
        </div>
      </div>
    </div>
  );
}
