import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ListGallery = ({ data }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (index) => {
    const clickedImage = data?.image[index];
    const file = clickedImage.file ? clickedImage.file : clickedImage;
    let src;

    if (file && file.file_name) {
      src = file.file_name;
    } else if (file && file.file) {
      src = URL.createObjectURL(file.file);
    }

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
      <div className="image-list">
        {data?.image.map((item, index) => {
          // const imageUrl = getImageUrl(file);
          return (
            <div
              key={item.img + index}
              className="imageWrapper"
              style={{ marginBottom: "4px" }}
            >
              <div
                className="imageContainer"
                style={{
                  border: `solid ${data?.layout?.border_size}px ${data?.layout?.border_color}`,
                  borderRadius: `${data?.layout?.border_round}%`,
                  marginTop: `${data?.layout?.space_bt_img}%`,
                  marginBottom: `${data?.layout?.space_bt_img}%`,
                  // height: "100px",
                  width: "500px",
                  height: "500px",
                  position: "relative",
                  overflow: "hidden",
                  // cursor: "pointer",
                }}
              >
                <img
                  src={item?.file_name}
                  alt={index}
                  style={{
                    // display: "block",
                    // width: "100%",

                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
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
            </div>
          );
        })}
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
        {clickedImage && (
          <img
            src={clickedImage.src}
            alt={clickedImage.alt}
            style={{ width: "auto", height: "auto", overflow: "hidden" }}
          />
        )}

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
      </Dialog>
    </>
  );
};

export default ListGallery;
