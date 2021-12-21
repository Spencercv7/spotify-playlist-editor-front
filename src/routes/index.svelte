<script lang="ts">
	import { getPlaylistsData, getUserData } from '../api/data';
	import env from '../util/env';

	import { onMount } from 'svelte';
	import { AccountInfo } from '../types/DataTypes';

	const spotifyLoginEndpoint: string = env.API_ENDPOINT + '/auth/login';

	onMount(async () => {
		const id: string = localStorage.getItem('USER_ID');

		if (id) {
			getUserData(id).then((res) => {
				console.log(res);
			});
		}
	});

	const getUser = () => {
		const id: string = localStorage.getItem('USER_ID');

		if (id) {
			getUserData(id).then((account: AccountInfo) => {
				console.log(account);
			});
		} else {
			alert('Please login.');
		}
	};

	const getPlaylists = () => {
		const id: string = localStorage.getItem('USER_ID');

		if (id) {
			getPlaylistsData(id).then((playlists) => {
				console.log(playlists);
			});
		} else {
			alert('Please login.')
		}
	};
</script>

<div id="page_wrapper">
	<h1>Endpoint Testing</h1>
	<div id="button_wrapper">
		<a href={spotifyLoginEndpoint}>Login</a>
		<button on:click={() => getUser()}>Get Account Data</button>
		<button on:click={() => getPlaylists()}>Get Playlists Data</button>
	</div>
</div>

<style>
	#page_wrapper {
		height: 100%;
		width: 100%;
		display: grid;
		place-items: center;
	}

	#button_wrapper {
		display: flex;
		gap: 3rem;
	}

	a {
		position: absolute;
		top: 0;
		right: 0;
		margin: 3rem;
	}
</style>
