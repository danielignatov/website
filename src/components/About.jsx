import meImg from '../assets/img/me.jpg'

export default function About() {
    return (
        <div id="about-container" className="row mt-5">
            <div className="col-12 col-md-3 col-lg-4 col-xl-5">
            </div>
            <div className="col-12 col-md-3 col-lg-2 col-xl-1">
                <img id="me-img" src={meImg} className="img-fluid rounded mx-auto d-block"
                    alt="photo of me" />
            </div>
            <div className="col-12 col-md-6">
                <p>It's very easy for me to get passionate and invested in something that benefits not only
                    me but all people around me. I like to solve problems and optimize solutions. I try my
                    best to be committed, friendly and open to try new things.</p>
            </div>
        </div>
    );
}