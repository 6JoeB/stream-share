import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<section className='landing'>
			<div className='landing--overlay m--auto'>
				<div className='text--centered'>
					<h1 className='text--xxlarge m--0 p--1'>
						Stream Share <i class='fas fa-user-friends'></i>
					</h1>
				</div>
				<div className='landing-info p'>
					<p className='text--xmedium text--centered m--auto ptop'>Find friends.</p>
					<p className='text--xmedium text--centered m--auto ptop'>
						Share a streaming account.
					</p>
					<p className='text--xmedium text--centered m--auto p'>Save money!</p>
				</div>
				<div className='text--centered m--auto'>
					<Link to='/register' className='button button--primary p my--1 text--xmedium'>
						Find a Friend
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LandingPage;
