export async function load({ fetch }) {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7f0e21668b355f408c553e15b8882bdd&language=en-US&page=1');
    const data = await res.json();
    if (res.ok) {
        return {
            props: { popular: data.results }
        }
    }

}