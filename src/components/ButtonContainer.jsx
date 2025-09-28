import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonnames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.ButtonContainer}>
      {buttonnames.map((buttonname) => (
        <button
          className={styles.buttons}
          onClick={() => {
            onButtonClick(buttonname);
          }}
        >
          {buttonname}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
