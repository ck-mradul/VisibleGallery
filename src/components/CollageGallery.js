import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import Slide from "react-reveal/Slide";

const CollageGallery = ({ data }) => {
  const slideDurations = [800, 1000, 900, 1200, 1100];

  return (
    <ImageList
      sx={{
        padding: "40px",
        margin: `${data?.layout?.space_bt_img}px !important`,
        gap: `${data?.layout?.space_bt_img}px !important`,
        overflow: "visible", // Change to visible
      }}
      variant="masonry"
      cols={3}
      gap={8}
    >
      {data?.image.map((file, index) => (
        <ImageListItem
          key={file.img}
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
              margin: `${data?.layout?.space_bt_img}px `,
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
              const { coordinate_y, coordinate_x } = p;

              return (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    top: `${coordinate_y}%`,
                    left: `${coordinate_x}%`,
                    transform: "translate(-50%, -50%)", // Centering the tag
                  }}
                  onMouseEnter={(e) => {
                    const preview =
                      e.currentTarget.querySelector(".tag-preview");
                    preview.style.display = "block";
                    // preview.style.removeProperty("display"); // Remove display property on hover

                    const icon = e.currentTarget.querySelector(".tooltipicon");
                    icon.style.display = "none";
                  }}
                  onMouseLeave={(e) => {
                    const preview =
                      e.currentTarget.querySelector(".tag-preview");
                    preview.style.display = "none";
                    const icon = e.currentTarget.querySelector(".tooltipicon");
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
                    style={{
                      borderRadius: "10px",
                      display: "none",
                      // position: "absolute",
                      top: "-120%",
                      left: "50%",
                      // transform: "translateX(-50%)",
                      transform: "scale(1)",

                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      padding: "5px",
                      zIndex: 1000,
                      width: "140px",
                      textAlign: "center",
                    }}
                    // style={{
                    //   borderRadius: "10px",
                    //   display: "none",
                    //   position: "absolute",
                    //   top: "-160%",
                    //   left: "50%",
                    //   // transform: "translateX(-50%)",
                    //   transform: "scale(1)",
                    //   backgroundColor: "white",
                    //   border: "1px solid #ccc",
                    //   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    //   padding: "5px",
                    //   zIndex: 9999,
                    //   width: "140px",
                    //   textAlign: "center",
                    // }}
                    // style={{
                    //   borderRadius: "10px",
                    //   display: "none",
                    //   position: "absolute",
                    //   top: "-120%",
                    //   left: "50%",
                    //   // transform: "translateX(-50%)",
                    //   backgroundColor: "white",
                    //   transform: "scale(1)",
                    //   border: "1px solid #ccc",
                    //   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    //   padding: "5px",
                    //   width: "140px",
                    //   zIndex: 999,
                    //   textAlign: "center",
                    // }}
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
          {/* </div>
          </Slide> */}
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default CollageGallery;
