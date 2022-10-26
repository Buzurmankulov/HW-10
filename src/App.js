import React, { useState } from "react";
import { useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state,setState] = useState(0)
 // false => true =>
 
  // бул жерде функциянын иштеши,колдонучу логин парольду толтурганга чейин false,
  
    useEffect(() => {
      console.log("hello adedd");
      console.log(state);
    }, [state]); //колбек функция зовисимо, от этово state озгорсо колбек функция иштейт.
  // болуп турат,форманы толтургандан кийин true,болуп иштеп баштайт.
  
    const logoutHandler = () => {
      setIsLoggedIn(false);
    };
  const loginHandler = (email, password) => {
    localStorage.removeItem('isLogin')
    setIsLoggedIn(true);
  };

  function add(){
    setState((prevState) => prevState + 1)
  }

  // Буга чейин айтып кеткендей эле,эгерде биз Http-запрстторду кайсы бир компоннентин ичине сылып койдук дейли,
  // бизде State-тер постаянно алмашат рендер болот,рендер болгон сайын запростор кайра кайра кайталанып калат ал 
  // кезде биз серверди сындырып алабыз,Ушундай койгойгоду побочный эффектерди отдельно обработка кылу учун,проблемаларды чечу учун 
  // бизде React-та,UseEffect() Хук деген Функциясы бар,либой хукту биз компоннентин ичинде колднобуз,компоненнтен сырткары болуп калса
  // ал хук жон кана иштебей туруп калат.useEffect озуно эки аргумент алат. биринчиси колбек useEffect(()=>{...}) функциясын алат озуно колбек функциянын
  // ичине сразу жазып кетсек болот коду или просто вызвать функция.Экинчиси [dependencies] Зовисимость - этого эффекта тойесть,колбек функциянын ичиндеги
  // малымат озгоргондо функция иштеп баштайт, колбек функция зависимость от своих dependencies.


  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
    // Home,Login компоненнтерди рендер кылуу браузерге коргозу.из лгоин true,болсо Home
    // деген страница беребиз,Welcom back деген страницага тушот,колдонучу тушунот что регицттрациядан отконун.
    // Если колдонучу регистрациядан ото элек болсо isLoggedIh,беребиз биринчи регистрациядан отунуз деп,чтобы попасть
    // на страницу Home.на страницу Home попадает те люди каторые прошли регицтрацию.
  );
}

export default App;
