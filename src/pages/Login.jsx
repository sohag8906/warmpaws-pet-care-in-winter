import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthConntext } from '../provider/AuthProvider';

const Login = () => {
    const {signIn} = use(AuthConntext);
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});
        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
        })



        {/* google */}
       

    };
    return (
        <div className='flex justify-center mt-10 mb-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl font-bold text-center'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        {/* passowrd */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link className='text-secondary underline' to='/auth/register'>Register</Link> </p>
                    </fieldset>
                </form>
               
                <button>google</button>
            </div>
        </div>
    );
};

export default Login;
