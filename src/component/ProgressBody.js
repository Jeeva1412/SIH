import ProgressBar from "./ProgressBar";

function ProgressBody(){
    return(
        <>
        <div className="container-fluid">
            <div className="container mt-4 ">
                <div className="text-start ">
                    <h4> welcome Ms.Deepika Ganesan</h4>
                    <p className="lead">Your personalized learning center</p>
                   
                </div>
                <div className="row ">

                    <div className="col-6  text-start">
                    <p className="lead mt-4">20 Days to Achieve Your Data science career</p>
                    <div className="container  h-50 d-flex flex-column  justify-content-center shadow-sm  ">
                        <ProgressBar/>



                    </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img src="/images/img9.jpg" alt="progress"/> 
                    </div>
                </div>
                 
            </div>

        </div>
        </>
    );
}

export default ProgressBody;