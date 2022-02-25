import { AccountInfo, Playlists } from '../types/DataTypes';
import env from '../util/env';

export const getUserData = async (id: string): Promise<AccountInfo> => {
	return new Promise((resolve) => {
		fetch(env.API_ENDPOINT + '/data/user', {
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

export const getPlaylistsData = async (id: string): Promise<Playlists> => {
	return new Promise((resolve) => {
		fetch(env.API_ENDPOINT + '/data/playlists', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: id })
		})
			.then((res) => res.json())
			.then((playlists: Playlists) => {
				resolve(playlists);
			})
	})
}
