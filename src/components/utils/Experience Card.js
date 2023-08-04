import empty from "../../images/empty.webp"
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return 0;});
    return images;
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

export default function ExperienceCard(props){
    return(
        <div className="grid grid-cols-6 max-md p-2 font-mono text-white">
            <div>            
                <img src={images[props.imgLink]} alt = {empty} className="max-w-[50px] m-auto max-h-sm"></img>
            </div>
            <div className="col-span-5">
                <div className = "font-bold text-base">{props.role}</div>
                <div className = "underline-offset-4 text-sm">{props.company} · {props.type}</div>
                <div className = "italic font-thin text-gray-400 text-sm">{props.duration}</div>
                <div className = "italic font-thin text-gray-400 text-sm">{props.location}</div>
                <div className = "mt-4 mb-4 text-sm">{props.description}</div>
                <div className = "text-sm">
                    <strong>Skills:</strong> {props.skills}
                </div>
            </div>
        </div>
    )
}