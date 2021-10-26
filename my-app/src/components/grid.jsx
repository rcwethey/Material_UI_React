import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Disposal from './disposal';
import ShiftChoice from './shift';
import { InputAdornment } from '@mui/material';

import { Container } from '@mui/material';


export default function GridForm(props)
{
    const data = React.useState({
        login: '',
        asin: '',
        product_name: '',
        weight: '',
        quantity: '',
    });// 

    return (
        <React.Fragment >
            <Container maxWidth="lg" sx={{

                boxShadow: 1,
                borderRadius: '12px',

            }}>
                <Grid container spacing={2} mt={5}>
                    <Grid item xs={6} md={6} >
                        <TextField
                            id="login"
                            value={data.login}
                            label="Your Login"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Disposal />
                    </Grid>
                    <Grid item xs={6} md={6} >
                        <TextField
                            id="asin"
                            label="Product ASIN or UPC"
                            value={data.asin}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6} md={6} >
                        <TextField
                            id="ProductName"
                            label="Product Name"
                            value={data.product_name}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6} md={6} >
                        <TextField
                            label="Prodct Weight"
                            id="ProductWeight"
                            value={data.weight}
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} >
                        <TextField
                            id="Quantity"
                            label="Quantity"
                            fullWidth
                            variant="outlined"
                            value={data.quantity}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} mb={5}>
                        <ShiftChoice />
                    </Grid>
                </Grid>

            </Container>
        </React.Fragment>

    );
}