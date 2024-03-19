import { Iimage } from "../../interfaces/image";

const ImageWeather = ({src, alt}:Iimage) => {
    return(
        <img src={src} alt={alt} />
    )
}

export default ImageWeather;