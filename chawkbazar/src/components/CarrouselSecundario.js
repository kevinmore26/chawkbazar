import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Dots } from "@brainhubeu/react-carousel";

export default function CarrouselSecundario() {
  return (
    <div style={{marginTop:"440px"}}>
      <Carousel
        plugins={[
          "centered",
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
      >
        <img
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fbanner-1.jpg&w=1920&q=100"
          style={{ width: "100%", padding: "10px" }}
        />
        <img
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fbanner-2.jpg&w=1920&q=100"
          style={{ width: "100%", padding: "10px" }}
        />
        <img
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fbanner-3.jpg&w=1920&q=100"
          style={{ width: "100%", padding: "10px" }}
        />
      </Carousel>
      <Dots 
      />
    </div>
  );
}
