"use strict";

/* --- BLOG API SYNC --- */

module.exports = async () => {
  return null;

  //? REMOVE DATABASE
  const { mongoose } = require("../configs/dbConnection");
  // await mongoose.connection.dropDatabase();
  // console.log("- Database and all data DELETED!");

  //? USER
  // const User = require("../models/user");
  // await User.deleteMany(); // !!! Clear collection.
  // await User.create({
  //   _id: "65343222b67e9681f937f001",
  //   username: "admin",
  //   firstName: "admin",
  //   lastName: "admin",
  //   email: "admin@site.com",
  //   password: "aA?123456",
  //   image: [],
  //   isActive: true,
  //   isAdmin: true,
  // });
  // await User.create({
  //   _id: "65343222b67e9681f937f002",
  //   username: "test",
  //   firstName: "test",
  //   lastName: "test",
  //   email: "test@site.com",
  //   password: "aA?123456",
  //   image: [],
  //   isActive: true,
  //   isAdmin: false,
  // });

  //? CATEGORY
  // const Category = require("../models/category");
  // await Category.deleteMany(); // !!! Clear collection
  // await Category.create({
  //   _id: "65343222b67e9681f937f003",
  //   name: "Health",
  // });
  // await Category.create({
  //   _id: "65343222b67e9681f937f004",
  //   name: "World",
  // });

  // //? BLOG
  const Blog = require("../models/blog");
  // await Blog.deleteMany(); // !!! Clear collection
  await Blog.create({
    _id: "67e9adbe5e33ca72d8163e41",
    categoryId: "67e97819df2229893580f903",
    commentsId: [],
    contentsId: ["67e979067e98b3162ee04d34", "67e9792a7e98b3162ee04d6f", "67e979b47e98b3162ee04db2", "67e979ff7e98b3162ee04dca", "67e97a4a7e98b3162ee04de2", "67e97a907e98b3162ee04dfa", "67e97aae7e98b3162ee04e12"],
    likesId: ["67f68c31e0877ec4af0b78e8"],
    userId: "65343222b67e9681f937f001",
    viewsId: ["67f68c55e0877ec4af0b796d", "67f68cbbe0877ec4af0b7a31"],
    title: "Avrupa'da Mutlaka Görmeniz Gereken 5 Gizli Cennet",
    image: ["https://res.cloudinary.com/deojrunnl/image/upload/v1743515787/blog_images/ke9bt9gbfx7yqmo8yyws.webp"],
    viewCount: 2,
    likeCount: 1,
    isPublish: true,
  });
  await Blog.create({
    _id: "67e98001565b1dbe2a64f3dc",
    categoryId: "67e977c5df2229893580f8df",
    commentsId: [],
    contentsId: ["67e98011565b1dbe2a64f3e3", "67e9808f565b1dbe2a64f42f", "67e980ee565b1dbe2a64f45f", "67e981ca565b1dbe2a64f4a7", "67e98283565b1dbe2a64f507"],
    likesId: ["67f68c29e0877ec4af0b789d"],
    userId: "65343222b67e9681f937f001",
    viewsId: ["67f68c3be0877ec4af0b7909", "67f68c74e0877ec4af0b79c5"],
    title: "Futbol Tarihindeki En Unutulmaz Maçlar",
    image: ["https://res.cloudinary.com/deojrunnl/image/upload/v1743517895/blog_images/dl07lfhw09duubuljnso.jpg"],
    viewCount: 2,
    likeCount: 1,
    isPublish: true,
  });
  await Blog.create({
    _id: "67e97e769bf1e19b27f69161",
    categoryId: "67e977e7df2229893580f8ef",
    commentsId: [],
    contentsId: ["67e97e849bf1e19b27f69168", "67e97f343e92a3542bc2dd56", "67e97f6d3e92a3542bc2dd62", "67e97f8b3e92a3542bc2dd6e", "67e97fa33e92a3542bc2dd7a"],
    likesId: ["67f68c2ae0877ec4af0b78b6"],
    userId: "65343222b67e9681f937f001",
    viewsId: ["67f68c51e0877ec4af0b794c", "67f68c99e0877ec4af0b7a01","67f6a68e1cd4aa0b230ac959"],
    title: "Evde Yapabileceğiniz 3 Lezzetli ve Sağlıklı Smoothie Tarifi",
    image: ["https://res.cloudinary.com/deojrunnl/image/upload/v1743517778/blog_images/tmzvwyyyyxfu5pdtwibp.webp"],
    viewCount: 3,
    likeCount: 1,
    isPublish: true,
  });
  await Blog.create({
    _id: "67e97bebfb5fc6506cba3904",
    categoryId: "67e97812df2229893580f8ff",
    commentsId: [],
    contentsId: ["67e97bfcfb5fc6506cba390b", "67e97cb91aaa76c6cccb790a", "67e97d3b1aaa76c6cccb793a", "67e97d781aaa76c6cccb7952", "67e97d9f1aaa76c6cccb795e","67e97de71aaa76c6cccb798e"],
    likesId: ["67f68c2de0877ec4af0b78cf"],
    userId: "65343222b67e9681f937f001",
    viewsId: ["67f68c48e0877ec4af0b791f", "67f68ca7e0877ec4af0b7a16"],
    title: "Günlük Hayatta Küçük Değişikliklerle Daha Sağlıklı Olun",
    image: ["https://res.cloudinary.com/deojrunnl/image/upload/v1743517305/blog_images/hcqw0qwe4t2ht7pdulr9.webp"],
    viewCount: 2,
    likeCount: 1,
    isPublish: true,
  });

  // const View = require("../models/view");
  // await View.deleteMany(); // !!! Clear collection
  // await View.create({
  //   _id: "65343222b67e9681f937f010",
  //   userId: "65343222b67e9681f937f001",
  //   blogId: "65343222b67e9681f937f005",
  // });
  // await View.create({
  //   _id: "65343222b67e9681f937f011",
  //   userId: "65343222b67e9681f937f002",
  //   blogId: "65343222b67e9681f937f006",
  // });
  // await View.create({
  //   _id: "65343222b67e9681f937f012",
  //   userId: "65343222b67e9681f937f001",
  //   blogId: "65343222b67e9681f937f006",
  // });
  // await View.create({
  //   _id: "65343222b67e9681f937f013",
  //   userId: "65343222b67e9681f937f002",
  //   blogId: "65343222b67e9681f937f008",
  // });

  // const Like = require("../models/like");
  // await Like.deleteMany(); // !!! Clear collection
  // await Like.create({
  //   _id: "65343222b67e9681f937f014",
  //   userId: "65343222b67e9681f937f002",
  //   blogId: "65343222b67e9681f937f005",
  // });
  // await Like.create({
  //   _id: "65343222b67e9681f937f015",
  //   userId: "65343222b67e9681f937f001",
  //   blogId: "65343222b67e9681f937f005",
  // });
  // await Like.create({
  //   _id: "65343222b67e9681f937f016",
  //   userId: "65343222b67e9681f937f001",
  //   blogId: "65343222b67e9681f937f006",
  // });
  // await Like.create({
  //   _id: "65343222b67e9681f937f017",
  //   userId: "65343222b67e9681f937f001",
  //   blogId: "65343222b67e9681f937f009",
  // });

  // const Comment = require("../models/comment");
  // await Comment.deleteMany(); // !!! Clear collection
  // await Comment.create({
  //   _id: "65343222b67e9681f937f018",
  //   userId: "65343222b67e9681f937f002",
  //   blogId: "65343222b67e9681f937f005",
  //   comment: "Test 1 Comment",
  //   bottomcomments: ["65343222b67e9681f937f021", "65343222b67e9681f937f022"],
  // });
  // await Comment.create({
  //   _id: "65343222b67e9681f937f019",
  //   userId: "65343222b67e9681f937f001",
  //   blogId: "65343222b67e9681f937f005",
  //   comment: "Admin 1 Comment",
  //   bottomcomments: ["65343222b67e9681f937f023"],
  // });
  // await Comment.create({
  //   _id: "65343222b67e9681f937f020",
  //   userId: "65343222b67e9681f937f001",
  //   blogId: "65343222b67e9681f937f006",
  //   comment: "Admin 1 Comment",
  //   bottomcomments: [],
  // });

  // const BottomComment = require("../models/bottomcomment");
  // await BottomComment.deleteMany(); // !!! Clear collection
  // await BottomComment.create({
  //   _id: "65343222b67e9681f937f021",
  //   userId: "65343222b67e9681f937f002",
  //   commentId: "65343222b67e9681f937f018",
  //   comment: "Test 1 Bottom Comment",
  // });
  // await BottomComment.create({
  //   _id: "65343222b67e9681f937f022",
  //   userId: "65343222b67e9681f937f001",
  //   commentId: "65343222b67e9681f937f018",
  //   comment: "Admin 1 Bottom Comment",
  // });
  // await BottomComment.create({
  //   _id: "65343222b67e9681f937f023",
  //   userId: "65343222b67e9681f937f001",
  //   commentId: "65343222b67e9681f937f019",
  //   comment: "Admin 11 Bottom Comment",
  // });

  //? End
  console.log("* Synchronized *");
};
