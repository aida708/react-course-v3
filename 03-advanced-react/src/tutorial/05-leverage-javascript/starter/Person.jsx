import React from "react";
//import the avatar pic from assets
import avatar from "../../../assets/default-avatar.svg";

export function Person({ name, nickName, images }) {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h3>{name}</h3>
      <p>Nickname: {nickName || "shakeAndBake"}</p>
      {/* <img src={person.images.small.url} /> */}
    </div>
  );
}
