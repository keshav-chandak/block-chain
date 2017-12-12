import React from "react";
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';

export default class Login extends React.Component {
    
    moveLeft(event){

        $('#textbox').animate({
            'marginLeft': "0" //moves left
          });
        
          $('.toplam').animate({
            'marginLeft': "100%" //moves right
          });
    }

    moveRight(event){

        $('#textbox').animate({
            'marginLeft': "50%" //moves right
          });
        
          $('.toplam').animate({
            'marginLeft': "0" //moves right
          });
    }

    // $('.form-control').on('focus blur', function (e) {
    //     $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));                
    // }).trigger('blur');

  render() {
    

    return (
        <div className="login">
        <div id="fback">
          <div className="girisback" />
          <div className="kayitback" />
        </div>
        <div id="textbox">
          <div className="toplam">
            <div className="left">
            <button id="moveright" className="pull-right" onClick={this.moveRight.bind(this)}>Participant Login</button>
            
              <div id="ic">

                <h2>Sponser</h2>
                <form
                  className="girisyap"
                  name="signup_form"
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={()=>{return false;}}
                >
                    <TextField
                    hintText="Enter Username"
                    floatingLabelText="Username"
                    />
                    <TextField
                    hintText="Enter Password"
                    floatingLabelText="Password"
                    />

                    <Link to="/PPTDashboard" >
                        <input
                            type="button"
                            name="signup_submit"
                            id="signup_submit"
                            value="Login"
                            className="girisbtn"
                        />
                    </Link>
                </form>

              </div>
            </div>

            <div className="right">
            <button id="moveleft" className="pull-right" onClick={this.moveLeft.bind(this)}>Sponser Login</button>
              <div id="ic">
                <h2>Participant</h2>
                <form
                  name="login-form"
                  className="girisyap"
                  method="post"
                  onSubmit={()=>{return false;}}
                >

                    <TextField
                        hintText="Enter Username"
                        floatingLabelText="Username"
                    />
                    <TextField
                        hintText="Enter Password"
                        floatingLabelText="Password"
                    />

                  <Link to="/PPTDashboard" >
                        <input
                            type="button"
                            name="Login"
                            id="Login"
                            value="Login"
                            className="girisbtn"
                        />
                    </Link>
                </form>

              </div>
            </div>
          </div>
          </div>
          <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

        <script src="js/index.js"></script>

        </div>
    );
  }
}
