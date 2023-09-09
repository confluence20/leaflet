var map = L.map('map').setView([6.511898984170893,3.3761417118579646], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([6.511898984170893,3.3761417118579646]).addTo(map)
		.bindPopup('The Technology Sandbox<br> Where Yoh is sitting this very moment')
		.openPopup();	