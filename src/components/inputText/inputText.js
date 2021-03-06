import React from 'react';
import PropTypes from 'prop-types';

import joinClassNames from '../../utils/joinClassNames';

import './inputText.sass';

function InputText({
	className,
	id,
	label,
	name,
	onChange,
	placeholder,
	value
}) {
	function handleChange(ev) {
		onChange(ev);
	}

	return (
		<>
			<label
				className={joinClassNames('input__label', className.label)}
				htmlFor={id}
			>
				{label}
			</label>
			<input
				className={joinClassNames('input__field', className.input)}
				id={id}
				name={name}
				onChange={handleChange}
				placeholder={placeholder}
				type="text"
				value={value}
			/>
		</>
	);
}

InputText.propTypes = {
	className: PropTypes.shape({
		input: PropTypes.string,
		label: PropTypes.string
	}),
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

InputText.defaultProps = {
	className: {
		input: '',
		label: ''
	}
};

export default InputText;
