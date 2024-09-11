const ProgressBar = () => {
  return (
    <div className="progress mb-3">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated bg-info"
        role="progressbar"
        aria-valuenow={100}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: "100%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
