import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthConntext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from "../firebase/firebase.config";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { signIn } = useContext(AuthConntext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Home page default

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        alert("✅ Login Successful!");
        navigate(from, { replace: true }); // আগের পেজ বা হোমে যাবে
      })
      .catch(error => {
        alert("❌ Login Failed: " + error.message);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        alert("✅ Google Login Successful!");
        navigate(from, { replace: true });
      })
      .catch(error => {
        alert("❌ Google login failed: " + error.message);
      });
  };

  return (
    <div className='flex justify-center mt-10 mb-10'>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className='text-2xl font-bold text-center'>Login your account</h2>

        <form onSubmit={handleLogin} className="card-body">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />

          <label className="label">Password</label>
          <div className="relative">
            <input
              name='password'
              type={showPassword ? "text" : "password"}
              className="input w-full pr-10"
              placeholder="Password"
              required
            />
            <span
              className="absolute right-3 top-2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="mb-2">
            <Link to="/auth/forgot-password" className="link link-hover text-sm">
              Forgot password?
            </Link>
          </div>

          <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>

          <p className='font-semibold text-center pt-5'>
            Don’t Have An Account?{" "}
            <Link className='text-secondary underline' to='/auth/register'>Register</Link>
          </p>
        </form>

      <button
  onClick={handleGoogleLogin}
  className="btn bg-white text-black border-[#e5e5e5] flex items-center justify-center gap-2 mt-3 w-full"
>
  <FcGoogle className="w-5 h-5" />
  Login with Google
</button>
      </div>
    </div>
  );
};

export default Login;
