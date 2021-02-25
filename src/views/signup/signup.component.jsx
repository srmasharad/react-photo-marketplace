import { Form, Formik } from "formik";
import { Spinner } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../components/common/InputField";
import Logo from "../../components/common/Logo";
import signupSchema from "../../utils/formValidation/signupValidation";

const SignUpForm = () => {
    const history = useHistory()

    const formData = {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    if(localStorage.getItem('pm-token') !== null) return <Redirect to="/customer" />

    return (
        <div className="form-wrapper">
            <Formik
                initialValues={formData}
                validationSchema={signupSchema}
                onSubmit={async(values, actions) => {
                    actions.setSubmitting(true)
                    setTimeout(() => {
                        toast.dark('Account created successfuly. Please login to access your account')
                        history.push('/')
                    },1000)
                }}
            >
            {({ isSubmitting, errors, touched }) => (
            <Form className="form-signin">
                    <div className="text-center">
                        <Logo />
                        <h1 className="h6 mb-3 text-muted">Welcome!</h1>
                        <h1 className="h5 mb-5">Please create your new account</h1>
                    </div>

                    <InputField type="text" name="nname" labelName="Full Name" autoComplete="off" />

                    <InputField type="text" name="email" labelName="Email Address" error={errors.email} touch={touched.email} autoComplete="off" />

                    <InputField type="password" name="password" labelName="Password" error={errors.password} touch={touched.password} autoComplete="off" />

                    <InputField type="password" name="confirm_password" labelName="Confirm Password" error={errors.confirm_password} touch={touched.confirm_password} autoComplete="off" />

                    <button
                        type="submit"
                        className={
                            isSubmitting
                                ? 'btn btn-primary btn-block mb-3'
                                : 'btn btn-primary btn-block mb-3'
                        }
                        disabled={isSubmitting}
                    >
                        {!isSubmitting ? 'Create Account' : <Spinner animation="border" variant="light" size="sm" />}
                    </button>
                    <p>Already have an account? <Link to="/">Sign In</Link></p>
            </Form>
            )}    
            </Formik>
        </div>
    );
}
 
export default SignUpForm;