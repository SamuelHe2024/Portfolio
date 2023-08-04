

export default function Card(props){
    return(
        <div className={`hover:scale-105 transition-transform-[0.2s] p-4 h-max mx-4 mt-12 max-w-md md:mx-4 text-sm md:text-base lg:text-lg bg-arsenic rounded-xl    ${props.borderColor} border-l-4 shadow-md font-mono`}>
            <div className = "text-white font-bold">{props.project_name}</div>
            <div className = "text-gray-400 text-sm">
                {props.language} <div className = {`animate-pulse w-3 h-3 inline-block top-px relative rounded-full border border-arsenic ${props.color}`}></div>
            </div>
            <div className = {`text-sm ${props.description ? 'text-gray-200' : 'text-gunmetal/50'} mb-1`}>{props.description? props.description : '.'}</div>
            <button className = "bg-keppel/50 py-1 px-3 text-sm md:text-base rounded text-gray-200 hover:bg-keppel/40 active:bg-keppel/25"><a href={props.url}>View Code</a></button>
            
        </div>
    )
}