const Success = ({ msg }) => {
  if (msg === null)
    return null;

  const successStyle = {
    border: "4px solid #2f7f2f",
    borderRadius: "8px",
    backgroundColor: "#dedcdc",
    color: "#008000",
    fontSize: "1.3rem",
    fontWeight: "bold",
    margin: "32px 48px",
  };

  return (
    <div className="success-msg" style={successStyle}>
      <p>{msg}</p>
    </div>
  );
};

export default Success;