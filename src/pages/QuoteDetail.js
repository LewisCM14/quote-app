import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Lewis",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Kayleigh",
    text: "Learning React is great!",
  },
];

const QuoteDetail = () => {
  const params = useParams(); // stores the useParams method in a function

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  // if no quote found
  if (!quote) {
    return <p>No Quote found!</p>
  }

  return (
    <Fragment>
      {/* passes the text & author prop to HighlightedQuote from the quote function above */}
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
