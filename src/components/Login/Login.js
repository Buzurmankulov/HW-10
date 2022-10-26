import React, { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  // чтобы емвйл@ алуу учун
  const [emailIsValid, setEmailIsValid] = useState();
  // Валигация true или false.чтобы класстарды алмаштыруу учун.
  const [enteredPassword, setEnteredPassword] = useState("");
  // Password значениясын алуу учун
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("hello");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 1500);
    return () => {
      // Clean up function
      // и это гарантирует что всякий раз,когда запускается фнукци очистки,
      // Я очищаю таймер который был установлен до запуска этой
      // функции очистки,Таким образом мы очищаем последний таймер,прежде чем устоновить новый.
      console.log("CkeapUP");

      clearTimeout(timerId);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };
  // емайл@ болушу герек длинасы не важный, password длиннасы 6 болсо валидный болот экен,Эгерде андан аз длинна 5 болуп калса
  // не валидный болуп эсептелет,ушул проверкадан откондон кийин кана регистрация болот,

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
// Бул жакта инпутардын ичиндеги логин@ passvord обезательно толтуруу керек.

export default Login;
