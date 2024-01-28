import { Grid, Typography } from "@mui/material";
import "../../assets/css/common.scss"
import constants from "../../constants";
import AboutUsPage from "./aboutusPage";
import MySkillsPage from "./myskillsPage";
import HomePageFooter from "./homepageFooterPage";
 

function HomePage(){
    return(
        <>
        <Grid container spacing={1} sx={{backgroundColor:'#000'}}>
            <Grid item md={6} lg={6} display={{ xs: "none", lg: "block" }} className="animation_text">
                <div className="text">
                    <p className="role-title">Software Developer</p>
                    <span className="welcome-tag">Hello, <span className="welcome-tag-inner">I'm</span></span>
                    <span className="developer-name">Ravendra Singh</span>
                </div>
            </Grid>
            <Grid item md={5} lg={6} xs={12} className="animation_text">
            <div className="text">
                <img src={constants.images.developer_image} style={{height:'100vh'}}/>
                </div>
            </Grid>
           
        </Grid>

        {/* about us */}
        <AboutUsPage/>

        {/* MySkills */}
        <MySkillsPage/>
        
        {/* HomepageFooter */}
        <HomePageFooter/>
        </>
    )
}

export default HomePage;