import profile from "./linkedinprofile"
import ExperienceCard from "./utils/Experience Card" 
export default function WorkExperience(props){
    return(
        <div className = "bg-gunmetal border-t-2 border-arsenic">
            <div className="h-full grid">
                <div className="grid divide-y divide-x divide-arsenic mt-[10vh] lg:grid-cols-2 mx-auto mb-[10vh]">
                    <div className="font-bold text-keppel py-1 mb-4 border-b border-b-keppel/80 text-2xl md:text-3xl lg:text-4xl font-mono lg:col-span-2">
                        WORK TIMELINE
                    </div>
                    {profile.map(job=>
                        <ExperienceCard
                            role = {job.role}
                            company = {job.company}
                            type = {job.type}
                            duration = {job.duration}
                            location = {job.location}
                            description = {job.description}
                            skills = {job.Skills}
                        >
                        </ExperienceCard>
                    )}
                </div>
            </div>
        </div>
    )
}