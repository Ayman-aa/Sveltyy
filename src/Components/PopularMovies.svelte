<script>
    export let movies;
    import MovieCard from "./MovieCard.svelte";
</script>
<h2 class="text-2xl font-semibold p-4">Popular Movies</h2>
  <div class="grid justify-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-4">
    {#each movies as movie}
     <MovieCard {movie}/>
    {/each}

  </div>