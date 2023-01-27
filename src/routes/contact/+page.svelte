<script>
    import { fly } from 'svelte/transition'
    import imgage from '../images/About_picture.jpg'
    import med from '../images/4.png'
    import lin from '../images/5.png'
    import git from '../images/6.png'
</script>
<svelte:head>
  <title>Contact</title>
</svelte:head>

<section class=" w-full flex flex-cols justify-center content-center" in:fly={{y:80, duration:1000, delay:500}} out:fly={{ duration:500}}>
    
        <div class="mt-40 pr-20 pl-20 shadow sm:overflow-hidden sm:rounded-md flex flex-col justify-center items-center">
          <h1 class="text-4xl m-20">Contact</h1>
          <img class="h-full w-full object-cover rounded-full md:h-full md:w-48 p-3" src={imgage} alt="Ayman Aamam">
          <div class="flex flex-col justify-center items-center p-8 max-w-lg">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Creator</div>
            <a href="/contact" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Ayman Aamam</a>
            <p class="mt-2 text-slate-500 text-center">Coding and Data Enthusiast. Love to explore new technologies and be fascinated by awesomeness.</p>
            <p class="mt-2 text-lg font-medium text-slate-600 text-center">Send me a message, I find you</p>
          </div>
          <div class="flex max-w-md md:max-w-2xl p-4 gap-3">
           <a href="https://bit.ly/3XXWUOh"> <img class="h-full w-20 object-contain md:h-full md:w-20 p-3 rounded-full hover:bg-indigo-300 transition ease-in-out delay-150" src={med} alt="technology icon"/></a>
           <a href="https://bit.ly/3Yija5Z"><img class="h-full w-20 object-contain md:h-full md:w-20 p-3 rounded-full hover:bg-indigo-300 transition ease-in-out delay-150" src={lin} alt="technology icon"/></a> 
            <a href="http://bit.ly/3Rbhbh7"><img class="h-full w-20 object-contain md:h-full md:w-20 p-3 rounded-full hover:bg-indigo-300 transition ease-in-out delay-150" src={git} alt="technology icon"/></a> 
        </div>
        </div>
</section>
