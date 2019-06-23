const data = zipInput;
API.getZip(data)
    .then(res => {
        let city = res.data.places[0]['place name'];
        let state = res.data.places[0]['state'];
        setZipValue({ city: city, state: state, zipcode: zipInput });
        gettracks(city);
    })
    .catch(err => console.log(err));
setZipInput('');