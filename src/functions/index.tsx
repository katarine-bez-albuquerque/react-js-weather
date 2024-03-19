export const viewIcons = (icon: string): string => {
    let image = "";
    if (icon === '01d') {
        image = "/images/clear.png";
    }
    else if (icon === '01n') {
        image = "/images/clear_02.png";
    }
    else if (icon === '02d') {
        image = "/images/few_clouds.png";
    }
    else if (icon === '02n') {
        image = "/images/few_clouds_02.png";
    }
    else if (icon === '03d' || icon === '03n') {
        image = "/images/scattered_clouds.png";
    }
    else if (icon === '04d' || icon === '04n') {
        image = "/images/broken_clouds.png";
    }
    else if (icon === '09d' || icon === '09n') {
        image = "/images/shower_rain.png";
    }
    else if (icon === '10d') {
        image = "/images/rain.png";
    }
    else if (icon === '10n') {
        image = "/images/rain_02.png";
    }
    else if (icon === '11d' || icon === '11n') {
        image = "/images/thunderstorm.png";
    }
    else if (icon === '13d' || icon === '13n') {
        image = "/images/snow.png";
    }
    else if (icon === '50d' || icon === '50n') {
        image = "/images/mist.png";
    }
    else {
        image = "";
    }
    return image;
}