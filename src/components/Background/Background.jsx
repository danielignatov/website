import Footer from '../Footer/Footer'
import waves from '../../assets/vid/waves.mp4';
import './Background.css';

export default function Background({ children }) {
    return (
        <div className="main">
            {true && <video src={waves} autoPlay loop muted />}
            <div className='content'>
                {children}
                <Footer />
            </div>
        </div>
    );
}