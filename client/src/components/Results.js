import React, { Component } from "react";
import API from "../utils/API";

class Results extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.searchZillow("neighborhood")
    }

    searchZillow = query => {
        API.search(query)
            .then(res => this.setState({ results: res }),
            console.log(this.state.results))

            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.results.map(property => (
                        <li>
                            {property}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Results;