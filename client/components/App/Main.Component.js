import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../../theme-default';
import Websocket from 'react-websocket';

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
        console.log("before",this.props);
        var main = this;
        this.props.fetchChain('http://143.199.167.89:3001/chain').then(function(){
            console.log("in promise",main.props);            
        })
        console.log("after",this.props);
    }

    handleData(data){
        console.log(data);
        let msg = '';
        for (let i = 0; i < data.length; i++) {
          if (i >= 3)
            msg += data[i];
          if (data[i] == "}" && data[i + 1] != "}")
            break;
        }
        console.log(msg);

    }

    render() {
        
        return (
            <div>
                <MuiThemeProvider muiTheme={ThemeDefault}>
                    <div>
                        <Header/>
                        <div className="block-container">
                            {React.cloneElement(this.props.children,this.props)}
                        </div>
                    </div>
                </MuiThemeProvider>
                <Websocket url="ws://localhost:3001/socket.io/?transport=websocket"
                onMessage={this.handleData.bind(this)} />
            </div>)
    }
};


export default Main;