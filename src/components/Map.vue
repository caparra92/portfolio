<template>
    <div ref="mapContainer" class="u-map-container" id="mapContainer"></div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, onMounted, watch } from 'vue';
import mapboxgl from 'mapbox-gl';

import { useDarkThemeTrigger } from '@/stores/darkThemeTrigger';
import { stringify } from 'querystring';

const dark = useDarkThemeTrigger();

const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-75.75321237158144, 45.350272408333176] 
            },
            properties: {
                title: 'Work Experience',
                description: 'Ottawa, Canada'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-74.05307634592543, 4.6861276583132225] 
            },
            properties: {
                title: 'Work Experience',
                description: 'Bogota, Colombia'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-51.146535915945755, -23.311774933647236] 
            },
            properties: {
                title: 'Work Experience',
                description: 'Londrina, Brazil'
            }
        }
    ]
};

const { darkTrigger, mapStyle } = storeToRefs(dark);

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FwYXJyYTkyIiwiYSI6ImNsdG5xOHVhNjA5Z3kya280bjhzejI5MmkifQ.G4vaJdWCQVQ-nsqZzZYXqA';

const mapContainer = ref(null);

const mapOptions = {
    container: 'mapContainer',
    style: mapStyle.value,
    center: [-75.75321237158144, 45.350272408333176],
    zoom: 3,
    trackResize: false
}

let mapClone = null;

const createMapMarkers = (map) => {
    const markers = [];
    for (const feature of geojson.features) {
        const el = document.createElement('div');
        el.className = 'marker';

        const marker = new mapboxgl.Marker({ offset: [255, -210] })
            .setLngLat(feature.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: [55, -410], className: 'mapboxgl-popup' })
                                .setHTML(`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`))

            .addTo(map);
        markers.push(marker);
        
    }

    verifyMarkersPosition(map, 'render', markers);
    verifyMarkersPosition(map, 'drag', markers);
    verifyMarkersPosition(map, 'zoom', markers);
    // map.on('drag', () => {
    //     for (const marker of markers) {
    //         const pos = marker.getLngLat();
    //         const markerCoords = map.project(pos);

    //         if (
    //             markerCoords.x < 0 ||
    //             markerCoords.x > map.getCanvas().clientWidth ||
    //             markerCoords.y < 0 ||
    //             markerCoords.y > map.getCanvas().clientHeight
    //         ) {
                
    //             marker.getElement().style.display = 'none';
    //         } else {
                
    //             marker.getElement().style.display = 'block';
    //         }
    //     }
    // });

    // map.on('zoom', () => {
    //     for (const marker of markers) {
    //         const pos = marker.getLngLat();
    //         const markerCoords = map.project(pos);

    //         if (
    //             markerCoords.x < 0 ||
    //             markerCoords.x > map.getCanvas().clientWidth ||
    //             markerCoords.y < 0 ||
    //             markerCoords.y > map.getCanvas().clientHeight
    //         ) {
                
    //             marker.getElement().style.display = 'none';
    //         } else {
                
    //             marker.getElement().style.display = 'block';
    //         }
    //     }
    // });
};

const verifyMarkersPosition = (map, event: string, markers: Array) => {
    map.on(event, () => {
        for (const marker of markers) {
            const pos = marker.getLngLat();
            const markerCoords = map.project(pos);

            if (
                markerCoords.x < 0 ||
                markerCoords.x > map.getCanvas().clientWidth ||
                markerCoords.y < 0 ||
                markerCoords.y > map.getCanvas().clientHeight
            ) {
                
                marker.getElement().style.display = 'none';
            } else {
                
                marker.getElement().style.display = 'block';
            }
        }
    });
}
    
onMounted(() => {
    const map  = new mapboxgl.Map(mapOptions);
    map.on('load', () => createMapMarkers(map));
    mapClone = map;
});

watch(darkTrigger, (newValue) => {
    if(newValue) mapClone.setStyle('mapbox://styles/mapbox/navigation-night-v1');
    else mapClone.setStyle('mapbox://styles/mapbox/streets-v12');
});


</script>
<style scoped>
.marker {
  /* background-image: url('../assets/img/mapbox-icon.png'); */
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 200px;
  background-color: #fff;
}

.mapboxgl-popup-content {
  text-align: center;
  font-family: 'Roboto', sans-serif;
}
</style>