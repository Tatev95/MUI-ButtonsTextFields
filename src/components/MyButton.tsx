import { Button, Stack, Typography } from "@mui/material"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import RadarIcon from '@mui/icons-material/Radar';

function MyButton() {
    return (
        <Stack spacing={4}>
            {/* contained */}

            <Stack spacing={2} direction='row'>
                <Button
                    variant="contained">
                    Text
                </Button>
                <Button variant="outlined">
                    Text
                </Button>
                <Button
                    variant="text"
                    href='https://google.com'>
                    Text
                </Button>

            </Stack>

            <Stack spacing={2} direction='row'>
                <Button
                    variant="contained"
                    color='primary'
                    className="contained">
                    Primary
                </Button>
                <Button
                    variant="contained"
                    color='secondary'
                    className="contained">
                    secondary
                </Button>
                <Button
                    variant="contained"
                    color='error'
                    className="contained">
                    error
                </Button>
                <Button
                    variant="contained"
                    color='warning'
                    className="contained">
                    warning
                </Button>
                <Button
                    variant="contained"
                    color='info'
                    className="contained">
                    info
                </Button>
                <Button
                    variant="contained"
                    color='success'
                    className="contained">
                    success
                </Button>
            </Stack>
            <Typography
                variant='h4'
                className="typography">
                Contained
            </Typography>

            {/* large */}

            <Stack spacing={2} direction='row'>
                <Button
                    variant="contained"
                    size='large'
                    style={{ backgroundColor: '#ECD9CC', color: '#192231', font: 'MinervaModern' }}
                    className="contained">
                    Defaul Large
                </Button>
                <Button
                    variant="contained"
                    size='large'
                    style={{ backgroundColor: '#F5ECE5', color: '#192231', font: 'MinervaModern' }}
                    className="contained">
                    Hover Large
                </Button>
                <Button
                    variant="contained"
                    size='large'
                    color='primary'
                    disabled className="contained"
                >disabled Large
                </Button>
            </Stack>
            {/* medium */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="contained"
                    size='medium'
                    style={{ backgroundColor: '#ECD9CC', color: '#192231', font: 'MinervaModern' }}
                    className="contained">Defaul medium</Button>
                <Button
                    variant="contained"
                    size='medium'
                    style={{ backgroundColor: '#F5ECE5', color: '#192231', font: 'MinervaModern' }}
                    className="contained">
                    Hover medium
                </Button>
                <Button
                    variant="contained"
                    size='medium'
                    color='primary'
                    disabled className="contained">
                    disabled medium
                </Button>
            </Stack>
            {/* small */}
            <Stack spacing={2} direction='row'>
                <Button variant="contained" size='small' style={{ backgroundColor: '#ECD9CC', color: '#192231', font: 'MinervaModern' }} className="contained">Defaul small</Button>
                <Button variant="contained" size='small' style={{ backgroundColor: '#F5ECE5', color: '#192231', font: 'MinervaModern' }} className="contained">Hover small</Button>
                <Button variant="contained" size='small' color='primary' disabled className="contained">disabled small</Button>
            </Stack>

            {/* text */}
            <Typography variant='h4' className="typography">TEXT</Typography>

            <Stack spacing={2} direction='row'>
                <Button
                    variant="text"
                    size='small'
                    className="text text-1">
                    Default small
                </Button>
                <Button
                    variant="text"
                    size='small'
                    className="text text-2">
                    Default small
                </Button>
            </Stack>
            {/* medium */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="text"
                    size='small'
                    className="text text-1 hov2">
                    Hover small
                </Button>
                <Button
                    variant="text"
                    size='small'
                    className="text text-2 hov2">
                    Hover small
                </Button>
            </Stack>
            {/* small */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="text"
                    size='small'
                    color='primary'
                    disabled className="text text-3 hov2">
                    disabled small
                </Button>
                <Button
                    variant="text"
                    size='small'
                    color='primary'
                    disabled className="text text-3 hov2">
                    disabled small
                </Button>

            </Stack>
            {/* outlined */}

            <Typography variant='h4' className="typography">Outlined</Typography>
            <Stack spacing={2} direction='row'>
                <Button
                    variant="outlined"
                    size='medium'
                    className="outlined text-1">
                    Default medium
                </Button>
                <Button
                    variant="outlined"
                    size='medium'
                    className="outlined text-1">
                    Default medium
                </Button>
                <Button
                    variant="outlined"
                    size='medium'
                    className="outlined text-1 add icon"
                    startIcon={<AddOutlinedIcon style={{ color: '#BEB082' }} />}>
                    Find a Realtor
                </Button>
                <Button
                    variant="outlined"
                    size='medium'
                    className="outlined text-1 add icon"
                    endIcon={<ClearOutlinedIcon style={{ color: '#BEB082' }} />}>
                    Home selling tips
                </Button>
            </Stack>
            {/* medium */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="outlined"
                    size='medium'
                    className="outlined text-1 hov2">
                    Hover medium
                </Button>
                <Button
                    variant="outlined"
                    size='medium' className="outlined text-1 hov2">
                    Hover medium
                </Button>
            </Stack>
            {/* small */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="outlined"
                    size='medium'
                    color='primary'
                    disabled
                    className="outlined text-3 hov2">
                    disabled medium
                </Button>
                <Button
                    variant="outlined"
                    size='medium'
                    color='primary'
                    disabled
                    className="outlined text-3 hov2">
                    disabled medium
                </Button>

            </Stack>
            <Stack spacing={2} direction='row'>
                <Button
                    variant="outlined"
                    size='small'
                    className="outlined text-1 icon"
                    startIcon={<AddOutlinedIcon style={{ color: '#BEB082' }} />}>
                    small
                </Button>
                <Button
                    variant="outlined"
                    size='small'
                    className="outlined text-1 icon hover-icon"
                    startIcon={<AddOutlinedIcon style={{ color: '#BEB082' }} />}>
                    hover
                </Button>
                <Button
                    variant="text"
                    size='small'
                    className="outlined text-1 icon"
                    startIcon={<AddOutlinedIcon style={{ color: '#BEB082' }} />}>
                    small
                </Button>
                <Button
                    variant="text"
                    size='small'
                    className="outlined text-1 icon hover-icon"
                    startIcon={<AddOutlinedIcon style={{ color: '#BEB082' }} />}
                    disabled>
                    hover
                </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button
                    variant="contained"
                    size='large'
                    className="outlined text-1"
                    style={{ backgroundColor: '#ECD9CC' }}
                    disableElevation
                >
                    VERIFY EMAIL
                </Button>
                <Button
                    variant="contained"
                    size='large'
                    className="outlined next"
                    style={{ backgroundColor: '#F7F7F7' }}
                    disableElevation
                >NEXT
                </Button>
                <Button
                    variant="contained"
                    size='large'
                    className="outlined text-1"
                    style={{ backgroundColor: '#F5ECE5' }}
                    disableElevation
                >BACK
                </Button>
                <Button
                    variant="contained"
                    size='large'
                    className="outlined text-1"
                    style={{ backgroundColor: '#D2BCAC' }}
                    disableElevation
                >NEXT
                </Button>

            </Stack>
            <Stack spacing={2} direction='row'>
                <Button
                    variant="contained"
                    startIcon={<RadarIcon style={{ color: '#ECCCB7' }} />}
                    size='large'
                    className="outlined text-1"
                    style={{ backgroundColor: '#F5ECE5', color: '#192231', width: '200px', height: '160px' }}
                    disableElevation
                >
                    Card Label Placeholder
                </Button>
                <Button
                    variant="contained"
                    startIcon={<RadarIcon style={{ color: '#FEFAF6' }} />}
                    size='large'
                    className="outlined text-1"
                    style={{ backgroundColor: '#ECCCB7', color: '#FEFAF6', width: '200px', height: '160px' }}
                    disableElevation
                >
                    Card Label Placeholder Hover
                </Button>

            </Stack>
        </Stack>
    )

}

export default MyButton