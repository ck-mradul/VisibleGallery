import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

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
          // position: "relative",
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
                />
                {item?.product?.length > 0 &&
                  item.product.map((p, index) => {
                    const { coordinate_y, coordinate_x } = p;
                    return (
                      <div
                        key={index}
                        style={{
                          position: "absolute",
                          top: `${coordinate_y}%`,
                          left: `${coordinate_x}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        onMouseEnter={(e) => {
                          const preview =
                            e.currentTarget.querySelector(".tag-preview");
                          preview.style.display = "block";
                        }}
                        onMouseLeave={(e) => {
                          const preview =
                            e.currentTarget.querySelector(".tag-preview");
                          preview.style.display = "none";
                        }}
                      >
                        <div className="tooltipicon">
                          <AddCircleOutlineSharpIcon
                            style={{
                              transform: "scale(1.5)",
                              borderRadius: "50%",
                              transformOrigin: "center",
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.7))",
                            }}
                          />
                          
                          {
                            <div
                              style={{
                                borderRadius: "10px",
                                display: "none",
                                position: "absolute",
                                top: "-120%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                backgroundColor: "white",
                                border: "1px solid #ccc",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                                padding: "5px",
                                zIndex: 100,
                                width: "140px",
                                textAlign: "center",
                              }}
                              className="tag-preview"
                            >
                              <img
                                src={p?.image}
                                alt={p?.name}
                                style={{
                                  width: "100px",
                                  height: "auto",
                                  borderRadius: "5px",
                                }}
                              />
                              <p
                                style={{
                                  fontSize: "14px",
                                  margin: "10px 0 5px 0",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {p?.name}
                              </p>
                              <p
                                style={{
                                  fontSize: "13px",
                                  color: "gray",
                                  margin: "0",
                                }}
                              >
                                ${p?.price}
                              </p>
                              <p
                                style={{
                                  fontSize: "13px",
                                  color: "#007BFF",
                                  marginTop: "8px",
                                  cursor: "pointer",
                                }}
                              >
                                View Product
                              </p>
                            </div>
                          }
                        </div>
                      </div>
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
      borderRoundness={data?.layout?.border_round}
    />
  );
};
export default SliderGallery;
