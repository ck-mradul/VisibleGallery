import { Masonry } from "@mui/lab";
import Slide from "react-reveal/Slide";
import ProductInfo from "./ProductInfo";
import { Dialog, IconButton } from "@mui/material";
import { useState } from "react";
// import { CloseIcon } from "yet-another-react-lightbox";

import CloseIcon from "@mui/icons-material/Close";

const MyMasonary = ({ data }) => {
  const slideDurations = [800, 1000, 900, 1200, 1100];

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
      <Masonry
        columns={data?.layout?.img_in_column}
        spacing={data?.layout?.space_bt_img}
        sequential={false}
        sx={{
          columnGap: `${data?.layout?.space_bt_img}px`,
          rowGap: `${data?.layout?.space_bt_img}px`,
        }}
      >
        {data?.image.map((item, index) => (
          <div key={item?.file_name} style={{ position: "relative" }}>
            <Slide duration={slideDurations[index]} top>
              <div>
                <img
                  src={item?.file_name}
                  //   src={`${URL.createObjectURL(item.file ? item.file : item)}`}
                  //   srcSet={`${URL.createObjectURL(item.file ? item.file : item)}`}
                  alt={index}
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    height: "100%",
                    width: "100%",
                    border: `solid ${data?.layout?.border_size}px ${data?.layout?.border_color}`,
                    borderRadius: `${data?.layout?.border_round}%`,
                    padding: "1px",
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
          </div>
        ))}
      </Masonry>

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

export default MyMasonary;
