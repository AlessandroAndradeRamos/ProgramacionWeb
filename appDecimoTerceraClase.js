let request = require('request');


request('https://api.darksky.net/forecast/7861d0f3196d70329299ace94b9e4966/19.2433,-103.725', (err, respuesta, body)=>{
    let data = JSON.parse(body);
    console.log(data['currently']['temperature']);
});