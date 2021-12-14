import PropTypes from "prop-types";
import "../styles/Notificate.css";
import "../styles/Notificate.css";
import "react-toastify/dist/ReactToastify.css";

export const Notification = ({ message }) => {
  return (
    <div className="subtitle">
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
