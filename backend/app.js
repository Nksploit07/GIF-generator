const API_KEY = "YOUR_GIFPHY_API_KEY"; // Replace with your actual Giphy API key
export async function handler(event) {
    const query = event.queryStringParameters?.query || undefined;
    const GIPHY_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${query}`;

    try {
        // validating the query parameter 
        if (query === undefined) {
            return {
                statusCode: 400,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({ error: "Query parameter 'query' is missing" }),
            };
        }
        // calling GIPHY Api
        const response = await fetch(GIPHY_URL);
        const data = await response.json();
        console.log("Giphy API Response:", data.data.images.original.url);

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Enable CORS
                "Access-Control-Allow-Methods": "GET",
            },
            body: JSON.stringify({
                gif_url: data.data.images.original.url // returning the gif url
            }),
        };
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ error: "Failed to fetch GIFs" }),
        };
    }
}
