import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/usersApiSlice";
import { setCredentials } from "../../features/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const createUserHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res));
      navigate("/");
    } catch (error) {
      toast.error(error.data);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={createUserHandler}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button disabled={isLoading} type="submit">SingIn</button>
      </form>
    </div>
  );
};
export default Login;
