import Card from "./utils/Card";
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
        <div>
            <div className="h-[20vh] bg-gradient-to-b from-gunmetal to-slate-900">
            </div>
                        
            <div className="h-full border-b border-outer-space">
                <div className="h-2/5">
                </div>
                <div className="grid h-3/5 bg-slate-900">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto mb-[10vh]">
                        <div className="font-bold mt-[10vh] text-keppel/80 py-1 mb-4 m-auto border-b border-b-keppel/80 text-2xl md:text-3xl lg:text-4xl font-mono lg:col-span-3 md:col-span-2">
                            PUBLIC REPOSITORIES
                        </div>
                        {projectList.map(
                            project=>
                                <Card 
                                    project_name = {project.name}
                                    url = {project.html_url}
                                    language = {project.language ? project.language : "NOT STARTED"}
                                    color = {project.language ? colors[project.language].color : ''}
                                    description = {project.description}
                                >
                                </Card>
                        )}
                    </div>  
                </div>
            </div>
            <div className="h-[30vh] bg-slate-900">
            </div>

        </div>
       
        
    )
}