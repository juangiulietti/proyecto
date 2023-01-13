import React from "react";

const Footer = () => {
    return(
        <div className="container-fluid">
            <div className="container py-5">
                <div className="row">
                    <hr/>
                    <div className="col-md-6">
                        <img src="/images/logo.png" alt={"Topper"} width={192} />
                    </div>
                    <div className="col-md-6">
                        <p><a href={"https://www.facebook.com/juanma.giulietti"} target={"_blank"}><img src={"/images/facebook.svg"} alt={"Facebook"} width={24} className="me-3"/></a></p>
                        <p><a href={"https://www.instagram.com/juanmagiulietti/"} target={"_blank"}><img src={"/images/instagram.svg"} alt={"Instagram"} width={24} className="me-3"/></a></p>
                        <p><a href={"https://www.linkedin.com/in/juan-manuel-giulietti-046356244/"} target={"_blank"}><img src={"/images/linkedin.svg"} alt={"LinkedIn"} width={24} className="me-3"/></a></p>
                        <p><a href={""} target={"_blank"}><img src={"/images/envelope.svg"} alt={"Email"} width={24} className="me-3"/></a></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;