

interface IProps{
    title: string;
    text:string;
    styleTitle:string
    styleText:string;
}
const TextHeadersTwo = ({...props}:IProps) => {
    return (
        <div className="flex justify-between items-center pt-2 pb-1  ">
            <h4 className={props.styleTitle}>{props.title}</h4>
            <h6 className={props.styleText} >{props.text}</h6>
        </div>
    )
}
export default TextHeadersTwo;