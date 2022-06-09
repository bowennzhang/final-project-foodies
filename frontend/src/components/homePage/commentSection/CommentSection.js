import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./CommentSection.css";

const CommentSection = () => {
  const [commentInput, setCommentInput] = useState("");
  const [comment, setComment] = useState();
  const { user } = useAuth0();

  const handleNewComment = (e) => {
    e.preventDefault();

    fetch("/api/new-comment", {
      body: JSON.stringify({
        email: user.email,
        user: user.sub,
        url: user.picture,
        name: user.name,
        comment: commentInput,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    fetch("/api/new-comment")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setComment(data.data);
      });
  }, [commentInput]);

  return (
    <>
      <div className="comment-container">
        <p className="comment-title">
          feel free to leave some comments about the website
        </p>
        <form
          onSubmit={(e) => {
            handleNewComment(e);
          }}
          className="comment-card"
        >
          <input
            className="comment-input"
            type="text"
            value={commentInput}
            placeholder="your comment"
            onChange={(e) => {
              setCommentInput(e.target.value);
            }}
          />
          <button type="submit" className="comment-btn">
            submit
          </button>
        </form>
        <div></div>
      </div>
    </>
  );
};

export default CommentSection;
