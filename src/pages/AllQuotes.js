import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Lewis',
        text: 'Learning React is fun!'
    },
    {
        id: 'q1',
        author: 'Kayleigh',
        text: 'Learning React is great!'
    },
];

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    );
};

export default AllQuotes;