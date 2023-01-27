<script>
    import { fly } from 'svelte/transition'
    import imgage from '../images/About_picture.jpg'
    import tail from "../images/1.png"
    import vite from "../images/2.png"
    import sve from "../images/3.png"
</script>
<svelte:head>
  <title>About</title>
</svelte:head>
<section class="flex flex-col" in:fly={{y:80, duration:1000, delay:500}} out:fly={{ duration:500}}>
    <h1 class="text-3xl md:text-5xl  p-4 mt-20 mb-20 ">About</h1>
    <div class="flex max-w-md md:max-w-2xl p-4 gap-3">
        <img class="h-full w-20 object-contain md:h-full md:w-28 p-3" src={tail} alt="technology icon"/>
        <img class="h-full w-20 object-contain md:h-full md:w-28 p-3" src={vite} alt="technology icon"/>
        <img class="h-full w-20 object-contain md:h-full md:w-28 p-3" src={sve} alt="technology icon"/>
    </div>
    <div class="p-4">
        <p class="mt-10 mb-10 text-2xl text-slate-500 leading-8">I've used Vite for fast and efficient development, Svelte for a smooth and responsive user experience, and Tailwind CSS for consistent and visually pleasing styling. The website data is powered by the TMDb API, which allows us to fetch data about  the latest movie information and provide a wide variety of content for users to browse and search. This webiste made just to showcase, my abilities of building websites and to show eveyone how cool svelte actually is!!! Thanks for visiting and enjoy!</p>
        <p class="mb-8 text-sm">You can download the project from <span class="underline text-indigo-500"><a href="http://bit.ly/3DlvWsl">here</a></span></p>
    </div>
    <div class="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-9">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-full w-full object-cover md:h-full md:w-48 p-3" src={imgage} alt="Ayman Aamam">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Creator</div>
            <a href="/contact" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Ayman Aamam</a>
            <p class="mt-2 text-slate-500">Coding and Data Enthusiast. Love to explore new technologies and be fascinated by awesomeness.</p>
          </div>
        </div>
      </div>
</section>
