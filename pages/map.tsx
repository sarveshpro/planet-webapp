import Layout from '../src/features/common/Layout';
import { Map as M,TileLayer, Popup, Marker} from 'react-leaflet';

export default function Map() {
  return (
    <Layout>
      <M className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </M>
      <p>Map</p>
    </Layout>
  )
}
