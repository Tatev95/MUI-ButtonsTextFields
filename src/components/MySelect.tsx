import { Box, TextField} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        'MuiBackdrop-root MuiBackdrop-invisible css-g3hgs1-MuiBackdrop-root-MuiModal-backdrop':{
            color: 'red !important'
        }
      },
});


function MySelect() {
    const classes = useStyles();

    return (
        <>  
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    className = { classes.root }

                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
        {/* <Box width="250px">
      <TextField
        label="Select country"
        select
        fullWidth
        SelectProps={{
          multiple: true
        }}
        size='small'
        color='secondary'
        helperText='Please select your country'
        error

      >
        <MenuItem value="AM">Armenia</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="FR">France</MenuItem>
      </TextField>
    </Box> */}
        </>
      
    )
}

export default MySelect