import axios from 'axios';

export const globalUrlGetFunction = async (data, callback) => {
	await axios.get(data)
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
