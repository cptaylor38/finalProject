import axios from "axios";

export default {
    getZip: function (zip) {
        return axios.get(`/api/external/zipcode/` + zip);
    },
    getTracksData: function (track) {
        return axios.get('/api/external/tracks/' + track)
    }
};