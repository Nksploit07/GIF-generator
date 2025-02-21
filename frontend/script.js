const API_GATEWAY_URL = "YOUR_HTTP_API_URL"

async function fetchGif() {
    const query = document.getElementById("search-input").value.trim();
    if (!query) {
        alert("Please enter a search term!");
        return;
    }

    const gifContainer = document.getElementById("gif-container");
    gifContainer.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(`${API_GATEWAY_URL}?query=${query}`);
        const data = await response.json();

        if (data.error) {
            gifContainer.innerHTML = `<p>No GIF found!</p>`;
        } else {
            gifContainer.innerHTML = `<img src="${data.gif_url}" alt="GIF">`;
        }
    } catch (error) {
        console.error("Error fetching GIF:", error);
        gifContainer.innerHTML = `<p>Failed to fetch GIF. Try again!</p>`;
    }
}
