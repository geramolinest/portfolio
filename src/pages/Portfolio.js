import Header from './components/Header';
import Subtitle from './components/Subtitle';
import './styles/styles.css';
import Title from './components/Title';
import Button from './components/Button';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

const Portfolio = () =>{
    return(
        <div className='main-content'>
            <Header/>
                <Title/>
                <Subtitle/>
                <Button/>
            <Footer/>
            <AboutMe/>
            <Skills/>
        </div>
    )
}

export default Portfolio;