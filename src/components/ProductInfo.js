import React, { useState } from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { Popover } from "@mui/material";

const ProductInfo = ({ p }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopoverId, setOpenPopoverId] = useState(null); // Track the open popover by product ID

  const handlePopoverOpen = (event, productId) => {
    setAnchorEl(event.currentTarget);
    setOpenPopoverId(productId);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpenPopoverId(null);
  };

  const open = Boolean(anchorEl);
  const { coordinate_y, coordinate_x } = p;

  return (
    <div
      key={p.product_id}
      style={{
        position: "absolute",
        top: `${coordinate_y}%`,
        left: `${coordinate_x}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={(event) => handlePopoverOpen(event, p.product_id)}
      //   onMouseLeave={handlePopoverClose}
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
      {openPopoverId === p.product_id && (
        <Popover
          in={true}
          id="mouse-over-popover"
          sx={{ pointerEvents: "none" }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <div className="tag-preview">
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
            <p
              style={{
                fontSize: "13px",
                color: "#007BFF",
                marginTop: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#007BFF",
                marginTop: "8px",
                cursor: "pointer",
              }}
            >
              Share Product
            </p>
          </div>
        </Popover>
      )}
    </div>
  );
};

export default ProductInfo;
