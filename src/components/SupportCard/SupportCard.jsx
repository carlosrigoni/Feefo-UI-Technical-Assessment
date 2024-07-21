import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SupportCard() {
  return (
    <div>
      <h2 className="text-gray-500 text-sm font-semibold tracking-wider">
        YOUR FEEFO SUPPORT CONTACT
      </h2>
      <div className="flex items-center mt-2">
        <div className="bg-yellow-400 w-12 h-12 rounded-md flex justify-center items-center mr-2">
          <p className="font-semibold">S</p>
        </div>
        <div>
          <p className="font-semibold text-sm text-gray-700">Support</p>
          <div className="flex justify-between text-xs text-gray-600">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon="envelope"
                className="mr-1"
                color="#717171"
              />
              <p className="mr-4">support@feefo.com</p>
            </div>
            <p>020 3362 4208</p>
          </div>
        </div>
      </div>
    </div>
  );
}
