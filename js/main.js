const container = document.querySelector('.panolens-container'); // Root container for panorama
console.log(container);

/* Panoramas */
const panoramaMain = new PANOLENS.ImagePanorama('../asset/panoramas/outside.jpg');
const panoramaLounge = new PANOLENS.ImagePanorama('../asset/panoramas/lounge.jpg');
const panoramaReception = new PANOLENS.ImagePanorama('../asset/panoramas/reception.jpg');

/* Viewer */
const viewer = new PANOLENS.Viewer({
    container: container, // Parent container
    controlBar: false, // Hide the control bar
    autoHideInfospot: false, // Never hide infospots
    cameraFov: 60, // Camera field of view
});

/* Add Infospots */
panoramaMain.add(profile, lounge);
panoramaLounge.add(chat);
panoramaReception.add(editProfile);

/* Link Panoramas */
panoramaMain.link(panoramaLounge, new THREE.Vector3(-2000, 500, 5000), 600, '../asset/img/lounge.png');
panoramaMain.link(panoramaReception, new THREE.Vector3(-9000, 300, 3750), 600, '../asset/img/reception.png');
panoramaLounge.link(panoramaMain, new THREE.Vector3(4889.52, 471.57, -888.95), 300);

/* View the Panoramas - Order matters */
viewer.add(panoramaMain);
viewer.add(panoramaLounge);
viewer.add(panoramaReception);