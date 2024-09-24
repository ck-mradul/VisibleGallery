import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ProductInfo from "./ProductInfo";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const CollageGallery = ({ data }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (index) => {
    console.log("data?.image", data?.image);
    const clickedImage = data?.image[index];
    console.log("clickedImage", clickedImage);
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
      <ImageList
        sx={{
          padding: "20px",
          margin: `${data?.layout?.space_bt_img}px !important`,
          gap: `${data?.layout?.space_bt_img * 10}px !important`,
          overflow: "visible",
        }}
        variant="masonry"
        cols={3}
        gap={8}
      >
        {data?.image.map((file, index) => (
          <ImageListItem
            key={file.img || index}
            cols={index === 0 || index === data?.image?.length - 1 ? 2 : 1}
            rows={index === 0 || index === data?.image?.length - 1 ? 2 : 1}
          >
            {/* <Slide duration={slideDurations[index]} bottom>
            <div style={{ position: "relative" }}> */}
            <img
              // src={file?.file_name}
              srcSet={`${file?.file_name}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${file?.file_name}?w=248&fit=crop&auto=format`}
              alt={file.title}
              loading="lazy"
              style={{
                margin: `${data?.layout?.space_bt_img}px`,
                border: ` ${data?.layout?.border_size}px solid ${data?.layout?.border_color} `,
                borderRadius: `${data?.layout?.border_round}%`,
                objectFit: "fill",

                // objectFit: "cover",
                // // display: "block",
                // height: "100%",
                // width: "100%",
              }}
              onClick={() => handleImageClick(index)}
            />

            {file?.product?.length > 0 &&
              file.product.map((p, index) => {
                return (
                  <ProductInfo
                    p={p}
                    key={index}
                    cart={data?.layout?.add_to_cart}
                    share={data?.layout?.share_product}
                  />
                );
              })}
            {/* </div>
          </Slide> */}
          </ImageListItem>
        ))}
      </ImageList>
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

export default CollageGallery;
