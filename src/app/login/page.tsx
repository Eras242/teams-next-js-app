import LoginForm from "./LoginForm";
import login from "../styles/login.module.css";

export default function Login() {
  return (
    <div className={login.main}>
      <LoginForm />
    </div>
  );
}
