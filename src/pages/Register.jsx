import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthConntext } from '../provider/AuthProvider';

const Register = () => {
  const { createUser, setUser } = useContext(AuthConntext);

  const handleRegiste = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    if (!uppercase.test(password)) {
      alert("Password must have at least one uppercase letter");
      return;
    }
    if (!lowercase.test(password)) {
      alert("Password must have at least one lowercase letter");
      return;
    }

    // If all checks pass, create user
    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        alert("User registered successfully!");
        form.reset(); // clear the form
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className='flex justify-center mt-10 mb-10'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='text-2xl font-bold text-center'>Register your account</h2>
        <form onSubmit={handleRegiste} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name='name' type="text" className="input" placeholder="Name" required />

            <label className="label">Photo URL</label>
            <input name='photo' type="text" className="input" placeholder="Photo URL" required />

            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            <button type='submit' className="btn btn-neutral mt-4">Register</button>
            <p className='font-semibold text-center pt-5'>
              Already Have An Account?{" "}
              <Link className='text-secondary underline' to='/auth/login'>Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
