import { useEffect, useState } from "react";
import FilterIcon from "../../Components/Icons/FilterIcon";
import JaheshIcon from "../../Components/Icons/JaheshIcon";
import Post from "../../Components/PostItems/Post";
import { dateFormatter } from "../../utils/utils";
import classes from "./EventSuggestionPage.module.css";
import steve from "/images/1.png";
import pavel from "/images/2.png";
import ilon from "/images/3.png";
import img from "/images/pic.jfif";
import Pagination from "../../Components/Pagination/Pagination";
const posts = [
  {
    id: 0,
    isWinner: true,
    personPicture: img,
    personName: "سمانه احمدی",
    postDate: dateFormatter("2024-02-07"),
    postTitle: "پیشنهاد برای چالش کدنویسی همکاران سیستم",
    postDescription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    sliderContent: [
      {
        id: 0,
        image: pavel,
        alt: "Pavel Durov Picture",
      },
      {
        id: 1,
        image: steve,
        alt: "Steve Jobs Picture",
      },
      {
        id: 2,
        image: ilon,
        alt: "Ilon mask Picture",
      },
    ],
  },
  {
    id: 1,
    isWinner: false,
    personPicture: ilon,
    personName: "Amir ",
    postDate: dateFormatter("2024-02-08"),
    postTitle: "پیشنهاد برای چالش دوآپس دیجی کالا",
    postDescription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با تست تست تست از طراحان گرافیک است",
    sliderContent: [
      {
        id: 0,
        image: steve,
        alt: "Pavel Durov Picture",
      },
      {
        id: 1,
        image: ilon,
        alt: "Steve Jobs Picture",
      },
      {
        id: 2,
        image: pavel,
        alt: "Ilon mask Picture",
      },
    ],
  },
  {
    id: 2,
    isWinner: false,
    personPicture: ilon,
    personName: "Akbar ",
    postDate: dateFormatter("2024-02-08"),
    postTitle: "پیشنهاد برای آزمون نهایی دبیرستان",
    postDescription: "تست پیست سوم ",
    sliderContent: [
      {
        id: 0,
        image: steve,
        alt: "Steve Jobs Picture",
      },
      {
        id: 1,
        image: steve,
        alt: "Steve Jobs Picture",
      },
      {
        id: 2,
        image: steve,
        alt: "Steve Jobs Picture",
      },
    ],
  },
  {
    id: 3,
    isWinner: false,
    personPicture: ilon,
    personName: "Asghar ",
    postDate: dateFormatter("2024-02-08"),
    postTitle: "پیشنهاد برای چالش تست تسک جهش",
    postDescription: "این یک متن تست برای تکنیکال تسک جهش است",
    sliderContent: [
      {
        id: 0,
        image: pavel,
        alt: "Pavel Durov Picture",
      },
      {
        id: 1,
        image: pavel,
        alt: "Pavel Durov Picture",
      },
      {
        id: 2,
        image: pavel,
        alt: "Pavel Durov Picture",
      },
    ],
  },
  {
    id: 4,
    isWinner: false,
    personPicture: ilon,
    personName: "Hassan ",
    postDate: dateFormatter("2024-02-08"),
    postTitle: "پیشنهاد برای چالش 321312321312 همکاران سیستم",
    postDescription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 321312312321312321312312312 از طراحان گرافیک است",
    sliderContent: [
      {
        id: 0,
        image: steve,
        alt: "Pavel Durov Picture",
      },
      {
        id: 1,
        image: pavel,
        alt: "Steve Jobs Picture",
      },
      {
        id: 2,
        image: ilon,
        alt: "Ilon mask Picture",
      },
    ],
  },
  {
    id: 5,
    isWinner: false,
    personPicture: ilon,
    personName: "reza ",
    postDate: dateFormatter("2024-02-08"),
    postTitle: "پیشنهادی برای این پست ندارم ",
    postDescription: "برای این قسمت پست نیز پیشنهادی ندارم ",
    sliderContent: [
      {
        id: 0,
        image: ilon,
        alt: "Ilon mask Picture",
      },
      {
        id: 1,
        image: ilon,
        alt: "Ilon mask Picture",
      },
      {
        id: 2,
        image: ilon,
        alt: "Ilon mask Picture",
      },
    ],
  },
  {
    id: 6,
    isWinner: false,
    personPicture: ilon,
    personName: "حصین رحمتی",
    postDate: dateFormatter("2024-02-08"),
    postTitle: "زندگی نامه حصین رحمتی",
    postDescription: "متولد دوازدهم مرداد 1366 در شهر مشهد میباشد ",
    sliderContent: [
      {
        id: 2,
        image: ilon,
        alt: "Ilon mask Picture",
      },

      {
        id: 1,
        image: pavel,
        alt: "Steve Jobs Picture",
      },
      {
        id: 0,
        image: steve,
        alt: "Pavel Durov Picture",
      },
      {
        id: 0,
        image: steve,
        alt: "Pavel Durov Picture",
      },
      {
        id: 0,
        image: steve,
        alt: "Pavel Durov Picture",
      },
      {
        id: 0,
        image: steve,
        alt: "Pavel Durov Picture",
      },
    ],
  },
];

const EventSuggestionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 2;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

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
      <div>
        {currentPosts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
      <div>
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
