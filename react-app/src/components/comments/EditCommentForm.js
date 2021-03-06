import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as replayActions from "../../store/replays";

import "./EditCommentForm.css";

const EditCommentForm = ({ commentId, resetId }) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.current_replay?.comments);
  const commentToEdit = game[commentId];

  const [errors, setErrors] = useState([]);
  const [content, setContent] = useState(commentToEdit?.content);

  const updateContent = (e) => setContent(e.target.value);

  useEffect(() => {
    const validationErrors = [];

    let contentTrimmed = content.trim();

    if (contentTrimmed.length === 0) validationErrors.push("");

    if (content.length > 12000)
      validationErrors.push("s-senpai.. it's too long.. uwu");

    setErrors(validationErrors);
  }, [content]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let editedComment = {
      id: commentId,
      content,
    };

    if (editedComment) {
      dispatch(replayActions.editComment(editedComment));
      resetId();
    }
    setErrors([]);
    setContent("");
  };

  return (
    <div className="EditCommentBox">
      <form onSubmit={handleSubmit}>
        <div className="EditCommentErrors">{errors}</div>
        {/* <div className="EditCommentTextBoxArea"> */}
        <textarea
          type="text"
          required
          placeholder="Edit Comment"
          value={content}
          onChange={updateContent}
        />
        <button type="submit" disabled={errors.length > 0}>
          <i className="fa-solid fa-square-check" title="Confirm edit"></i>
        </button>
        {/* </div> */}
      </form>
      <i
        className="fa-solid fa-trash-can"
        title="Delete"
        onClick={async (e) => {
          e.preventDefault();
          if (
            window.confirm("a-are you sure you want to delete me..? -sad uwu-")
          ) {
            await dispatch(replayActions.deleteComment(commentId));
          }
        }}
      ></i>
    </div>
  );
};

export default EditCommentForm;
