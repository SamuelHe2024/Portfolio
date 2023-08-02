

export default function Card(props){
    return(
        <div className="font-mono">
            <div className = "text-keppel text-xl">{props.project_name}</div>
            <div className = "text-gray-400">{props.description}</div>
            <a href={props.url} className = "text-gray-400">{props.url}</a><br/>
            <span className = {`w-3 h-3 inline-block top-px relative rounded-full border ${props.color} `}></span>
            <div className = "text-gray-400">{props.language}</div>
            <br/>
        </div>
    )
}