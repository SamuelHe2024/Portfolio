import profile from "./linkedinprofile"
import ExperienceCard from "./utils/Experience Card" 
export default function WorkExperience(props){
    return(
        <div className = "bg-gunmetal border-arsenic">
            <div className="h-full grid">
                <div className="grid divide-y divide-x divide-arsenic mt-[10vh] lg:grid-cols-3 mx-auto mb-[10vh]">
                    <div className="border-t pt-12 border-arsenic font-bold mx-4 sm:mx-0 mb-8 text-keppel py-1 underline underline-offset-8 text-2xl md:text-3xl lg:text-4xl font-mono lg:col-span-3">
                        WORK EXPERIENCE
                    </div>
                    {profile.map(job=>
                        <ExperienceCard
                            imgLink = {job.imgLink}
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