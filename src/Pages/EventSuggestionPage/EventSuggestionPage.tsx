import { useState } from "react";
import classes from "./EventSuggestionPage.module.css";
import FilterIcon from "../../Components/Icons/FilterIcon";
import JaheshIcon from "../../Components/Icons/JaheshIcon";
import Post from "../../Components/PostItems/Post";
import Pagination from "../../Components/Pagination/Pagination";
import { DUMMY_POST } from "../../data/DummyPosts";
import { PostType } from "../../models/types/types";
import StarsDropDown from "../../Components/DropDown/StarsDropDown";
import DateBasedDropDown from "../../Components/DropDown/DateBasedDropDown";
import SortSelectBox from "../../Components/SortSelectBox/SortSelectBox";

const EventSuggestionPage = () => {
  const [posts, setPosts] = useState<PostType[]>(DUMMY_POST);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postPerPage: number = 2;
  const lastPostIndex: number = currentPage * postPerPage;
  const firstPostIndex: number = lastPostIndex - postPerPage;
  const currentPosts: PostType[] = posts.slice(firstPostIndex, lastPostIndex);

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
        <SortSelectBox />
        <DateBasedDropDown />
        <StarsDropDown />
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
