# BlogApp-FullStack - Frontend

This project contains the frontend of the **BlogApp-FullStack** application, a platform where you can share your blog posts. The project is developed using modern web technologies and aims to provide a user-friendly experience.

## Technologies Used

- **React**: For user interface development.
- **Redux Toolkit**: For global state management and slice configurations.
- **Redux Persist**: For session data management.
- **Material-UI (MUI)**: Advanced React components.
- **React-Toastify**: For user notifications.
- **React Router**: For routing operations.
- **MUI Theme Customization**: For theme and component customizations.
- **Formik and Yup**: For form management and validation.
- **Axios**: Customized API clients for HTTP requests.
- **React-Quill**: Rich text editor.
- **Emoji Mart**: Emoji picker support.
- **React Helmet**: For dynamically managing `<head>` content like page titles and meta tags.
- **Tailwind CSS**: A utility-first CSS framework for quick and flexible styling.

---

## Project Features

- A user interface built with **React**.

- Robust and easy state management with **Redux Toolkit**.

- Session data persistence with **Redux Persist** (using `Session Storage`).

- Modern and customizable design with **Material-UI (MUI)**.

- User notifications with **React Toastify**.

- Responsive design adaptable to all devices.

- Theme customizations supporting both light and dark modes.

- **useAxios Hook**
  - Public API calls.
  - Token-required API calls.
  - API calls containing multipart data.

- **useAuthCalls Hook**
  - Login (`Login`)
  - Register (`Register`)
  - Reset Password (`Forgot Password`)
  - Logout (`Logout`)

- **useBlogCalls Hook**
  - List all blogs (`getAllBlogs`).
  - List blogs with pagination and filtering (`getBlogs`).
  - List most viewed blogs (`getBlogsView`).
  - List most liked blogs (`getBlogsLike`).
  - Get a single blog in detail (`getSingleBlog`).
  - Create blogs (`postBlogId` and `postBlog`).
  - Update blogs (`putBlog`).
  - Delete blogs (`deleteBlog`).
  - Like blogs (`postBlogLike`).
  - List all blogs of a user (`getAllUserBlog` and `getUserBlog`).

- **useContentCalls Hook**
  - Add content (`postContent`).
  - Update content (`putContent`).
  - Delete content (`deleteContent`).

- **useCommentCalls Hook**
  - Add comments (`postComment`).
  - Update comments (`putComment`).
  - Delete comments (`deleteComment`).

- **useBottomCommentCalls Hook**
  - Add sub-comments (`postBottomComment`).
  - Update sub-comments (`putBottomComment`).
  - Delete sub-comments (`deleteBottomComment`).

- **useCategoryCalls Hook**
  - List categories (`getCategories`).
  - Add categories (`postCategory`).
  - Update categories (`putCategory`).
  - Delete categories (`deleteCategory`).

- **useUserCalls Hook**
  - List users (`getUsers`).
  - Get a single user (`getSingleUser`).
  - Update users (`putUser` and `putMyUser`).
  - Delete users (`deleteUser`).

- **Slices**
  - **authSlice**: State management for authentication processes.
  - **blogSlice**: Operations and state management related to blogs.
  - **contentSlice**: Adding, updating, and deleting blog content.
  - **commentSlice**: Adding, editing, and deleting comments.
  - **bottomCommentSlice**: Sub-comment management.
  - **categorySlice**: Creating, editing, and deleting categories.
  - **userSlice**: Managing user information and operation states.

- Navigation between pages using **React Router**.

- Automatic scrolling to the top during page transitions with **ScrollToTop**.

- Integration of a rich text editor using **React-Quill**.

- Emoji picker integration with **Emoji-Mart**.

- Stylish and fast design with **Tailwind CSS**.
  - Dark mode support using `darkMode: "class"`.
  - Global application styles with Tailwind's **base**, **components**, and **utilities**.

- Common components like **Navbar.jsx** and **Footer.jsx**.
  - **Footer.jsx**: Includes social media links (GitHub, LinkedIn, and Email) and copyright information.

### Navbar Component
- **Drawer (Menu)**: Dropdown menu support for mobile devices.
- **ColorModeIconDropdown.jsx**: Component for toggling between light and dark themes.
- **LoginModal.jsx**: User-friendly modal that enforces login for operations like creating blogs.
- **LoginForm.jsx**: User login form.
- Form management and validation using **Formik** and **Yup**.
- **ForgotPasswordForm.jsx**: User-friendly modal form for password reset.

### Blogs Component
- **BlogCardSkeleton.jsx**: Skeleton screen during loading.
- **BlogCard.jsx**: Displays blog details and allows actions to be performed.
- **LoginModal.jsx**: Enforces login for actions like creating blogs.
- **LoginForm.jsx**: User login form.
- Form management and validation using **Formik** and **Yup**.
- **ForgotPasswordForm.jsx**: User-friendly modal form for password reset.
- **BlogLikesModal.jsx**: Modal to list blog likes.
- **MostLikedBlogCard.jsx**: Displays most liked blogs.
- **MostViewedBlogCard.jsx**: Displays most viewed blogs.

### BlogDetail Component
- Displays and manages the details of a single blog.
- Blog liking, commenting, and viewing operations.
- Blog updating, deleting, or adding content.
- List most liked and most viewed blogs.
- Manage blog content, comments, and sub-comments.
- Includes modals and forms for various operations:
  - **LoginModal.jsx**: Enforces login for actions like creating blogs.
  - **LoginForm.jsx**: User login form.
  - Form management and validation using **Formik** and **Yup**.
  - **ForgotPasswordForm.jsx**: User-friendly modal form for password reset.
  - **BlogLikesModal.jsx**: Modal to list blog likes.
  - **ContentCard.jsx**: Displays blog content and allows editing/deleting operations.
  - **UpdateContentModal.jsx** and **UpdateContentForm.jsx**: Modals and forms for updating blog content.
  - **TextEditor.jsx**: Rich text editor for blog content.
  - **DeleteContentModal.jsx**: Modal for deleting blog content.
  - **ImageBlogModal.jsx**: Modal to enlarge and optimize blog images.
  - **CommentForm.jsx**: Form to add comments to blogs.
  - **CommentCard.jsx**: Card for displaying blog comments.
  - **EditCommentForm.jsx**: Form for editing comments.
  - **BottomCommentForm.jsx**: Form to add sub-comments to comments.
  - **BottomCommentCard.jsx**: Card for displaying sub-comments.
  - **EditBottomCommentForm.jsx**: Form for editing sub-comments.
  - **CommentBottomForm.jsx**: Form to add sub-comments to sub-comments.
  - **UpdateBlogModal.jsx** and **UpdateBlogForm.jsx**: For blog updating operations.
  - **AddContentModal.jsx** and **AddContentForm.jsx**: For adding content to blogs.
  - **DeleteBlogModal.jsx**: Modal for blog deletion.
  - **LikedBlogCard.jsx**: Displays liked blogs.
  - **ViewedBlogCard.jsx**: Displays viewed blogs.

### Users Component
- **UserCardSkeleton.jsx**: Skeleton screen during loading.
- **UsersCard.jsx**: Displays user details and allows actions to be performed.

### UserDetail Component
- Displays and manages the details of a single user.
- User updating and deletion:
  - **UpdateUserModal.jsx**: Modal for user updating.
  - **DeleteUserModal.jsx**: Modal for user deletion.

### NewCategory Component
- **NewCategoryForm.jsx**: Form to add a new category.

### Categories Component
- **CategoryCard.jsx**: Displays category information and allows actions.
- **UpdateCategoryModal.jsx**: Modal for category updates.
- **DeleteCategoryModal.jsx**: Modal for category deletion.

### NewBlog Component
- **NewBlogForm.jsx**: Form to add a new blog.
- **ContentForm.jsx**: Form to add blog content.
- **TextEditor.jsx**: Rich text editor for blog content.

### About Component
- Provides information about the platform's purpose, vision, and user experience.

### MyBlogs Component
- Lists and manages blogs written by the user.
- Includes:
  - **BlogCardSkeleton.jsx**: Skeleton screen during loading.
  - **UserBlogCard.jsx**: Displays blog details and allows actions to be performed.
  - **BlogLikesModal.jsx**: Modal to list blog likes.

### MyBlogDetail Component
- Displays and manages the details of a single user-authored blog.
- Blog liking, commenting, and viewing operations.
- Blog updating, deleting, or adding content.
- List most liked and most viewed blogs.
- Manage blog content, comments, and sub-comments.
- Includes modals and forms for various operations:
  - **BlogLikesModal.jsx**: Modal to list blog likes.
  - **ContentCard.jsx**: Displays blog content and allows editing/deleting operations.
  - **UpdateContentModal.jsx** and **UpdateContentForm.jsx**: Modals and forms for updating blog content.
  - **TextEditor.jsx**: Rich text editor for blog content.
  - **DeleteContentModal.jsx**: Modal for deleting blog content.
  - **ImageBlogModal.jsx**: Modal to enlarge and optimize blog images.
  - **CommentForm.jsx**: Form to add comments to blogs.
  - **CommentCard.jsx**: Card for displaying blog comments.
  - **EditCommentForm.jsx**: Form for editing comments.
  - **BottomCommentForm.jsx**: Form to add sub-comments to comments.
  - **BottomCommentCard.jsx**: Card for displaying sub-comments.
  - **EditBottomCommentForm.jsx**: Form for editing sub-comments.
  - **CommentBottomForm.jsx**: Form to add sub-comments to sub-comments.
  - **UpdateBlogModal.jsx** and **UpdateBlogForm.jsx**: For blog updating operations.
  - **AddContentModal.jsx** and **AddContentForm.jsx**: For adding content to blogs.
  - **DeleteBlogModal.jsx**: Modal for blog deletion.
  - **LikedBlogCard.jsx**: Displays liked blogs.
  - **ViewedBlogCard.jsx**: Displays viewed blogs.

### Profile Component
- Lists and displays user profile information.
- Includes:
  - **ProfileCardSkeleton.jsx**: Skeleton screen during loading.
  - **ProfileCard.jsx**: Displays profile details and allows actions to be performed.
  - **UpdateMyUserModal.jsx**: Modal for profile updates.

### Login Component
- **LoginForm.jsx**: Form for user login.
- Form management and validation using **Formik** and **Yup**.
- **ForgotPasswordForm.jsx**: User-friendly modal form for password reset.

### Register Component
- **RegisterForm.jsx**: Form for user registration.
- Validation using **Formik** and **Yup**.
