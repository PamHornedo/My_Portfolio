import { Link } from 'react-router-dom'
import Navigation from '../components/Layout/Navigation'

function Home(){
    <div className='page'>
        <h1 className='page-title'>Welcome to my Portfolio!</h1>
        <p className='page-intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui pariatur culpa sed veritatis, et nihil quia minima. Obcaecati fugiat necessitatibus doloremque consequatur hic odit quaerat sint officiis reprehenderit iusto?</p>
        
        <div className='page-content'>
            <div className='card' id='image-card'><img src="../pamela.jpeg" alt="Pamela Hornedo" /></div>
            <div className='card' id='contact-card'><Link to= "/contact">Contact Me</Link></div>
            <div className='card' id='portfolio-card'><Link to= "/portfolio">View Portfolio</Link></div>
        </div>    
    </div>
}

export default Home