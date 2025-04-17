import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BlogLikesModal from "../../components/blog/modals/BlogLikesModal";
import ContentCard from "../../components/content/card/ContentCard";
import ImageBlogModal from "../../components/blog/modals/ImageBlogModal";
import CommentForm from "../../components/comment/forms/CommentForm";
import CommentCard from "../../components/comment/cards/CommentCard";
import UpdateBlogModal from "../../components/blog/modals/UpdateBlogModal";
import AddContentModal from "../../components/content/modal/AddContentModal";
import DeleteMyBlogModal from "../../components/blog/modals/DeleteMyBlogModal";
import LikedBlogCard from "../../components/blog/cards/LikedBlogCard";
import ViewedBlogCard from "../../components/blog/cards/ViewedBlogCard";
import useBlogCalls from "../../hooks/useBlogCalls";
import avatar from "../../assets/icons/avatar.png";

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

export default function MyBlogDetail() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { _id, username: name } = useParams();
  const { username } = userInfo || {};
  const { getSingleBlog, postBlogLike, getBlogsView, getBlogsLike } =
    useBlogCalls();
  const { singleBlog, viewBlogs, likeBlogs } = useSelector(
    (state) => state.blog
  );
  const theme = useTheme();

  const [loading, setLoading] = useState(true);
  const [imageOpen, setImageOpen] = useState(false);
  const [likeOpen, setLikeOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [seeAnswersCardId, setSeeAnswersCardId] = useState("");
  const [isReplyCardId, setIsReplyCardId] = useState("");
  const [openMenu, setOpenMenu] = useState("");
  const [editComment, setEditComment] = useState("");
  const [data, setData] = useState({
    title: singleBlog?.title,
    categoryId: singleBlog?.categoryId?._id,
    image: singleBlog?.image,
    isPublish: singleBlog?.isPublish,
  });

  const {
    categoryId,
    commentsId,
    contentsId,
    createdAt,
    image,
    likesId,
    title,
    userId,
    viewsId,
  } = singleBlog;
  const isLiked = likesId?.some((like) => like.userId?.username === username);
  const likesCount = likesId?.length || 0;
  const commentsCount = commentsId?.length || 0;
  const viewsCount = viewsId?.length || 0;

  const optimizeImage = (url) => {
    if (!url) return "";
    return url.replace("/upload/", "/upload/q_auto,f_auto/");
  };

  useEffect(() => {
    getSingleBlog(name, _id);
    getBlogsView("blogs?sort[viewCount]=desc&limit=4");
    getBlogsLike("blogs?sort[likeCount]=desc&limit=4");
  }, [name, _id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleImageClose = () => setImageOpen(false);
  const handleLikeOpen = () => setLikeOpen(true);
  const handleLikeClose = () => setLikeOpen(false);
  const handleUpdateClose = () => setUpdateOpen(false);
  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  const handleLike = async () => {
    await postBlogLike(_id);
    await getSingleBlog(name, _id);
    await getBlogsLike("blogs?sort[likeCount]=desc&limit=4");
  };

  const handleImageOpen = (imageUrl) => {
    setSelectedImage(imageUrl);
    setImageOpen(true);
  };

  const handleUpdateOpen = () => {
    setData({
      title: singleBlog?.title,
      categoryId: singleBlog?.categoryId?._id,
      image: singleBlog?.image,
      isPublish: singleBlog?.isPublish,
    });
    setUpdateOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 20, mb: 8, gap: 4 }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Köşe Yazısı${title ? " - " + title : ""}`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Grid
        container
        spacing={2}
        sx={{
          paddingX: {
            xs: 2,
            md: 3,
            lg: 4,
            xl: 6,
          },
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "67vh",
              width: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Grid size={{ xs: 12, md: 9 }} sx={{ paddingX: 2 }}>
              <CardMedia
                component="img"
                alt={title}
                image={image && image.length > 0 ? optimizeImage(image[0]) : []}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "90%",
                    md: "85%",
                    lg: "80%",
                    xl: "75%",
                  },
                  margin: "auto",
                  aspectRatio: "16 / 9",
                  objectFit: "initial",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <AvatarGroup>
                    <Avatar
                      key={userId?._id}
                      alt={userId?.username}
                      src={
                        userId?.image && userId.image.length > 0
                          ? optimizeImage(userId.image[0])
                          : avatar
                      }
                      sx={{ width: 30, height: 30 }}
                    />
                  </AvatarGroup>
                  <Typography variant="caption">
                    {userId?.username
                      ? userId.username.charAt(0).toUpperCase() +
                        userId.username.slice(1)
                      : ""}
                  </Typography>
                </Box>
                <Typography variant="caption">
                  {createdAt
                    ? new Date(createdAt).toLocaleDateString("tr-TR")
                    : ""}
                </Typography>
              </Box>

              <StyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                  {categoryId?.name || ""}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="error.main"
                >
                  {title}
                </Typography>
                {contentsId?.map((item, index) => (
                  <div key={index}>
                    <ContentCard
                      item={item}
                      handleImageOpen={handleImageOpen}
                      username={username}
                      userId={userId}
                    />
                  </div>
                ))}
              </StyledCardContent>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  height: "50px",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <FavoriteIcon
                    color={isLiked ? "error" : "inherit"}
                    sx={{ cursor: "pointer" }}
                    onClick={handleLike}
                  />

                  {likesCount > 0 && (
                    <span
                      style={{
                        fontSize: "1.2rem",
                        marginLeft: "2px",
                        cursor: "pointer",
                      }}
                      onClick={handleLikeOpen}
                    >
                      {likesCount}
                    </span>
                  )}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <ChatBubbleOutlineIcon
                    onClick={() => setCommentOpen(!commentOpen)}
                  />
                  {commentsCount > 0 && (
                    <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                      {commentsCount}
                    </span>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "default",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <VisibilityOutlinedIcon />
                  {viewsCount > 0 && (
                    <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                      {viewsCount}
                    </span>
                  )}
                </Box>
              </Box>

              {commentOpen && (
                <>
                  <CommentForm />

                  {commentsId?.map((item) => (
                    <CommentCard
                      key={item._id}
                      {...item}
                      seeAnswersCardId={seeAnswersCardId}
                      setSeeAnswersCardId={setSeeAnswersCardId}
                      isReplyCardId={isReplyCardId}
                      setIsReplyCardId={setIsReplyCardId}
                      openMenu={openMenu}
                      setOpenMenu={setOpenMenu}
                      editComment={editComment}
                      setEditComment={setEditComment}
                    />
                  ))}
                </>
              )}

              {username === userId?.username && (
                <Box mt={2} display="flex" justifyContent="center" gap={2}>
                  <button
                    className="bg-green-600 text-white font-medium py-2 px-2 rounded-md"
                    onClick={handleUpdateOpen}
                  >
                    Update Blog
                  </button>

                  <button
                    className="bg-blue-600 text-white font-medium py-2 px-2 rounded-md"
                    onClick={handleAddOpen}
                  >
                    Add Content
                  </button>

                  <button
                    className="bg-red-600 text-white font-medium py-2 px-2 rounded-md"
                    onClick={handleDeleteOpen}
                  >
                    Delete Blog
                  </button>
                </Box>
              )}

              <UpdateBlogModal
                updateOpen={updateOpen}
                handleUpdateClose={handleUpdateClose}
                setData={setData}
                data={data}
              />

              <AddContentModal
                addOpen={addOpen}
                handleAddClose={handleAddClose}
              />

              <DeleteMyBlogModal
                deleteOpen={deleteOpen}
                handleDeleteClose={handleDeleteClose}
              />

              <BlogLikesModal
                likeOpen={likeOpen}
                handleLikeClose={handleLikeClose}
                likesId={likesId}
              />

              <ImageBlogModal
                imageOpen={imageOpen}
                handleImageClose={handleImageClose}
                selectedImage={selectedImage}
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 12, md: 3 }}
              sx={{
                [theme.breakpoints.up("md")]: {
                  position: "sticky",
                  top: 100,
                  maxHeight: "calc(100vh - 120px)",
                  overflowY: "auto",
                },
              }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Most Liked
              </Typography>

              <Grid
                container
                sx={{
                  [theme.breakpoints.between("sm", "md")]: {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "16px",
                  },
                }}
              >
                {likeBlogs.map((likeBlog) => (
                  <LikedBlogCard key={likeBlog._id} {...likeBlog} />
                ))}
              </Grid>

              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  textAlign: "center",
                  [theme.breakpoints.between("xs", "md")]: {
                    mt: 2,
                  },
                }}
              >
                Most Viewed
              </Typography>

              <Grid
                container
                sx={{
                  [theme.breakpoints.between("sm", "md")]: {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "16px",
                  },
                  mb: 4,
                }}
              >
                {viewBlogs.map((viewBlog) => (
                  <ViewedBlogCard key={viewBlog._id} {...viewBlog} />
                ))}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
