import { TextField, InputAdornment, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        '& label.Mui-focused': {
            color: 'rgba(190, 176, 130, 1)',  // focused label color
        },
        '& label.Mui-hover': {
            color: 'rgba(190, 176, 130, 1)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(190, 176, 130, 0.6)',  // default border color
            },
            '&:hover fieldset': {
                borderColor: 'rgba(190, 176, 130, 1)',  // hover border color
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(190, 176, 130, 1)',  // focused border color
            },
        },
    },
    focused: {
        '& label.Mui-focused': {
            color: 'rgba(190, 176, 130, 1)',
        },
        '& label.Mui-hover': {
            color: 'rgba(190, 176, 130, 1)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(190, 176, 130, 1)',
                border: "2px solid",
            },
            '&:hover fieldset': {
                borderColor: 'rgba(190, 176, 130, 1)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(190, 176, 130, 1)',
            },
        },

    },
    hover: {
        '& label.Mui-focused': {
            color: 'rgba(190, 176, 130, 1)',
        },
        '& label.Mui-hover': {
            color: 'rgba(190, 176, 130, 1)',
        },
        '& label.Mui-activated': {
            color: 'red',
        },
        // '& .MuiInput-underline:after': {
        //   borderBottomColor: 'yellow',
        // },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(190, 176, 130, 1)',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(190, 176, 130, 1)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(190, 176, 130, 1)',
            },
        },

    },
    disabled: {
        borderStyle: 'dotted !important'   //not working!!!  
    },
    // error: {
    //     labelPlacement: 'end !important'
    // },
    icon: {
        color: 'rgba(190, 176, 130, 1)',
    },
    textArea: {
        '& label.Mui-focused': {
            color: 'rgba(190, 176, 130, 1)',
        },
        '& label.Mui-hover': {
            color: 'rgba(190, 176, 130, 1)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(190, 176, 130, 0.6)',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(190, 176, 130, 1)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(190, 176, 130, 1)',
            },
        },

    },
});

function MyInput() {
    const classes = useStyles();

    return (
        <>
            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                    }}
                    size='medium'
                    label='Default'
                    variant="outlined"
                    required
                    className={classes.root}
                    sx={{
                        label: { color: '#BEB082' },
                    }}

                />
                <TextField
                    size='small'
                    label='Placeholder'
                    variant="outlined"
                    className={classes.root}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        sx: { height: 120, width: 400 }
                    }}
                    size='medium'
                    label='Default'
                    variant="outlined"
                    required
                    className={classes.root}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
            </Stack>
            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                    }}
                    size='medium'
                    label='Hover'
                    variant="outlined"
                    required
                    className={classes.hover}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
                <TextField
                    size='small'
                    label='Placeholder'
                    variant="outlined"
                    className={classes.hover}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                    }}
                    size='medium'
                    label='Focused'
                    variant="outlined"
                    required
                    className={classes.focused}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
                <TextField
                    size='small'
                    label='Focused'
                    variant="outlined"
                    className={classes.focused}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                    }}
                    size='medium'
                    label='Activated'
                    variant="outlined"
                    required
                    className={classes.root}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
                <TextField
                    size='small'
                    label='Activated'
                    variant="outlined"
                    className={classes.root}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                    }}
                    size='medium'
                    label='Error'
                    variant="outlined"
                    required
                    error
                    helperText='Helper Text/hint'

                />
                <TextField
                    size='small'
                    label='Error'
                    variant="outlined"
                    error
                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                    }}
                    size='medium'
                    label='Disabled'
                    variant="outlined"
                    required
                    disabled
                    className={classes.disabled}

                />
                <TextField
                    size='small'
                    label='Disabled'
                    variant="outlined"
                    disabled
                    className='disabled'
                />
            </Stack>


            {/* END ICONS */}

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        endAdornment: <InputAdornment position='end'><VisibilityIcon className={classes.icon}/></InputAdornment>
                    }}
                    size='medium'
                    label='Default'
                    variant="outlined"
                    required
                    className={classes.root}
                    sx={{
                        label: { color: '#BEB082' },
                    }}

                />
                <TextField
                    size='small'
                    label='Default'
                    variant="outlined"
                    className={classes.root}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon className={classes.icon}/></InputAdornment>
                    }}
                />
            </Stack>
            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        endAdornment: <InputAdornment position='end'><VisibilityIcon className={classes.icon}/></InputAdornment>
                    }}
                    size='medium'
                    label='hover'
                    variant="outlined"
                    required
                    className={classes.hover}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
                <TextField
                    size='small'
                    label='hover'
                    variant="outlined"
                    className={classes.hover}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon className={classes.icon}/></InputAdornment>
                    }}
                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        endAdornment: <InputAdornment position='end'><VisibilityIcon className={classes.icon}/></InputAdornment>
                    }}
                    size='medium'
                    label='Focused'
                    variant="outlined"
                    required
                    className={classes.focused}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
                <TextField
                    size='small'
                    label='Focused'
                    variant="outlined"
                    className={classes.focused}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                                        InputProps={{
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon className={classes.icon}/></InputAdornment>
                    }} />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        endAdornment: <InputAdornment position='end'><VisibilityIcon className={classes.icon}/></InputAdornment>
                    }}
                    size='medium'
                    label='Activated'
                    variant="outlined"
                    required
                    className={classes.root}
                    sx={{
                        label: { color: '#BEB082' },
                    }}
                />
                <TextField
                    size='small'
                    label='Activated'
                    variant="outlined"
                    className={classes.root}
                    sx={{
                        label: { color: '#BEB082' },
                    }}             
                           InputProps={{
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon className={classes.icon}/></InputAdornment>
                    }}
                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        disableUnderline: true,
                    }}
                    size='medium'
                    label='Error'
                    variant="standard"
                    required
                    // className={classes.error}
                    error
                    helperText='Helper Text/hint'
                />
                <TextField
                    size='small'
                    label='Error'
                    variant="outlined"
                    className='default'
                    error
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon className={classes.icon}/></InputAdornment>
                    }}
                    helperText='Helper Text/hint'
                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        endAdornment: <InputAdornment position='end'><VisibilityIcon className={classes.icon}/></InputAdornment>,
                    }}
                    size='medium'
                    label='Disabled'
                    variant="outlined"
                    required
                    disabled
                    className='disabled'

                />
                <TextField
                    size='small'
                    label='Disabled'
                    variant="outlined"
                    disabled
                    className='disabled'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon className={classes.icon}/></InputAdornment>
                    }}
                />
            </Stack>
        </>

    )
}

export default MyInput;