import React from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

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
                        // transform: `translate${
                        //   (100 - coordinate_y, 100 - coordinate_x)
                        // }`,
                        transform: "translate(-50%, -50%)", // Centering the tag

                        // transform: "translate(-50%, -50%)",
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
                            transformOrigin: "center",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.7))",
                          }}
                        />
                      </div>

                      {
                        <div
                          style={{
                            borderRadius: "10px",
                            display: "none",
                            top: "-120%",
                            left: "50%",
                            transform: "scale(1)",
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
