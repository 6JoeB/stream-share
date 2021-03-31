import React, { useState } from "react";
// import apiService from "../api/index";

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
		// const res = apiService.registerUser(name, email, streamingService);
		// console.log(res);
		toggleFormSubmitted(true);
		// apiService.sendEmailVerifiction(email);
	};

	const registerForm = (
		<div className='background'>
			<div className='container m--auto'>
				<section className='p'>
					<div className='text--centered'>
						<h1 className='m text--xxlarge m--0'>Register</h1>
					</div>
					<form className='form m' onSubmit={(e) => onSubmit(e)}>
						<label className='form--group'>
							<div className='form--placeholder'>
								<span>Name</span>
							</div>
							<div className='display--flex'>
								<input
									className='form--input'
									autoComplete='off'
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
									autoComplete='off'
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
						<label for='register-checkbox' className='register-form--checkbox'>
							<input type='checkbox' className='m--0' id='register-checkbox' required />{" "}
							By registering you are agreeing to share your email with another Stream
							Share user
						</label>
						<input
							type='submit'
							className='button button--primary p text--xmedium'
							value='Register'
						/>
					</form>
				</section>
			</div>
		</div>
	);

	const registerFormSubmitted = (
		<div className='background m--auto'>
			<div className='container m--auto'>
				<h1 className='text--centered m--auto p'>Registered Successfully</h1>
				<p className='p-no-top  m--0'>
					We have sent a verification email to {email}, please confirm your email address
					and then we will search for your match.
				</p>
			</div>
		</div>
	);

	return formSubmitted ? registerFormSubmitted : registerForm;
};

export default Register;
