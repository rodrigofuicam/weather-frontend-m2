const cities = [
    { id: 1, name: "Osorno", temp: 26, estado: "Nublado", icon: "☁️" },
    { id: 2, name: "Río Negro", temp: 25, estado: "Nublado", icon: "☁️" },
    { id: 3, name: "Purranque", temp: 24, estado: "Soleado", icon: "☀️" },
    { id: 4, name: "Puerto Octay", temp: 22, estado: "Nublado", icon: "☁️" },
    { id: 5, name: "Frutillar", temp: 15, estado: "Soleado", icon: "☀️" },
    { id: 6, name: "Llanquihue", temp: 20, estado: "Nublado", icon: "☁️" },
    { id: 7, name: "Puerto Varas", temp: 25, estado: "Nublado", icon: "☁️" },
    { id: 8, name: "Puerto Montt", temp: 13, estado: "Lluvioso", icon: "🌧️" },
    { id: 9, name: "Calbuco", temp: 21, estado: "Nublado", icon: "☁️" },
    { id: 10, name: "Ancud", temp: 18, estado: "Soleado", icon: "☀️" },
    { id: 11, name: "Castro", temp: 16, estado: "Nublado", icon: "☁️" },
    { id: 12, name: "Quellón", temp: 15, estado: "Lluvioso", icon: "🌧️" },

]
let html = document.getElementById("cities__container")
let template = ""
for (let i = 0; i < cities.length; i++) {
    template += `
    <div class="col-md-4 g-5">
        <div class="card" onclick="goDetail(${cities[i].id})" style="cursor:pointer"
>
        <div class="card-header bg-info fw-bold">${cities[i].name}</div>

            <div class="card-body">
    
                <h5 class="card-title">${cities[i].temp}°C</h5>

                <h5 class="card-title">${cities[i].estado} ${cities[i].icon}</h5>

            </div>
        </div>
    </div>
        `;
}
html.innerHTML = template
function goDetail(id) {
    window.location.href = `details.html?id=${id}`;
}
