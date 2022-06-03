import Banner from "./banner/Banner";
import Category from "./category/Category";
import CommentSection from "./commentSection/CommentSection";
import Footer from "./footer/Footer";
import MainSection from "./mainSection/MainSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <MainSection />
      <CommentSection />
      <Footer />
    </div>
  );
};

export default Home;
