import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const [showError, setShowError] = useState(false);
  const switchShowError = () => {
    setShowError(!showError);
  };
  const inputUsernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const inputAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const errorHandle=()=>{
      setError();
  }
  const userSubmitFormHandle = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      switchShowError();
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      switchShowError();
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeModal={errorHandle}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={userSubmitFormHandle}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={inputUsernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age(Years):</label>
          <input
            type="number"
            id="age"
            onChange={inputAgeChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
