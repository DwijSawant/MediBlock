import Navbar from "../Navbar/Navbar";
import './Homepage.css'
import medbackvid from "../assets/medbackvid.mp4"
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className='video-background'>
                    <video src={medbackvid} autoPlay loop muted />
                </div>
                <h1 className="heading">
                    MediBlock
                    <div className="subheading">
                        Your health, your data, your control: Take ownership with our innovative blockchain-enabled platform.
                    </div>
                </h1>
            </div>
            <div class="container">
                <div class="box">
                    <span class="title">What is MediBlock?</span>
                    <div>
                        <p>sc</p>
                    </div>
                </div>
            </div>
            <h1 id='features'>Features</h1>
            <div className='card-holder'>
                <div class="card">HOVER</div>
                <div class="card">HOVER</div>
                <div class="card">HOVER</div>
                <div class="card">HOVER</div>
            </div>
            <div>
                <div className='howholder'><h1>How to use?</h1></div>
                <div class="card2" id='cardleft'>
                    <div class="num"><h1>1</h1></div>
                        <div class="textBox">
                            <div class="textContent">
                                <p class="h1">Clans of Clash</p>
                            </div>
                            <p class="p">Xhattmahs is not attacking your base!</p>
                        <div>
                    </div>
                </div>
                </div>
                <div class="card2" id='cardright'>
                    <div class="num"><h1>1</h1></div>
                    <div class="textBox">
                        <div class="textContent">
                            <p class="h1">Clans of Clash</p>
                        </div>
                        <p class="p">Xhattmahs is not attacking your base!</p>
                        <div>
                        </div>
                    </div>
                </div>
                <div class="card2" id='cardleft'>
                    <div class="num"><h1>1</h1></div>
                    <div class="textBox">
                        <div class="textContent">
                            <p class="h1">Clans of Clash</p>
                        </div>
                        <p class="p">Xhattmahs is not attacking your base!</p>
                        <div>
                        </div>
                    </div>
                </div>
                <div class="card2" id='cardright'>
                    <div class="num"><h1>1</h1></div>
                    <div class="textBox">
                        <div class="textContent">
                            <p class="h1">Clans of Clash</p>
                        </div>
                        <p class="p">Xhattmahs is not attacking your base!</p>
                        <div>
                        </div>
                    </div>
                </div>

            </div>
            <footer className='footer'>
                <h1>MediBlock</h1>
            </footer>
        </div>
    );
};

export default HomePage;