import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { CSSProperties, FC } from "react";

interface AddLeadPopUpProps {
  title?: string;
  content?: string;
  onClose: () => void;
  style?: CSSProperties;
  setIsAddLeadFormPopUp: (value: boolean) => void;
  leadData?: {
    address?: string;
  };
}

const AddPointPopUp: FC<AddLeadPopUpProps> = ({
  title,
  content,
  onClose,
  style,
  setIsAddLeadFormPopUp,
  leadData,
}) => {
  return (
    <div
      className="z-20 p-3 space-y-6 bg-white rounded-md shadow-sm custom-popup max-w-52"
      style={{ ...style, transform: "translate(-80%, -105%)" }}
    >
      <div className="w-full">
        <div className="flex justify-between w-full">
          <h3 className="text-base font-medium leading-6 text-black">
            {title || "New Records"}
          </h3>
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6 text-latisGray-800" />
          </button>
        </div>
        <div className="mt-4 space-y-4">
          <div className="gap-4 pb-3 border-b">
            <div className="text-sm leading-5 text-latisGray-800">
              {leadData?.address || content || "No Address Available"}
            </div>
          </div>
        </div>

        <div className="w-full">
          <button
            onClick={(e) => {
              e.preventDefault();
              onClose();
              setIsAddLeadFormPopUp(true);
            }}
            className="w-full"
          >
            Add Lead
          </button>
        </div>
      </div>
      <div className="arrow-down" />
    </div>
  );
};

export default AddPointPopUp;
