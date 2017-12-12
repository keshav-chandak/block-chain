import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../../theme-default';

import Header from '../Header';

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
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <button onClick={this.click.bind(this)}>click here{this.props.likes}!!!</button>                        
                    <Header/>
                    <div className="block-container">
                        {React.cloneElement(this.props.children,this.props)}
                    </div>
                </div>
            </MuiThemeProvider>)
    }
};


export default Main;