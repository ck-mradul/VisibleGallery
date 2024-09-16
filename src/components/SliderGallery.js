import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderGallery = ({ data }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        style={{
          position: "absolute",
          top: "95%",
          right: "30%",
          transform: "translateY(-50%)",
          zIndex: 1,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <NavigateNextIcon size={50} color="black" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        style={{
          position: "absolute",
          top: "95%",
          left: "30%",
          transform: "translateY(-50%)",
          zIndex: 1,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <NavigateBeforeIcon size={30} color="black" />
      </div>
    );
  };
  const MySlider = ({
    uploadedFiles,
    // handleImageClick,
    borderSize,
    selectedColor,
    borderRoundness,
  }) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          // width: "50%",
          // height: "50%",
          // height: "320px",
          maxWidth: "30%",
          maxHeight: "20%",
          // margin: "10px 10px",
        }}
      >
        <Slider
          {...settings}
          style={{
            width: "100%",
          }}
        >
          {data?.image?.map((file, index) => (
            <div
              key={index}
              //   onClick={() => handleImageClick(index)}
              style={{ position: "relative" }}
            >
              <img
                src={file.file_name}
                alt={`Slide ${index}`}
                style={{
                  marginBottom: "15%",
                  display: "block",
                  maxWidth: "90%",
                  maxHeight: "90%",
                  // width: "100%",
                  // boxSizing: "border-box",
                  // height: "100%",
                  // objectFit: "cover",
                  borderRadius: `${borderRoundness}%`,
                  border: `solid ${borderSize}px ${selectedColor}`,
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <MySlider
      uploadedFiles={data?.image}
      //   handleImageClick={handleImageClick}
      borderSize={data?.layout?.border_size}
      selectedColor={data?.layout?.border_color}
      borderRoundness={data?.layout?.border_round}
    />
  );
};
export default SliderGallery;
