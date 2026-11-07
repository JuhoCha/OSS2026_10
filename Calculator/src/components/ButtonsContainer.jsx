import Buttons from "./Buttons";

const ButtonsContainer = ({ handleOnClick }) => {
  const buttonNames = [
    "7", "8", "9",
    "4", "5", "6",
    "1", "2", "3",
    "0", ".", "C",
    "+", "-", "*",
    "/", "<<", "=",
  ];

  return (
    <div className="buttons-container">
      <Buttons buttonNames={buttonNames} handleOnClick={handleOnClick} />
    </div>
  );
};

export default ButtonsContainer;
