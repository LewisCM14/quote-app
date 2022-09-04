import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../libs/api";

const NewQuote = () => {
  // de-structures the object received by useHttp when addQuotes is passed as a function
  const { sendRequest, status } = useHttp(addQuote);

  const history = useHistory(); // collect the history object

  // when status evaluates to completed re-directs to '/quotes' url
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
