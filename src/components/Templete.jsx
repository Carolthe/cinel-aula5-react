export default function Templete (props){
    const {classe} = props
    return(
        <div className={classe}>
            <p className="descrição">{props.descrição}</p>
            <img className="imagem" src={props.imgtemplete} /> 
        </div>
    )
}