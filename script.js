async function getJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        
        
        if (!response.ok) {
            throw new Error('Failed to fetch a joke. Please try again later.');
        }

        const data = await response.json();

        let joke = '';
        if (data.type === 'single') {
            joke = data.joke;
        } else if (data.type === 'twopart') {
            joke = `${data.setup} ${data.delivery}`;
        } else {
            throw new Error('Unexpected joke format.');
        }

        
        document.getElementById('joke').innerText = joke;
        document.getElementById('character-count').innerText = `Character count: ${joke.length}`;

    } catch (error) {
        
        document.getElementById('joke').innerText = `Oops! Something went wrong: ${error.message}`;
        document.getElementById('character-count').innerText = 'Character count: 0';
    }
}

function clearJoke() {
    document.getElementById('joke').innerText = 'Press the button for a joke!';
    document.getElementById('character-count').innerText = 'Character count: 0';
}
