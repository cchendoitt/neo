import Basemap from 'nyc-lib/nyc/ol/Basemap'
import LocationMgr from 'nyc-lib/nyc/ol/LocationMgr'

import './css/neo.css';
import 'nyc-lib/css/nyc-ol-fullscreen-lib.css'

var map = new Basemap({target: 'map'});
var locationMgr = new LocationMgr({
    map: map,
    url: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example'
});