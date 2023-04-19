import { useState } from "react";
import QrReader from "react-qr-reader";
import "./Qrscanner.scss";

const Qrscanner = (props) => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      props.info(scanData);
      setStartScan(false);
      setLoadingScan(false);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="Qrscanner">

      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Camera de trás</option>
            <option value={"user"}>Camera da frente</option>
          </select>
          <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "300px" }}
          />
        </>
      )}
            <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Parar" : "Escanear"}
      </button>
      {loadingScan && <p>carregando...</p>}
    </div>
  );
};

export default Qrscanner;
