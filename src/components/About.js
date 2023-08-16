import React from "react";
import {Box, Grid, styled, Paper, Typography, List, ListItem, ListItemText, Divider} from "@mui/material";
import {grey} from "@mui/material/colors";
import img1 from './images/personalsiteimage.jpeg'

const About = () => {



    const CustomImage = styled('img')({
        width: '275px',
        height: '300px',
        borderRadius: 6,
    })

    const StyledListItem = styled(ListItemText)({
        color: 'secondary.main',
        fontFamily: 'Raleway',

    })


    return (
        <Box sx={{backgroundColor: grey[900], minHeight:'1000px', padding:5}}>
            <Grid container sx={{justifyContent: 'center', margin: 'auto', alignItems: 'center'}} direction='column'>
                <Typography variant={'h3'} sx={{marginBottom: 2, fontFamily: 'Raleway', color: 'secondary.main'}}> {/* Title of the page */}
                    About me
                </Typography>
                <Box sx={{boxShadow: 5, marginBottom: 3}}>
                    <CustomImage
                        src={img1}
                        alt={"Akash's headshot picture"}
                    />
                </Box>
                <Paper elevation={10} sx={{width: '50%', backgroundColor: 'primary.main', color: 'secondary.main', padding: 2 }}> {/* About me Start */}
                    Hey there! I'm Akash Puzhakkal, a passionate and versatile computer science enthusiast with a keen interest in machine learning and web development. I'm all about embracing technology and using it to make a positive impact. Let me tell you a bit more about myself:
                </Paper>
                <Paper elevation={10} sx={{marginTop: 5, padding:2, backgroundColor: 'primary.main', color: 'secondary.main', maxWidth: '50%'}}>
                    <Typography variant={'h4'} sx={{color: 'white', fontWeight: 'bolder'}}> {/* Professional Experience */}
                        Professional Experience
                    </Typography>
                    <List>
                        <ListItem>
                            <StyledListItem primary={'Software Engineer Intern'} secondary={'June 2023 - Present' } sx={{color: 'white'}}/>  {/* Software Engineer Start */}
                        </ListItem>
                        <StyledListItem primary={'I spearheaded the development of dynamic websites using React, Typescript, and Django. This effort resulted in the timely delivery of three successful projects, marked by the consistent surpassing of client expectations through the application of agile methodologies and best practices. Moreover, I effectively showcased the scalability and seamless integration of our innovative web solutions through compelling product demos, significantly contributing to the overall success of the initiatives.'} />
                        <Divider component={'li'} sx={{backgroundColor: 'secondary.main'}}/>
                        <ListItem>
                            <StyledListItem primary={'Rutgers Devops Club Founder'} secondary={"February 2023 - Present"} sx={{color: 'white'}}/> {/* Rutgers Devops Club Start */}
                        </ListItem>
                        <StyledListItem primary={'The Rutgers DevOps Club is a dynamic community focused on bridging the gap between development and operations. Through workshops, projects, and exploration of emerging technologies, we empower students with practical DevOps skills and knowledge. Our goal is to prepare members for successful careers and contribute to the advancement of DevOps practices.'}/>
                        <Divider component={'li'} sx={{backgroundColor: 'secondary.main'}}/>
                        <ListItem>
                            <StyledListItem primary={'Inspirit AI Ambassador'} secondary={'October 2020 - September 2022'} sx={{color: 'white'}}/> {/* Inspirit AI Start */}
                        </ListItem>
                        <StyledListItem primary={'I actively contributed to the organization and facilitation of AI workshops, events, and mentorship programs, nurturing a community of AI enthusiasts and fostering knowledge sharing. Working alongside a dedicated team of Ambassadors, we created compelling educational content and resources to enhance students\' understanding and practical application of AI concepts.'}/>
                        <Divider component={'li'} sx={{backgroundColor:'secondary.main'}}/>
                        <ListItem>
                            <StyledListItem primary={'Youth Link Cofounder'} secondary={'January 2021 - September 2022'} sx={{color: 'white'}}/> {/* Youth Link Cofounder */}
                        </ListItem>
                        <StyledListItem primary={'As cofounders of Youth Link, a mental health advocacy group, we organized impactful fundraisers, including a successful walkathon for blind children in India where we raised over $3000. We also developed a groundbreaking mental health chatbot, providing a safe space for individuals to seek support whenever they feel depressed or overwhelmed. Through our efforts, we strive to foster inclusivity, empathy, and accessible mental health resources for all.'}/>
                    </List>
                </Paper>

            </Grid>
        </Box>
    )
}

export default About;
