import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import LikeModal from "../../components/blog/modals/LikeModal";
import DeleteModal from "../../components/blog/modals/DeleteModal";
import UpdateModal from "../../components/blog/modals/UpdateModal";
import avatar from "../../assets/icons/avatar.png";
import LoginModal from "../../components/blog/modals/LoginModal";
import "../../assets/styles/detailStyles.css";
import CommentForm from "../../components/comment/forms/CommentForm";
import CommentCard from "../../components/comment/cards/CommentCard";
import { Helmet } from "react-helmet";
import CircularProgress from "@mui/material/CircularProgress";

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
  const { _id, username: name } = useParams();
  const { singleBlog, likes: like } = useSelector((state) => state.blog);
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { getSingleBlog, postBlogLike } = useBlogCalls();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const handleCloseLogin = () => setLoginOpen(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const handleUpdateClose = () => setUpdateOpen(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [seeAnswersCardId, setSeeAnswersCardId] = useState("");
  const [isReplyCardId, setIsReplyCardId] = useState("");
  const [openMenu, setOpenMenu] = useState("");
  const [editComment, setEditComment] = useState("");
  const [loading, setLoading] = useState(true);

  const { username } = userInfo || {};

  const [data, setData] = useState({
    categoryId: singleBlog?.categoryId,
    content: singleBlog?.content,
    isPublish: singleBlog?.isPublish,
    images: singleBlog?.images,
    showFileName: singleBlog?.showFileName,
    title: singleBlog?.title,
  });

  useEffect(() => {
    getSingleBlog(name, _id);
  }, [like]);

  const {
    categoryId,
    comments,
    content,
    createdAt,
    images,
    showFileName,
    likes,
    title,
    userId,
    views,
  } = singleBlog;

  const handleUpdateOpen = () => {
    setData({
      categoryId: singleBlog?.categoryId?._id,
      content: singleBlog?.content,
      isPublish: singleBlog?.isPublish,
      images: singleBlog?.images,
      showFileName: singleBlog?.showFileName,
      title: singleBlog?.title,
    });
    setUpdateOpen(true);
  };

  const blogImage = images?.map((image) => image.slice(1)) || [];
  const isLiked = likes?.some((like) => like.userId?.username === username);

  const handleLike = () => {
    if (username) {
      postBlogLike(_id);
    } else {
      setLoginOpen(true);
    }
  };

  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const likesCount = likes?.length || 0;
  const commentsCount = comments?.length || 0;
  const viewsCount = views?.length || 0;

  return (
    <Container
      maxWidth="md"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 20,
        padding: 2,
        gap: 4,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Blog App${title ? " - " + title : ""}`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {loading || !singleBlog ? (
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
            image={`http://127.0.0.1:8000${blogImage[0]}`}
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
                      ? `http://127.0.0.1:8000${userId.image[0].slice(1)}`
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
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography
              component="div"
              gutterBottom
              dangerouslySetInnerHTML={{ __html: content }}
              className="editor-content"
            />
          </StyledCardContent>

          <Grid
            container
            rowSpacing={2}
            columnSpacing={2}
            justifyContent="center"
          >
            {blogImage?.map((image, index) => {
              const decoder = new TextDecoder("utf-8");
              const fixedString = decoder.decode(
                new TextEncoder().encode(image)
              );

              const rawFileName = fixedString
                .split("/")
                .pop()
                .split(".")[0]
                .replace(/^\d+-/, "");

              const formatTitleCase = (str) =>
                str
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ");

              const fileName = rawFileName.includes("-")
                ? rawFileName.split("-").map(formatTitleCase).join(" - ")
                : formatTitleCase(rawFileName);

              return (
                <Grid key={index} size={{ xs: 12, sm: 6 }}>
                  <CardMedia
                    component="img"
                    alt={`${title} image ${index + 1}`}
                    image={`http://127.0.0.1:8000${image}`}
                    sx={{
                      aspectRatio: "16 / 9",
                      objectFit: "initial",
                    }}
                  />
                  {showFileName && (
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "center", display: "block", mt: 1 }}
                    >
                      {fileName}
                    </Typography>
                  )}
                </Grid>
              );
            })}
          </Grid>

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
                  onClick={handleOpen}
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
            <Box my={2} display="flex" justifyContent="center" gap={2}>
              <button
                className="bg-green-600 text-white font-medium py-2 px-2 rounded-md"
                onClick={handleUpdateOpen}
              >
                Update Blog
              </button>

              <button
                className="bg-red-600 text-white font-medium py-2 px-2 rounded-md"
                onClick={handleDeleteOpen}
              >
                Delete Blog
              </button>
            </Box>
          )}

          <LikeModal open={open} handleClose={handleClose} likes={likes} />
          <LoginModal
            loginOpen={loginOpen}
            handleCloseLogin={handleCloseLogin}
          />

          <UpdateModal
            updateOpen={updateOpen}
            handleUpdateClose={handleUpdateClose}
            setData={setData}
            data={data}
          />
          <DeleteModal
            deleteOpen={deleteOpen}
            handleDeleteClose={handleDeleteClose}
          />
        </>
      )}
    </Container>
  );
}
