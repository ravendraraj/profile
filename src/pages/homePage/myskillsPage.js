import { Grid } from "@mui/material";
import Components from "../../components";
import MY_SKILL from '../../constants/appConstants'

function MySkillsPage(){

    const RenderSkill=()=>{
        return(
            <>
            {
                MY_SKILL.MY_SKILL.map((item,index)=>{
                    return(
                        <Grid item md={4} lg={4} xs={12}> 
                        <span className="skill-box-element-value">{item.title}</span>
                        <Components.ProgressCountBar
                           innerTitle={"React"}
                           start={0}
                           end={item?.rating}
                           duration={0}
                           delay={2}
                        />
                    </Grid>
                    )
                })
            }
            </>
        )
    }
    return(
        <>
        <Grid container spacing={1} className="about-box">
        <Grid item md={12} lg={12} xs={12} sx={{display:'flex',flexDirection:'column'}}>
            <span className={"my-skill-title"}>
                Skills
            </span>
            <span className={"my-skill-subtitle"}>My Skills</span>
        </Grid>
       
        <Grid item md={12} lg={12} xs={12} className="about-box-content" sx={{marginLeft:"40px",marginRight:"40px"}}>
            <Grid container spacing={4} sx={{marginTop:'20px'}}>
               {RenderSkill()}
            </Grid>
        </Grid>
    </Grid>
    </>
    )
}

export default MySkillsPage;