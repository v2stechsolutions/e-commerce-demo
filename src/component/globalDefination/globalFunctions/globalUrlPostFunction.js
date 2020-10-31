import axios from 'axios';

export const globalUrlPostFunction = async (data, callback) => {
	await axios.post(data)
		.then((res) => {
			callback(res);
		})
		.catch((error) => {
			console.log(
				'status: ',
				error.response.status,
				' message: ',
				error.response.data.message
			);
			callback(error.response);
		});
};
