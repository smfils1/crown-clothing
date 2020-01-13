import React from 'react'

import collectionItems from "../../data/collectionItems";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"

import "./ShopPage.scss"


const ShopPage = () => {
    return (
        <div >
            {collectionItems.map(({id, ...collectionItemProps}) => <CollectionPreview key={id} {...collectionItemProps} />)}
        </div>
    )
}

export default ShopPage
