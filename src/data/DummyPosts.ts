import { dateFormatter } from "../utils/utils";
import pavel from "/images/2.png";
import steve from "/images/1.png";
import ilon from "/images/3.png";
import img from "/images/pic.jfif";
import { PostType } from "../models/types/types";
export const DUMMY_POST: PostType[] = [
  {
    id: 0,
    isWinner: true,
    personPicture: img,
    earnedStars: 0,
    personName: "سمانه احمدی",
    postDate: dateFormatter("2024-02-07"),
    postTitle: "پیشنهاد برای چالش کدنویسی همکاران سیستم",
    postDescription:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
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
    earnedStars: 0,
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
    personPicture: pavel,
    earnedStars: 0,
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
    personPicture: steve,
    earnedStars: 0,
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
    personPicture: pavel,
    earnedStars: 0,
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
    earnedStars: 0,
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
    personPicture: pavel,
    earnedStars: 0,
    personName: "حصین رحمتی",
    postDate: dateFormatter("2024-02-08"),
    postTitle: "زندگی نامه حصین رحمتی",
    postDescription: "متولد دوازدهم مرداد 1366 در شهر مشهد میباشد ",
    sliderContent: [
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

      {
        id: 3,
        image: steve,
        alt: "Pavel Durov Picture",
      },
      {
        id: 4,
        image: steve,
        alt: "Pavel Durov Picture",
      },
      {
        id: 5,
        image: steve,
        alt: "Pavel Durov Picture",
      },
      {
        id: 6,
        image: steve,
        alt: "Pavel Durov Picture",
      },
    ],
  },
];
