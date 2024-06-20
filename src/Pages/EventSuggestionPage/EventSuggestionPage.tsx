import FilterIcon from "../../Components/Icons/FilterIcon";
import JaheshIcon from "../../Components/Icons/JaheshIcon";
import Post from "../../Components/PostItems/Post";
import { dateFormatter } from "../../utils/utils";
import classes from "./EventSuggestionPage.module.css";
import steve from "/images/1.png";
import pavel from "/images/2.png";
import ilon from "/images/3.png";
import img from "/images/pic.jfif";
const EventSuggestionPage = () => {
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
      id: 2,
      isWinner: false,
      personPicture: ilon,
      personName: "Amir ",
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
      id: 3,
      isWinner: false,
      personPicture: ilon,
      personName: "Amir ",
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
      id: 4,
      isWinner: false,
      personPicture: ilon,
      personName: "Amir ",
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
      personName: "Amir ",
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
  ];

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
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default EventSuggestionPage;
