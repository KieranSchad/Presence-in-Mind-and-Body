// Toggle mobile menu

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

toggle.addEventListener("click", toggleMenu, false);

// Submenu

const items = document.querySelectorAll('.menu-item');
const line = document.getElementById("current-submenu");

function toggleItem() {
    
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
        // line.classList.add("current-page");

    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active"); 
        
    } else {
        this.classList.add("submenu-active");
        // line.classList.remove("current-page");
    }
}



for (let item of items) {
    if (item.querySelector('.submenu')) {
        item.addEventListener('click', toggleItem, false);
        item.addEventListener('keypress', toggleItem, false);
    }
}

function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList.remove('submenu-active');
    }
}

document.addEventListener('click', closeSubmenu, false);

// Map

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.06571415311626, lng: -75.70444888962962},
        zoom: 12,
        mapId: '94f4ecf15b833169',
        disableDefaultUI: true,
        });

    const svgMarker = {
        path: "M12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "#B52424",
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: 0,
        scale: 3,
        anchor: new google.maps.Point(13, 22),
        };

    const marker1 = new google.maps.Marker({
        position: {lat: 40.006287, lng: -75.707786},
        icon: svgMarker,
        map: map,
        });

    const marker2 = new google.maps.Marker({
        position: {lat: 40.11155000083765, lng: -75.70345913636957},
        icon: svgMarker,
        map: map,
        });
}

// M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406z


// Image preloader

(() => {
    'use strict';
    // Page is loaded
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ? 
          item.src = item.dataset.src :        
          item.style.backgroundImage = `url(${item.dataset.src})`;
      };
    });
  })();