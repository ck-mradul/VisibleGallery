import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProductInfo from "./ProductInfo";

const FullScreenDailog = ({ open, image, productInfo, onClose, layout }) => {
  if (!layout?.full_screen) {
    return <></>;
  }
  return (
    <Dialog open={open} onClose={onClose}>
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          style={{ width: "auto", height: "auto", overflow: "hidden" }}
        />
      )}
      {productInfo.length > 0 &&
        productInfo.map((p, idx) => (
          <ProductInfo
            p={p}
            key={idx}
            cart={layout?.add_to_cart}
            share={layout?.share_product}
            // style={{
            //   position: "absolute",
            //   top: `${p.coordinate_y}%`, // Example positioning
            //   left: `${p.coordinate_x}%`, // Example positioning
            //   zIndex: 2,
            // }}
          />
        ))}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          // color: theme.palette.grey[500],
          color: "#504d4d",
        })}
      >
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
};
export default FullScreenDailog;
