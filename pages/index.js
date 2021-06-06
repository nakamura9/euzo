import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePage() {
    return <main>
        <section className="hero">
            <div className="hero-overlay">
                <img src="/images/hero-img.jpg" alt="doctor" />
                <div className="hero-text">
                    <h1>Welcome To <br /> <span className="med">MED</span><span className="haven">HAVEN</span></h1>
                    <p><FontAwesomeIcon icon="quote-left" size="3x"/> Connecting patients and qualified<br />doctors in India</p>
                </div>
            </div>
        </section>

        <section className="services">
            <h2>Services</h2>
            <div className="short"></div>
            <div className="services">
                <div className="card">
                    <div className="card-body">
                        <h4>Neurology</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <h4>Dermatology </h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4>Opthamology</h4>
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="card">
                    <div className="card-body">
                        <h4>Pathology</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <h4>Oncology </h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4>Surgery</h4>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="partners">
            
            <div className="partners"></div>
            <div className="partner-content">
                <h2>Our Partners</h2>
                <div className="short"></div>
                <div className="partner-row">
                    <div className="partner-section">
                        <h4>Hospital 1</h4>
                        <FontAwesomeIcon icon="hospital-symbol" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta earum minima dolorem nesciunt.</p>
                        <a href="/">Learn More</a>
                    </div>
                    <div className="partner-section">
                        <h4>Hospital 2</h4>
                        <FontAwesomeIcon icon="hospital-symbol" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta earum minima dolorem nesciunt.</p>
                        <a href="/">Learn More</a>

                    </div>
                    <div className="partner-section">
                        <h4>Hospital 3</h4>
                        <FontAwesomeIcon icon="hospital-symbol" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta earum minima dolorem nesciunt.</p>
                        <a href="/">Learn More</a>
                    </div>

                </div>

                <hr />

                <div className="partner-row">
                    <div className="partner-section">
                        <h4>Hospital 4</h4>
                        <FontAwesomeIcon icon="hospital-symbol" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta earum minima dolorem nesciunt.</p>
                        <a href="/">Learn More</a>
                    </div>
                    <div className="partner-section">
                        <h4>Hospital 5</h4>
                        <FontAwesomeIcon icon="hospital-symbol" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta earum minima dolorem nesciunt.</p>
                        <a href="/">Learn More</a>

                    </div>

                </div>
            </div>

        </section>

        <section className="news">

        </section>

        <section className="contact">
            <h2>Contact</h2>
            <div className="short white"></div>
            <h3>We’re here to help</h3>
            <br />
            <p>Contact us for a quotation, information or to receive medical treatment. <br />
            Our professional team is ready to assist you.</p>
            <br />
            <a href="/">Contact Us</a>
        </section>

    </main>
}
  
export default HomePage