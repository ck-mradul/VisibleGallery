import { Masonry } from "@mui/lab";
import Slide from "react-reveal/Slide";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

const MyMasonary = ({ data }) => {
  const slideDurations = [800, 1000, 900, 1200, 1100];

  return (
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
                        transform: "translate(-50%, -50%)", // Centering the tag
                      }}
                      onMouseEnter={(e) => {
                        const preview =
                          e.currentTarget.querySelector(".tag-preview");
                        preview.style.display = "block";
                      }}
                      onMouseLeave={(e) => {
                        const preview =
                          e.currentTarget.querySelector(".tag-preview");
                        preview.style.display = "none";
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

                        {
                          <div
                            style={{
                              borderRadius: "10px",
                              display: "none",
                              position: "absolute",
                              top: "-120%",
                              left: "50%",
                              transform: "translateX(-50%)",
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
                    </div>
                  );
                })}
            </div>
          </Slide>
        </div>
      ))}
    </Masonry>
  );
};

export default MyMasonary;
