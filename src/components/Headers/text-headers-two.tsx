
interface IProps{
    title: string;
    text:string;
    styleTitle:string
    styleText:string;
}
const TextHeadersTwo = ({...props}:IProps) => {
    return (
        <div className="flex justify-between items-center pt-2 pb-1 px-4 text-orange-500 ">
            <h4 className={props.styleTitle}>{props.title}</h4>
            <h6 className="font-light text-sm hover:text-orange-700">{props.text}</h6>
        </div>
    )
}
export default TextHeadersTwo;