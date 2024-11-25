const Notification = ({ message }) => {
  const notificationStyle = {
    color: "green",
    fontSize: 18,
    backgroundColor: "lightgrey",
    padding: "8px 16px",
    border: "4px solid green",
    borderRadius: 8
  };

  if (message === null)
    return null;

  return (
    <div className="notification" style={notificationStyle}>
      {message}
    </div>
  );
};

export default Notification;