import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class EnterId extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            test:false
        }
    }

    componentDidMount() {
        
    }

    submitId() {
        console.log(this.props);
        var uniqueId = this.refs.uniqueId.input.value;
        console.log(this.props);
        var main = this;
        this.props.fetchChain('http://143.199.167.89:3001/myTransactions',uniqueId).then(function(){
            console.log("in promise",main.props); 
            main.handleClose();           
        })
    }
    handleClose(){
        // this.props.openModal(false);
        this.props.openId(false);
    };

    render() {
        const style ={
            paddingLeft:'27px',
            display:'block'
        }
        const actions = [
                      <FlatButton
                        label="Cancel"
                        primary={true}
                        onTouchTap={this.handleClose.bind(this)}
                      />,
                      <FlatButton
                        label="Submit"
                        primary={true}
                        onClick={this.submitId.bind(this)}
                      />,
                        ];
        return (
           
                        
                        <div>
                            <Dialog
                            title=" Enter UniqueID"
                            actions={actions}
                            modal={true}
                            open={this.props.openIdModal}
                          >
                            
                          <TextField
                            style = {style}
                            
                            ref = "uniqueId"
                            floatingLabelText="Enter UniqueID"
                            floatingLabelFixed={false}
                          />
                          
                          </Dialog>
         </div>
        );
    }

}