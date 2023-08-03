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
            <div className="h-[40vh] bg-gradient-to-b from-gunmetal to-black">
            </div>
                        
            <div className="h-full bg-black">
                <div className="h-2/5">
                    </div>
                    <div className="grid h-3/5 bg-black">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3">
                            <div className="text-keppel m-auto text-4xl font-mono lg:col-span-3 md:col-span-2">
                                Repositories:
                            </div>
                            {projectList.map(
                                project=>
                                    <Card 
                                        project_name = {project.name}
                                        url = {project.html_url}
                                        language = {project.language ? project.language : "N/A"}
                                        color = {project.language ? colors[project.language].color : ''}
                                        description = {project.description}
                                    >
                                    </Card>
                            )}
                    </div>
                        
                </div>
            </div>
                

        </div>
       
        
    )
}