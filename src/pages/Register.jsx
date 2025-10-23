import React, { use } from 'react';
import { Link } from 'react-router-dom';
import { AuthConntext } from '../provider/AuthProvider';

const Register = () => {
  const {createUser, setUser}= use(AuthConntext);

  const handleRegiste =(e)=>{
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({name, photo, email, password});
    createUser(email,password)
    .then(result=>{
      const user=result.user;
    //  console.log(user);
    setUser(user);
    }) 
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
   
  }
    return (
         <div className='flex justify-center mt-10 mb-10'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
         <h2 className='text-2xl font-bold text-center'>Register your account</h2>
         <form onSubmit={handleRegiste} className="card-body">
          <fieldset className="fieldset">
            {/**name */}
           <label className="label">Name</label>
           <input name='name' type="text" className="input" placeholder="Name" required />
            {/* photo URL */}
           <label className="label">photo URL</label>
           <input name='photo' type="text" className="input" placeholder="photo URL" required />

            {/**email */}
           <label className="label">Email</label>
           <input name='email' type="email" className="input" placeholder="Email" required />

              {/* password */}
           <label className="label">Password</label>
           <input name='password' type="password" className="input" placeholder="Password" required />

        
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold text-center pt-5'>Allready Have An Account ? {""} <Link className='text-secondary underline' to='/auth/login'>Login</Link> </p>
        
      </fieldset>
         </form>
   </div>
  </div>
    );
};

export default Register; 