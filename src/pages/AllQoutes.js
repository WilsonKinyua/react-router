import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Wilson",
    text: "Learning GraphQl is awesome",
  },
  {
    id: "q2",
    author: "Kinyua",
    text: "Learning React is fun",
  },
];

const AllQuotes = () => {
  return (
    <Fragment>
      <h1>All Quotes Page</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQuotes;
