const Success = ({ msg, isSuccess }) => {
  if (msg === null || isSuccess === null)
    return null;

  let notificationStyle;

  if (isSuccess) {
    notificationStyle = {
      border: "4px solid #2f7f2f",
      borderRadius: "8px",
      backgroundColor: "#dedcdc",
      color: "#008000",
      fontSize: "1.3rem",
      fontWeight: "bold",
      margin: "32px 48px",
    };
  } else {
    notificationStyle = {
      border: "4px solid #e02e2e",
      borderRadius: "8px",
      backgroundColor: "#dedcdc",
      color: "#c41f1f",
      fontSize: "1.3rem",
      fontWeight: "bold",
      margin: "32px 48px",
    };
  }

  return (
    <div style={notificationStyle}>
      <p>{msg}</p>
    </div>
  );
};

export default Success;