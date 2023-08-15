import React from "react";
import {grey} from "@mui/material/colors";
import {Box, Divider, Grid, List, ListItem, ListItemText, Paper, styled, Typography} from "@mui/material";

const Projects = ( value, setValue ) => {

    const StyledTypographyHeader = styled(Typography)({
        color: 'secondary.main',
        fontFamily: 'Raleway',

    })

    return (
        <Box sx={{backgroundColor: grey[900], minHeight: 1500, padding:5}}>
            <Grid container direction={'column'} sx={{margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant={'h3'} sx={{color: 'secondary.main', fontFamily: 'Raleway'}}>
                        Projects | Skills
                    </Typography>
                    <Paper elevation={10} sx={{width: '50%', marginTop: 10, padding: 2, backgroundColor: 'primary.main', color: 'secondary.main', minHeight: '1000px'}}>
                        <List>
                            <ListItem>
                                <StyledTypographyHeader variant={'h4'}>News site</StyledTypographyHeader>
                            </ListItem>
                            <Typography variant={'body1'}>Skills: Django, React, Typescript, MongoDB</Typography>
                            <Typography>Description: </Typography>
                            <Divider component={'li'} sx={{backgroundColor: 'secondary.main'}}/>
                        </List>
                    </Paper>

            </Grid>
        </Box>
    )
}

export default Projects