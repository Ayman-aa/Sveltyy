<script>
let isNavOpen = false;

function toggleNav() {
  isNavOpen = !isNavOpen;
  const nav = document.getElementById("navbar-default");
  if (isNavOpen) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}
</script>
<nav class="bg-whitesmoke border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-sm rounded-t-none">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center text-2xl font-bold">MovieLib</a>
      <button on:click={toggleNav} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-full md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-whitesmoke md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-whitesmoke ">
          <li>
            <a href="/" class="block hover:text-black-700 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Home</a>
          </li>
          <li>
            <a href="/about" class="block hover:text-black-700 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">About</a>
          </li>
          <li>
            <a href="/contact" class="block hover:text-black-700 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Contact</a>
          </li>
        </ul>
      </div>
    </div>
</nav>
  
