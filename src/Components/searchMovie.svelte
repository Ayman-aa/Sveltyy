<script>
    import {goto} from '$app/navigation'
    import { fly } from 'svelte/transition'
    let inputValue ='';
    let active = false;

    function cancelIncative(){
        if(inputValue){
            active = true;
        }else{ active=false}
    }
    function submitSearch(){
        goto('/search/'+inputValue);
    }

</script>

<form on:submit|preventDefault={submitSearch} class="search">
    {#if !active}
     <label in:fly={{y:-10, duration:500}} out:fly={{y:-10, duration:500}} for="search_movie">Search Movie</label>
    {/if}
    <input class={active ? 'selected' : ''} on:blur={cancelIncative} on:focus={()=>(active=true)} bind:value={inputValue} type="text" name="search_movie"  />
    {#if inputValue}
    <button in:fly={{x:-50, duration:500}} out:fly={{x:10, duration:500}}>Search</button>
    {/if}
</form>

<style>
   .search{ 
         position: relative;
         width: 40%;
         margin: 1rem;
    }
    button{
        font-size: 0.7rem;
        padding: 0rem 1rem;
        background:rgb(96, 110, 201) ;
        color: white;
        font-weight: bold;
        border: none;
        position: absolute;
        bottom: 50%;
        right: 0;
        transform: translate(0,50%);
        height: 100%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
    }
    input{
        width: 100%;
        border: none;
        font-size: 0.8rem;
        outline: none;
        color: rgb(255, 255, 255);
        padding: 0.5rem 0.1rem;
        transition: background 0.75s ease-out;
        background: rgb(206, 205, 205);
        border-radius: 10px;
        padding: 1rem;
    }
    label{
        position: absolute;
        font-size: 0.8rem;
        top: 50%;
        left: 0;
        transform: translate(0,-50%);
        pointer-events: none;
        color: rgb(26, 26, 26);
        padding: 0rem 1rem;
    }
    input.selected{
        background: rgb(117, 117, 117);

    }
</style>