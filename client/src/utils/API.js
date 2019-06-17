import axios from "axios";

const BASEURL = "http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz1h5053sv5e3_9d4gz&";
const API = "state=nc&city=charlotte&childtype=";

export default {
    search: function (query) {
        return axios.get(BASEURL + API + query)
    }
}