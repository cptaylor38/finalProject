require('dotenv').config();
const key = require("../../models/spotifykey");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(key.spotify);
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.route('/zipcode/:zipcode').get((req, res) => {
    axios.get(`http://api.zippopotam.us/us/${req.params.zipcode}`)
        .then((response) => {
            let data = {
                dataStructure: response.data
            }
            res.send(data.dataStructure);
        }).catch(err => {
            console.log(err)
        });
});

router.route('/tracks/:track').get((req, res) => {
    let userQuery = req.params.track;
    spotify.search({ type: 'track', query: userQuery, limit: 10 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        else {
            const extractedData = data.tracks.items.map((object, index) => {
                let id = index;
                let artist = object.artists[0].name;
                let name = object.name;
                let url = object.preview_url;
                let album = object.album.name;
                let albumURL = object.external_urls.spotify;

                if (artist && name && url && album && id && albumURL) {
                    const Query = {
                        id: id + 1,
                        artist: artist,
                        name: name,
                        url: url,
                        album: album,
                        albumURL: albumURL
                    }
                    console.log(Query);
                    return Query;
                }

            });
            console.log(extractedData);
            res.send(extractedData);
        }
    })
});

module.exports = router
// module.exports = function (app) {
//     app.get('/zipcode/:zipcode', (req, res) => {
//         console.log('app.get/zipcode ran');
//         axios.get(`http://api.zippopotam.us/us/${req.params.zipcode}`)
//             .then((response) => {
//                 console.log('zipcode = ' + response);
//                 res.json(response);
//             });
//     });

    // app.get('/search/:city/:state', (req, res) => {
    //     console.log('something')
    //     axios.get(`http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=${process.env.zillowKey}&state=wa&city=seattle&childtype=neighborhood`)
    //         .then(response => {
    //             console.log('.then of /search ran');
    //             res.json(response)
    //         }

    //         );
    // });

//     app.get('/maps/:latitude/:longitude', (req, res) => {
//         console.log('google map api accessed');
//         axios.get(`https://www.google.com/maps/embed/v1/view?key=${process.env.googleKey}&center=${req.params.latitude},${req.params.longitude}&zoom=18&maptype=satellite`)
//             .then(response => {
//                 console.log('google maps axios called' + response);
//                 res.json(response)
//             }
//             );
//     })
// }
