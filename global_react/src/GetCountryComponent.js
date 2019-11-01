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
        
        let countries1 = data.office.map((countr) => {
            
            return(
                <div key={countr}>
                    <h2>{countr.officename}</h2>
                    {console.log(countr)}
                    {this.setState({countries: countr})};
                    {console.log(this.state.countries)}
                </div>
            )
            })
        
        })
    }
    render(){
        return(
            <div>sdfsdfsd{this.state.countries.toString()} {console.log(this.state.countries)}</div>
           
        )
    }
    
};
export default GetCountryComponent;