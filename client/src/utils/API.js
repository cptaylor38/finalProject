import axios from "axios";

export default {
    getTracksData: function (track) {
        return axios.get('/api/external/tracks/' + track);
    },
    createUser: function (newUser) {
        console.log(`newUser data = ${newUser}`);
        return axios.post('/api/user/create', newUser);
    },
    createEntry: function (newEntry) {
        return axios.post('/api/entry/create', newEntry)
    },
    getProfile: function (uid) {
        return axios.get('/api/user/' + uid);
    }
};