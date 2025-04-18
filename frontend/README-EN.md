# BlogApp-FullStack - Frontend

This project contains the frontend of the **BlogApp-FullStack** application, a platform where you can share your blog posts. It is developed using modern web technologies and aims to provide a user-friendly experience.

## Technologies Used

- **React**: For user interface development.
- **Redux Toolkit**: For global state management and slice configurations.
- **Redux Persist**: For session data management.
- **Material-UI (MUI)**: Advanced React components.
- **React-Toastify**: For user notifications.
- **React Router**: For routing.
- **MUI Theme Customization**: For theme and component customizations.
- **Formik and Yup**: For form management and validation.
- **Axios**: Customized API clients for HTTP requests.
- **React-Quill**: Rich text editor.
- **Emoji Mart**: Emoji picker support.
- **React Helmet**: To dynamically manage `<head>` content like page titles and meta tags.
- **Tailwind CSS**: Utility-first CSS framework for quick and flexible styling.

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
  - Multipart data API calls.

- **useAuthCalls Hook**
  - Login.
  - Register.
  - Forgot Password.
  - Logout.

- **useBlogCalls Hook**
  - Listing all blogs (`getAllBlogs`).
  - Paginated and filtered blog listing (`getBlogs`).
  - Listing most viewed blogs (`getBlogsView`).
  - Listing most liked blogs (`getBlogsLike`).
  - Fetching a single blog in detail (`getSingleBlog`).
  - Creating blogs (`postBlogId` and `postBlog`).
  - Updating blogs (`putBlog`).
  - Deleting blogs (`deleteBlog`).
  - Liking blogs (`postBlogLike`).
  - Listing all blogs of the user (`getAllUserBlog` and `getUserBlog`).

- **useContentCalls Hook**
  - Adding content (`postContent`).
  - Updating content (`putContent`).
  - Deleting content (`deleteContent`).

- **useCommentCalls Hook**
  - Adding comments (`postComment`).
  - Updating comments (`putComment`).
  - Deleting comments (`deleteComment`).

- **useBottomCommentCalls Hook**
  - Adding sub-comments (`postBottomComment`).
  - Updating sub-comments (`putBottomComment`).
  - Deleting sub-comments (`deleteBottomComment`).

- **useCategoryCalls Hook**
  - Listing categories (`getCategories`).
  - Adding categories (`postCategory`).
  - Updating categories (`putCategory`).
  - Deleting categories (`deleteCategory`).

- **useUserCalls Hook**
  - Listing users (`getUsers`).
  - Fetching a single user (`getSingleUser`).
  - Updating users (`putUser` and `putMyUser`).
  - Deleting users (`deleteUser`).

- **Slices**
  - authSlice.
  - blogSlice.
  - contentSlice.
  - commentSlice.
  - bottomCommentSlice.
  - categorySlice.
  - userSlice.

- Navigation between pages with **React Router**.

- Automatic scroll to the top during page transitions with **ScrollToTop**.

- Integration of a text editor using **React-Quill**.

- Emoji picker integration with **Emoji-Mart**.

- Stylish and fast design with **Tailwind CSS**.
  - Dark mode support using `darkMode: "class"`.
  - Global application styles with Tailwind's **base**, **components**, and **utilities**.

- Common components like **Navbar.jsx** and **Footer.jsx**.
  - **Footer.jsx**: Includes social media links (GitHub, LinkedIn, and Email) and copyright information.

### Navbar Component
- **Drawer (Menu)**: Drop-down menu support for mobile devices.
- **ColorModeIconDropdown.jsx**: Component to toggle between light and dark themes.
- **LoginModal.jsx**: User-friendly modal that enforces login for operations like creating blogs.
- **LoginForm.jsx**: User login form.
- Form management and validation with **Formik**.
- Validation schemas with **Yup**.
- **ForgotPasswordForm.jsx**: User-friendly modal form for password reset.

### Blogs Component
- **BlogCardSkeleton.jsx**: Skeleton screen during loading.
- **BlogCard.jsx**: Displays blog details and allows actions to be performed.
- **LoginModal.jsx**: Enforces login for actions like creating blogs.
- **BlogLikesModal.jsx**: Modal to list blog likes.
- **MostLikedBlogCard.jsx**: Displays most liked blogs.
- **MostViewedBlogCard.jsx**: Displays most viewed blogs.

### BlogDetail Component
- Displays and manages the details of a single blog.
- Like the blog, add comments, and track views.
- Update and delete blogs or add content.
- List most liked and most viewed blogs.
- Manage blog content, comments, and sub-comments.
- Includes modals and forms for various actions:
  - **UpdateBlogModal.jsx** and **UpdateBlogForm.jsx**: Update blog operations.
  - **AddContentModal.jsx** and **AddContentForm.jsx**: Add content to blogs.
  - **TextEditor.jsx**: Rich text editor for blog content.
  - **DeleteBlogModal.jsx**: Modal for blog deletion.
  - **ImageBlogModal.jsx**: Modal for enlarging and optimizing blog images.
  - **CommentForm.jsx**: Form to add comments to blogs.
  - **CommentCard.jsx**: Card to display blog comments.
  - **EditCommentForm.jsx**: Form to edit comments.
  - **BottomCommentForm.jsx**: Form to add sub-comments to comments.
  - **BottomCommentCard.jsx**: Card to display sub-comments.
  - **EditBottomCommentForm.jsx**: Form to edit sub-comments.
  - **CommentBottomForm.jsx**: Form to add sub-comments to sub-comments.

### Users Component
- **UserCardSkeleton.jsx**: Skeleton screen during loading.
- **UsersCard.jsx**: Displays user details and actions.

### UserDetail Component
- Displays and manages details of a single user.
- Update and delete user information:
  - **UpdateUserModal.jsx**: Modal for user updates.
  - **DeleteUserModal.jsx**: Modal for user deletion.

### NewCategory Component
- **NewCategoryForm.jsx**: Form to add a new category.

### Categories Component
- **CategoryCard.jsx**: Displays category information and actions.
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
  - **UserBlogCard.jsx**: Displays blog details and actions.
  - **BlogLikesModal.jsx**: Modal to list blog likes.

### MyBlogDetail Component
- Displays and manages the details of a single user-authored blog.
- Blog content and comment management.
- Includes:
  - **UpdateMyBlogModal.jsx**: Modal for blog updates.
  - **AddContentModal.jsx** and **AddContentForm.jsx**: Add content to blogs.
  - **DeleteMyBlogModal.jsx**: Modal for blog deletion.

### Profile Component
- Lists and displays user profile information.
- Includes:
  - **ProfileCardSkeleton.jsx**: Skeleton screen during loading.
  - **ProfileCard.jsx**: Displays profile details and actions.
  - **UpdateMyUserModal.jsx**: Modal for profile updates.

### Login Component
- **LoginForm.jsx**: Form for user login.
- Includes password reset modal.

### Register Component
- **RegisterForm.jsx**: Form for user registration.
- Includes validation with **Formik** and **Yup**.