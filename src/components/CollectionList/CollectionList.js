import React from 'react'

import CollectionListItem from "../CollectionListItem/CollectionListItem"
import "./CollectionList.scss"


const CollectionList = ({collections}) => {

    return (
        <div className="directory-menu" >
            {collections.map(({id, ...collectionItemProps}) => <CollectionListItem  key={id} {...collectionItemProps}/>)}
        </div>
    )
}

export default CollectionList
