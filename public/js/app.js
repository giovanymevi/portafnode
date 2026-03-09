/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" /* Las partículas huyen del mouse */
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

/* Configuración de partículas para la sección de proyectos */
particlesJS("particles-proyectos", {
  "particles": {
    "number": {
      "value": 50, /* Menos partículas para un look más limpio */
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#39ff14" /* Color luz fosforecente */
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.6, /* Un poco más visibles */
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#39ff14", /* Color luz fosforecente */
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4, /* Un poco más lento */
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble" /* Efecto burbuja */
      },
      "onclick": {
        "enable": false /* Desactivado para no interferir con los links */
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 250,
        "size": 8,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
});
