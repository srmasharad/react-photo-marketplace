import { ErrorMessage, Field } from "formik";
import { checkFormControl, checkFormGroup } from "../../utils/helpers";
import PropTypes from 'prop-types'

const InputField = ({ name, error, touch, placeHolder, labelName, textMuted, ...rest}) => {
    return (  
        <div className={checkFormGroup(error)}>
            {labelName && <label htmlFor={name}>{labelName}</label>}
            <Field {...rest} name={name} id={name} className={checkFormControl(error, touch)} placeholder={placeHolder} />
            <ErrorMessage name={name} component="span" className="invalid-feedback"/>
            {textMuted && <small className="text-muted">{textMuted}</small>}
        </div>
    );
}
 
export default InputField;

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
    touch: PropTypes.bool,
    error: PropTypes.string
}