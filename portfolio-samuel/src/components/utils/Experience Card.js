import empty from "../../images/empty.webp"
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return 0;});
    return images;
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

export default function ExperienceCard(props){
    return(
        <div className="grid grid-cols-5 max-w-md m-2 p-4 font-mono text-white">
            <div>            
                <img src={images[props.imgLink]} alt = {empty} className=" max-w-[50px] max-h-sm"></img>
            </div>
            <div className="col-span-4">
                <div className = "text-keppel font-bold text-lg">{props.role}</div>
                <div className = "font-semibold underline-offset-4 text-base">{props.company} · {props.type}</div>
                <div className = "italic font-thin text-gray-400 text-sm">{props.duration}</div>
                <div className = "italic font-thin text-gray-400 text-sm border-b">{props.location}</div>
                <div className = "mb-2 text-sm">{props.description}</div>
                <div className = "text-sm"><div className="mt-2 underline underline-offset-2">Skills:</div> {props.skills}</div><br></br>
            </div>
        </div>
    )
}