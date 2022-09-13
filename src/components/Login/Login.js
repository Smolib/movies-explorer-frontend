import AuthForm from "../AuthForm/AuthForm";

function Login() {
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
      <AuthForm {...props} />
    </main>
  );
}

export default Login;
