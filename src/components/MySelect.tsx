import { Box, TextField, Button, InputAdornment } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import { Stack } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';


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
  button: {
    backgroundColor: 'rgba(236, 217, 204, 1) !important',
    width: '125px !important',
    borderRadius: '0 !important',
    color: 'rgba(25, 34, 49, 1) !important',
    border: '1px solid rgba(190, 176, 130, 0.3) !important',
    marginLeft: '0 !important',
    marginRight: '0 !important',

  },
  button2: {
    backgroundColor: 'rgba(255, 255, 255, 1) !important',
    width: '125px !important',
    borderRadius: '0 !important',
    color: 'rgba(25, 34, 49, 1) !important',
    border: '1px solid rgba(190, 176, 130, 0.3) !important',
    marginLeft: '0 !important',
    marginRight: '0 !important',
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


      <Stack direction='row' spacing={4} sx={{ mb: 20 }} >
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
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              className={classes.hover}
              displayEmpty
            >
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
            <MenuItem>Body1</MenuItem>
            <MenuItem>Body1</MenuItem>
            <MenuItem>Body1</MenuItem>
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
            label='Search'
            SelectProps={{ IconComponent: () => null }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          >
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <Stack direction='row' spacing={4} sx={{ mb: 2, display: 'flex', justifyContent: 'center' }} >
              <Button
                className={classes.button}
                variant="contained"
                fullWidth={true}
                size='large'
                disableElevation
              >
                Apply
              </Button>
              <Button
                className={classes.button2}
                fullWidth={true}
                variant="contained"
                size='large'
                disableElevation
              >
                Clear
              </Button>
            </Stack>

          </TextField>

        </Box>

        {/* checkobox search group */}
        <Box width="250px">
          <TextField
            select
            fullWidth
            size='medium'
            className={classes.root}
            label='Search'
            SelectProps={{ IconComponent: () => null }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          >

            <Box width="250px" sx={{ height: '250px', overflowY: 'scroll' }}>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            </Box>
            <Stack direction='row' spacing={4} sx={{ mb: 2, display: 'flex', justifyContent: 'center' }} >
              <Button
                className={classes.button}
                variant="contained"
                fullWidth={true}
                size='large'
                disableElevation
              >
                Apply
              </Button>
              <Button
                className={classes.button2}
                fullWidth={true}
                variant="contained"
                size='large'
                disableElevation
              >
                Clear
              </Button>
            </Stack>

          </TextField>

        </Box>
        
        <Box width="250px" sx={{ height: '250px', overflowY: 'scroll', border: '1px solid grey' }}>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            <MenuItem><Checkbox />Body1</MenuItem>
            </Box>
      </Stack>

    </>

  )
}

export default MySelect