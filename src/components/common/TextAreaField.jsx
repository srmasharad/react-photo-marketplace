import PropTypes from 'prop-types'
import { checkFormGroup, checkFormControl } from '../../utils/helpers';
import { Field, ErrorMessage } from 'formik';

const TextAreaField = ({ name, error, touch, placeHolder, labelName, textMuted, ...rest}) => {
    return (
        <div className={checkFormGroup(error)}>
            {labelName && <label htmlFor={name}>{labelName}</label>}
            <Field {...rest} name={name} as="textarea" id={name} className={checkFormControl(error, touch)} placeholder={placeHolder} />
            <ErrorMessage name={name} component="span" className="invalid-feedback"/>
            {textMuted && <small className="text-muted">{textMuted}</small>}
        </div>
    );
}
 
export default TextAreaField;

TextAreaField.propTypes = {
    name: PropTypes.string.isRequired,
    labelName: PropTypes.string
}