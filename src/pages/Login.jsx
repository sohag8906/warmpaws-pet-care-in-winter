import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthConntext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from "../firebase/firebase.config"; // path ঠিক আছে

const Login = () => {
    const { signIn } = useContext(AuthConntext);

    // Email/Password login
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log("Email login user:", user);
            })
            .catch(error => {
                alert(error.message);
            });
    };
    
    // Google Login
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log("Google login user:", user);
                // চাইলে এখানে redirect দিতে পারো
            })
            .catch(error => {
                console.error("Google login error:", error.message);
                alert("Google login failed");
            });
    };

    return (
        <div className='flex justify-center mt-10 mb-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl font-bold text-center'>Login your account</h2>

                {/* Email/Password Form */}
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        <p className='font-semibold text-center pt-5'>
                            Don’t Have An Account?{" "}
                            <Link className='text-secondary underline' to='/auth/register'>Register</Link>
                        </p>
                    </fieldset>
                </form>

                {/* Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black border-[#e5e5e5] flex items-center justify-center gap-2 mt-3 w-full"
                >
                    <svg
                        aria-label="Google logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <g>
                            <path d="m0 0H512V512H0" fill="#fff"></path>
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                        </g>
                    </svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;