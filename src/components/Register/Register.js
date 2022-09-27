import AuthForm from "../AuthForm/AuthForm";
import { mainApi } from "../../utils/MainApi";
import { useHistory } from "react-router-dom";

function Register({ loggedInStatus }) {
  const history = useHistory();
  function handleRegisterSubmit({ name, email, password }) {
    mainApi
      .createUser({ name, password, email })
      .then(() => {
        mainApi
          .login({ password, email })
          .then(() => {
            loggedInStatus();
          })
          .then((res) => {
            history.push("/movies");
          })
          .catch(() => {
            alert("К сожалению, во время входа произошла ошибка");
          });
      })
      .catch(() => {
        alert("К сожалению, во время регистрации произошла ошибка");
      });
  }
  const props = {
    title: "Добро пожаловать!",
    needName: true,
    textButton: "Зарегистрироваться",
    textBottom: "Уже зарегистрированы?",
    linkBottom: "/signup",
    linkText: "Войти",
  };
  return (
    <main>
      <AuthForm {...props} onSubmit={handleRegisterSubmit} />
    </main>
  );
}

export default Register;
