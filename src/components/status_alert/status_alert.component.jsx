import { useEffect } from "react";
import { useSelector } from "react-redux";

const StatusAlert = () => {
  //Using Redux
  const message = useSelector((state) => state.toast_status.status);
  const bgColor = useSelector((state) => state.toast_status.bgColor);

  useEffect(() => {
    console.log("color changed");
  }, [bgColor]);

  if (message === "") {
    return <div></div>;
  }
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
