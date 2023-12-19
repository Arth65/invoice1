import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Form() {
  const [showForm, setShowForm] = useState(true);
  const handleButtonClick = () => {
    setShowForm(false);
  };
  return (
    <>
      {/* <Invoice /> */}

      {showForm ? (
        <SignIn onClick={handleButtonClick} />
      ) : (
        <SignUp onClick={() => setShowForm(true)} />
      )}
    </>
  );
}
