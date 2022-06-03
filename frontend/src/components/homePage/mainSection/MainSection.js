import img1 from "../../../asset/pexels-lifepatiently-8393403.jpg";
import img2 from "../../../asset/pexels-céline-chamiotponcet-2889701.jpg";
import img3 from "../../../asset/79f80616-2fb6-46a1-bfe2-bfb6c97b30e3.jpg";

import "./MainSection.css";

const MainSection = () => {
  return (
    <div className="main-section-container">
      <p className="main-section-title">Places to explore in Montréal !</p>

      <div className="main-section-card">
        <div className="main-section-content">
          <img className="main-section-img" src={`${img1}`} alt="" />
          <div>
            <p className="main-section-subtitle">Old Port</p>
            <p className="main-section-description">
              The Old Port of Montreal is the historic port of Montreal, Quebec,
              Canada. Located adjacent to Old Montreal, it stretches for over 2
              km along the Saint Lawrence River. It was used as early as 1611,
              when French fur traders used it as a trading post.
            </p>
          </div>
        </div>
      </div>

      <div className="main-section-card">
        <div className="main-section-content">
          <div>
            <p className="main-section-subtitle">Mount Royal</p>
            <p className="main-section-description">
              Montreal Chinatown was established in the late 19th century with
              the arrival of Chinese immigrants from western Canada who came to
              work on the Canadian Pacific Railway. Though just a couple of
              blocks long, the district offers a wide selection of Asian
              eateries and shops selling traditional handicrafts and souvenirs.
            </p>
          </div>
          <img className="main-section-img" src={`${img2}`} alt="" />
        </div>
      </div>

      <div className="main-section-card">
        <div className="main-section-content">
          <img className="main-section-img" src={`${img3}`} alt="" />
          <div>
            <p className="main-section-subtitle">Montréal Chinatown</p>
            <p className="main-section-description">
              Mount Royal is a large intrusive rock hill or small mountain in
              the city of Montreal, immediately west of Downtown Montreal,
              Quebec, Canada. The best-known hypothesis for the origin of the
              name Montreal is that the name is taken from Mount Royal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
