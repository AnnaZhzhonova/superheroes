function Superhero (props) {
    return (
        <div className="card">
            <img src={props.url} alt={props.name}/>
            <div className="card__info">
                <h2>{props.name}</h2>
                <h3>Альтерэго: {props.alterego}</h3>
                <p>Вселенная: {props.universe}</p>
                <p>Друзья: {props.friends}</p>
                <p>Суперсилы: {props.superpowers}</p>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default Superhero;