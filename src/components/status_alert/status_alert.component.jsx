import { useEffect } from "react";

const StatusAlert = ({ message, bgColor }) => {
  useEffect(() => {
    console.log("color changed");
  }, [bgColor]);
  return (
    <div className="toast toast-top toast-end">
      <div
        className={`alert ${
          bgColor ? bgColor : "alert-success"
        } text-white font-semibold`}
      >
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusAlert;
