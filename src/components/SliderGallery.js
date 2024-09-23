import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import ProductInfo from "./ProductInfo";

const SliderGallery = ({ data }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        style={{
          position: "absolute",
          top: "95%",
          right: "40%",
          transform: "translateX(-50%)",
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
          left: "20%",
          transform: "translateX(-50%)",
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
    img_in_column,
  }) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: parseInt(img_in_column, 10) || 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: parseInt(img_in_column, 10) || 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: parseInt(img_in_column, 10) || 1,
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
          // position: "relative",
          overflow: "hidden",
          // width: "50%",
          // height: "50%",
          // height: "320px",
          maxWidth: "30%",
          maxHeight: "20%",
          padding: "40px 0", // Optional padding for vertical centering

          margin: "auto auto", // Center the slider horizontally

          // margin: "10px 10px",
        }}

        // style={{
        //   position: "relative",
        //   maxWidth: "100%", // Ensure slider is responsive
        //   maxHeight: "auto",
        //   margin: "0 auto", // Center the slider horizontally
        //   padding: "40px 0", // Optional padding for vertical centering
        // }}
      >
        <Slider
          {...settings}
          style={{
            width: "95%",
          }}
        >
          {data?.image?.map((item, index) => (
            <div key={index}>
              <div style={{ position: "relative" }}>
                <img
                  src={item.file_name}
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
                  loading="lazy"
                />
                {item?.product?.length > 0 &&
                  item.product.map((p, index) => {
                    return (
                      <ProductInfo
                        p={p}
                        key={index}
                        cart={data?.layout?.add_to_cart}
                        share={data?.layout?.share_product}
                      />
                    );
                  })}
              </div>
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
      img_in_column={data?.layout?.img_in_column}
      borderRoundness={data?.layout?.border_round}
    />
  );
};
export default SliderGallery;
