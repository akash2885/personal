import React from "react";
import {grey} from "@mui/material/colors";
import {Box, Divider, Grid, List, ListItem, ListItemText, Paper, styled, Typography} from "@mui/material";

const Projects = ( value, setValue ) => {

    const StyledTypographyHeader = styled(Typography)({
        color: 'secondary.main',


    })

    const StyledDivider = styled(Divider)({
        backgroundColor: 'white',
        marginBottom: 5,
        marginTop: 5

    })

    return (
        <Box sx={{ minHeight: 1500, padding:5, backgroundColor: grey[900] }}>
            <Grid container direction={'column'} sx={{margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant={'h3'} sx={{color: 'secondary.main', fontFamily: 'Raleway'}}>
                        Projects | Skills
                    </Typography>
                    <Paper elevation={10} sx={{width: '50%', marginTop: 10, padding: 2, backgroundColor: 'primary.main', color: 'secondary.main', minHeight: '1000px'}}>
                        <List>
                            <ListItem>
                                <StyledTypographyHeader variant={'h4'} sx={{fontWeight: 'bolder'}}>News site</StyledTypographyHeader>
                            </ListItem>
                            <Typography variant={'body1'}>Skills: Django, React, Typescript, MongoDB</Typography>
                            <Typography>Description: </Typography>
                            <StyledDivider component={'li'}/>
                            <ListItem>
                                <StyledTypographyHeader variant={'h4'} sx={{fontWeight: 'bolder'}}>Short and Sweet</StyledTypographyHeader>
                            </ListItem>
                            <Typography variant={'body1'}>Skills: Python, NLP</Typography>
                            <Typography>Description: </Typography>
                            <StyledDivider component={'li'}/>
                            <ListItem>
                                <StyledTypographyHeader variant={'h4'} sx={{fontWeight: 'bolder'}}>Heart Transplant</StyledTypographyHeader>
                            </ListItem>
                            <Typography variant={'body1'}>Skills: Java</Typography>
                            <Typography>Description: </Typography>
                            <StyledDivider component={'li'}/>
                            <ListItem>
                                <StyledTypographyHeader variant={'h4'} sx={{fontWeight: 'bolder'}}>Weather Site</StyledTypographyHeader>
                            </ListItem>
                            <Typography variant={'body1'}>React, Javascript</Typography>
                            <Typography>Description: </Typography>
                            <StyledDivider component={'li'}/>
                            {/*Add more projects here*/}
                        </List>
                    </Paper>

            </Grid>
        </Box>
    )
}

export default Projects