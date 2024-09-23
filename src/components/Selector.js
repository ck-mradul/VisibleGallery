import React, { useEffect, useState } from "react";
import "./Selector.css";
import axios from "axios";
import GridGallery from "./GridGallery";
import MyMasonary from "./MyMasonary";
import CollageGallery from "./CollageGallery";
import SliderGallery from "./SliderGallery";
import ListGallery from "./ListGallery";
import axiosInstance from "../axiosInstance";

// const Selector = ({ id }) => {
const Selector = () => {
  const [data, setData] = useState(null); // State to store API data
  const [title, setTitle] = useState(" ");
  const [selectedLayout, setSelectedLayout] = useState(1);
  const [selectedImagesColumn, setSelected] = useState(2);
  const [selectedImagesRow, setSelectedImagesRow] = useState(2);
  const [spacingBetweenImages, setSpacingBetweenImages] = useState(2);
  const [selectedColor, setSelectedColor] = useState("");
  const [borderRoundness, setBorderRoundness] = useState(1);
  const [borderSize, setBorderSize] = useState(1);
  const [columnMaxWidth, setColumnMaxWidth] = useState(100);
  const [imageid, setImageId] = useState(null);
  const [getData, setGetData] = useState([]);
  const [id, setId] = useState();
  const [layoutId, setLayoutId] = useState(null);

  // const [loading, setLoading] = useState(true); // State to manage loading
  // const [error, setError] = useState(null); // State to handle errors
  useEffect(() => {
    const fetchSingleGallerys = async (id = 3) => {
      try {
        const response = await axiosInstance.post(
          `/getLayoutWithGalleryCordinates?layout_id=${id}`
        );

        setLayoutId(id);
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const apiResponse = await response?.data;
        // const galleryData = apiResponse.find((item) => item.id === id);
        const galleryImageData = apiResponse?.result?.image;
        const galleryData = apiResponse?.result?.layout;

        if (galleryImageData && galleryData) {
          // const filesWithIds = Object.values(galleryImageData)?.map((imageData) => ({

          // const filesWithIds = galleryImageData?.map((imageData) => ({
          //   fileData: imageData?.file_name,
          //   img_id: imageData?.id,
          // }));

          // const filePromises = filesWithIds.map(async (imageData) => {
          //   try {
          //     // const response = await fetch(imageData.fileData);
          //     // const blob = await response.blob();

          //     const response = await axiosInstance.get(imageData.fileData, {
          //       responseType: "blob", // Important for handling file downloads
          //     });

          //     const blob = response.data;

          //     const fileName = imageData.fileData.substring(
          //       imageData.fileData.lastIndexOf("/") + 1
          //     );
          //     return new File([blob], fileName, {
          //       type: blob.type,
          //       img_id: imageData.img_id,
          //     });
          //   } catch (error) {
          //     console.error("Error fetching image:", error);
          //     return null;
          //   }
          // });

          // const imageFiles = await Promise.all(filePromises);
          // const validImageFiles = imageFiles?.filter((file) => file !== null);

          // // Update the state with the properly formatted uploaded files
          // const updatedUploadedFiles = validImageFiles.map((file, index) => ({
          //   file,
          //   img_id: filesWithIds[index].img_id,
          // }));

          // setUploadedFiles(updatedUploadedFiles);

          setTitle(galleryData.title);
          setSelectedLayout(galleryData.style_id);
          setSelected(galleryData.img_in_column);
          setSelectedImagesRow(galleryData.img_in_row);
          setSpacingBetweenImages(galleryData.space_bt_img);
          // setUserId(galleryData.user_id);
          setSelectedColor(
            galleryData?.border_color ? galleryData?.border_color : ""
          );
          setBorderRoundness(galleryData.border_round);
          setBorderSize(galleryData.border_size);
          setColumnMaxWidth(galleryData.column_max_width);
          // setUploadedFiles(galleryData)

          setImageId(galleryImageData?.id);
          // setUploadedFiles(imageFiles);
          setData(apiResponse?.result);

          setId(id);
        } else {
          console.warn("Gallery data not found for ID:", id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSingleGallerys();
  }, []);

  // const handleClick = () => {};

  // switch (data?.layout?.style_id) {
  switch (selectedLayout) {
    case 1:
      return (
        // <div style={{ overflow: "hidden", width: "32%" }}>
        <div
          style={{
            overflow: "hidden", // Allow auto scrolling only if necessary
            maxWidth: "100%", // Limit the container width to the viewport
            maxHeight: "100%", // Limit the height to prevent vertical scroll
            display: "flex", // Flexbox to center the gallery
            justifyContent: "center", // Horizontal centering
            padding: "10px", // Reduce padding to prevent excess space
            boxSizing: "border-box", // Ensure padding and border are included
            // backgroundColor: "#f4f4f4", // Optional: background color
          }}
        >
          <GridGallery data={data} />
        </div>
      );
    case 2:
      return (
        <div
          style={{
            overflow: "hidden", // Allow auto scrolling only if necessary
            maxWidth: "100%", // Limit the container width to the viewport
            maxHeight: "100%", // Limit the height to prevent vertical scroll
            display: "flex", // Flexbox to center the gallery
            justifyContent: "center", // Horizontal centering
            padding: "10px", // Reduce padding to prevent excess space
            boxSizing: "border-box", // Ensure padding and border are included
            // backgroundColor: "#f4f4f4", // Optional: background color
          }}
        >
          <MyMasonary data={data} />;
        </div>
      );
    case 3:
      return (
        <div
          style={{
            overflow: "auto", // Allow auto scrolling only if necessary
            maxWidth: "100%", // Limit the container width to the viewport
            maxHeight: "100%", // Limit the height to prevent vertical scroll
            // position:"sticky",
            // display: "flex", // Flexbox to center the gallery
            // flexWrap: "wrap",
            justifyContent: "center", // Horizontal centering
            padding: "10px", // Reduce padding to prevent excess space
            boxSizing: "border-box", // Ensure padding and border are included
            // backgroundColor: "#f4f4f4", // Optional: background color
            zIndex: "-1",
          }}
        >
          <CollageGallery data={data} />
        </div>
        // <CollageGallery data={data} />
      );
    case 4:
      return (
        <div
          style={{
            overflow: "auto", // Allow auto scrolling only if necessary
            maxWidth: "100%", // Limit the container width to the viewport
            maxHeight: "100%", // Limit the height to prevent vertical scroll
            // display: "flex", // Flexbox to center the gallery
            justifyContent: "center", // Horizontal centering
            padding: "10px", // Reduce padding to prevent excess space
            // boxSizing: "border-box", // Ensure padding and border are included
            // backgroundColor: "#f4f4f4", // Optional: background color
          }}
        >
          <SliderGallery data={data} />
        </div>
      );
    case 5:
      return (
        <div
          style={{
            overflow: "auto", // Allow auto scrolling only if necessary
            maxWidth: "100vw", // Limit the container width to the viewport
            maxHeight: "100vh", // Limit the height to prevent vertical scroll
            display: "flex", // Flexbox to center the gallery
            justifyContent: "center", // Horizontal centering
            padding: "10px", // Reduce padding to prevent excess space
            boxSizing: "border-box", // Ensure padding and border are included
            // backgroundColor: "#f4f4f4", // Optional: background color
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
