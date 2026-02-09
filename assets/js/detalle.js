const pronosticosCiudades = {
    "Santiago": [
        { dia: "Lunes", temp: "28°C", estado: "☀️" },
        { dia: "Martes", temp: "30°C", estado: "☀️" },
        { dia: "Miércoles", temp: "27°C", estado: "⛅" },
        { dia: "Jueves", temp: "29°C", estado: "☀️" },
        { dia: "Viernes", temp: "31°C", estado: "🔥" }
    ],
    "Londres": [
        { dia: "Lunes", temp: "15°C", estado: "🌧️" },
        { dia: "Martes", temp: "14°C", estado: "🌦️" },
        { dia: "Miércoles", temp: "17°C", estado: "☁️" },
        { dia: "Jueves", temp: "16°C", estado: "🌧️" },
        { dia: "Viernes", temp: "15°C", estado: "☁️" }
    ],
    "Nueva York": [
        { dia: "Lunes", temp: "18°C", estado: "☁️" },
        { dia: "Martes", temp: "20°C", estado: "⛅" },
        { dia: "Miércoles", temp: "19°C", estado: "☀️" },
        { dia: "Jueves", temp: "17°C", estado: "🌦️" },
        { dia: "Viernes", temp: "21°C", estado: "☀️" }
    ],
    "Tokio": [
        { dia: "Lunes", temp: "22°C", estado: "⛅" },
        { dia: "Martes", temp: "23°C", estado: "☀️" },
        { dia: "Miércoles", temp: "21°C", estado: "☁️" },
        { dia: "Jueves", temp: "24°C", estado: "☀️" },
        { dia: "Viernes", temp: "22°C", estado: "⛅" }
    ],
    "París": [
        { dia: "Lunes", temp: "16°C", estado: "💨" },
        { dia: "Martes", temp: "15°C", estado: "☁️" },
        { dia: "Miércoles", temp: "17°C", estado: "⛅" },
        { dia: "Jueves", temp: "18°C", estado: "☀️" },
        { dia: "Viernes", temp: "16°C", estado: "🌦️" }
    ],
    "Moscú": [
        { dia: "Lunes", temp: "-4°C", estado: "❄️" },
        { dia: "Martes", temp: "-6°C", estado: "❄️" },
        { dia: "Miércoles", temp: "-3°C", estado: "☁️" },
        { dia: "Jueves", temp: "-5°C", estado: "❄️" },
        { dia: "Viernes", temp: "-2°C", estado: "☁️" }
    ],
    "Sidney": [
        { dia: "Lunes", temp: "27°C", estado: "☀️" },
        { dia: "Martes", temp: "29°C", estado: "☀️" },
        { dia: "Miércoles", temp: "28°C", estado: "☀️" },
        { dia: "Jueves", temp: "26°C", estado: "⛅" },
        { dia: "Viernes", temp: "30°C", estado: "🔥" }
    ],
    "Ciudad de México": [
        { dia: "Lunes", temp: "23°C", estado: "☀️" },
        { dia: "Martes", temp: "22°C", estado: "☀️" },
        { dia: "Miércoles", temp: "24°C", estado: "⛅" },
        { dia: "Jueves", temp: "23°C", estado: "☀️" },
        { dia: "Viernes", temp: "25°C", estado: "☀️" }
    ],
    "Berlín": [
        { dia: "Lunes", temp: "11°C", estado: "🌫️" },
        { dia: "Martes", temp: "12°C", estado: "☁️" },
        { dia: "Miércoles", temp: "10°C", estado: "🌧️" },
        { dia: "Jueves", temp: "9°C", estado: "🌫️" },
        { dia: "Viernes", temp: "11°C", estado: "☁️" }
    ],
    "El Cairo": [
        { dia: "Lunes", temp: "33°C", estado: "🔥" },
        { dia: "Martes", temp: "32°C", estado: "☀️" },
        { dia: "Miércoles", temp: "34°C", estado: "🔥" },
        { dia: "Jueves", temp: "35°C", estado: "🔥" },
        { dia: "Viernes", temp: "33°C", estado: "☀️" }
    ]
};

// 1. Obtener el nombre de la ciudad desde la URL
const params = new URLSearchParams(window.location.search);
const ciudadSeleccionada = params.get("ciudad");

// 2. Referencias a los elementos del HTML
const tituloCiudad = document.getElementById("nombre-ciudad");
const contenedorSemanal = document.getElementById("pronostico-semanal");
const textoHumedad = document.getElementById("humedad-detalle");
const textoViento = document.getElementById("viento-detalle");

// 3. Lógica para cambiar el contenido
if (ciudadSeleccionada && pronosticosCiudades[ciudadSeleccionada]) {

    const detallesCiudades = {
  "Santiago": { humedad: 45, viento: 12 },
  "Londres": { humedad: 85, viento: 18 },
  "Nueva York": { humedad: 60, viento: 22 },
  "Tokio": { humedad: 70, viento: 14 },
  "París": { humedad: 55, viento: 24 },
  "Moscú": { humedad: 85, viento: 16 },
  "Sidney": { humedad: 50, viento: 16 },
  "Ciudad de México": { humedad: 40, viento: 12 },
  "Berlín": { humedad: 78, viento: 15 },
  "El Cairo": { humedad: 10, viento: 20 }
};
  tituloCiudad.innerText = `Clima en ${ciudadSeleccionada}`;

const datos = detallesCiudades[ciudadSeleccionada] || { humedad: 50, viento: 12 };
const humedad = datos.humedad;
const viento = datos.viento;

  textoHumedad.innerText = `💧 Humedad: ${humedad}%`;
  textoViento.innerText = `💨 Viento: ${viento} km/h`;

  // Fondo animado según humedad/viento
  const hero = document.getElementById("info-ciudad");

  hero.classList.remove(
    "weather-hero--sunny",
    "weather-hero--rainy",
    "weather-hero--windy",
    "weather-hero--cloudy",
    "weather-hero--default"
  );

let modifier = "default";
if (viento >= 22) modifier = "windy";
else if (humedad >= 75) modifier = "rainy";
else modifier = "sunny";


  hero.classList.add(`weather-hero--${modifier}`);
  console.log("Hero classes:", hero.className);

  // Limpiamos el contenedor y creamos las tarjetas
  contenedorSemanal.innerHTML = "";
  pronosticosCiudades[ciudadSeleccionada].forEach(item => {
    contenedorSemanal.innerHTML += `
      <div class="col">
        <div class="card h-100 shadow-sm border-0 bg-light text-center">
          <div class="card-body">
            <p class="text-muted fw-bold mb-1">${item.dia}</p>
            <div class="fs-2 mb-2">${item.estado}</div>
            <p class="h4 mb-0 text-primary">${item.temp}</p>
          </div>
        </div>
      </div>
    `;
  });
} else {
  tituloCiudad.innerText = "Ciudad no encontrada";
}
