import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-4 d-flex justify-content-center">
                <span className="contact-link">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Sofia, Bulgaria
                </span>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center">
                <span className="contact-link">
                    <a href="https://github.com/danielignatov" target="_blank">
                    <FontAwesomeIcon icon={faGithub} /> github/danielignatov</a>
                </span>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center">
                <span className="contact-link">
                    <a href="https://www.linkedin.com/in/danielignatov/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} /> linkedin/danielignatov</a>
                </span>
            </div>
        </div>
    );
}