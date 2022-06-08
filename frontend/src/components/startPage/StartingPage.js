import "./StartingPage.css";

const StartingPage = ({ setDisplayLanding }) => {
  return (
    <div
      onClick={() => {
        setDisplayLanding(false);
      }}
      className="container"
    >
      <div className="words word-1">
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </div>

      <div className="words word-2">
        <span>T</span>
        <span>O</span>
      </div>

      <div className="words word-3">
        <span>F</span>
        <span>O</span>
        <span>O</span>
        <span>D</span>
        <span>I</span>
        <span>E</span>
        <span>S</span>
      </div>
    </div>
  );
};

export default StartingPage;
