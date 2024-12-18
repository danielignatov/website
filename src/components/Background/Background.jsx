import Footer from '../Footer/Footer'
import './Background.css';

export default function Background({ children }) {
    return (
        <div className="main">
            <div className='content'>
                {children}
                <Footer />
            </div>
        </div>
    );
}