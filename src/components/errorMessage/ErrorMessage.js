import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto", marginBottom: '10px'}}
        src={img} alt="Error"/>
    )
}

export default ErrorMessage;