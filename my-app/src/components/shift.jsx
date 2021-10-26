import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Wrapdown', 'Sunrise', 'Morning', 'Day', 'Twilight', 'Night'];

export default function ShiftChoice() {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
            <Autocomplete
                spacing={5}
                value={value}
                fullWidth
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                renderInput={(params) => <TextField {...params} label="Select Your Shift" />}
            />
        </div>
    );
};

