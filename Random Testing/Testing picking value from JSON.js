fetch('https://content.guardianapis.com/search?api-key=4755d17e-dce0-4b88-ba7c-bcc8f0e21ed9')
            .then(response => response.json())
            .then(data => console.log(data));
