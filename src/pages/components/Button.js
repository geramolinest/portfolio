const Button = () =>{
    const onClick = ()=>{
        alert('clicked');
    }
    return(
        <button className="contact-btn" onClick={onClick}>
            Get In Touch 
            <img className='icon-btn' src={require('../../assets/Group.png')} alt="Imagen boton"/>
        </button>
    )
}

export default Button;