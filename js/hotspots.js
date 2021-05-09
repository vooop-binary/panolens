/*  Profile */

let profile = new PANOLENS.Infospot(600, '../asset/img/profile.png');
profile.position.set(-5750, -500, -5000);
profile.addEventListener("click", () => openOverlay());

/*  Lounge */

let lounge = new PANOLENS.Infospot(600, '../asset/img/pool.png');
lounge.position.set(-2700, 250, -7000);
lounge.addEventListener("click", () => openOverlay());

/*  Edit Profile */

let editProfile = new PANOLENS.Infospot(600, '../asset/img/edit_profile.png');
editProfile.position.set(0, -750, -5000);
editProfile.addEventListener("click", () => openOverlay());

/*  Chat */

let chat = new PANOLENS.Infospot(600, '../asset/img/chat.png');
chat.position.set(-8000, -1000, 500);
chat.addEventListener("click", () => openOverlay());

/* TODO: Fix this
profile.addHoverElement(htmlFromString("<p class=\"hotspot-text\">Profile</p>"));
lounge.addHoverElement(htmlFromString("<p class=\"hotspot-text\">Lounge</p>"));
editProfile.addHoverElement(htmlFromString("<p class=\"hotspot-text\">Edit Profile</p>"));
chat.addHoverElement(htmlFromString("<p class=\"hotspot-text\">Chat</p>"));
*/