export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=2zFEcBoEls1KLV7lIHOfLf05ai27RL2e`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}
