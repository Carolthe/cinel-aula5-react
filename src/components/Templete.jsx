export default function Templete (props){
    
    return(
        <div className="sobremesa">
            <p className="descrição">{props.descrição}</p>
            <img className="imagem" src={props.imgtemplete} /> 
        </div>
    )
}