import { TitleForOrganization } from "./TitleForOrganization"

type argsType = {
    events : string[]
    isUserMyself: boolean
}

export const Supervisions = ({events, isUserMyself} :argsType) => {
    return (
        <>
            <div className="pb-6 border-b border-solid border-slate-200  mr-5 ml-5">
                <div className="flex flex-col">
                    <TitleForOrganization title="주관종목" isUserMyself={isUserMyself}  />                    
                    <div className="flex gap-2 flex-wrap">
                        {events.map(event => {
                            return (
                                <button key={event} className="text-xs font-medium bg-transparent text-black  py-2 px-3 border border-slate-300 rounded-3xl">
                                    {event}
                                </button>

                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}