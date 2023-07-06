const Arrow = ({ className, myStyles, onClick }) => {

  return (
    <div
      className={className}
      style={{
        ...myStyles,
        position: "absolute",
        top: "40%",
        zIndex: "10",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      Arrow
    </div>
  );
};

export default Arrow;
