

export default function Card(props){
    return(
        <div className="p-4 max-h-fit border-x-arsenic/75 mb-1 mt-7 mx-4 md:mt-12 max-w-md md:mx-4 text-sm md:text-md bg-cyan-800/30 rounded-md border-red-400/40 border-x-2 border-t shadow-md shadow-keppel/50 font-mono">
            <div className = "text-keppel font-extrabold">{props.project_name}</div>
            <div className = "text-gray-400">
                <div className = {`animate-pulse w-3 h-3 inline-block top-px relative rounded-full border ${props.color} `}></div> {props.language}
            </div>
            <div className = {`${props.description ? 'text-gray-400' : 'text-gunmetal/50'}`}>{props.description? props.description : '.'}</div>
            <button className = "bg-keppel/50 py-1 px-3 rounded text-gray-200 hover:bg-keppel/40 active:bg-keppel/25"><a href={props.url}>View Code</a></button>
            
        </div>
    )
}