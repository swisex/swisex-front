// LoginScreen.js
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAccessToken, loginAsync } from "./authSlice";
import logo from "../../logo.svg";

type FormValues = {
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectAccessToken);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = ({ password }) => {
    dispatch(loginAsync(password));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="password"
            placeholder="ping"
            defaultValue={"ping"}
            className="form-input"
            {...register("password")}
            required
          />
          <button type="submit" className="button" disabled={false}>
            Login
          </button>
          {accessToken != null ? (
            <div>Logged in</div>
          ) : (
            <div>Not logged in</div>
          )}
        </form>
      </header>
    </div>
  );
};
export default Login;
