import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import Slide from "react-reveal/Slide";
import ProductInfo from "./ProductInfo";

const CollageGallery = ({ data }) => {
  const slideDurations = [800, 1000, 900, 1200, 1100];

  return (
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
              // objectFit: "cover",
              // // display: "block",
              // height: "100%",
              // width: "100%",
            }}
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
  );
};

export default CollageGallery;
