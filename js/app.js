const container = document.querySelector('#container');

// Overlay //

// Open when someone clicks on the span element
function openOverlay() {
    document.getElementById("myNav").style.width = "100%";
}

// Close when someone clicks on the "x" symbol inside the overlay
function closeOverlay() {
    document.getElementById("myNav").style.width = "0%";
}

// Hotspots //

infospot1 = new PANOLENS.Infospot();
    infospot1.position.set(0, 0, -5000);
    infospot1.addEventListener("click", () => openOverlay());

infospot2 = new PANOLENS.Infospot();
    infospot2.position.set(5000, 3000, -5000);
    infospot2.addEventListener("click", () => openOverlay());


// Panoramas //

const panorama = new PANOLENS.ImagePanorama('../asset/oberoivillas_out.jpg');
const panoramaPool = new PANOLENS.ImagePanorama('../asset/oberoivillas.jpg');

// Viewer //

const viewer = new PANOLENS.Viewer({
    container: container,       // Parent container
    controlBar: false,          // Hide the control bar
    autoHideInfospot: false,    // Never hide infospots
    cameraFov: 60,              // Camera field of view
});

panorama.add(infospot1, infospot2);

panorama.link(panoramaPool, new THREE.Vector3(3500, 0, 5000));
panoramaPool.link(panorama, new THREE.Vector3(4889.52, 471.57, -888.95));

console.log(infospot1.container, infospot2.container)

viewer.add(panorama);
viewer.add(panoramaPool)
