import Container from "react-bootstrap/esm/Container";
import "./cards.css";
export default function CardsHeader() {
  return (
    <div style={{ padding: "0px 10px" }}>
      <div className="row">
        <div className="col-6">
          <img
            style={{
              height: "320px",
              objectFit: "cover",
              padding: "0px !important",
            }}
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-1.jpg&w=1080&q=100"
          ></img>
        </div>
        <div className="col-3">
          <img
            style={{
              height: "320px",
              margin: "0 auto",
              display: "flex",
              position: "relative",
              left: "10px",
              objectFit: "cover",
              padding: "0px",
            }}
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-2.jpg&w=640&q=100"
          ></img>
        </div>
        <div className="col-3">
          <img
            style={{ height: "320px", objectFit: "cover", padding: "0px" }}
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-3.jpg&w=640&q=100"
          ></img>
        </div>
      </div>
      <div
        className="container1"
        style={{
          display: "grid",
          marginTop: "10px",
          gridAutoColumns: "1fr",
          gridTemplateColumns: " 1fr 1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr",
          gap: "1em 1em ",
        }}
      >
        <div className="tercero">
          <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-3.jpg&w=640&q=100"></img>
        </div>
        <div className="segundo">
          <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-2.jpg&w=640&q=100"></img>
        </div>
        <div className="primero">
          <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-1.jpg&w=1080&q=100"></img>
        </div>
      </div>
    </div>
  );
}
