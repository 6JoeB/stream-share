import axios from "axios";

const config = {
	headers: {
		"Content-Type": "application/json",
	},
};

export const registerUser = async (name, email, streamingService) => {
	const body = JSON.stringify({ name, email, streamingService });

	try {
		await axios.post(`/api/users/register`, body, config);
	} catch (err) {
		console.log(err);
	}
};

// export const sendEmailVerifiction = async (email) => {
// 	const body = JSON.stringify({ email });

// 	try {
// 		await axios.post(`/api/users/verify-email`, body, config);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

export const verifyUserEmail = async (email) => {
	try {
		await axios.put(`/api/users/verify/${email}`, config);
	} catch (err) {
		console.log(err);
	}
};

export const searchForUserMatch = async (email, streamingService) => {
	const body = JSON.stringify({ email, streamingService });

	try {
		await axios.get(`/api/users/findmatch`, body, config);
	} catch (err) {
		console.log(err);
	}
};

const apiService = {
	searchForUserMatch,
	verifyUserEmail,
	registerUser,
};

export default apiService;
