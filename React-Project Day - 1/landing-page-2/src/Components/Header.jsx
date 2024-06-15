import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

function Landing() {
    return (
        <div>
            <body style={{ height: "100vh", margin: "0", display: "flex", backgroundColor: "#B3E2A7" }}>
                <div className='container' style={{ border: "1px solid lightgray", width: "100%", margin: "auto", fontFamily: "sans-serif", boxshadow: "0px 0px 10px 1px gray", backgroundColor: "white", height: "100vh" }}>
                    <div className="header" style={{ padding: "10px 30px", borderBottom: "3px solid lightgray", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div className="left" style={{ width: "100%" }}>
                            <h1>Logo.</h1>
                            <p style={{ fontWeight: "600", color: "gray", margin: "auto" }}>
                                <ul style={{ display: "flex", listStyle: "none", padding: "11px" }}>
                                    <li style={{ padding: "0px 30px 0px 0px" }}><a href="">Home</a></li>
                                    <li style={{ padding: "0px 30px 0px 0px" }}><a href="">About</a></li>
                                    <li style={{ padding: "0px 30px 0px 0px" }}><a href="">Contact</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="left">
                            <i style={{ padding: "20px 10px 20px", fontSize: "20px" }}><FaFacebook /></i>
                            <i style={{ padding: "20px 10px 20px", fontSize: "20px" }}><FaInstagram /></i>
                            <i style={{ padding: "20px 10px 20px", fontSize: "20px" }}><FaTwitter /></i>
                        </div>
                    </div>
                    <Content />
                    <Footer />
                </div>
            </body>
        </div>
    )
}
export default Landing
