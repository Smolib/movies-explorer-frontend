import AuthForm from "../AuthForm/AuthForm";
import { mainApi } from "../../utils/MainApi";
import { useHistory } from "react-router-dom";

function Login({ loggedInStatus }) {
  const history = useHistory();
  function handleLoginSubmit({ email, password }) {
    mainApi
      .login({ password, email })
      .then(() => {
        loggedInStatus();
      })
      .then((res) => {
        history.push("/movies");
      })
      .catch(() => {
        alert("К сожалению, во время авторизации произошла ошибка");
      });
  }
  const props = {
    title: "Рады видеть!",
    needName: false,
    textButton: "Войти",
    textBottom: "Еще не зарегистрированы?",
    linkBottom: "/signin",
    linkText: "Регистрация",
  };
  return (
    <main>
      <AuthForm {...props} onSubmit={handleLoginSubmit} />
    </main>
  );
}

export default Login;
