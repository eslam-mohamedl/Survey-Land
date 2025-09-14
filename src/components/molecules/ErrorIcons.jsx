import * as icon from '../../assets/lotties/icons';
import Lottie from "lottie-react";
const ErrorIcon = ({type = "frontend", size = 200}) => {
    let animationData = null;

    if(type === 'frontend'){
        animationData = icon.errorFrontend;
    }else if(type === "client"){
        animationData = icon.errorClient;
    }else if(type ==="404"){
        animationData = icon.error404;
    }else if(type === "500"){
        animationData = icon.error500;
    } else{
        return null
    }    
    return(
        <div style={{width : size , height : size}}>
         <Lottie animationData={animationData} loop />
        </div>
    ) 
}

export default ErrorIcon;