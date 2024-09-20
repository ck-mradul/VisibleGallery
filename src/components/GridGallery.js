import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Slide from "react-reveal/Slide";
import { useEffect, useRef, useState } from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

const GridGallery = ({ data }) => {
  const slideDurations = [800, 1000, 900, 1200, 1100];

  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imageRefs = useRef({}); // Use an object to store refs by key

  // Function to safely store refs
  const setRef = (index, element) => {
    if (element) {
      imageRefs.current[index] = element;
    }
  };

  useEffect(() => {
    const updateImageSizes = () => {
      const newImageSizes = {};
      Object.keys(imageRefs.current).forEach((index) => {
        const imgRef = imageRefs.current[index];
        if (imgRef) {
          const { width, height } = imgRef.getBoundingClientRect();
          newImageSizes[index] = { width, height };
        }
      });
      setImageSize(newImageSizes);
    };

    updateImageSizes();
    window.addEventListener("resize", updateImageSizes);

    return () => {
      window.removeEventListener("resize", updateImageSizes);
    };
  }, [data]);

  return (
    <ImageList
      sx={{
        padding: "20px",
        gap: `${data?.layout?.space_bt_img}px !important`,
      }}
      cols={data?.layout?.img_in_column}
    >
      {data?.image.map((item, index) => {
        // function handleModelImage(event) {
        //   const rect = event.currentTarget.getBoundingClientRect();
        //   const offsetX = event.clientX - rect.left;
        //   const offsetY = event.clientY - rect.top;
        // }
        return (
          <ImageListItem key={item?.id}>
            <Slide duration={slideDurations[index]} bottom>
              <div style={{ position: "relative" }}>
                <img
                  // ref={(el) => setRef(index, el)}
                  src={item?.file_name}
                  alt={index}
                  // onClick={(event) =>
                  //   handleModelImage(event, item?.image_url, item?.id)
                  // }
                  style={{
                    height: "40vh",
                    width: "40vh",
                    border: `solid ${data?.layout?.border_size}px ${data?.layout?.border_color}`,
                    borderRadius: `${data?.layout?.border_round}%`,
                  }}
                  loading="lazy"
                />

                {item?.product?.length > 0 &&
                  item.product.map((p, index) => {
                    const { coordinate_y, coordinate_x } = p;

                    return (
                      <div
                        key={p.id || index}
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

                          const icon =
                            e.currentTarget.querySelector(".tooltipicon");
                          icon.style.display = "none";
                        }}
                        onMouseLeave={(e) => {
                          const preview =
                            e.currentTarget.querySelector(".tag-preview");
                          preview.style.display = "none";
                          const icon =
                            e.currentTarget.querySelector(".tooltipicon");
                          icon.style.display = "block";
                        }}
                      >
                        <div className="tooltipicon">
                          <AddCircleOutlineSharpIcon
                            style={{
                              transform: "scale(1.5)",
                              borderRadius: "50%",
                              // transformOrigin: "center",
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.7))",
                            }}
                          />
                        </div>

                        <div
                          // style={{
                          //   borderRadius: "10px",
                          //   display: "none",
                          //   // position: "absolute",
                          //   top: "-120%",
                          //   left: "50%",
                          //   // transform: "translateX(-50%)",
                          //   transform: "scale(1)",

                          //   backgroundColor: "white",
                          //   border: "1px solid #ccc",
                          //   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                          //   padding: "5px",
                          //   zIndex: 1000,
                          //   width: "140px",
                          //   textAlign: "center",
                          // }}

                          style={{
                            borderRadius: "10px",
                            display: "none",
                            top: "50%",
                            left: "50%",
                            transform: "scale(1)  (-50%, -50%)",
                            backgroundColor: "white",
                            border: "1px solid rgb(204, 204, 204)",
                            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                            padding: "5px",
                            zIndex: 1000,
                            width: "140px",
                            textAlign: "center",
                            position: "absolute",
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
                      </div>
                    );
                  })}
              </div>
            </Slide>
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
export default GridGallery;
