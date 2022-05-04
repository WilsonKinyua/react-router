import { useParams, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import Highlighted from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote found!</p>;
  }

  return (
    <Fragment>
      <Highlighted text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            View Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
