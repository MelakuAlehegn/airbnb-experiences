import React from "react";

function Card(props) {
  let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
        <div className="cards">
        {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card-images" src={`src/assets/${props.item.coverImg}`}  />
            <div className="card-stat">
                <img src="src/assets/Star 1.png" className="star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span>From ${props.item.price}</span> / person</p>
        </div>
  )
}

export default Card