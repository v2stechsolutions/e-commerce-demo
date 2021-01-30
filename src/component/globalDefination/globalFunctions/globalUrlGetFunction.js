import axios from 'axios';

export const globalUrlGetFunction = async (url, data, callback) => {
	await axios.get(url,{
		params:data
	})
		.then((res) => {
			callback(data);
		})
		.catch((error) => {
			callback(data);
		});
};
