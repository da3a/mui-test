import React from "react"

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


function Body() {
    return (
        <Grid container direction="column" style={{ height: "70vh" }}>
            <Grid item sm style={{ border: "1px solid black" }}>
                <Paper>
                    <Typography variant="h4" color="primary"> Welcome: Name: David Wallwin</Typography>
                    <Typography variant="h4" color="primary">Press start to begin the survey</Typography>
                    <Button variant="contained" color="primary">Start</Button>
                </Paper>
            </Grid>
        </ Grid >
    )
}

export default Body