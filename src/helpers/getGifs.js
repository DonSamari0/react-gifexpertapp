
const getGifs = async( category ) => {

    

    const api_key = "cJA3EgQ4cHZ2f3AhMFsCtK799N97idza";
    const query = category;
    const limit = "10";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=${limit}` ;


    const request = await fetch( url );
    const { data } = await request.json();
    console.log(data);
    const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        });
        
        //console.log(gifs);
        return gifs;
        
}

export default getGifs;