import "./CommentSection.css";

const CommentSection = () => {
  return (
    <div className="comment-container">
      <p className="comment-title">
        feel free to leave some comments about the website
      </p>
      <div className="comment-card">
        <input
          type="text"
          className="comment-input"
          placeholder="your comment"
        />
        <button className="comment-btn">submit</button>
      </div>
    </div>
  );
};

export default CommentSection;
