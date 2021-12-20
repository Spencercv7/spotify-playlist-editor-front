<script lang="ts">
	import { getUserData } from '../api/data';
	import env from '../util/env';

	import { onMount } from 'svelte';

	const spotifyLoginEndpoint: string = env.API_ENDPOINT + '/auth/login';

	onMount(async () => {
		const id: string = localStorage.getItem('USER_ID');

		if (id) {
			getUserData(id).then((res) => {
				console.log(res);
			});
		}
	});
</script>

<h1>Create New Account</h1>
<a href={spotifyLoginEndpoint}>Click Here</a>

<style>
</style>
