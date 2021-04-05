import React, { useEffect } from "react";
import apiService from "../api/index";

const EmailVerified = ({ match }) => {
	useEffect(() => {
		const { email, streamingService } = match.params;
		apiService.verifyUserEmail(email);
		apiService.searchForUserMatch(email, streamingService);
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
