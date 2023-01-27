export async function load({ fetch, params }) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7f0e21668b355f408c553e15b8882bdd&language=en-US`)
    const data = await res.json()
    if (res.ok) {
        return {
            props: { data }
        }
    }

}