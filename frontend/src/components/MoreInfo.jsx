import React from "react";
import { Link } from "react-router-dom";

const MoreInfo = () => {
	return (
		<div className='background'>
			<section className='container m--auto'>
				<div className='text--centered'>
					<h1 className='text--xxlarge m--0 p--1'>More Info</h1>
				</div>
				<p className='p-no-top m--0 text--medium'>
					Many streaming services offer the ability to watch on multiple screens at one
					time, with only one account required. <br />
					<br />
					Stream Share offers a way to connect you to new friends which you can share a
					streaming account with and all save money. <br />
				</p>
				<div className='text--centered m--auto'>
					<Link to='/register' className='button button--primary p my--1 text--xmedium'>
						Find a Friend
					</Link>
				</div>
			</section>
		</div>
	);
};

export default MoreInfo;
