import React, { useEffect, useState } from "react";
import "./Selector.css";
import GridGallery from "./GridGallery";
import MyMasonary from "./MyMasonary";
import CollageGallery from "./CollageGallery";
import SliderGallery from "./SliderGallery";
import ListGallery from "./ListGallery";
import axiosInstance from "../axiosInstance";

// const Selector = ({ id }) => {
const Selector = () => {
  const [data, setData] = useState(null); // State to store API data
  const [selectedLayout, setSelectedLayout] = useState(1);

  useEffect(() => {
    const fetchSingleGallerys = async (id = 4) => {
      try {
        const response = await axiosInstance.post(
          `/getLayoutWithGalleryCordinates?layout_id=${id}`
        );
        const apiResponse = await response?.data;
        const galleryImageData = apiResponse?.result?.image;
        const galleryData = apiResponse?.result?.layout;

        if (galleryImageData && galleryData) {
          setSelectedLayout(galleryData.style_id);
          setData(apiResponse?.result);
        } else {
          console.warn("Gallery data not found for ID:", id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSingleGallerys();
  }, []);

  switch (selectedLayout) {
    case 1:
      return (
        <div
          style={{
            overflow: "hidden",
            maxWidth: "100%",
            maxHeight: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <GridGallery data={data} />
        </div>
      );
    case 2:
      return (
        <div
          style={{
            overflow: "hidden",
            maxWidth: "100%",
            maxHeight: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <MyMasonary data={data} />;
        </div>
      );
    case 3:
      return (
        <div
          style={{
            overflow: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            // position:"sticky",
            // display: "flex",
            // flexWrap: "wrap",
            justifyContent: "center",
            padding: "10px",
            boxSizing: "border-box",
            zIndex: "-1",
          }}
        >
          <CollageGallery data={data} />
        </div>
      );
    case 4:
      return (
        <div
          style={{
            overflow: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            // display: "flex",
            justifyContent: "center",
            padding: "10px",
            // boxSizing: "border-box",
            // backgroundColor: "#f4f4f4",
          }}
        >
          <SliderGallery data={data} />
        </div>
      );
    case 5:
      return (
        <div
          style={{
            overflow: "auto",
            maxWidth: "100vw",
            maxHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <ListGallery data={data} />;
        </div>
      );

    default:
      return null;
  }
};

export default Selector;
