import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  const { latitude, longitude, images, id, title, bedroom, price } = item;

  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={images[0]} alt={title} />
          <div className="textContainer">
            <Link to={`/${id}`}>{title}</Link>
            <span>{bedroom} bedroom{bedroom > 1 ? 's' : ''}</span>
            <b>${price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
