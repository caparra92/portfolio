<template>
    <div ref="mapContainer" class="u-map-container" id="mapContainer"></div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { ref, onMounted, watch } from 'vue';
import mapboxgl from 'mapbox-gl';

import { useDarkThemeTrigger } from '@/stores/darkThemeTrigger';

const dark = useDarkThemeTrigger();

const { darkTrigger, mapStyle } = storeToRefs(dark);

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FwYXJyYTkyIiwiYSI6ImNsdG5xOHVhNjA5Z3kya280bjhzejI5MmkifQ.G4vaJdWCQVQ-nsqZzZYXqA';

const mapContainer = ref(null);

const mapOptions = {
    container: 'mapContainer',
    style: mapStyle.value,
    center: [-75.75321237158144, 45.350272408333176],
    zoom: 13,
    trackResize: false
}

let mapClone = null;

onMounted(() => {
    const map  = new mapboxgl.Map(mapOptions);
    mapClone = map;
});

watch(darkTrigger, (newValue, oldValue) => {
    if(newValue) mapClone.setStyle('mapbox://styles/mapbox/navigation-night-v1');
    else mapClone.setStyle('mapbox://styles/mapbox/streets-v12');
});
</script>
<style scoped>

</style>