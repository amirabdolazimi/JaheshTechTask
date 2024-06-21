import EducationTrophyIcon from "../Icons/EducationTrophyIcon";
import classes from "./post.module.css";
import SubmitRate from "../SubmitRate/SubmitRate";
import PostSlider from "../Slider/PostSlider";
import { IPost } from "../../models/interface/interface";

const Post: React.FC<IPost> = (props) => {
  const {
    isWinner,
    personPicture,
    personName,
    postDate,
    postDescription,
    postTitle,
    sliderContent,
    setPosts,
    posts,
    id,
  } = props;

  return (
    <article className={`${classes.post} ${isWinner && classes.winnerPost}`}>
      {/* If Winner is => True */}
      {isWinner && (
        <label className={classes.winnerLabel}>
          <span>
            <EducationTrophyIcon />
          </span>
          <span>برنده فراخوان</span>
        </label>
      )}
      <div className={classes.person}>
        <img src={personPicture} alt={personName} />
        <span>{personName}</span>
        <span>{postDate}</span>
      </div>
      <div className={classes.postTitle}>
        <h4>{postTitle}</h4>
        <p>{postDescription}</p>
      </div>
      {/* Slider */}
      <div className={classes.slider_container}>
        <PostSlider sliderContent={sliderContent} />
      </div>
      <div className={classes.postFooter}>
        <SubmitRate setPosts={setPosts} posts={posts} postId={id} />
      </div>
    </article>
  );
};

export default Post;
