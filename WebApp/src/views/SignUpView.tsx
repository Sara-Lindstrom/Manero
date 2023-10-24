import SignUpFormSection from '../sections/SignUpFormSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { NavLink } from 'react-router-dom'

const SignUpView = () => {
  return (
    <>
      <BreadcrumbSection currentPage="Sign up"/>

      <div className='container Sign-up-title-container'>
        <i className="fa-light fa-pipe"></i>
        <h1 className='sign-up-title'>Sign Up</h1> 
      </div> 

      <SignUpFormSection/>

      <div className='container my-4 text-center'>
        <NavLink to="/signin">Already Have An Account? Sign In.</NavLink>
      </div>

      <div className='container d-flex justify-content-center'>
        <button className='round-btn'><i className="fa-brands fa-facebook-f"></i></button>
        <button className='round-btn'><i className="fa-brands fa-twitter"></i></button>
        <button className='round-btn'><i className="fa-brands fa-google"></i></button>
      </div>
    </>
  )
}

export default SignUpView