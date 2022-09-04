import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

// sorts the quotes array via ID based upon asc/desc
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory(); // collects the history object
  const location = useLocation(); // collects the location object

  // built in browser JS constructor function
  // collects the location parameter, updated via the useLocation method
  const queryParams = new URLSearchParams(location.search);

  // collects the sort key from queryParams, evaluates to true if value is asc
  const isSortingAscending = queryParams.get("sort") === "asc";

  // calls the sortQuotes function, passing it the quotes found in props and isSortingAscending for the key value
  // passed to QuoteItem component below.
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  // on click, evaluates isSortingAscending, if true switches to descending
  const changeSortingHandler = () => {
    // navigation object, describes target destination
    history.push({
      pathname: location.pathname, // remain on current page
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`, // query parameters
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
