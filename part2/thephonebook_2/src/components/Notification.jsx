const Notification = () => {
  const notificationStyle = {
    color: "green",
    fontSize: 18,
    backgroundColor: "lightgrey",
    padding: "8px 16px",
    border: "4px solid green",
    borderRadius: 8
  };

  return (
    <div className="notification" style={notificationStyle}>
      Operation Successful.
    </div>
  );
};

export default Notification;