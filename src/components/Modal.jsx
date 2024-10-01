import axios from "axios";
import { useEffect, useState } from "react";
import { detailOpt } from "../constants";
import Loader from "./Loader";
import formatDate from "../utlis/formatDate";
import { setPath } from "../redux/slices/flight";
import { useDispatch } from "react-redux";
import checkValid from "../utlis/checkValid";

const Modal = ({ detailId, close }) => {
  // not: uçuş detay verisini sadece modal bileşeni içerisinde kullanıcağımız için store'da saklama ihtiyacı duymadık
  const [d, setDetail] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    //* Eski state i sıfırla
    setDetail(null);
    //* api isteğinin parametresini belirle
    detailOpt.params.flight = detailId;

    //* API istegi at cevabı state e aktar
    axios.request(detailOpt).then((res) => {
      //* Uçuş verilerini state e aktarıyor
      setDetail(res.data);
      //* rota bilgisini reducer a aktarıyor
      dispatch(setPath(res.data.trail));
    });
  }, [detailId]);

  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>
        {!d ? (
          <Loader />
        ) : (
          <>
            <div className="info-wrapper">
              <h2>{checkValid(d.aircraft.model?.text)} </h2>
              <h2>{checkValid(d.aircraft.model?.code)} </h2>

              <p>
                <span>Tail Code: </span>
                <span>{checkValid(d.aircraft?.registration)}</span>
              </p>

              {d.aircraft.images?.large ? (
                <img src={d.aircraft?.images?.large[0].src} />
              ) : (
                <p>No Photo Found</p>
              )}
              <p>
                <span>Company: </span>
                <span>{checkValid(d.airline?.name)}</span>
              </p>
              <p>
                <span>Departure: </span>
                <a
                  target="_blank"
                  href={checkValid(d.airport?.origin?.website)}
                >
                  {checkValid(d.airport?.origin?.name)}
                </a>
              </p>
              <p>
                <span>Destination: </span>
                <a
                  target="_blank"
                  href={checkValid(d.airport?.destination?.website)}
                >
                  {checkValid(d.airport?.destination?.name)}
                </a>
              </p>
              <p>
                <span>Departure Time: </span>
                <span>
                  {d.time.scheduled?.departure
                    ? formatDate(d.time.scheduled?.departure)
                    : "Date Not Found"}
                </span>
              </p>
              <p>
                <span>Arrival Time: </span>
                <span>
                  {d.time.scheduled?.arrival
                    ? formatDate(d.time.scheduled?.arrival)
                    : "Date Not Found"}
                </span>
              </p>
            </div>
            <p className={`alert ${d.status?.icon}`}>
              <span>{d.status?.text} </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
