import AuthForm from "../AuthForm/AuthForm";

function Register() {
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
      <AuthForm {...props} />
    </main>
  );
}

export default Register;
