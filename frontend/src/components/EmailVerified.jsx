import React, { useEffect, useState } from "react";
import apiService from "../api/index";

const EmailVerified = ({ match }) => {
	useEffect(() => {
		const { email } = match.params;
		apiService.verifyUserEmail(email);
		// await axios.get(`/api/users/${email}`, config).then((response) => {
		// 	console.log(response.data.data);
		// });
		let user = apiService.findUser(email);
		console.log(user);
		// apiService.searchForUserMatch(email, user.streamingService);
	});

	const [user, setUser] = useState({
		email: match.params.email,
		streamingService: "",
	});

	return (
		<section className='background'>
			<section className='container m--auto'>
				<div className='text--centered'>
					<h1 className='text--xmedium m--0 p--1'>
						<i className='fas fa-check-circle'></i> Email Verified
					</h1>
				</div>
				<p className='p-no-top m--0 text--medium'>
					As soon as we find you a match you will be notified via email.
				</p>
			</section>
		</section>
	);
};

export default EmailVerified;
