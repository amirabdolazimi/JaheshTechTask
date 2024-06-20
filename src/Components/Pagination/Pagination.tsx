import LeftArrowIcon from "../Icons/LeftArrowIcon";
import RightArrowIcon from "../Icons/RightArrowIcon";
import classes from "./Pagination.module.css";
import { IPagination } from "../../models/interface/interface";

const Pagination: React.FC<IPagination> = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className={classes.pagination}>
      <button
        className={`${currentPage === 1 && classes.disabled}`}
        disabled={currentPage === 1 && true}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        <RightArrowIcon />
      </button>
      {pages.map((page, index) => (
        <button
          className={`${page === currentPage && classes.active}`}
          onClick={() => setCurrentPage(page)}
          key={index}
        >
          {page}
        </button>
      ))}

      <button
        className={`${
          currentPage === pages[pages.length - 1] && classes.disabled
        }`}
        disabled={currentPage === pages[pages.length - 1] && true}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        <LeftArrowIcon />
      </button>
    </div>
  );
};

export default Pagination;
