import React, { PropTypes } from "react";

import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Refresh from 'material-ui/svg-icons/action/cached';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Statastics from 'material-ui/svg-icons/action/perm-identity';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import OrderDetails from '../components/dashboard/RecentlyProducts';
import Data from '../data';

import PopUpComponent from '../components/dashboard/PopUpComponent';

import { Link } from 'react-router';

export default class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      test: false,
    }
  }



  deleteAllOrders() {
  }

  refershOrders() {
  }
  handleOpen() {
    this.props.openModal(true);
  };

  dialogueOpen() {
  };

  transfer() {

    let from = this.refs.transferFrom.value;
    let to = this.refs.transferTo.value;
    let amount = this.refs.transferAmount.value;

    if (from === to || from === 'From' || to === 'To' || amount === '')
      this.setState({ test: true });
    else
      this.setState({ test: false });

    if(!this.state.test){
      this.props.transferFund("http://localhost:3001/transfer",from,to,amount)
    }
  }


  render() {
    console.log(this.state);
    var validation;
    if (this.state.test) {
      validation = "Invalid transfer";
    }
    else {
      validation = '';
    }

    return (
      <div>

        <div className="row">


          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 animate" onClick={this.handleOpen.bind(this)}>

            <InfoBox Icon={NoteAdd}
              color={pink600}
              title="Transact Funds"
            />
          </div>

          <PopUpComponent {...this.props }></PopUpComponent>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 animate" onClick={this.deleteAllOrders.bind(this)} >
            <InfoBox Icon={Delete} {...this.props}
              color={cyan600}
              title="Delete"
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 animate" onClick={this.refershOrders.bind(this)} >

            <InfoBox Icon={Refresh}
              color={purple600}
              title="Refresh"
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 animate" onClick={this.dialogueOpen.bind(this)}>
            <InfoBox Icon={Statastics}
              color={orange600}
              title="Stats"

            />

          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <NewOrders data={Data.dashBoardPage.newOrders} />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
            <MonthlySales data={Data.dashBoardPage.monthlySales} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <OrderDetails data={this.props.chain} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <BrowserUsage data={Data.dashBoardPage.browserUsage} />
          </div>
        </div>

        <div className="transfer" >
          <select className="From" ref="transferFrom">
            <option value="From">From</option>
            <option value="FundA">FundA</option>
            <option value="FundB">FundB</option>
          </select>

          <select className="To" ref="transferTo">
            <option value="To">To</option>
            <option value="FundA">FundA</option>
            <option value="FundB">FundB</option>
          </select>

          <input id="amount" type="number" placeholder="Enter Amount" ref="transferAmount" />

          <input id="transfer" type="button" onClick={this.transfer.bind(this)} value="Tranfer" />

          {validation}
        </div>
      </div>
    );
  };

}
