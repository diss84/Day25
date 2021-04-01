//PostRequestErrorHandling
import React from 'react';
//class
class PostRequestErrorHandling extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articleId: null, errorMessage: null};
    }
//Didmount
componentDidMount() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ title: 'React POST Request Example'}),
    }
    fetch('https://jsonplaceholder.typicode.com/invalid-url', requestOptions)
    .then(async (response) => {
        const data = await response.json();
        // error check
    if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
    }
    this.setState({ articleId: data.id });
    })
    .catch((error) => {
        this.setState({ errorMessage: error });
        console.log('There was an error!', error);
    })
}
//render
render() {
    const { errorMessage } = this.state;
    return (
        <div className='card text-center m-3'>
            <h5 className='card-header'>POST Request with Error Handling</h5>
                <div className='card-body'>
                    Error message: {errorMessage}
                    </div>
        </div>
    );
}
}
export default PostRequestErrorHandling; // export
