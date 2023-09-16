var map = L.map('map').setView([7.824884142058772,6.691274959868235], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([7.824884142058772,6.691274959868235]).addTo(map)
		.bindPopup('The Central Bank <br> Lokoja Branch')
		.openPopup();	