import React from "react";
import { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./postShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { createNewPost, fetchAllPosts } from "../Api/Api";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const imageRef = useRef();

  const imageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const handleClick = () => {
    imageRef.current.click();
  };
  const handleNull = () => {
    setImage(null);
  };
  const handleSunmit = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    const res = await createNewPost(formData);

    if(res){
      alert(res.messages)
      setImage(null);
      await fetchAllPosts()

    }
  };
  const getValue = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />

      <div>
        <input onChange={getValue} type="text" placeholder="What Happening" />
        <div className="PostOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={handleClick}
          >
            <UilScenery />
            Photo
          </div>

          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button" onClick={handleSunmit}>
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={imageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previenImage">
            <UilTimes onClick={handleNull} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
