import React from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import ProductInfo from "./ProductInfo";

const ListGallery = ({ data }) => {
  return (
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
                loading="lazy"
              />

              {item?.product?.length > 0 &&
                item.product.map((p, index) => {
                  // const { coordinate_y, coordinate_x } = p;
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
  );
};

export default ListGallery;
