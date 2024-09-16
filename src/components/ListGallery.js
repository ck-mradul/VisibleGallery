import React from "react";

const ListGallery = ({ data }) => {
  return (
    <div className="image-list">
      {data?.image.map((file, index) => {
        // const imageUrl = getImageUrl(file);
        return (
          <div
            key={file.img + index}
            className="imageWrapper"
            style={{ marginBottom: "4px" }}
          >
            <div
              className="imageContainer"
              style={{
                border: `solid ${data?.layout?.border_size}px ${data?.layout?.border_color}`,
                borderRadius: `${data?.layout?.border_round}%`,
                height: "100px",
                width: "200px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              //   onClick={() => {
              //     handleImageClick(index);
              //   }}
            >
              <img
                src={file?.file_name}
                alt={index}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: `${data?.layout?.border_round}%`,
                }}
                // onMouseEnter={() => handleMouseEnter(index)}
                // onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListGallery;
