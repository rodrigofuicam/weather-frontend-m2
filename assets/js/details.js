
const params = new URLSearchParams(window.location.search);
const cityId = Number(params.get("id"));


const cities = [
    { id: 1, name: "Osorno", temp: 26, estado: "Nublado", humedad: 23, viento: 12, icon: "☁️" },
    { id: 2, name: "Río Negro", temp: 25, estado: "Nublado", humedad: 25, viento: 10, icon: "☁️" },
    { id: 3, name: "Purranque", temp: 24, estado: "Soleado", humedad: 20, viento: 14, icon: "☀️" },
    { id: 4, name: "Puerto Octay", temp: 22, estado: "Nublado", humedad: 22, viento: 11, icon: "☁️" },
    { id: 5, name: "Frutillar", temp: 15, estado: "Soleado", humedad: 24, viento: 13, icon: "☀️" },
    { id: 6, name: "Llanquihue", temp: 20, estado: "Nublado", humedad: 21, viento: 15, icon: "☁️" },
    { id: 7, name: "Puerto Varas", temp: 25, estado: "Nublado", humedad: 23, viento: 19, icon: "☁️" },
    { id: 8, name: "Puerto Montt", temp: 13, estado: "Lluvioso", humedad: 22, viento: 11, icon: "🌧️" },
    { id: 9, name: "Calbuco", temp: 21, estado: "Nublado", humedad: 20, viento: 14, icon: "☁️" },
    { id: 10, name: "Ancud", temp: 18, estado: "Soleado", humedad: 22, viento: 11, icon: "☀️" },
    { id: 11, name: "Castro", temp: 16, estado: "Nublado", humedad: 23, viento: 19, icon: "☁️" },
    { id: 12, name: "Quellón", temp: 15, estado: "Lluvioso", humedad: 23, viento: 12, icon: "🌧️" },
];

const weekly = [
    { day: "Lunes", temp: 16, },
    { day: "Martes", temp: 17, },
    { day: "Miércoles", temp: 18 },
    { day: "Jueves", temp: 19, },
    { day: "Viernes", temp: 20 },
    { day: "Sábado", temp: 21, },
    { day: "Domingo", temp: 22 },
]

const city = cities.find(c => c.id === cityId);

// Mostrar datos actuales
document.getElementById("cityName").textContent = city.name;
document.getElementById("temp").textContent = `${city.temp}°C`;
document.getElementById("humidity").textContent = `${city.humedad}%`;
document.getElementById("wind").textContent = `${city.viento} km/h`;

// Render semanal
const weeklyContainer = document.getElementById("weeklyContainer");

weekly.forEach(day => {
    weeklyContainer.innerHTML += `
        <div class="col-6 col-md-3">
            <div class="card text-center p-3 shadow-sm">
                <h6 class="fw-bold">${day.day}</h6>
                <p class="fs-4">${day.temp}°C</p>
            </div>
        </div>
    `;
});