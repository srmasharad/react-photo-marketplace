// form-group validate
export const checkFormGroup = error => {
	const currClass = 'form-group';
	const errorClass = 'validate';
	return error ? `${currClass} ${errorClass}` : currClass;
};

// form-control validate
export const checkFormControl = (error, touched) => {
	const currClass = 'form-control';
	const errorClass = 'is-invalid';
	return error && touched ? `${currClass} ${errorClass}` : currClass;
};