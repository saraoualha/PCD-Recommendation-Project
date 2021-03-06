import { ContactSupportOutlined } from '@material-ui/icons';
import { id } from 'date-fns/locale';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderRec from '../HeaderRec';

class Listedescand extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLogin: false,
            NomSuj: [],
            nom: '',
            id: [],
            idSupp: [],
            isSujet: '',
            dataSuj: [],
            credentials: {
                Id_sujet: '',
                Titre: '',
                Description: '',
                Domaine: '',
                duree: '',
                Tech: '',
                paye: '',
                Bin: '',
                Att: '',
                LoginRec: ''
            },
            stud: '',
            idsu: '',
            cred: {
                //  id:'',
                recruteur: localStorage.getItem("LoginUser"),
                student: '',
                id_sujet: '',
                Att: true
            },
            notifData:[]
        };
    }
  



    fetchDataSujet() {
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/`)

            .then(response => response.json())
            .then((result) => {
                for (let i = 0; i < result.length; i++) {
                    if (result[i].LoginRec == localStorage.getItem("LoginUser")) {
                        this.setState({ dataSuj: [...this.state.dataSuj, result[i]] })
                        this.setState({
                            id: [...this.state.id, result[i].Id_sujet]
                        })
                        this.setState({
                            NomSuj: [...this.state.NomSuj, result[i].Titre]
                        })
                        this.setState({
                            isSujet: true
                        })
                        localStorage.setItem('isSujet', true)
                    }
                   

                }
                
          //      for (let i = 0; i < result.length; i++) {
                // if(result[i].Att === true ){
                //     this.setState ({
                //         idSupp :[...this.state.idSupp , result[i].Id_sujet]
                //     })
                // }}
               
                console.log(this.state.dataSuj);
                console.log(this.state.id);
                console.log(this.state.NomSuj);
                console.log(this.state.isSujet);
            });
    }
    deleteDataSujet(){
      
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/`)
        .then(response => response.json())
        .then((result) => {
            for (let i = 0; i < result.length; i++) {
                if (result[i].Att == true){
                    this.setState({
                     idSupp: [...this.state.idSupp , result[i].Id_sujet]
                    })
                }

            }
            console.log(this.state.idSupp)
        })
    
        
}

    update = (event, id, idstu, ids) => {
        //var id=this.state.credentials.Login;
        fetch(`http://127.0.0.1:8000/PcdApp/interessant/${id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "recruteur": localStorage.getItem("LoginUser"),
                    "student": idstu,
                    "id_sujet": ids,
                    "Att": true
                })
        })
            .then(data => data.json())
            .then(console.log(this.state.cred))
            .catch(error => console.error(error))
    }
 delSuj = (id) =>{
    // console.log(this.state.idSupp)
     //for (let i= 0; this.state.idSupp.length ;i++){
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/${id}/`, {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()})
    // }
 }
    updateSuj = (event) => {
        for (let i = 0; this.state.dataSuj.length; i++) {
            for (let j = 0; this.state.data.length; j++) {
                console.log(this.state.dataSuj[i].Id_sujet);
                console.log(this.state.data[j])
                if (this.state.dataSuj[i].Id_sujet == this.state.data[j].id_sujet) {
                    fetch(`http://127.0.0.1:8000/PcdApp/sujet/${this.state.dataSuj[i].Id_sujet}/`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            {
                                "Titre": this.state.dataSuj[i].Titre,
                                "Description": this.state.dataSuj[i].Description,
                                "Domaine": this.state.dataSuj[i].Domaine,
                                "duree":this.state.dataSuj[i].duree,
                                "Tech":this.state.dataSuj[i].Tech,
                                "paye":this.state.dataSuj[i].paye,
                                "Bin":this.state.dataSuj[i].Bin,
                                "Att": true,
                                "LoginRec":this.state.dataSuj[i].LoginRec
                            })
                    })
                        .then(data => data.json())
                       // .then(console.log(this.state.cred))
                        .catch(error => console.error(error))

                }else {console.log("n'existe pas")}
            }
        }
        //var id=this.state.credentials.Login;

    }

    fetchData() {
        fetch(`http://127.0.0.1:8000/PcdApp/interessant/`)

            .then(response => response.json())
            .then((result) => {
                for (let i = 0; i < result.length; i++) {
                    if (result[i].recruteur == localStorage.getItem("LoginUser")) {
                        this.setState({ data: [...this.state.data, result[i]] })
                        this.setState({
                            isLogin: true
                        })
                        localStorage.setItem('isLogin', true)
                    }

                }
                //console.log(this.state.data);
                //console.log(this.state.isLogin);
            });
    }
    deleteData= (id)  => {
        fetch(`http://127.0.0.1:8000/PcdApp/interessant/${id}/`, {
                        method: 'Delete',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify()}
        )

    }
    /* oooooooooooooooooooooooooooooooo*/
    /*date=new Date()
    let jour;
    var mois;
    var tempsM;
    var tempsH;
    const fixJour=()=>{
        
        if (date.getDate()<10)
            jour="0"+date.getDate();
        else 
            jour= date.getDate();
    }
    const fixMois=()=>{
        
        if (date.getMonth()<9)
            mois="0"+date.getMonth();
        else 
            mois= date.getMonth();
    }
    const fixMinu=()=>{
        if (date.getMinutes()<10)
            tempsM="0"+date.getMinutes();
        else 
            tempsM= date.getMinutes();
    }
    const fixheure=()=>{
        if (date.getHours()<10)
            tempsH="0"+date.getHours();
        else 
            tempsH= date.getHours();
    }*/
    /*addNotif=()=>{
        console.log("dans addNotif");
        const date=new Date();
        let jour;
        var mois;
        var tempsM;
        var tempsH;
        const fixJour=()=>{
        
            if (date.getDate()<10)
                jour="0"+date.getDate();
            else 
                jour= date.getDate();
            console.log('ya rabi sabrni ')
        }
        const fixMois=()=>{
        
            if (date.getMonth()<9)
                mois="0"+date.getMonth();
            else 
                mois= date.getMonth();
        }
        const fixMinu=()=>{
            if (date.getMinutes()<10)
                tempsM="0"+date.getMinutes();
            else 
                tempsM= date.getMinutes();
        }
        const fixheure=()=>{
            if (date.getHours()<10)
                tempsH="0"+date.getHours();
            else 
                tempsH= date.getHours();
        }
        fixJour();
        fixMois();
        fixMinu();
        fixheure();
        const format="Le "+ jour + "/" + mois + "/" + date.getFullYear() + " ?? " + tempsH + ":" + tempsM ;
        this.setState({notifData: {'Recruteur': this.state.data.recruteur, 'Student':this.state.data.student,'Sujet':this.state.NomSuj, 'Nom':'lala', 'Time':format}})
        fetch('http://127.0.0.1:8000/PcdApp/notifEtu/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.notifData)
        }).then(data => data.json()).catch(error => console.error(error))
    }*/
    /*ooooooooooooooooooooooooo*/
    
    componentDidMount() {
        this.fetchData();
        this.fetchDataSujet();
        this.deleteDataSujet();
        //this.delSuj()
    }

    IsSujett(idd) {
        for (let i = 0; i < this.state.id.length; i++) {
            if (this.state.id[i] === idd) {

                return i;
            }
        }
    };

    //&& this.state.id ==inter.id_sujet
    render() {

        const interData = this.state.data;
        const rows = interData.map((inter) =>

        (this.state.isLogin && <tr key={inter.id}>

            {localStorage.setItem("Id_inter", inter.id)}
            <td>{inter.student}</td>
            <td> {this.state.NomSuj[this.IsSujett(inter.id_sujet)]}</td>
            <td>
                <button
                    type="button"
                    class="btn btn-outline-secondary"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 4, mb: 2 }}
                    onClick={(e) => { this.update(e, inter.id, inter.student, inter.id_sujet) ; this.updateSuj(e);this.addNotif(); this.delSuj(inter.id_sujet)   
                        }}
                >
                    Confirmer
                </button>
            </td>
            <td><button onClick={() => {this.deleteData(inter.id); window.location.reload(true)}} className="btn btn-danger">Refuser</button></td>
        </tr>));
        return (
            <div>
                <HeaderRec/>
                {!this.state.isLogin && <div>
                    Aucun candidat n'est postul?? ?? vos sujet

                </div>}
                {this.state.isLogin && <div classname='paddbody' style={{ paddingRight: '100px' }}>
                    <h4 style={{
                        textAlign: 'center',
                        paddingTop: '20px',
                        color: '#023C59'
                    }} >Liste des candidatures</h4>
                    <div style={{
                        border: '3px solid #023C59',
                        borderRadius: '8px',
                        marginLeft: '155px',
                        marginRight: '155px',



                    }}>
                        <table class="table">
                            <thead>


                                <tr>
                                    <th scope="col">Login d'??tudiant</th>
                                    <th scope="col">Titre Sujet</th>
                                    <th scope="col">Confirmer</th>
                                    <th scope="col">Refuser</th>
                                </tr>


                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>}


            </div>
        );
    }


}
export default Listedescand;