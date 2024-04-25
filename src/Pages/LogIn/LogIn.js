import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import Social from "../Shared/Social/Social";
import "./LogIn.css";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //   console.log(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  let errorElement;
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>;
  }
  if (loading || sending) {
    <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = prompt("Enter Your Email Address:");
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sent.");
    } else {
      toast("Please! Enter Your Email Address.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>Email</label>
        <input
          placeholder='email'
          {...register("email", {
            required: "Please enter your mail before submit",
          })}
        />
        {errors.email && <p className='text-danger'>{errors.email.message}</p>}

        <label htmlFor='password'>Password</label>
        <input
          placeholder='password'
          type='password'
          {...register("password", { required: "enter your password" })}
        />
        {errors.password && (
          <p className='text-danger'>{errors.password.message}</p>
        )}

        {errorElement}
        <input className='login-btn' type='Submit' defaultValue='Login' />
      </form>
      <div className='mt-4'>
        <p className='w-50 mx-auto text-white'>
          Don't have a account?{" "}
          <Link
            to='/register'
            className='text-decoration-none text-danger ms-2'
          >
            Register
          </Link>
        </p>
        <p className='w-50 mx-auto text-white'>
          Forget password?{" "}
          <Link
            to='/login'
            onClick={resetPassword}
            className='text-decoration-none text-danger ms-2'
          >
            Reset Password
          </Link>
        </p>
      </div>
      <Social></Social>
      <ToastContainer />
    </div>
  );
};

export default Register;
