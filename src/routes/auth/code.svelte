<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import env from '../../util/env';

	onMount(() => {
		fetch(env.API_ENDPOINT + '/auth/generate-code', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ code: $page.query.get('code') })
		})
			.then((res) => res.json())
			.then((data) => {
			    localStorage.setItem('USER_ID', data.id);
			});
	});
</script>

<h1>One moment as we log you in...</h1>
