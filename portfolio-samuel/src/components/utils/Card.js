

export default function Card(props){
    return(
        <div className="p-4 border-arsenic/75 m-4 bg-gunmetal/50 rounded-md border-x border-y font-mono">
            <div className = "text-keppel text-xl">{props.project_name}</div>
            <div className = "text-gray-500">
                <div className = {`animate-pulse w-3 h-3 inline-block top-px relative rounded-full border ${props.color} `}></div> {props.language}
            </div>
            <div className = {`${props.description ? 'text-gray-400' : 'text-gunmetal/50'}`}>{props.description? props.description : '.'}</div>
            <button className = "bg-keppel/50 p-1 rounded text-gray-200 hover:bg-keppel/25"><a href={props.url}>Visit Repo</a></button>
            
        </div>
    )
}