import { useState } from "react";
import FilterIcon from "../../Components/Icons/FilterIcon";
import JaheshIcon from "../../Components/Icons/JaheshIcon";
import Post from "../../Components/PostItems/Post";
import classes from "./EventSuggestionPage.module.css";
import Pagination from "../../Components/Pagination/Pagination";
import { DUMMY_POST } from "../../data/DummyPosts";
import { PostType } from "../../models/types/types";
import DropDown from "../../Components/DropDown/DropDown";
import FillStarIcon from "../../Components/Icons/FillStarIcon";
const FiveStar = () => {
  return (
    <div>
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <span>5ستاره</span>
    </div>
  );
};
const FourStar = () => {
  return (
    <div>
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <span>4ستاره</span>
    </div>
  );
};
const ThreeStar = () => {
  return (
    <div>
      <FillStarIcon />
      <FillStarIcon />
      <FillStarIcon />
      <span>3ستاره</span>
    </div>
  );
};
const TwoStar = () => {
  return (
    <div>
      <FillStarIcon />
      <FillStarIcon />
      <span>2ستاره</span>
    </div>
  );
};

const OneStar = () => {
  return (
    <div>
      <FillStarIcon />
      <span>1ستاره</span>
    </div>
  );
};

const EventSuggestionPage = () => {
  const [posts, setPosts] = useState<PostType[]>(DUMMY_POST);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postPerPage: number = 2;
  const lastPostIndex: number = currentPage * postPerPage;
  const firstPostIndex: number = lastPostIndex - postPerPage;
  const currentPosts: PostType[] = posts.slice(firstPostIndex, lastPostIndex);

  const dropDownOptions = [
    {
      sortValue: "مرتب کردن بر اساس",
      itemOptions: [
        { label: "جدید ترین", value: "new" },
        { label: "قدیمی ترین", value: "old" },
      ],
    },
    {
      sortValue: "تعداد ستاره ها",
      itemOptions: [
        { label: "همه پیشنهاد ها", value: "All" },
        { label: <FiveStar />, value: "5" },
        { label: <FourStar />, value: "4" },
        { label: <ThreeStar />, value: "3" },
        { label: <TwoStar />, value: "2" },
        { label: <OneStar />, value: "1" },
        { label: "بدون ستاره", value: "0" },
      ],
    },
  ];

  // TODO : Responsive
  // TODO : CustomSelectBox

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.offersTitle}>
          <span className={classes.jahesh}>
            <JaheshIcon />
          </span>
          <h3>پیشنهاد ها </h3>
        </div>
        <div className={classes.filterTitle}>
          <span className={classes.jahesh}>
            <FilterIcon />
          </span>
          <h3>فیلتر ها </h3>
        </div>
      </header>
      <div className={classes.selectBox}>
        {dropDownOptions.map((items) => (
          <DropDown items={items.itemOptions} sortValue={items.sortValue} />
        ))}
        {/* <DropDown onSort={() => {}} sortValue={0} /> */}
        {/* <DropDown onSort={() => {}} sortValue={0} /> */}
        {/* <DropDown onSort={() => {}} sortValue={0} /> */}
      </div>
      <div className={classes.postGrid}>
        {currentPosts.map((post) => (
          <Post {...post} key={post.id} setPosts={setPosts} posts={posts} />
        ))}
      </div>
      <div className={classes.pagination}>
        {/* Pagination Section */}
        <Pagination
          totalPosts={posts.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default EventSuggestionPage;
