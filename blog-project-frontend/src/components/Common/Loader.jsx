import loader from '../../assets/images/loadingImage.svg'

const Loader = () => {
    return (
        <div className='ProcessingDiv'>
            <div className="center-screen d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                <img className='loader-size img-fluid' src={loader} alt="img" />
            </div> 
        </div>
    );
};

export default Loader;