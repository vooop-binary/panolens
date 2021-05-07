const container = document.querySelector('#container');

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Hotspots //

infospot1 = new PANOLENS.Infospot();
    infospot1.position.set(0, 0, -5000);
    infospot1.addEventListener("click", () => openNav());

infospot2 = new PANOLENS.Infospot();
    infospot2.position.set(5000, 3000, -5000);
    infospot2.addEventListener("click", () => openNav());


// Panoramas //

const panorama = new PANOLENS.ImagePanorama('../asset/oberoivillas_out.jpg');
const panoramaPool = new PANOLENS.ImagePanorama('../asset/oberoivillas.jpg');

const viewer = new PANOLENS.Viewer({
    container: container,
});

panorama.add(infospot1, infospot2);

panorama.link(panoramaPool, new THREE.Vector3(3500, 0, 5000));
panoramaPool.link(panorama, new THREE.Vector3(4889.52, 471.57, -888.95));

viewer.add(panorama);
viewer.add(panoramaPool)


