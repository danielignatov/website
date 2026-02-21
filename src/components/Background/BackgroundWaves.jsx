import Footer from '../Footer/Footer'
import './Background.css';

export default function Background({ children }) {
    return (
        <div className="main">
            <img src="/waves.jpg" alt="background" className="bg-image" />
            <div className='content'>
                {children}
                <Footer />
            </div>
        </div>
    );
}