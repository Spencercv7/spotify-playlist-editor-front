import { AccountInfo } from '../types/DataTypes';
import env from '../util/env';

export const getUserData = async (id: string): Promise<AccountInfo> => {
	return new Promise((resolve) => {
		fetch(env.API_ENDPOINT + '/auth/generate-id', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: id })
		})
			.then((res) => res.json())
			.then((account: AccountInfo) => {
				resolve(account);
			});
	});
};
