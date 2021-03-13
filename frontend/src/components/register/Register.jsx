import React, { useState } from "react";

const Register = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		countryFrom: "",
		streamingServiceChoice: "",
	});

	const { name, email, countryFrom, streamingServiceChoice } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<h1>Register</h1>
			<form className='form' onSubmit={(e) => onSubmit(e)}>
				<label className='form--group'>
					<div className='form--placeholder'>
						<span>Name</span>
					</div>
					<div>
						<input
							className='form--input'
							autocomplete='off'
							type='text'
							name='name'
							value={name}
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
				</label>
				<input type='submit' className='button button-primary' value='Register' />
			</form>
		</div>
	);
};

export default Register;
