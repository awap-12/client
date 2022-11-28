import { useForm } from "react-hook-form";
import "./SignIn.css";
const SignIn = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => console.log(values);

  return (
   <div className = "in-main-container">
    <h1 className="head">Login</h1>
        <p>Login to get excess to webpage.</p>
        <div className="in-form">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="in-input-container">
      <input type=" email" placeholder="email" 
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}
      </div>
      <div className="in-input-container">
       <input type= "password"  placeholder="password" 
           {...register("password", {
          validate: value => value !== ""
        })}
        />
        {errors.password && <p className="in-message">enter the password</p>}
      </div>

      <button type="submit">Submit</button>
      <p>Not a member? Signup now</p>
        <p>forgot password?</p>
    </form>
    </div>
  </div>
  );
};
export default SignIn;

