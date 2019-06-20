import axios from "axios";

export default {
    getZip: function (zip) {
        return axios.get(`/api/external/zipcode/` + zip);
    },
    getListingsData: function (city) {
        return axios.get('/api/external/listings/' + city)
    }
};