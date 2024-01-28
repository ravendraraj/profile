import { Grid } from "@mui/material";
import Components from "../../components";

function HomePageFooter(){

    return(
        <Grid container spacing={1} sx={{backgroundColor:'#000',marginTop:'100px',padding:'20px'}}>
            <Grid item md={6} lg={6} xs={12}>
                <Grid item md={12} xs={12}>
                    <Components.TextField
                        placeholder={"Name"}
                        type="text"
                        name="email"
                        title={'Enter Name'}
                        labelClassNames="customLabel"
                    />
                </Grid>
                <Grid item md={12} xs={12}>
                <Components.TextField
                        placeholder={"Email"}
                        type="text"
                        name="email"
                        title={'Enter email address'}
                        labelClassNames="customLabel"
                    />
                </Grid>
                <Grid item md={12} xs={12}>
                <Components.TextField
                        placeholder={"Message"}
                        type="text"
                        name="email"
                        title={'Enter Message'}
                        labelClassNames="customLabel"
                    />
                </Grid>
                <Grid item md={12} lg={12} sx={{marginTop:"40px"}}> 
                    <Components.CustomButton 
                        buttonClassName={"customButtonSeconday"}
                    >
                        <span>Send Message</span>
                    </Components.CustomButton>
                </Grid>
            </Grid>
            <Grid item md={6} lg={6} xs={12}>
                <div style={{marginLeft:'100px'}}>
                    <p style={{fontSize:'25px',letterSpacing:'4px',color:'#fff',fontWeight:'bold'}}>CONTACT ME</p>
                    <p style={{fontSize:'18px',color:'#fff'}}>+91-6363238603</p>
                    <a style={{fontSize:'18px',color:'#fff'}} href={'mailto:ravendraksingh11@gmail.com'}>ravendraksingh11@gmail.com</a>
                </div>
            </Grid>
        </Grid>
    )
}

export default HomePageFooter;