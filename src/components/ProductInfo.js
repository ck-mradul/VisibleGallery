import React, { useRef, useState } from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { Popover } from "@mui/material";

const ProductInfo = ({ p, cart, share }) => {
  console.log("cart", cart);
  console.log("share", share);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopoverId, setOpenPopoverId] = useState(null); // Track the open popover by product ID
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverTimeoutRef = useRef(null);

  const handlePopoverOpen = (event, productId) => {
    setAnchorEl(event.currentTarget);
    setOpenPopoverId(productId);
    setIsPopoverOpen(true);
    if (popoverTimeoutRef.current) clearTimeout(popoverTimeoutRef.current);
  };

  const handlePopoverClose = () => {
    popoverTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setOpenPopoverId(null);
      setIsPopoverOpen(false);
    }, 300);
  };

  const open = Boolean(anchorEl) && isPopoverOpen;
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
      onMouseLeave={handlePopoverClose}
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
          in="mouse-over-popover"
          id="mouse-over-popover"
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
          // PaperProps={{
          componentsProps={{
            onMouseEnter: () => {
              if (popoverTimeoutRef.current)
                clearTimeout(popoverTimeoutRef.current);
            },
            onMouseLeave: handlePopoverClose,
          }}
        >
          <div
            className="tag-preview"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <img
              src={p?.image}
              alt={p?.name}
              style={{
                width: "100px",
                height: "auto",
                borderRadius: "5px",
              }}
              loading="lazy"
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
              onClick={() => console.log("button_clicked")}
            >
              View Product
            </p>
            {cart && (
              <p
                style={{
                  fontSize: "13px",
                  color: "#007BFF",
                  marginTop: "8px",
                  cursor: "pointer",
                }}
                onClick={() => console.log("button_clicked")}
              >
                Add to Cart
              </p>
            )}
            {share && (
              <p
                style={{
                  fontSize: "13px",
                  color: "#007BFF",
                  marginTop: "8px",
                  cursor: "pointer",
                }}
                onClick={() => console.log("button_clicked")}
              >
                Share Product
              </p>
            )}
          </div>
        </Popover>
      )}
    </div>
  );
};

export default ProductInfo;
