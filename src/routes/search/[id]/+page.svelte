<script>
    import MovieCard from "../../../Components/MovieCard.svelte";
    export let data;
    export let movies = data.props.searchedMovie
    import { fly } from 'svelte/transition'
</script>
<svelte:head>
  <title>Search</title>
</svelte:head>
<div in:fly={{y:80, duration:1000, delay:500}} out:fly={{ duration:500}} class="grid justify-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-4">
    {#each movies as movie}
         <MovieCard {movie}/>
    {/each}
</div>