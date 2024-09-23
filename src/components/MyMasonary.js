import { Masonry } from "@mui/lab";
import Slide from "react-reveal/Slide";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import ProductInfo from "./ProductInfo";

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
  );
};

export default MyMasonary;
