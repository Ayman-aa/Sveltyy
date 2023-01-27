
<script>
  import global from '../global.css'
	import PopularMovies from "../Components/PopularMovies.svelte";
  import SearchMovie from '../Components/searchMovie.svelte';
  import { fly } from 'svelte/transition'
    export let data;
    export let movies = data.props.popular;
</script>
<svelte:head>
  <title>Home</title>
</svelte:head>
<section in:fly={{y:80, duration:1000, delay:500}} out:fly={{ duration:500}}>
<SearchMovie />
<PopularMovies {movies} />
</section>


  
 