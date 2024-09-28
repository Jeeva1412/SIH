function Footer(){
    return(
        <>
        <div className="container-fluid bg-dark text-light mt-5 ">
            <div className="container py-5  ">
                <div className="row row-cols-3 my-4">
                    <div className="col-8">
                        <div className="row row-cols-3">
                            <div className="col text-start">
                                <h4 className="h6 py-4">About us</h4>
                                <h4 className="h6 py-4">Blog</h4>
                                <h4 className="h6 py-4">Investor</h4>
                                
                            </div>
                            <div className="col text-start">
                                <h4 className="h6 py-4">Contact us</h4>
                                <h4 className="h6 py-4">Help and support</h4>
                                <h4 className="h6 py-4">Term</h4>
                            </div>
                            <div className="col text-start">
                                <h4 className="h6 py-4">careers </h4>
                                <h4 className="h6 py-4">Affiliate</h4>
                                <h4 className="h6 py-4">Privacy policy</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3 d-flex  justify-content-center align-item-center flex-column   ">
                   
                    <div className="d-flex justify-content-center"><i className="fas fa-globe fa-2x me-2 mt-1"></i> <h3>Punjabi</h3></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;