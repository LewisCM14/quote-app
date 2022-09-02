import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
    const params = useParams();  // stores the useParams method in a function

    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            {/* quoteId defined in App.js route */} 
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;