import { Form, Formik } from "formik";
import { Spinner } from "react-bootstrap";
import { Link, Redirect, useLocation } from "react-router-dom";
import InputField from "../../components/common/InputField";
import Logo from "../../components/common/Logo";
import loginSchema from "../../utils/formValidation/loginValidation";

const LoginForm = () => {
    const location = useLocation()

    const formData = {
        email: '',
        password: ''
    }
    if(localStorage.getItem('pm-token') !== null) return <Redirect to="/customer" />

    return ( 
        <div className="form-wrapper">
            <Formik
                initialValues={formData}
                validationSchema={loginSchema}
                onSubmit={async(values, actions) => {
                    actions.setSubmitting(true)
                    localStorage.setItem('pm-token', '563492ad6f9170000100000122fb5169eedb4e259e55df444e92ab78')
                    actions.setSubmitting(false)
                    const { state } = location
                    window.location = state ? state.from.pathname : '/customer'
                }}
            >
            {({ isSubmitting, errors, touched }) => (
                <Form className="form-signin">
                    <div className="text-center">
                        <Logo />
                        <h1 className="h6 mb-3 text-muted">Welcome Back!</h1>
                        <h1 className="h5 mb-5">Please login to your account</h1>
                    </div>

                    <InputField type="text" name="email" labelName="Email Address" error={errors.email} touch={touched.email} autoComplete="off" />

                    <InputField type="password" name="password" labelName="Password" error={errors.password} touch={touched.password} autoComplete="off" />

                    <button
                        type="submit"
                        className={
                            isSubmitting
                                ? 'btn btn-primary btn-block mb-3'
                                : 'btn btn-primary btn-block mb-3'
                        }
                        disabled={isSubmitting}
                    >
                        {!isSubmitting ? 'Sign In' : <Spinner animation="border" variant="light" size="sm" />}
                    </button>
                    <p>Don't have an account? <Link to="/register">Create account</Link></p>
                </Form>
            )}    
            </Formik>
        </div>
    );
}
 
export default LoginForm;