import React from 'react'

import CollectionListItem from "../CollectionListItem/CollectionListItem"
import "./CollectionList.scss"


const CollectionList = ({collections}) => {

    return (
        <div className="directory-menu" >
            {collections.map(({id, title, imageUrl, size}) => <CollectionListItem  key={id} title={title} imageUrl={imageUrl} size={size}/>)}
        </div>
    )
}

export default CollectionList
