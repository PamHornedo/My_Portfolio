import { Link } from 'react-router-dom'

function Home(){
    return (
    <div className='page'>
        <h2 id='page-title'>Welcome to my Portfolio!</h2>
        
        <div className='page-content'>
            <div className='card' id='image-card'><img id='image' src="./src/PamelaHornedo.png" alt="Pamela Hornedo" /></div>
            <div className='content-cards'>
                <div id='page-intro' className='card'>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui pariatur culpa sed veritatis, et nihil quia minima. Obcaecati fugiat necessitatibus doloremque consequatur hic odit quaerat sint officiis reprehenderit iusto?</p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum provident repudiandae laboriosam asperiores, cumque quidem fugiat pariatur odit, quasi atque praesentium officia enim a dolores sequi reprehenderit perferendis neque!</p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur provident aliquid, ipsam repudiandae blanditiis, quidem natus optio, enim repellat veniam. Rem, voluptas? Aut numquam alias, at quas eligendi nemo.</p> <br />
                </div>
                    <div className='page-links'>
                        <div className='card' id='contact-card'><Link to= "/contact">Contact Me</Link></div>
                        <div className='card' id='portfolio-card'><Link to= "/portfolio">View Portfolio</Link></div>
                    </div>
            </div>
        </div>    
    </div>
    )
}

export default Home