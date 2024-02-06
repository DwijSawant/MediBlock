import Navbar from "../Navbar/Navbar";
import './Homepage.css'
import medbackvid from "../assets/medbackvid.mp4"
const HomePage = () => {
    return ( <
        div >
        <
        Navbar / >
        <
        div >
        <
        div className = 'video-background' >
        <
        video src = { medbackvid }
        autoPlay loop muted / >
        <
        /div> <
        h1 className = "heading" >
        MediBlock <
        div className = "subheading" >
        Your health, your data, your control: Take ownership with our innovative blockchain - enabled platform. <
        /div> <
        /h1> <
        /div> <
        div class = "container" >
        <
        div class = "box" >
        <
        span class = "title" > What is MediBlock ? < /span> <
        div >
        <
        p class = "aboutus" > MediBlock is a non - profit project made to maintain social security of delicate medical data of patients using the concept of blockchain.Our goal is to make the data of our users protected at all costs.By leveraging the transparency and immutability of the blockchain, MediBlock aims to empower individuals with greater control over their health information
        while fostering trust among healthcare providers.We believe that safeguarding sensitive medical data is not just a priority but a fundamental right, and through the continued development of our initiative, we strive to contribute to a more resilient and patient - centric healthcare system. < /p> <
        /div> <
        /div> <
        /div> <
        h1 id = 'features' > Features < /h1> <
        div className = 'card-holder' >
        <
        div class = "card"
        id = "cA" > HARD TO HACK < /div> <
        div class = "card"
        id = "cB" > DATA SECURITY < /div> <
        div class = "card"
        id = "cC" > PRIVACY < /div> <
        div class = "card"
        id = "cD" > TRANSPARENCY < /div> <
        /div> <
        div >
        <
        div className = 'howholder' > < h1 > How to use ? < /h1></div >
        <
        div class = "card2"
        id = 'cardleft' >
        <
        div class = "num" > < h1 > 1 < /h1></div >
        <
        div class = "textBox" >
        <
        div class = "textContent" >
        <
        p class = "h1" > Prerequisites < /p> <
        /div> <
        p class = "p" > You need to have a metamask account to use MediBlock.Click the following button to create your metamask account < button class = "link" > < a href = "https://metamask.io/download/"
        target = "_blank" > Create Metamask Wallet < /a></button > < /p> <
        div >
        <
        /div> <
        /div> <
        /div> <
        div class = "card2"
        id = 'cardright' >
        <
        div class = "num" > < h1 > 2 < /h1></div >
        <
        div class = "textBox" >
        <
        div class = "textContent" >
        <
        p class = "h1" > Link to MediBlock < /p> <
        /div> <
        p class = "p" > To access your reports, click the "Connect Wallet"
        button on the top right to link your metamask account with MediBlock < /p> <
        div >
        <
        /div> <
        /div> <
        /div> <
        div class = "card2"
        id = 'cardleft' >
        <
        div class = "num" > < h1 > 3 < /h1></div >
        <
        div class = "textBox" >
        <
        div class = "textContent" >
        <
        p class = "h1" > Accessing files < /p> <
        /div> <
        p class = "p" > Once you 're logged in with MediBlock, upload/select the patient report</p> <
        div >
        <
        /div> <
        /div> <
        /div>


        <
        /div> <
        footer className = 'footer' >
        <
        h1 > MediBlock < /h1> <
        /footer> <
        /div>
    );
};

export default HomePage;