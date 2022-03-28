import React,{useContext} from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { multiStepContext } from "./StepContext";



function InfoAdd(){
    const {setCurrentStep,userData, setUserData,submitData }=useContext(multiStepContext);
    return(
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Informations Additionnelles
            </Typography>
            
            <Grid container
                spacing={3}>
                
                <Grid item
                    xs={12}
                    md={14}>
                    <TextField
                        id="CentreInter"
                        label="Centre d'intérêt"
                        multiline
                        rows={4}
                        placeholder="Donnez vos centre d'intérêt"
                        variant="standard"
                        fullWidth
                        name="CentreInt"
                        value={userData.CentreInt}
                        onChange={(e)=>{setUserData({...userData,"CentreInt":e.target.value})}}
                    />
                </Grid>
                <Grid item
                    xs={12}
                    md={14}>
                    <TextField
                        id="vie"
                        label="Vie associative"
                        multiline
                        rows={4}
                        placeholder="Donnez des exemples sur votre vie associative"
                        variant="standard"
                        fullWidth
                        name="VieAsso"
                        value={userData.VieAsso}
                        onChange={(e)=>{setUserData({...userData,"VieAsso":e.target.value})}}
                    />
                </Grid> 
                <Grid item
                        xs={20}
                        sm={6}>
                        <button class="btn btn-light" onClick={()=>{setCurrentStep(2)}}>
                            Back
                        </button>
                    </Grid>
                <Grid item
                    xs={12}
                    sm={6}>
                    <button class="btn btn-light" onClick={()=>{submitData()}}>
                        Submit
                    </button>
                </Grid>   
            </Grid>
        </React.Fragment>
    )
}
export default InfoAdd;