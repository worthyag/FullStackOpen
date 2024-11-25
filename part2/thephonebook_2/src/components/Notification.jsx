const Notification = ({ message }) => {
  const successStyle = {
    color: "green",
    fontSize: 18,
    backgroundColor: "lightgrey",
    padding: "8px 16px",
    border: "4px solid green",
    borderRadius: 8
  };

  const errorStyle = {
    color: "red",
    fontSize: 18,
    backgroundColor: "lightgrey",
    padding: "8px 16px",
    border: "4px solid red",
    borderRadius: 8
  };

  if (message[0] === null)
    return null;

  if (message[1]) {
    return (
      <div className="notification" style={successStyle}>
        {message[0]}
      </div>
    );
  } else {
    return (
      <div className="notification" style={errorStyle}>
          {message[0]}
      </div>
    )
  }
};

export default Notification;