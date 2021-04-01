//GetRequestAsyncAwait
import React from 'react';
//class
class GetRequestAsyncAwait extends React.Component {
    constructor(props) {
        super(props);
        this.state = { totalReactPackages: null };
    }
//async
async componentDidMount() {
    const response = await fetch('https://api.npms.io/v2/search?q=react');
    const data = await response.json();
    this.setState({ totalReactPackages: data.total});
}
//render 
render() {
    const { totalReactPackages } = this.state;
    return (
        <div className='card text-center m-3'>
            <h5 className='card-header'>GET Request with ASync/Await</h5>
                <div className='card-body'>Total packages: {totalReactPackages}</div>
        </div>
    );
}
}
export default GetRequestAsyncAwait; // export ASync/Await