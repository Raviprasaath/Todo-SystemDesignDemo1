const express = require('express');
const app = express();

app.use((req, res, next)=> {
    res.setHeader('Permission-Policy', 'geolocation=()')
    next();
})

app.get('/page', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <h1>Fetch geolocation permission example</h1>
        <button onclick="getGeolocation()">Fetch Data</button>
        <div id="result"></div>
    
        <script>
            function getGeolocation() {
                // Check if the Geolocation API is supported by the browser
                if (navigator.geolocation) {
                    // Geolocation is supported
                    navigator.geolocation.getCurrentPosition(
                        function (position) {
                            // Success callback - position object contains the user
                            const latitude = position.coords.latitude;
                            const longitude = position.coords.longitude;
    
                            console.log('Latitude', latitude);
                            console.log('Longitude', longitude);
                        },
                        function (error) {
                            // Error callback - handle errors
                            switch (error.code) {
                                case error.PERMISSION_DENIED:
                                    console.error('User Denied the request for Geolocation');
                                    break;
                                case error.POSITION_UNAVAILABLE:
                                    console.error('Location information is unavailable')
                                    break;
                                case error.TIMEOUT:
                                    console.error('The request to get the location timeout');
                                    break;
                                case error.UNKNOWN_ERROR:
                                    console.error('An unknown error occurred');
                                    break;
                            }
                        }
                    )
                } else {
                    //  Geolocation is not supported by the browser 
                    console.error('Geolocation is not supported by this browser');
                }
            }
        </script>
    </body>
    </html>
    `)
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
