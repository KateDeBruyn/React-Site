//Code snippets: rcc to create component

//Make the name of the file the name of the component.
//Component is a class that lives in React.
import React, {Component} from 'react';

const imageUrl = 'https://images.pexels.com/photos/16080108/pexels-photo-16080108/free-photo-of-father.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

//The hello component extends the component.
//Can also say export default class Hello extends Component...
class Hello extends Component {
    render(){

        const hello_Again = <h2>Hello again and again</h2>;

        return(
            <React.Fragment>
                <h1>Hello World, again</h1>
                <p>{hello_Again}</p>
                <img src={imageUrl}/>
            </React.Fragment> 
        )
    }
}

export default Hello;
