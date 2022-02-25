const Card = props => {
    return (
        <div className="divTwo" >
            <h2>Name : {props.name} </h2>
            <img alt="avatar" style={{ width: '180px' }} src={props.avatar_url} />
            <h3>For more info : <a href={props.blog}> {props.blog} </a></h3>
        </div>
    )
}
export default Card;