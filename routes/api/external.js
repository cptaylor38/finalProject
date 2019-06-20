require('dotenv').config();
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

router.route('/listings/:city').get((req, res) => {
    const craigslist = require('node-craigslist'),
        client = new craigslist.Client({
            city: req.params.city
        }),
        options = {
            category: 'waa'
        };

    client
        .list(options)
        .then((listings) => {
            // play with listings here...
            res.send(listings);
        })
        .catch((err) => {
            console.error(err);
        });
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
