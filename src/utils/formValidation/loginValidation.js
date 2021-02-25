import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required field'),
    password: Yup.string().required('Required field')
})

export default loginSchema