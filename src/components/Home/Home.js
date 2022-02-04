import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import './home.css'

function Home() {
    return (
        <div className='home'>
            <div>
                <Header />
            </div>
            <div>
                <Body />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
