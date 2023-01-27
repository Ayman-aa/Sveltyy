export async function load({ fetch, params }) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7f0e21668b355f408c553e15b8882bdd&language=en-US&query=${params.id}&page=1&include_adult=false`)
    const data = await res.json()
    console.log(data);
    if (res.ok) {
        return {
            props: { searchedMovie: data.results }
        }
    }

}