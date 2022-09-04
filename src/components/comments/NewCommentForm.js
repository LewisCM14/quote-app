import { useRef, useEffect } from "react";

import useHttp from "../../hooks/use-http";
import { addComment } from "../../libs/api";
import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  // passes the addComment function to the custom hook, de-structures the object received
  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props; // passed as prop to comments.js

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // collects the current value from the text ref
    const enteredText = commentTextRef.current.value;

    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId});
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
