import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<section className='landing'>
			<div className='landing--inner'>
				<div className='landing-title'>
					<h1 className='text-xlarge title'>Stream Share</h1>
				</div>
				<p className='text-medium landing--info-text'>
					The quickest way to find a friend to share a streaming account with and save
					money!
				</p>
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
