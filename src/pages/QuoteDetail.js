import { Fragment } from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
    const params = useParams();  // stores the useParams method in a function

    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            {/* quoteId defined in App.js route */} 
            <p>{params.quoteId}</p>
        </Fragment>
    );
};

export default QuoteDetail;