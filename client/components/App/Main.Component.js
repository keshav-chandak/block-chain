import React from 'react';

class Main extends React.Component {

    componentDidMount() {
        console.log("asd",...this.props);

    }

    constructor(props){
        super(props);
    }
    click(){
        this.props.incrementLikes(this.props.likes);
        console.log(this.props);
    }

    render() {
        console.log("asd",this.props);
        
        return (
            <div>
                <button onClick={this.click.bind(this)}>click here{this.props.likes}!!!</button>
            </div>)
    }
};


export default Main;