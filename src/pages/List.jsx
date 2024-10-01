import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = ({ setDetailId }) => {
  const { flights } = useSelector((store) => store.flightReducer);
  //* slice metodunun kesmeye başlayacağı elemanın sırası (start)
  const [startOffset, setStartOffset] = useState(0);

  //* sayfa başına gösterilecek eleman sayısı
  const perPage = 10;

  //* slice metodunun kesmeyi bitireceği elemanın sayısı (end)
  const endOffset = startOffset + perPage;

  //* slice metodu ile başlangıç ve bitiş arasını kes
  const currentFligts = flights.slice(startOffset, endOffset);

  //* yeni sayfa seçildiğinde çalışacak olan fonksiyon
  const handlePageClick = (e) => {
    //* başlangıç state ini güncelle
    setStartOffset(e.selected * perPage);
  };

  //* toplam sayfa sayısını hesapla
  const total = Math.ceil(flights.length / perPage);

  return (
    <div className="p-3 p-md-4">
      <table className="table table-dark table-striped tabel-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tail Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentFligts.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => setDetailId(flight.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        className="pagination"
        activeClassName="active"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={total}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default List;
