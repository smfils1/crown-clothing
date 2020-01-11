import React from "react";

import "./CollectionListItem.scss";

const CollectionListItem = ({title, imageUrl, size}) => {
    return (
        <div style= {{
            backgroundImage: `url(${imageUrl})`
        }} className={`${size} menu-item`}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
};

export default CollectionListItem;
