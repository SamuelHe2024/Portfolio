import Card from "./utils/Project Card";
import {useState,useEffect} from 'react';
import colors from "./utils/Colors";


export default function Projects(){
    const [projectList, setProjectList] = useState([]);

    useEffect(()=>{
        async function getRepos(){
            try {
                const response = await fetch("https://api.github.com/users/weewoo123/repos")
                const json = await response.json()
                setProjectList(json)
            } catch(error){
                console.log(error)
            }
        }
        getRepos();
    },[]);
    

    return(
        <div className = "bg-gunmetal border-t-2 border-arsenic">
                <div className="grid h-full">
                    <div className="grid mt-[10vh] lg:grid-cols-2 mx-auto mb-[10vh]">
                        <div className=" font-bold text-keppel py-1 mb-4 border-b border-b-keppel/80 text-2xl md:text-3xl lg:text-4xl font-mono lg:col-span-2">
                            PUBLIC REPOSITORIES
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