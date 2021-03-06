import React, {useContext} from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {multiStepContext} from "./StepContext";

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({email: data.get('email'), password: data.get('password')});
};


function InfoAdd() {
    const {
        setCurrentStep,
        userData,
        setUserData,
        submitData,
        finalData
    } = useContext(multiStepContext);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Informations Additionnelles
            </Typography>

            <Grid container
                spacing={3}>

                <Grid item
                    xs={12}
                    md={14}>
                    <TextField id="CentreInter" label="Centre d'intérêt" multiline
                        rows={4}
                        placeholder="Donnez vos centre d'intérêt"
                        variant="standard"
                        fullWidth
                        name="CentreInt"
                        value={
                            userData.CentreInt
                        }
                        onChange={
                            (e) => {
                                setUserData({
                                    ...userData,
                                    "CentreInt": e.target.value
                                })
                            }
                        }/>
                </Grid>
            <Grid item
                xs={12}
                md={14}>
                <TextField id="vie" label="Vie associative" multiline
                    rows={4}
                    placeholder="Donnez des exemples sur votre vie associative"
                    variant="standard"
                    fullWidth
                    name="VieAsso"
                    value={
                        userData.VieAsso
                    }
                    onChange={
                        (e) => {
                            setUserData({
                                ...userData,
                                "VieAsso": e.target.value
                            })
                        }
                    }/>
            </Grid>
        <Grid item
            xs={20}
            sm={1}>
            <button class="btn btn-light"
                onClick={
                    () => {
                        setCurrentStep(2)
                    }
            }>
                Précédent
            </button>
        </Grid>
        <Grid item
            xs={20}
            sm={10}></Grid>
        <Grid item
            xs={12}
            sm={1}>
            <button class="btn btn-light"
                onClick={
                    () => {
                        submitData()
                    }
                }
                style={{marginLeft:'-30px'}}
            >
                Soumettez
            </button>
        </Grid>
    </Grid>
</React.Fragment>
    )
}
export default InfoAdd;
