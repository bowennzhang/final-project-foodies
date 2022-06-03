import "./Category.css";

const Category = () => {
  return (
    <div className="category-container">
      <p className="category-title">Categories</p>

      <div className="category-wrapper">
        <div className="category-card">
          <p>coffee</p>
        </div>

        <div className="category-card">
          <p>restaurant</p>
        </div>

        <div className="category-card">
          <p>bar</p>
        </div>

        <div className="category-card">
          <p>shopping</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
