import React, {Component} from 'react';
import GetCountry from "./GetFunctions";

class GetCountryComponent extends Component {
    constructor() {
        super();
        this.state = {
            countries: [],
        };
    }

    componentDidMount(){
        GetCountry("Sweden").then(data => {
        console.log(data);
        
        let countries = data.office.map((countr, i) => {
            
            return(
                <div key={countr.i++}>
                    <h2>{countr.officename}</h2>
                    {console.log(countr)}
                </div>
            )
            })
        this.setState({countries});
        })
    }
    render(){
        return(
            <div>{this.state.countries}</div>
        )
    }
    
};
export default GetCountryComponent;