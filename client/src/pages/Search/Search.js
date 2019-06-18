import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Search = props => {



    useEffect(() => {
        const { search } = this.props.match.params
        const { zipData } = this.props.location.state
        console.log({ search });
        console.log({ zipData });
    }, []);

    // const [zipData, setZipData] = useState({});
    // useEffect(() => { fetchregionInfo() }, []);
    // const [regionData, setRegionData] = useState(
    //     {
    //         city: zipData.city,
    //         state: zipData.state
    //     })

    // const fetchregionInfo = async () => {
    //     const regionData = await fetch('/search/:city/:state');
    //     setregionData({ regionData: { region: regionData } });
    //     console.log(regionData);
    // }



    return (
        <div>
            something goes here
        </div>
    )

}

export default Search;