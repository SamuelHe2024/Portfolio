export default function ExperienceCard(props){
    return(
        <div className="max-w-md text-white">
            <div>{props.role}</div>
            <div>{props.company}</div>
            <div>{props.type}</div>
            <div>{props.duration}</div>
            <div>{props.location}</div>
            <div>{props.skills}</div>
        </div>
    )
}