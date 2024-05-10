import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
    const [sortBy, setSortBy] = useState(""); 
    const handleSort = (sortType) => {
        setSortBy(sortType);
    };

    const sortedArticles = [...articles].sort((a, b) => {
        if (sortBy === "most-upvoted") {
            return b.upvotes - a.upvotes;
        } else if (sortBy === "most-recent") {
            return new Date(b.date) - new Date(a.date);
        } else {
            return 0; 
        }
    });

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => handleSort("most-upvoted")}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => handleSort("most-recent")}>Most Recent</button>
            </div>
            <Articles articles={sortedArticles} />
        </div>
    );
}

export default App;
