import { TextField, InputAdornment, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function MyInput() {

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
                    className='default'

                />
                <TextField
                    size='small'
                    label='Default'
                    variant="outlined"
                    className='default'
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
                    className='default'
                />
            </Stack>
            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                    }}
                    size='medium'
                    label='hover'
                    variant="outlined"
                    required
                    className='hover'

                />
                <TextField
                    size='small'
                    label='hover'
                    variant="outlined"
                    className='hover'
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
                    className='focused'

                />
                <TextField
                    size='small'
                    label='Focused'
                    variant="outlined"
                    className='focused'
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
                    className='default'

                />
                <TextField
                    size='small'
                    label='Activated'
                    variant="outlined"
                    className='default'
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
                    className='default'
                    error
                    helperText='Helper Text/hint'

                />
                <TextField
                    size='small'
                    label='Error'
                    variant="outlined"
                    className='default'
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
                    className='disabled'

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
                        endAdornment: <InputAdornment position='end'><VisibilityIcon /></InputAdornment>
                    }}
                    size='medium'
                    label='Default'
                    variant="outlined"
                    required
                    className='default'

                />
                <TextField
                    size='small'
                    label='Default'
                    variant="outlined"
                    className='default'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon /></InputAdornment>
                    }}
                />
            </Stack>
            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        endAdornment: <InputAdornment position='end'><VisibilityIcon /></InputAdornment>
                    }}
                    size='medium'
                    label='hover'
                    variant="outlined"
                    required
                    className='hover'

                />
                <TextField
                    size='small'
                    label='hover'
                    variant="outlined"
                    className='hover'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon /></InputAdornment>
                    }}
                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        endAdornment: <InputAdornment position='end'><VisibilityIcon /></InputAdornment>
                    }}
                    size='medium'
                    label='Focused'
                    variant="outlined"
                    required
                    className='focused'

                />
                <TextField
                    size='small'
                    label='Focused'
                    variant="outlined"
                    className='focused'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon /></InputAdornment>
                    }}                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        endAdornment: <InputAdornment position='end'><VisibilityIcon /></InputAdornment>
                    }}
                    size='medium'
                    label='Activated'
                    variant="outlined"
                    required
                    className='default'

                />
                <TextField
                    size='small'
                    label='Activated'
                    variant="outlined"
                    className='default'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon /></InputAdornment>
                    }}
                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        endAdornment: <InputAdornment position='end'><VisibilityIcon /></InputAdornment>,
                        disableUnderline: true
                    }}
                    size='medium'
                    label='Error'
                    variant="standard"
                    required
                    className='default'
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
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon /></InputAdornment>
                    }}
                />
            </Stack>

            <Stack direction='row' spacing={4} sx={{ mb: 2 }} >
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="end"></InputAdornment>,
                        endAdornment: <InputAdornment position='end'><VisibilityIcon /></InputAdornment>, 
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
                        endAdornment: <InputAdornment position='end'><KeyboardArrowDownIcon /></InputAdornment>
                    }}
                />
            </Stack>
        </>

    )
}

export default MyInput;