import { useEffect, useState } from "react";
import FillStarIcon from "../Icons/FillStarIcon";
import LeftArrowIcon from "../Icons/LeftArrowIcon";
import OutlinedStarIcon from "../Icons/OutlinedStarIcon";
import classes from "./SubmitRate.module.css";
const SubmitRate = ({ setPosts, posts, postId }) => {
  const [showStarModal, setShowStarModal] = useState<boolean>(false);
  const [rateValue, SetRateValue] = useState<number>(0);
  const starsValue = ["1", "2", "3", "4", "5"];

  const updatedPosts = [...posts];
  const index = updatedPosts.findIndex((post) => post.id === postId);
  updatedPosts[index] = {
    ...updatedPosts[index],
    earnedStars: rateValue,
  };
  useEffect(() => {
    console.log(posts);

    setPosts(updatedPosts);
  }, [rateValue]);

  return (
    <>
      {showStarModal && (
        <div className={classes.starsModal}>
          <div>
            {starsValue.map((item) => (
              <OutlinedStarIcon
                handleShowModal={setShowStarModal}
                key={item}
                value={item}
                handleRateValue={SetRateValue}
              />
            ))}
          </div>
        </div>
      )}
      {!showStarModal && (
        <div
          className={classes.rated}
          onClick={() => {
            setShowStarModal((prevState) => !prevState);
          }}
        >
          {/* Star length */}
          <FillStarIcon />
          <span>{rateValue}</span>
        </div>
      )}
      <div className={classes.postDetailsBtn}>
        <span>جزئیات</span>
        <LeftArrowIcon />
      </div>
    </>
  );
};

export default SubmitRate;
