import Card from "./utils/Project Card";
import {useState,useEffect} from 'react';
import colors from "./utils/Colors";


export default function Projects(){
    const [projectList, setProjectList] = useState([]);

    useEffect(()=>{
        async function getRepos(){
            try {
                const response = await fetch("https://api.github.com/users/SamuelHe2024/repos")
                const json = await response.json()
                setProjectList(json)
            } catch(error){
                console.log(error)
            }
        }
        getRepos();
    },[]);
    

    return(
        <div className = "relative bg-slate-900">
                <div className="grid h-full">
                    <div className="grid mt-[5vh] lg:grid-cols-3 mx-auto mb-[10vh]">
                        <div className="border-t border-arsenic pt-12 font-bold mx-5 text-white py-1 text-lg lg:text-xl font-mono lg:col-span-3">
                            Projects
                        </div>
                        {projectList.map(
                            project=>
                                <Card
                                    project_name = {project.name}
                                    url = {project.html_url}
                                    language = {project.language ? project.language : "NOT STARTED"}
                                    borderColor = {project.language ? colors[project.language]['border-color'] : ""}
                                    color = {project.language ? colors[project.language].color : ''}
                                    description = {project.description}
                                >
                                </Card>
                        )}
                    </div>
                </div>
        </div>
       
        
    )
}