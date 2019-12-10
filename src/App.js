import React from 'react';

import './App.css';
import{Component} from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessageDate: "12/08",
      displayMessageUser: "Enter the user name",
      validThru: "",
      number: "",
      userName:"",
      validUser: {
        status: true,
        message: ""
      },
      validDate: {
        status: true,
        message: ""
      }
    };
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeDate = this.handleChangeDate.bind(this);
 
    }


      
   



   renderCardNumber(number) {
  
   if(number.target.value.length>15){
    let x=number.target.value.slice(0,16)
     x= x.toString()
    let resultStr = ''
    for(let i =0; i < number.target.value.length; i += 4) {
      resultStr += x.slice(i,i + 4) + ' '
   }
    return resultStr.trim()
  
   }
  
   number.target.value =number.target.value.toString()
    let resultStr = ''
    for(let i =0; i < number.target.value.length; i += 4) {
      resultStr += number.target.value.slice(i,i + 4) + ' '
    }
    
     resultStr.trim()
   
    this.setState({
      number: number.target.value
    });
  
  }

  
  handleChangeDate(event) {
  
    this.setState({
      validThru:
        event.target.value.substring(0, 2) +
        "/" +
        event.target.value.substring(2, 4),
      valid: { status: true, message: "" }
    });
  }

   
  handleChangeName(event) {
    var onlyTextRegex = /[^A-Za-z]/g;
    if (event.target.value.match(onlyTextRegex)) {
      this.setState({
        validUser: { status: false, message: "Tape only text" }
      });
    } else if (event.target.value.length > 20) {
      this.setState({ validUser: { status: false, message: "Max length 20" } });
    } else {
      this.setState({
        userName: event.target.value,
        valid: { status: true, message: "" }
      });
    }
  }
   






  render() { 
    const { validUser } = this.state;
    const { validDate } = this.state;
    return (
      <div>
        <div className="App">
          <div className="text-card">
            <h1>CREDIT CARD</h1></div>
    
          <div className="chip-card">
            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-card-chip-1522262-1288452.png" />
          </div>
          <div className="main-container">
            <div className="numbers">
    
              <div className="num-one">
                <p>{this.state.number}</p>
              </div>
              <div className="credit-card-info">
                <div className="card-num">
                  <p>5422</p>
                </div>
                <div className="info_expiry">
                  <div className="mon-th">
                    <p>MONTH/YEAR</p>
                  </div>
                  <div className="info-label">
                    <div className="valid">
                      <p>VALID<br />THRU</p>
                    </div>
                    <div className="arrow">
                      <i class="fas fa-caret-right"></i>
                    </div>
                    <div className="num">
                      <p>{this.state.validThru}</p>
                    </div>
                  </div>
    
    
                </div>
    
    
              </div>
              <div className="card-name">
                <p>{this.state.userName}</p>
              </div>
            </div>
            <div className="logo-card">
              <img src="https://www.clipartwiki.com/clipimg/full/57-577539_mastercard-clipart-credit-card-visa-and-mastercard-logo.png" />
            </div>
          </div>
    







        </div>
      
<form>
<input  type="number"  onChange={(e)=>this.renderCardNumber(e)}></input>
<input  type="text"  placeholder={this.state.displayMessageUser}  onChange={this.handleChangeName} ></input>
          
          
          {!validUser.status ? (
            <span style={{ color: "#ff0000" }}>{validUser.message}</span>
          ) : null}
          

          
  
  <input   type="number"  placeholder={this.state.displayMessageDate}onChange={this.handleChangeDate} ></input>
            
  {!validDate.status ? ( <span style={{ color: "#ff0000" }}>{validDate.message}</span>
          ) : null}
           
</form>



        </div>
    
      );

    
  }
}
 
export default App;


