function GetLocationOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
}
      
function GetLocationError() {
    console.log('Not allowed');
}

function GetLocation() {
    return navigator.geolocation.getCurrentPosition(GetLocationOk, GetLocationError);
}

export default GetLocation;