import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import { loaderStatus } from "../../features/modal/modal";
import "./Loader.css"
const Spinner : React.FC =() =>{
    const isSpinner = useSelector(loaderStatus)
  //other logic
    return (
    <div className="spinner">
        {isSpinner && <Loader
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        
      />}
    </div>
        
    );
}
export default Spinner;