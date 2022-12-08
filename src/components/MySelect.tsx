import { Box, TextField, Button } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import { Stack } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';


const useStyles = makeStyles({
  root: {
    width: '200px',
    borderRadius: '0 !important',
    '& label.Mui-focused': {
      color: 'rgba(190, 176, 130, 1) !important',  // focused label color
    },
    inputLabelRoot: {
      color: 'red !important',
    },
    // border: '3px solid red',
    // '&:hover':{
    //   border:''
    // }
    // '.MuiOutlinedInput-notchedOutline': {
    //   // borderColor: 'red !important',
    //       // border: '3px solid red',

    // },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(190, 176, 130, 0.5) !important',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(190, 176, 130, 1) !important',
    },
    '.MuiSvgIcon-root ': {
      fill: "white !important",
    }
  },
  hover: {
    width: '200px',
    // '&:hover':{
    //   border:''
    // }
    // '.MuiOutlinedInput-notchedOutline': {
    // borderColor: 'red !important',
    border: '1px solid rgba(190, 176, 130, 1)',
    borderRadius: '0 !important',

    // },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(190, 176, 130, 0.5) !important',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(190, 176, 130, 1) !important',
    },
    '.MuiSvgIcon-root ': {
      fill: "white !important",
    }
  },
  icon: {
    fill: 'red',
  },
  label: {
    color: "green",
    "&.Mui-focused": {
      color: "red",
    },
  },
});


function MySelect() {
  const classes = useStyles();

  return (
    <>


      <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              color='secondary'
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select"
              className={classes.root}
            >
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              className={classes.hover}
              displayEmpty
            >
              {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
              <MenuItem>Ten</MenuItem>
              <MenuItem>Twenty</MenuItem>
              <MenuItem>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              color='secondary'
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select"
              className={classes.root}
            >
              <MenuItem>Body1</MenuItem>
              <MenuItem>Body1</MenuItem>
              <MenuItem>Body1</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box width="250px">
          <TextField
            select
            fullWidth
            size='medium'
            className={classes.root}
            label='Select'
          >
            <MenuItem>Armenia</MenuItem>
            <MenuItem>USA</MenuItem>
            <MenuItem>France</MenuItem>
          </TextField>
        </Box>

        <Box width="250px">
          <TextField
            select
            fullWidth
            size='medium'
            className={classes.root}
            label='Select'
          >
            <MenuItem>Last month</MenuItem>
            <MenuItem>Last 3 month</MenuItem>
            <MenuItem>Last 6 month</MenuItem>
            <MenuItem>Last 12 month</MenuItem>
            <MenuItem>Last 3 years</MenuItem>
          </TextField>
        </Box>
      </Stack>

      <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
        <Box width="250px" >
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
        </Box>

        <Box width="250px" sx={{ height: '250px', overflowY: 'scroll' }}>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
          <MenuItem>Body1</MenuItem>
        </Box>

        <Box width="250px" >
          <TextField
            select
            fullWidth
            size='medium'
            className={classes.root}
            label='Select'
          >
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <Stack direction='row' spacing={4} sx={{ mb: 2, display: 'flex',}} >
            <Button
                    // className={classes.root}
                    variant="contained"
                    size='large'
                    disableElevation
                >
                    Apply
                </Button>
                <Button
                    // className={classes.root}
                    variant="contained"
                    size='large'
                    disableElevation
                >
                    Clear
                </Button>
              </Stack>
    
          </TextField>

        </Box>
      </Stack>

    </>

  )
}

export default MySelect