export const TitleForOrganization = ({title, isUserMyself} : {title : string, isUserMyself : boolean}) => {
    return (
    <div className="header flex pt-5 pb-5 justify-between">
        <div className="text-[.9em] font-medium">{title}</div>
        {isUserMyself &&  
        <div className="text-[.8em] text-[#4C8BFF]" onClick={() => {}}>수정</div>}
    </div>             
    )
}