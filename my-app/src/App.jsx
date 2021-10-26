import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import GridForm from "./components/grid";
import PrintIcon from '@mui/icons-material/Print';
import { Container, IconButton, FormControl, DialogContent, Dialog, Button, DialogTitle, DialogActions } from "@mui/material";
import { Grid, InputLabel, OutlinedInput, } from '@mui/material';



function App(props)
{

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () =>
    {
        setOpen(true);
    };

    const handleClose = () =>
    {
        setOpen(false);
    };
    const [values, setValues] = React.useState({
        printer_ip: 'localhost',
        printer_port: '5964',
    });

    const handleInputChange = (prop) => (event) =>
    {
        setValues({ ...values, [prop]: event.target.value });
        event.preventDefault();
    };

    return (

        <div className="App">
            <Container

                sx={{
                    width: "80%",
                    height: "50%",
                }}

            >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton color="inherit" onClick={() => alert(props.login)} >
                                <PrintIcon>

                                </PrintIcon>
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
                                Hazardous Label Maker
                            </Typography>

                            <IconButton

                                color="inherit"
                                onClick={handleClickOpen}

                            ><SettingsIcon />
                            </IconButton>

                        </Toolbar>
                    </AppBar>
                </Box>
                <GridForm />
            </Container>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle align="center">Printer Settings</DialogTitle>
                <DialogContent>
                    <Grid item align="center" sx={{
                        display: 'inline-grid',
                        gap: 1,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        m: 2,

                    }}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Printer IP</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.printer_ip}
                                onChange={handleInputChange('printer_ip')}
                                label="printer_ip"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Printer Port</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.printer_port}
                                onChange={handleInputChange('printer_port')}
                                label="printer_port"
                            />
                        </FormControl>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default App;
