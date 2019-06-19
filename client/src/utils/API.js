import axios from "axios";

export default {
    getZip: function (zip) {
        console.log(zip);
        console.log('API.getzip ran');
        return axios.get(`/api/external/zipcode/` + zip);
    }
};
