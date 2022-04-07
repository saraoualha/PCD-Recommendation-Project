import React from "react";

import AgendaPartagee from "./AgendaPartagee";

import agenda from  "../../../../assets/images/agendaa.jpg";
import "../../../../styles/AgendaPartagee/AgendaPartagee.css"


class AcceuilAgen extends React.Component{
  state = {
    credentials: {Id_Calend:localStorage.getItem("IdUser"), Date:'', StartTime:'', EndTime:'',LoginRec:localStorage.getItem("LoginUser")},
    isLogin:false ,
  }
  
  register = event => {
    fetch('http://127.0.0.1:8000/PcdApp/agenda/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .catch( error => console.error(error))
  }
  inputChanged = (event) => {
    const cred = this.state.credentials;
    console.log(event.target.value);
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
    
  }
fetchLogin = event => {
  var id = this.state.Id_Calend
    fetch(`http://127.0.0.1:8000/PcdApp/agenda/`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(res => {console.log(res);})
    .catch( error => console.error(error))
  }

  render(){
        return(
            <div>
     
         
              <img src={agenda} width='90%' height='380px'   style={{ alignSelf: 'center',
                                                                       paddingLeft :'160px' }}/>
              <div  style={{ alignSelf: 'center', paddingLeft :'130px' }}>
              <h4 className="hh">Selectionner puis valider la date et le temps de votre disponibilité</h4>
                <div className="contenuag">
                  <div className="contenue">
                    <p><div className="datelibre"> Sélectionner la date selon votre disponibilité 
                    <i className="tempslibre">Sélectionner le temps selon votre disponibilité</i></div></p>
                  <div>
                  <i class="dat"> 
                    <input type="date" name="Date"
                    value = {this.state.credentials.Date}
                    onChange ={this.inputChanged}>
                    </input>
                  </i>
                  <i className="tempsdepart">
                   <input type="time" name="StartTime" 
                    value = {this.state.credentials.StartTime}
                    onChange ={this.inputChanged}>
                    </input>
                  </i>&nbsp;&nbsp;
                  <i className="tempsfinal"> 
                   <input type="time" name="EndTime" 
                      value = {this.state.credentials.EndTime}
                      onChange ={this.inputChanged}>
                   </input>
                  </i>
              </div>
<br/><br/>
              <div className="valide">
                <button 
                      type="button" 
                      class="btn btn-outline-secondary"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 4, mb:2 }}
                      onClick= {this.register} 
                    >
                      Valider
         </button></div></div>
          <br/>
         <h4 className="hhh">Votre Agenda</h4>
         <button 
                      type="button" 
                      class="btn btn-outline-secondary"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 4, mb:2 }}
                      onClick= {this.fetchLogin} 
                    >
                      fetch
         </button>
         
           <AgendaPartagee/>
         </div>
        </div>
        </div>
     
        );
    }
  }
export default AcceuilAgen ;