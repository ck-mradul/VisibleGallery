import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Slide from "react-reveal/Slide";
import { useEffect, useRef, useState } from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { Popover } from "@mui/material";
import ProductInfo from "./ProductInfo";

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
            </Slide>
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
export default GridGallery;
