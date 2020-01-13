import React from 'react'

import CollectionItem from "../CollectionItem/CollectionItem"
import "./CollectionPreview.scss"

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
                {items.slice(0,4).map(({id, ...itemProps}) =>  <CollectionItem key={id} {...itemProps} />)}
            </div>
        </div>
    )
}

export default CollectionPreview
