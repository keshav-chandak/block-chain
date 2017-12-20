import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class PopUpComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            from:"from",
            to :"to",
            amount:0,
            uniqueId:0,
            test:false
        }
    }

    componentDidMount() {
        
    }

    transfer(amount,uniqueId) {
        
            let from = this.state.from;
            let to = this.state.to;
        
            if (from === to || from === 'from' || to === 'to' || amount === ''){
                this.setState({ test: true });
            }
              
            else{
                this.setState({ test: false });
            }
        
            if(!this.state.test){
              this.props.transferFund("http://localhost:3001/transfer",from,to,amount,uniqueId);
              this.handleClose();
            }
          }

    createTransaction() {
        var number = this.refs.amount.input.value;
        var uniqueId = this.refs.uniqueId.input.value;
        this.transfer(number,uniqueId)
        console.log(number,uniqueId);
        console.log(this.props);
    }
    handleClose(){
        // this.props.openModal(false);
        this.props.openModal(false);
    };

    handleFromChange(event, index, value){
        this.setState({from:value});
    } 

    handleToChange(event, index, value){
        this.setState({to:value});
    }

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
                        onClick={this.createTransaction.bind(this)}
                      />,
                        ];
        return (
           
                        
                        <div>
                            <Dialog
                            title=" Create a Transaction"
                            actions={actions}
                            modal={true}
                            open={this.props.open}
                          >
                            <DropDownMenu value={this.state.from} onChange={this.handleFromChange.bind(this)}>
                                <MenuItem value={"from"} primaryText="From" />
                                <MenuItem value={"fundA"} primaryText="Fund A" />
                                <MenuItem value={"fundB"} primaryText="Fund B" />
                            </DropDownMenu>
                           <DropDownMenu value={this.state.to} onChange={this.handleToChange.bind(this)}>
                            <MenuItem value={"to"} primaryText="TO" />
                            <MenuItem value={"fundA"} primaryText="Fund A" />
                            <MenuItem value={"fundB"} primaryText="Fund B" />
                          </DropDownMenu>
                          <TextField
                            style = {style}
                            ref = "amount"
                            type = "number"
                            floatingLabelText="Enter the amount"
                            floatingLabelFixed={false}
                          />
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