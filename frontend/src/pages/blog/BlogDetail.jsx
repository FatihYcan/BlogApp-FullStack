import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import styled from "@mui/material/styles/styled";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import useBlogCalls from "../../hooks/useBlogCalls";
import BlogLikesModal from "../../components/blog/modals/BlogLikesModal";
import DeleteBlogModal from "../../components/blog/modals/DeleteBlogModal";
import UpdateBlogModal from "../../components/blog/modals/UpdateBlogModal";
import LoginModal from "../../components/blog/modals/LoginModal";
import ImageBlogModal from "../../components/blog/modals/ImageBlogModal";
import CommentForm from "../../components/comment/forms/CommentForm";
import CommentCard from "../../components/comment/cards/CommentCard";
import ContentCard from "../../components/content/card/ContentCard";
import AddContentModal from "../../components/content/modal/AddContentModal";
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

export default function BlogDetail() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { _id, username: name } = useParams();
  const { username } = userInfo || {};
  const { getSingleBlog, postBlogLike } = useBlogCalls();
  const {
    singleBlog,
    likes: like,
    loading,
  } = useSelector((state) => state.blog);

  // const [loading, setLoading] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);
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
    comments,
    contents,
    createdAt,
    image,
    likes,
    title,
    userId,
    views,
  } = singleBlog;
  const isLiked = likes?.some((like) => like.userId?.username === username);
  const likesCount = likes?.length || 0;
  const commentsCount = comments?.length || 0;
  const viewsCount = views?.length || 0;

  useEffect(() => {
    getSingleBlog(name, _id);
  }, [like]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 100);

  //   return () => clearTimeout(timer);
  // }, []);

  const handleCloseLogin = () => setLoginOpen(false);
  const handleImageClose = () => setImageOpen(false);
  const handleLikeOpen = () => setLikeOpen(true);
  const handleLikeClose = () => setLikeOpen(false);
  const handleUpdateClose = () => setUpdateOpen(false);
  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);
  const handleLike = () => {
    username ? postBlogLike(_id) : setLoginOpen(true);
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
    <Container
      maxWidth="md"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: 20,
        gap: 1,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Köşe Yazısı${title ? " - " + title : ""}`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <CardMedia
            component="img"
            alt={title}
            image={
              image && image.length > 0
                ? `https://koseyazisi.onrender.com${image[0].slice(
                    1
                  )}`
                : []
            }
            sx={{
              width: "80%",
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
                      ? `https://koseyazisi.onrender.com${userId.image[0].slice(
                          1
                        )}`
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
              {createdAt ? new Date(createdAt).toLocaleDateString("tr-TR") : ""}
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
            {contents?.map((item, index) => (
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

              {comments?.map((item) => (
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

          <BlogLikesModal
            likeOpen={likeOpen}
            handleLikeClose={handleLikeClose}
            likes={likes}
          />

          <ImageBlogModal
            imageOpen={imageOpen}
            handleImageClose={handleImageClose}
            selectedImage={selectedImage}
          />

          <LoginModal
            loginOpen={loginOpen}
            handleCloseLogin={handleCloseLogin}
          />

          <UpdateBlogModal
            updateOpen={updateOpen}
            handleUpdateClose={handleUpdateClose}
            setData={setData}
            data={data}
          />

          <AddContentModal addOpen={addOpen} handleAddClose={handleAddClose} />

          <DeleteBlogModal
            deleteOpen={deleteOpen}
            handleDeleteClose={handleDeleteClose}
          />
        </>
      )}
    </Container>
  );
}
