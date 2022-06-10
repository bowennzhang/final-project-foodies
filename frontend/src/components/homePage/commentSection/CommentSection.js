import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "../../reusable/Loading";
import "./CommentSection.css";

const CommentSection = () => {
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [posted, setPosted] = useState(false);
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
        setPosted((prev) => !prev);
        setCommentInput("");
        console.log("success", data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    fetch("/api/get-comment")
      .then((res) => res.json())
      .then((data) => {
        setComments(data.data);
        setIsLoaded(true);
      });
  }, [posted]);

  if (!isLoaded) {
    return <Loading />;
  }
  console.log(comments);
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
        <div className="comments-container">
          {comments.map((comment) => {
            if (comment.comments) {
              return comment.comments.map((el, index) => {
                return (
                  <div className="comments-card" key={index}>
                    <img className="comments-image" src={el.url} alt="" />
                    <div className="comments-info">
                      <div className="comments-name">{el.name}</div>
                      <p className="comments-comment">{el.comment}</p>
                    </div>
                  </div>
                );
              });
            }
          })}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
