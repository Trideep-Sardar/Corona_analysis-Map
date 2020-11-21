// my token-// pk.eyJ1IjoidHJpZGVlcHNhcmRhciIsImEiOiJja2Q1dHlsb3IwM3NmMnFtYjd3MGRic3Y3In0.oQQZR5Q0X-KTq5z7PcHGKQ
console.log('map has been updated')
const updateMap = function () {
    fetch('../data.json')
    .then(response => {
        return response.json();
    })
        .then(rsp => {
            // console.log(rsp);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases=element.infected;
                recover=element.recoverd;
                if (cases>255){
                    color="rgb(255,0,0)"
                }
                else if(cases==0){
                    color="yellow"
                }
                else{
                    color=`rgb(${cases},0,0)`
                }

                


                var marker = new mapboxgl.Marker({
                    color:color,
                    draggable:false,
                }).setLngLat([longitude, latitude]).addTo(map);

            });
        })
    };
    const interval=20000;
    
    setInterval(updateMap,interval);
