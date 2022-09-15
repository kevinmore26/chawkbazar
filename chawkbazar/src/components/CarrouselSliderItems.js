import Carousel, { Dots } from "@brainhubeu/react-carousel";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React from "react";
class MyCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <img
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fbanner-1.jpg&w=1920&q=100"
          style={{ width: "100%", height:"100%" ,padding: "10px" }}
        />,
        <img
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fbanner-2.jpg&w=1920&q=100"
          style={{ width: "100%",  padding: "10px", height:"100%" }}
        />,
        <img
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fbanner-3.jpg&w=1920&q=100"
          style={{ width: "100%", height:"100%", padding: "10px" }}
        />,
      ],
    };
    this.onchange = this.onchange.bind(this);
  }

  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Carousel
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
          plugins={[
            "centered",
            "infinite", 
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ]}
        />
        <Dots
          value={this.state.value}
          onChange={this.onchange}
          number={this.state.slides.length}
        />
      </div>
    );
  }
}

export default MyCarousel;
