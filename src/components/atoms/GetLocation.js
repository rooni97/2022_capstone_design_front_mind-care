function GetLocationOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    return lat;
}
      
function GetLocationError() {
    console.log('Not allowed');
}

function GetLocation() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
}

export default GetLocation;