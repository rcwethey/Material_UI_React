import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const options = ['Damaged', 'Contaminated'];


export default function Disposal()
{
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
            <Autocomplete
                spacing={2}
                fullWidth
                value={value}
                onChange={(event, newValue) =>
                {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) =>
                {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                renderInput={(params) => <TextField {...params} label="Reason For Disposal" />}
            />
        </div>
    );
};

