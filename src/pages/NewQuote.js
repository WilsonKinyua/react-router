import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.replace("/quotes");
  };
  return (
    <Fragment>
      <h1>New Quote Page</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuote;
