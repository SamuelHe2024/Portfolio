import gs from "../../images/goldman-sachs-logo-png-transparent-1.png"
export default function ExperienceCard(props){
    return(
        <div className="max-w-md m-2 p-4 font-mono text-white">
            <img src={gs} className=" max-w-sm max-h-sm m-auto"></img>
            <div className = "text-keppel font-bold text-lg">{props.role}</div>
            <div className = "font-semibold underline-offset-4">{props.company} · {props.type}</div>
            <div className = "italic font-thin text-gray-400">{props.duration}</div>
            <div className = "border-b">{props.location}</div>
            <div className = "border-b">{props.description}</div>
            <div><div className="font-bold mt-1">Skills:</div> {props.skills}</div><br></br>
        </div>
    )
}