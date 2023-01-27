<script>
    export let movie;
</script>

<div class="mb-8">
    <a href={'../movie/' + movie.id}>
        <img class="mb-5 rounded-xl" src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.original_title}>
    </a>
    <h2 class="text-lg font-medium">{movie.original_title}</h2>
    <p class="text-sm">{movie.release_date}</p>
</div>