import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
const Footer = ()=>{
    return(
        <footer>
            <a className='icon-footer' href='https://www.instagram.com/geramolina/' target={'_blank'} rel='noreferrer'>
                <img src={instagram} alt="twitter"/>
            </a>

            <a className='icon-footer' href='https://github.com/geramolinest' target={'_blank'} rel='noreferrer'>
                <img src={github} alt="github" className='github'/>
            </a>

            <a className='icon-footer' href='https://www.linkedin.com/in/geramolest' target={'_blank'} rel='noreferrer'>
                <img src={require('../../assets/linkedin.png')} alt="unknown"/>
            </a>
            
        </footer>
    )
}

export default Footer;