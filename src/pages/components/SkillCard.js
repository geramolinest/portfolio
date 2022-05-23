const SkillCard = ({title, description})=>{
    return(
        <div className="card-skill">
            <h3>{title}</h3>
            <ul>
                {description.map(x => 
                    <li key={x}>{x}</li>    
                )}
            </ul>
        </div>
    )
}

export default SkillCard;