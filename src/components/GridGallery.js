import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Slide from "react-reveal/Slide";
import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
// import { CloseIcon } from "yet-another-react-lightbox";
import FullScreenDailog from "./FullScreenDailog";

const GridGallery = ({ data }) => {
  const slideDurations = [800, 1000, 900, 1200, 1100];
  const [openDialog, setOpenDialog] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);
  const [clickedProductInfo, setClickedProductInfo] = useState([]);

  const handleImageClick = (index) => {
    const clickedImage = data?.image[index];
    const file = clickedImage.file ? clickedImage.file : clickedImage;
    let src;

    if (file && file.file_name) {
      src = file.file_name;
    } else if (file && file.file) {
      src = URL.createObjectURL(file.file);
    }
    setClickedProductInfo(clickedImage.product || []);

    setClickedImage({
      src: src,
      alt: `Image ${index + 1}`,
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <ImageList
        sx={{
          padding: "20px",
          gap: `${data?.layout?.space_bt_img}px !important`,
          overflowY: "hidden",
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
                    onClick={() => handleImageClick(index)}
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
      <FullScreenDailog
        open={openDialog}
        image={clickedImage}
        productInfo={clickedProductInfo}
        onClose={handleCloseDialog}
        layout={data?.layout}
      />
      {/* <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
        {clickedImage && (
          <img
            src={clickedImage.src}
            alt={clickedImage.alt}
            style={{ width: "auto", height: "auto", overflow: "hidden" }}
          />
        )}
        {clickedProductInfo.length > 0 &&
          clickedProductInfo.map((p, idx) => (
            <ProductInfo
              p={p}
              key={idx}
              cart={data?.layout?.add_to_cart}
              share={data?.layout?.share_product}
              style={{
                position: "absolute",
                top: `${p.coordinate_y}%`, // Example positioning
                left: `${p.coordinate_x}%`, // Example positioning
                zIndex: 2,
              }}
            />
          ))}
        <IconButton
          aria-label="close"
          onClick={handleCloseDialog}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      </Dialog> */}
    </>
  );
};
export default GridGallery;
