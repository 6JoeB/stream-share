import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<section className='landing'>
			<div className='landing--inner'>
				<h1>Find a friend to share a streaming account with</h1>
				<div className='landing--buttons'>
					<Link to='/findafriend' className='button button--primary'>
						Find a Friend
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LandingPage;
