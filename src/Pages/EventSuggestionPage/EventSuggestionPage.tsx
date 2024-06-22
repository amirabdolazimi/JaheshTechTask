import { useEffect, useState } from "react";
import { DUMMY_POST } from "../../data/DummyPosts";
import { PostType } from "../../models/types/types";
import classes from "./EventSuggestionPage.module.css";
import FilterIcon from "../../Components/Icons/FilterIcon";
import JaheshIcon from "../../Components/Icons/JaheshIcon";
import Post from "../../Components/PostItems/Post";
import Pagination from "../../Components/Pagination/Pagination";
import StarsDropDown from "../../Components/DropDown/StarsDropDown";
import DateBasedDropDown from "../../Components/DropDown/DateBasedDropDown";
import SortSelectBox from "../../Components/SortSelectBox/SortSelectBox";
const EventSuggestionPage = () => {
  const [posts, setPosts] = useState<PostType[]>(DUMMY_POST);
  const [sortedPosts, setSortedPosts] = useState<PostType[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setSortedPosts(posts);
  }, [posts]);

  const postPerPage: number = 2;
  const lastPostIndex: number = currentPage * postPerPage;
  const firstPostIndex: number = lastPostIndex - postPerPage;

  const currentPosts: PostType[] | undefined = sortedPosts?.slice(
    firstPostIndex,
    lastPostIndex
  );

  const handleSort = (sortValue: boolean) => {
    const filteredPosts = currentPosts?.filter((p) => p.isWinner);
    if (!sortValue) {
      setSortedPosts(filteredPosts);
    } else {
      setSortedPosts(posts);
    }
  };
  const handleFilter = (filterValue: string | number) => {
    const filteredPosts = currentPosts?.filter(
      (p) => p.earnedStars === filterValue
    );
    if (filterValue === "All") {
      setSortedPosts(posts);
    } else if (filterValue) {
      setSortedPosts(filteredPosts);
    } else {
      setSortedPosts(posts);
    }
  };
  // const handleSortByDate = (dateValue: string) => {
  //   const sortedPosts = currentPosts?.sort((a, b) =>
  //     dateValue === "descending"
  //       ? new Date(a.originalPostDate).getTime() -
  //         new Date(b.originalPostDate).getTime()
  //       : new Date(b.originalPostDate).getTime() -
  //         new Date(a.originalPostDate).getTime()
  //   );
  //   setSortedPosts(sortedPosts);
  // };
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
        <SortSelectBox onSort={handleSort} />
        <DateBasedDropDown />
        <StarsDropDown onFilter={handleFilter} />
      </div>
      <div className={classes.postGrid}>
        {currentPosts &&
          currentPosts.map((post) => (
            <Post {...post} key={post.id} setPosts={setPosts} posts={posts} />
          ))}
      </div>
      <div className={classes.pagination}>
        {/* Pagination Section */}
        <Pagination
          totalPosts={sortedPosts?.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default EventSuggestionPage;
