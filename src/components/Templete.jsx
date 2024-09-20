export default function Templete (props){
    
    return(
        <div className="sobremesa">
            <p className="descrição">{props.descricao}</p>
            <div className="div-texto">
            <p className="descrição-apresentacao" >Descubra novos sabores, receitas incríveis e transforme suas refeições em verdadeiras experiências gastronômicas. Prepare-se para uma jornada culinária inesquecível!</p>
            </div>
            <img className="imagem" src={props.imgtemplete} /> 
        </div>
    )
}