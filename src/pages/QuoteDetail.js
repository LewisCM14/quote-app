import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

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
  const match = useRouteMatch(); // collects the match object from useRouteMatch
  const params = useParams(); // stores the useParams method in a function

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // if no quote found
  if (!quote) {
    return <p>No Quote found!</p>;
  }

  return (
    <Fragment>
      {/* passes the text & author prop to HighlightedQuote from the quote function above */}
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* matches the url path from existing path definition in app.js */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
