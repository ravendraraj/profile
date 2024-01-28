import { Box, Grid, Typography } from "@mui/material";
import Components from "../../components";

function AboutUsPage(){
    return(
        <>
            <Grid container spacing={1} className="about-box">
                <Grid item md={12} lg={12} xs={12}>
                    <p className={"title"}>
                        About Us
                    </p>
                </Grid>
                
                
                <Grid item md={6} lg={6} xs={12}>
                    <Box variant={'div'}
                    className={'about-user-experience'}
                    >
                         <Typography variant="h1" className="about-key-points" sx={{color:"#fff !important"}}>
                            Greate User Experience Design
                         </Typography>
                         <Typography variant="h1" className="about-key-points">
                            Mobile Application Development
                         </Typography>
                         <Typography variant="h1" className="about-key-points">
                            Web Application Development
                        </Typography>
                    </Box>
                </Grid>

                <Grid item md={6} lg={6} xs={12} className="about-box-content">
                    <h4>ABOUT ME</h4>
                    <span className="about-tag-line">
                    A Mobile Application & Web Developer Based in INDIA.
                    </span> 
                    <Grid container spacing={2} sx={{marginTop:'20px'}}>
                        <Grid item md={6} lg={6} xs={12}> 
                            <span className="info-box-element-label">Name - </span>
                            <span className="info-box-element-value">Ravendra Singh</span>
                        </Grid>
                        <Grid item md={6} lg={6} xs={12}> 
                            <span className="info-box-element-label">Email - </span>
                            <span className="info-box-element-value">Ravendraksingh11@gmail.com</span>
                        </Grid>
                        <Grid item md={6} lg={6} xs={12}> 
                            <span className="info-box-element-label">Mobile No.- </span>
                            <span className="info-box-element-value">6363238603</span>
                        </Grid>
                        <Grid item md={12} lg={12}> 
                        <Components.CustomButton 
                            buttonClassName={"customButton"}
                        >
                            <span>Download CV</span>
                        </Components.CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutUsPage;