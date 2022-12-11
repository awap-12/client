import { useForm } from 'react-hook-form';
import "./SignUp.css";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className = "up-input-form" onSubmit={handleSubmit((data) => console.log(data))}>
     <h1 className="head">Become a member</h1>
     <p> Get excess to full page.</p>
        <div className= "up-input-container"> 
            <input className="up-input" placeholder="First Name" {...register('firstName', { required: true } )} />
            {errors.firstName && <p className="in-message">First name is required.</p>}
        </div>      
        <div className= "up-input-container"> 
            <input className="up-input" placeholder="Last "{...register('lastName', { required: true })} />
            {errors.lastName && <p className="in-message">Last name is required.</p>}
            </div>  
      <div className= "up-input-container"> 
            <input
                className="up-input"
                placeholder="email"
                type="email" 
                        {...register("email", {
                required: "Required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                }
        })}
            />
            {errors.email && <p className="in-message">email is required.</p>}
        </div>  
        <div className= "up-input-container"> 
      <input 
      className="up-input"
      placeholder="Password"
      type="password"
      {...register('password', {
      required: "Required",
     minLength: { value: 8, message: "error message"}})}
       />
        {errors.password && <p className="in-message">Password must be more than 8 characters.</p>}
         </div>    
      <div>
      <input className='submit-btn' type="submit" /> 
      </div>
      <div>
      <p>Already a member?<a href='/#/SignIn'>Signin now</a> </p> 
      </div>
    </form>
  );
}
export default SignUp;