const Success = ({ msg }) => {
  if (msg === null)
    return null;

  return (
    <div className="success-msg">
      <p>{msg}</p>
    </div>
  );
};

export default Success;