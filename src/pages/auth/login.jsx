import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  /* Handle Login Form Submit */
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to login
      </p>

      <form>
        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}{" "}
        <button className="btn-primary">LOGIN</button>{" "}
        <p className="text-[13px] text-slate-800 mt-3">
          Don&apos;t have an account?
        </p>
        <button className="">SignUp</button>
      </form>
    </div>
  );
};
export default Login;
