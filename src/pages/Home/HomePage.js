import React from "react";

import CollectionList from "../../components/CollectionList/CollectionList";
import storeCollections from "../../data/collections";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <div className="homepage">
            <CollectionList collections={storeCollections} />
        </div>
    );
};

export default HomePage;
