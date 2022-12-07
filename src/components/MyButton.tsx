import { Button, Stack, Typography } from "@mui/material"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import RadarIcon from '@mui/icons-material/Radar';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#ECD9CC !important',
        color: '#192231 !important',
        font: 'MinervaModern',
        borderRadius: '0 !important',
        '&:hover': {
            backgroundColor: '#F5ECE5 !important'
        }
    },
    hover: {
        backgroundColor: '#F5ECE5  !important',
        color: '#192231  !important',
        font: 'MinervaModern',
        borderRadius: '0 !important',
        borderColor: 'rgba(190, 176, 130, 1) !important',
    },
    disabled: {
        borderRadius: '0 !important',
    },
    textOne: {
        color: " #192231 !important",
        borderColor: 'rgba(190, 176, 130, 1) !important',
        borderRadius: '0 !important',
        '&:hover': {
            backgroundColor: "rgba(236, 217, 204, 0.25) !important"
        }
    },
    textOnehov2: {
        color: " #192231 !important",
        backgroundColor: 'rgba(236, 217, 204, 0.25) !important',
    },
    textTwo: {
        color: '#BEB082 !important',
    },
    textTwohov3: {
        color: '#BEB082 !important',
        backgroundColor: 'rgba(190, 176, 130, 0.05) !important',
    },
    disabledSmall: {
        backgroundColor: 'rgba(175, 175, 175, 0.1) !important',
    },
    outlinedText1: {
        color: "#192231 !important",
        borderColor: 'rgba(190, 176, 130, 1) !important',
        borderRadius: '0 !important',
    },
    cardLabel: {
        color: "#192231 !important",
        borderColor: 'rgba(190, 176, 130, 1) !important',
        borderRadius: '0 !important',
        backgroundColor: '#F5ECE5 !important',
        width: '200px', 
        height: '160px'
    },
    cardLabelHover: {
        borderColor: 'rgba(190, 176, 130, 1) !important',
        borderRadius: '0 !important',
        backgroundColor: '#ECCCB7 !important',
        color: '#FEFAF6 !important',
        width: '200px',
        height: '160px',
    },
    outlinedText1Back: {
        color: "#192231 !important",
        borderColor: 'rgba(190, 176, 130, 1) !important',
        borderRadius: '0 !important',
        backgroundColor: '#F5ECE5 !important',
    },
    outlinedText1Next: {
        color: "rgba(175, 175, 175, 1) !important",
        borderColor: 'rgba(190, 176, 130, 1) !important',
        borderRadius: '0 !important',
        backgroundColor: '#F7F7F7 !important',
    },
    outlinedText1Next2: {
        color: "#192231 !important",
        borderColor: 'rgba(190, 176, 130, 1) !important',
        borderRadius: '0 !important',
        backgroundColor: '#D2BCAC !important',
    },
    outlinedText1Mail: {
        color: "#192231 !important",
        borderColor: 'rgba(190, 176, 130, 1) !important',
        borderRadius: '0 !important',
        backgroundColor: '#ECD9CC !important',
    },
    outlinedText1Add: {
        borderRadius: '20px !important',
        color: "#192231 !important",
        borderColor: 'rgba(190, 176, 130, 1) !important',
    },
    outlinedText1hov2: {
        backgroundColor: 'rgba(236, 217, 204, 0.25) !important',
        color: "#192231 !important",
        borderColor: "rgba(190, 176, 130, 1) !important",
        borderRadius: '0 !important',
    },
    addIcon: {
        color: '#BEB082 !important'
    },
    small: {
        color: "#192231 !important",
    }
});


function MyButton() {
    const classes = useStyles();

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
                    className={classes.root}
                    variant="contained"
                    size='large'
                    disableElevation
                >
                    Defaul Large
                </Button>
                <Button
                    variant="contained"
                    size='large'
                    className={classes.hover}
                    disableElevation
                >
                    Hover Large
                </Button>
                <Button
                    variant="contained"
                    size='large'
                    color='primary'
                    disabled
                    className={classes.disabled}
                    disableElevation
                >disabled Large
                </Button>
            </Stack>
            {/* medium */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="contained"
                    size='medium'
                    className={classes.root}
                    disableElevation
                >
                    Defaul medium
                </Button>
                <Button
                    variant="contained"
                    size='medium'
                    className={classes.hover}
                    disableElevation
                >
                    Hover medium
                </Button>
                <Button
                    variant="contained"
                    size='medium'
                    color='primary'
                    disabled
                    className={classes.disabled}
                    disableElevation
                >
                    disabled medium
                </Button>
            </Stack>
            {/* small */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="contained"
                    size='small'
                    className={classes.root}
                    disableElevation
                >Defaul small
                </Button>
                <Button
                    variant="contained"
                    size='small'
                    className={classes.hover}
                    disableElevation
                >
                    Hover small
                </Button>
                <Button
                    variant="contained"
                    size='small'
                    color='primary'
                    disabled
                    className={classes.disabled}
                    disableElevation
                >
                    disabled small
                </Button>
            </Stack>

            {/* text */}
            <Typography variant='h4' className="typography">TEXT</Typography>

            <Stack spacing={2} direction='row'>
                <Button
                    variant="text"
                    size='small'
                    className={classes.textOne}
                >
                    Default small
                </Button>
                <Button
                    variant="text"
                    size='small'
                    className={classes.textTwo}
                >
                    Default small
                </Button>
            </Stack>
            {/* medium */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="text"
                    size='small'
                    className={classes.textOnehov2}
                >
                    Hover small
                </Button>
                <Button
                    variant="text"
                    size='small'
                    className={classes.textTwohov3}
                >
                    Hover small
                </Button>
            </Stack>
            {/* small */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="text"
                    size='small'
                    color='primary'
                    disabled
                    className={classes.disabledSmall}
                >
                    disabled small
                </Button>
                <Button
                    variant="text"
                    size='small'
                    color='primary'
                    disabled
                    className={classes.disabledSmall}
                >
                    disabled small
                </Button>

            </Stack>
            {/* outlined */}

            <Typography variant='h4' className="typography">Outlined</Typography>
            <Stack spacing={2} direction='row'>
                <Button
                    variant="outlined"
                    size='small'
                    disableElevation
                    className={classes.outlinedText1}
                >
                    Default small
                </Button>
                <Button
                    variant="outlined"
                    size='medium'
                    disableElevation
                    className={classes.outlinedText1}
                >
                    Default medium
                </Button>
                <Button
                    variant="outlined"
                    size='medium'
                    className={classes.outlinedText1Add}
                    startIcon={<AddOutlinedIcon className={classes.addIcon} />}>
                    Find a Realtor
                </Button>
                <Button
                    variant="outlined"
                    size='medium'
                    className={classes.outlinedText1Add}
                    endIcon={<ClearOutlinedIcon className={classes.addIcon} />}>
                    Home selling tips
                </Button>
            </Stack>
            {/* medium */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="outlined"
                    size='small'
                    className={classes.outlinedText1hov2}
                >
                    Hover small
                </Button>
                <Button
                    variant="outlined"
                    size='medium'
                    className={classes.outlinedText1hov2}
                >
                    Hover medium
                </Button>
            </Stack>
            {/* small */}
            <Stack spacing={2} direction='row'>
                <Button
                    variant="outlined"
                    size='small'
                    color='primary'
                    disabled
                    className={classes.disabled}
                >
                    disabled small
                </Button>
                <Button
                    variant="outlined"
                    size='medium'
                    color='primary'
                    disabled
                    className={classes.disabled}
                >
                    disabled medium
                </Button>

            </Stack>
            <Stack spacing={2} direction='row'>
                <Button
                    variant="outlined"
                    size='small'
                    className={classes.textOne}
                    startIcon={<AddOutlinedIcon sx={{ color: '#BEB082' }} />}>
                    small
                </Button>
                <Button
                    variant="outlined"
                    size='small'
                    className={classes.hover}
                    startIcon={<AddOutlinedIcon sx={{ color: '#BEB082' }} />}>
                    hoverrrrr
                </Button>
                <Button
                    variant="text"
                    size='small'
                    className={classes.small}
                    startIcon={<AddOutlinedIcon sx={{ color: '#BEB082' }} />}>
                    small
                </Button>
                <Button
                    variant="text"
                    size='small'
                    className={classes.disabled}
                    startIcon={<AddOutlinedIcon sx={{ color: '#BEB082' }} />}
                    disabled>
                    hover
                </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button
                    variant="contained"
                    size='large'
                    className={classes.outlinedText1Mail}
                    disableElevation
                >
                    VERIFY EMAIL
                </Button>
                <Button
                    variant="contained"
                    size='large'
                    className={classes.outlinedText1Next}
                    disableElevation
                >NEXT
                </Button>
                <Button
                    variant="contained"
                    size='large'
                    className={classes.outlinedText1Back}
                    disableElevation
                >BACK
                </Button>
                <Button
                    variant="contained"
                    size='large'
                    className={classes.outlinedText1Next2}
                    disableElevation
                >NEXT
                </Button>

            </Stack>
            <Stack spacing={2} direction='row'>
                <Button
                    variant="contained"
                    startIcon={<RadarIcon sx={{ color: '#ECCCB7' }} />}
                    size='large'
                    className={classes.cardLabel}
                    disableElevation
                >
                    Card Label Placeholder
                </Button>
                <Button
                    variant="contained"
                    startIcon={<RadarIcon sx={{ color: '#FEFAF6' }} />}
                    size='large'
                    className={classes.cardLabelHover}
                    disableElevation
                >
                    Card Label Placeholder Hover
                </Button>

            </Stack>
        </Stack>
    )

}

export default MyButton