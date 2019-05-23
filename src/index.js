import Basemap from 'nyc-lib/nyc/ol/Basemap'
import LocationMgr from 'nyc-lib/nyc/ol/LocationMgr'
import VectorTileLayer from 'ol/layer/VectorTile'
import VectorTileSource from 'ol/source/VectorTile'
import MVT from 'ol/format/MVT'

import './css/neo.css';
import 'nyc-lib/css/nyc-ol-fullscreen-lib.css'
import Style from 'ol/style/Style';
import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';

const map = new Basemap({target: 'map'});
const locationMgr = new LocationMgr({
    map: map,
    url: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example'
});

const pointStyle = new Style({
    image: new CircleStyle({
        radius: 8,
        fill: new Fill({color: 'green'})
    })
});

const lineStyle = new Style({
    stroke: new Stroke({
        color: 'blue',
        width: 6
    })
});

const polygonStyle = new Style({
    stroke: new Stroke({
        width: 2,
        color: [149, 43, 255, 0.7]
    }),
    fill: new Fill({
        color: 'rgba(149, 43, 255, 0.7)'
    })
});

const point_layer = new VectorTileLayer({
    source: new VectorTileSource({
        tilePixelRatio: 1,
        format: new MVT(),
        url: 'http://localhost:8080/geoserver/gwc/service/tms/1.0.0/gis:hmp_points@EPSG:900913@pbf/{z}/{x}/{-y}.pbf',
        projection: 'EPSG:3857'
    }),
    style: pointStyle
});

const line_layer = new VectorTileLayer({
    source: new VectorTileSource({
        tilePixelRatio: 1,
        format: new MVT(),
        url: 'http://localhost:8080/geoserver/gwc/service/tms/1.0.0/gis:hmp_lines@EPSG:900913@pbf/{z}/{x}/{-y}.pbf',
        projection: 'EPSG:3857'
    }),
    style: lineStyle
});


const polygon_layer = new VectorTileLayer({
    source: new VectorTileSource({
        tilePixelRatio: 1,
        format: new MVT(),
        url: 'http://localhost:8080/geoserver/gwc/service/tms/1.0.0/gis:hmp_polygons@EPSG:900913@pbf/{z}/{x}/{-y}.pbf',
        projection: 'EPSG:3857'
    }),
    style: polygonStyle
});


map.addLayer(point_layer);
map.addLayer(line_layer);
map.addLayer(polygon_layer);