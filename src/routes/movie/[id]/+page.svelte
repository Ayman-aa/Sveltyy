<script>
export let data;
export let detail = data.props.data;
import { fly } from 'svelte/transition'
</script>
<svelte:head>
  <title>{detail.title}</title>
</svelte:head>
<div class="max-w-2xl mx-auto py-10"  in:fly={{y:80, duration:1000, delay:500}} out:fly={{ duration:500}}>
   <a href="/"><button type="button" class="mb-3 p-3 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "> Back </button></a>
    <div class="">
        <img class="mb-5 rounded-xl" src={'https://image.tmdb.org/t/p/original'+ detail.backdrop_path} alt={detail.title}>
        <div>
            <h1 class="text-4xl font-medium mb-5">{detail.title}</h1>
            <h2 class="text-lg font-semibold mb-1">Overview</h2>
            <p class="text-base mb-2.5">{detail.overview}</p>
            <p class="text-sm"> 
                <span class="font-medium">Release Date : </span>{detail.release_date} <br/>
                <span class="font-medium">Budget : </span>${detail.budget}<br/>
                <span class="font-medium">Revenue : </span>${detail.revenue}<br/>
                <span class="font-medium">Rating : </span>{detail.vote_average}<br/>
                <span class="font-medium">Runtime : </span>{detail.runtime} mins
            </p>
        </div>
    </div>
</div>