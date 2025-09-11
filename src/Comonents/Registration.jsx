import "../Styles/Registration.css";

const Registration = ({ showMessage, setCurrentPage, theme }) => {
  const handleRegister = (type) => {
    showMessage(`You chose to register as a/an ${type}.`);
    setCurrentPage("events");
  };

  // Decide classes based on theme
  const institutionClass =
    theme === "gold" ? "register-button institution" : "register-button institution";
  const individualClass =
    theme === "gold" ? "register-button individual" : "register-button individual";

  return (
    <div className="main-content registration-content">
      <h2 className="title-text">Register</h2>
      <p className="description-text">
        Are you registering on behalf of an institution or as an individual?
      </p>

      <div className="registration-buttons">
        <button
          className={individualClass}
          onClick={() => handleRegister("Individual")}
        >
          Individual
        </button>
        <button
          className={institutionClass}
          onClick={() => handleRegister("Institution")}
        >
          Institution
        </button>
      </div>
    </div>
  );
};

export default Registration;
