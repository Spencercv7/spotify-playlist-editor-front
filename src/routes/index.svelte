<script lang="ts">
	// UTIL
	import { onMount } from 'svelte';
	
	// TYPES
	import { Playlist } from '../types/DataTypes';
	
	// API
	import { getPlaylistsData } from '../api/data';
	
	// COMPONENTS
	import Dev from '../components/Dev.svelte';

	let playlists: Playlist[];

	onMount(() => {
		const id: string = localStorage.getItem('USER_ID');

		if (id) {
			getPlaylistsData(id).then((res) => {
				playlists = res.lists;
			});
		}
	});

</script>

<section>
	<Dev />
</section>

<style>

	section {
		height: 100%;
		width: 100%;
		
		display: grid;
		place-items: center;
	}

</style>
