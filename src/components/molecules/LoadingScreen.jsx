import * as icon from '../../assets/lotties/icons';
import Lottie from "lottie-react";


export default function LoadingScreen(){
    return(
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div style={{width: 200, height:200}}>
                <Lottie animationData={icon.loading} loop={true} />
            </div>
        </div>
    )
}