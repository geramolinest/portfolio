import SkillCard from "./SkillCard";
import { skills } from "../data/data";
const Skills = ()=>{
    return(
        <div className="skills">
            <h1 className="skills-title">Skills</h1>
            <SkillCard title={'Front End'} description={skills.skillsFrontend}/>
            <SkillCard title={'Backend'} description={skills.skillsBackend}/>
            <SkillCard title={'Databases'} description={skills.skillsDatabase}/>
        </div>
    )
}

export default Skills;