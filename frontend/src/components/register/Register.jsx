import React, { useState } from "react";

const Register = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		streamingService: "",
	});

	const [formSubmitted, toggleFormSubmitted] = useState(false);

	const { name, email, streamingService } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		toggleFormSubmitted(true);
		console.log(formSubmitted);
	};

	const registerForm = (
		<div className='background'>
			<div className='register--container m--auto'>
				<div className='p'>
					<h1 className='m'>Register</h1>
					<form className='form m' onSubmit={(e) => onSubmit(e)}>
						<label className='form--group'>
							<div className='form--placeholder'>
								<span>Name</span>
							</div>
							<div className='display--flex'>
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
						<label className='form--group'>
							<div className='form--placeholder'>
								<span>Email</span>
							</div>
							<div className='display--flex'>
								<input
									className='form--input'
									autocomplete='off'
									type='email'
									name='email'
									value={email}
									onChange={(e) => onChange(e)}
									required
								/>
							</div>
						</label>
						<label className='form--group'>
							<div className='form--placeholder'>
								<span>Select a streaming service</span>
							</div>
							<i class='fas fa-caret-down carat-down'></i>
							<select
								className='form--input'
								onChange={(e) => onChange(e)}
								name='streamingService'
								required
							>
								<option value='' defaultValue>
									--Select service--
								</option>
								<option value='Netflix'>Netflix</option>
								<option value='Disney+'>Disney+</option>
								<option value='Amazon Prime'>Amazon Prime</option>
							</select>
						</label>
						<input
							type='submit'
							className='button button--primary p text--medium'
							value='Register'
						/>
					</form>
				</div>
			</div>
		</div>
	);

	const registerFormSubmitted = (
		<div className='background m--auto'>
			<div className='register--container m--auto'>
				<h1 className='m'>Form submitted</h1>
			</div>
		</div>
	);

	return formSubmitted ? registerFormSubmitted : registerForm;
};

export default Register;
