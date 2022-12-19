import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={props.item.imageUrl} />
            <div className="card--text">
            <p className="card--title">{props.item.title}</p>
            <div className="card--loc">
                <img className="card--loc--logo" src="/assets/Fill220.png"></img>
                <p className="card--location">{props.item.location}</p>
                <a className="card--map" href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <div className="card--date">
                    <p className="card--date--startDate">{props.item.startDate}</p>
                    <p className="card--hypen">-</p>
                <p className="card--date--endDate">{props.item.endDate}</p>
            </div>
            <p className="card--description">{props.item.description}</p>
        </div>
        </div>
    )
}