import axios from "axios";

<<<<<<< HEAD
const BASEURL = "http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz1h5053sv5e3_9d4gz&";
const API = "state=nc&city=charlotte&childtype=";

export default {
    search: function (query) {
        return axios.get(BASEURL + API + query)
    }
}
=======
export default {
    getZip: function (zip) {
        console.log(zip);
        console.log('API.getzip ran');
        return axios.get(`/api/external/zipcode/` + zip);
    }
};
>>>>>>> 5474dab5bf1e700ee3782f7ff2e147d79dd191f7
