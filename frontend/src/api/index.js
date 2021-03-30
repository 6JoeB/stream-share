import axios from "axios";

const config = {
	headers: {
		"Content-Type": "application/json",
	},
};

export default registerUser = async (name, email, streamingService) => {
	const body = JSON.stringify({ name, email, streamingService });

	try {
		await axios.post(`/api/users/register`, body, config);
	} catch (err) {
		console.log(err);
	}
};

export default sendEmailVerifiction = async (email) => {
	try {
		await axios.post(`/api/users/verify/${email}`, config);
	} catch (err) {
		console.log(err);
	}
};

//PUT api/users/verify/:email

//GET api/users/findmatch
export default searchForUserMatch = async();
