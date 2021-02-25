import * as Yup from 'yup'

const signupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required field'),
    password: Yup.string().min(8, 'Must contain at least 8 characters.').required('Required field'),
    confirm_password: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Password must match"
        )
    }).required('Required field')
})

export default signupSchema