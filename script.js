 //window.onload = () => {  https://www.w3schools.com/js/js_arrow_function.asp

window.onload = () => {  // dreamweaver shows unexpected token error but should be fine
    let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
       // {
//            name: 'Magnemite',
//            location: {  // in front of mossman
//                lat: 35.958716,
//                lng: -83.926934,
//            }
//        },
         {
            name: 'Magnemite',
            location: {  // fargo deck
                lat: 35.863148,
                lng: -84.206301,
            },
             mod: {
             asset: 'assets/magnemite/scene.gltf',
             rot: {x:0, y:180, z:0},  // quite different syntax than original
             sca: {x:0.5, y:0.5, z:0.5},  // quite different syntax
             }
        },   // end 
       
//        {
//            name: 'Magnemite',
//            location: {  // m backyard
//                lat: 35.860664,
//                lng: -84.211673,
//            }
//        },
//        {
//            name: 'Magnemite',
//            location: {  // s backyard
//                lat: 35.8756763,
//                lng: -84.1937598,
//            }
//        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        let assett = place.mod.asset;
        let rotat = place.mod.rot;  
        let scal = place.mod.sca;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       // model.setAttribute('gltf-model', 'assets/magnemite/scene.gltf');
        model.setAttribute('gltf-model', `${assett}`);
        
       // model.setAttribute('rotation', '0 180 0');
        model.setAttribute('rotation', `${rotat}`);
        
        model.setAttribute('animation-mixer', '');
        
      //  model.setAttribute('scale', '0.5 0.5 0.5');
        model.setAttribute('scale', `${scal}`);

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}// JavaScript Document