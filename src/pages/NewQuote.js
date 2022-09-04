import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory(); // collect the history object

    const addQuoteHandler = quoteData => {
        console.log(quoteData);

        // navigates to the /quotes page after submit
        history.push('/quotes');
    }

    return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;