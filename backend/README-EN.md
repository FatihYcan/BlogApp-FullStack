# BlogApp-FullStack - Backend

This project contains the backend part of the **BlogApp-FullStack** application, a platform where users can share their blog posts. The project is developed using Node.js, Express.js, and MongoDB.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Express.js**: Minimalist web framework for handling API requests.
- **MongoDB**: NoSQL database.
- **dotenv**: Module for managing environment variables.
- **jsonwebtoken**: JSON Web Token for authentication.
- **mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **crypto**: For encryption and hashing operations.
- **multer**: For handling file uploads.
- **Cloudinary**: For image uploads.
- **cors**: Cross-Origin Resource Sharing (CORS) management.
- **express-async-errors**: For handling asynchronous errors.
- **Swagger** and **Redoc**: For API documentation.
- **swagger-autogen**: Automatic generation of Swagger documentation.
- **Regex-supported search**: Case-insensitive search queries.

---

## Project Features

### Database Connection
- MongoDB connection is established using the `dbConnection` function.
- Connection errors are logged to the console.

### Cloudinary Support
- Cloudinary API integration is available for image uploads.

### Image Upload
- **Multer**: Used for file upload handling.
- **Cloudinary**: Uploaded files are sent to Cloudinary.
- **Supported Formats**
  - JPEG, JPG, PNG, GIF, WEBP.
- **Upload Process**
  - Uploaded file names are fixed (`fixFileName`).
  - Files are temporarily saved before being uploaded to Cloudinary.

### Authentication
- **JWT (Bearer Token)**: `jsonwebtoken` is used for user authentication.
- **Simple Token**: Authentication is performed based on tokens stored in the database `Token` model.

### Authorization
- **isLogin**: Checks if the user is logged in. If not, access is denied.
- **isAdmin**: Checks if the user is an admin. Only users with admin privileges can perform certain operations.

### Global Error Handling
- **ErrorHandler Middleware**
  - All server-side errors are captured by this middleware and meaningful responses are returned.
  - The returned error response includes:
    - `error`: Error status.
    - `message`: Error message.
    - `cause`: Cause of the error.
    - `body`: Data sent with the request.
    - `stack`: Error stack trace.

### Auth Controller (Auth)
- **Login**
  - Login with username or email.
  - Password validation is performed, and a token is generated.
- **Forgot Password**
  - Password reset is performed using username or email.
- **Logout**
  - The token is deleted, and the session is terminated.

### User Model (User)
- **Fields**
  - `username` (String): Unique and required username.
  - `firstName` (String): User's first name, required.
  - `lastName` (String): User's last name, required.
  - `email` (String): User's email address, unique with validation.
  - `password` (String): Password validated against specific criteria and hashed.
  - `image` (Array): User's profile images.
  - `isActive` (Boolean): User's active status.
  - `isAdmin` (Boolean): User's admin status.
- **Password Validation**
  - Must include at least one uppercase letter, one lowercase letter, one number, and one special character.
  - Minimum length of 8 characters.
- **Password Encryption**
  - Passwords are hashed securely using `crypto.pbkdf2Sync` and stored in the database.

### User Controller (Users)
- **List Users (`list`)**
  - Only users with admin privileges can list all users.
  - Non-admin users can view only their own information.
  - Query parameters allow filtering, sorting, searching, and pagination.
- **Create User (`create`)**
  - Creates a new user record.
  - If a profile picture is uploaded, it is sent to Cloudinary.
  - A token is automatically generated upon registration.
- **Read User (`read`)**
  - Logged-in users can view their own information.
  - Admin users can view any user's information.
- **Update User (`update`)**
  - Users can update only their own information.
  - Admin users can update other users' information but cannot modify their own `isAdmin` or `isActive` statuses.
  - If a profile picture is uploaded, it is sent to Cloudinary or saved as an empty array if deleted.
- **Delete User (`delete`)**
  - Users cannot delete their own accounts.
  - Admin users can delete other users' accounts.
  - Blogs associated with the deleted user are also automatically deleted.

### Token Model (Token)
- **Fields**
  - `userId` (ObjectId): User associated with the token.
  - `token` (String): Token value.

### Token Controller (Tokens)
- **List Tokens (`list`)**
  - Lists all token records.
  - Only users with admin privileges can perform this operation.
- **Create Token (`create`)**
  - Creates a new token record.
  - Only users with admin privileges can perform this operation.
- **Read Token (`read`)**
  - Returns details of a specific token record.
  - Only users with admin privileges can perform this operation.
- **Update Token (`update`)**
  - Updates a specific token record.
  - Only users with admin privileges can perform this operation.
- **Delete Token (`delete`)**
  - Deletes a specific token record.
  - Only users with admin privileges can perform this operation.

### Blog Model (Blog)
- **Fields**
  - `categoryId` (ObjectId): Blog's category.
  - `userId` (ObjectId): Blog's author.
  - `commentsId`, `contentsId`, `likesId`, `viewsId`: References to comments, contents, likes, and views associated with the blog.
  - `title` (String): Blog title.
  - `image` (Array): Blog images.
  - `viewCount` and `likeCount` (Number): Total view and like counts.
  - `isPublish` (Boolean): Blog's publication status.

### Blog Controller (Blogs)
- **List Blogs (`list`)**
  - Lists all blog records.
  - Query parameters allow filtering, sorting, searching, and pagination.
- **Create Blog (`create`)**
  - Users can create blogs after logging in.
  - If an image is uploaded, it is sent to Cloudinary.
- **Read Blog (`read`)**
  - Blog details include category, comments, contents, likes, and author information.
  - Blog views are recorded in the `View` model.
- **Update Blog (`update`)**
  - Can only be updated by the author or an admin.
  - Image changes are uploaded to Cloudinary.
- **Delete Blog (`delete`)**
  - Can only be deleted by the author or an admin.
  - Associated contents, views, likes, and comments are also deleted.
- **Like Operations (`getLike`, `postLike`)**
  - **getLike**: Returns whether the user liked the blog and the total like count.
  - **postLike**: Adds or removes a like on the blog.
- **Create Blog ID (`createId`)**
  - Creates a draft blog and returns its ID.

### Category Model (Category)
- **Fields**
  - `name` (String): Category name.

### Category Controller (Categories)
- **List Categories (`list`)**
  - Lists all category records.
  - Query parameters allow filtering, sorting, searching, and pagination.
- **Create Category (`create`)**
  - Admin users can create new categories.
- **Read Category (`read`)**
  - Returns details of a specific category.
- **Update Category (`update`)**
  - Admin users can update categories.
- **Delete Category (`delete`)**
  - Admin users can delete categories.
  - However, categories associated with blogs cannot be deleted.

### Content Model (Content)
- **Fields**
  - `blogId` (ObjectId): Blog associated with the content.
  - `userId` (ObjectId): User who created the content.
  - `content` (String): Content text.
  - `images` (Array): Images associated with the content.

### Content Controller (Contents)
- **List Content (`list`)**
  - Lists all content records.
  - Query parameters allow filtering, sorting, searching, and pagination.
- **Create Content (`create`)**
  - Users can create content for blogs after logging in.
  - Images are uploaded to Cloudinary, and their URLs are saved.
- **Read Content (`read`)**
  - Returns details of specific content.
- **Update Content (`update`)**
  - Can only be updated by the user who created it or an admin.
  - Images can be removed, updated, or added.
- **Delete Content (`delete`)**
  - Can only be deleted by the user who created it or an admin.

### Comment Model (Comment)
- **Fields**
  - `blogId` (ObjectId): Blog associated with the comment.
  - `userId` (ObjectId): User who wrote the comment.
  - `comment` (String): Content of the comment.
  - `bottomCommentsId` (Array): References to sub-comments.

### Comment Controller (Comments)
- **List Comments (`list`)**
  - Lists all comment records.
  - Query parameters allow filtering, sorting, searching, and pagination.
- **Create Comment (`create`)**
  - Users can add comments to blogs after logging in.
  - New comments are added to the `commentsId` field of the associated blog.
- **Read Comment (`read`)**
  - Returns details of a specific comment.
- **Update Comment (`update`)**
  - Can only be updated by the user who created it or an admin.
- **Delete Comment (`delete`)**
  - Can only be deleted by the user who created it or an admin.
  - Deleting a comment also removes it from the `commentsId` field of the associated blog and deletes its sub-comments.

### BottomComment Model (BottomComment)
- **Fields**
  - `commentId` (ObjectId): Main comment associated with the sub-comment.
  - `userId` (ObjectId): User who wrote the sub-comment.
  - `bottomComment` (String): Content of the sub-comment.

### BottomComment Controller (BottomComments)
- **List Sub-Comments (`list`)**
  - Lists all sub-comment records.
  - Query parameters allow filtering, sorting, searching, and pagination.
- **Create Sub-Comment (`create`)**
  - Users can add sub-comments after logging in.
  - New sub-comments are added to the `bottomCommentsId` field of the associated main comment.
- **Read Sub-Comment (`read`)**
  - Returns details of a specific sub-comment.
- **Update Sub-Comment (`update`)**
  - Can only be updated by the user who created it or an admin.
- **Delete Sub-Comment (`delete`)**
  - Can only be deleted by the user who created it or an admin.
  - Deleting a sub-comment also removes it from the `bottomCommentsId` field of the associated main comment.

### Like Model (Like)
- **Fields**
  - `blogId` (ObjectId): Blog associated with the like.
  - `userId` (ObjectId): User who liked the blog.

### Like Controller (Likes)
- **Add or Remove Like**
  - Users can like or unlike blogs.
  - Adding a like adds a reference in the `likesId` field of the associated blog.
- **Get Like Info**
  - Returns the total number of likes and whether the user liked the blog.

### View Model (View)
- **Fields**
  - `blogId` (ObjectId): Blog associated with the view.
  - `userId` (ObjectId): User who viewed the blog.
  - `deviceId` (String): Device ID for anonymous views.

### View Controller (Views)
- **Record View**
  - Each blog view is recorded as a `View` entry.
  - For logged-in users, `userId` is recorded.
  - For anonymous users, `deviceId` is used.

### Documentation Links
- **Swagger and Redoc**
  - API documentation is generated using `swagger.json`.
  - Swagger and Redoc provide different interfaces for viewing API documentation.
- **Documentation URLs**
  - `/documents/json`: API documentation in JSON format.
  - `/documents/redoc`: API documentation via the Redoc interface.
  - `/documents/swagger`: API documentation via the Swagger UI.

### Middleware
- **Authentication Middleware**
  - Verifies session status using the `Authorization` header.
  - Blocks access to certain operations if the user is not logged in.
- **Authorization Middleware**
  - `isLogin`: Ensures the user is logged in.
  - `isAdmin`: Ensures the user has admin privileges.
- **Filtering, Searching, Sorting, and Pagination Middleware**
  - Parameters:
    - `filter`: Filtering queries.
    - `search`: Case-insensitive search.
    - `sort`: Sorting records (default: `createdAt: 'desc'`).
    - `page` and `limit`: Pagination settings.
  - Data fetching is processed using `res.getModelList` and `res.getModelListDetails`.

### Error Management
- Catches all errors using the `errorHandler` middleware and returns them as a response.

**API Documentation**
   - [SWAGGER](https://koseyazisi.onrender.com/documents/swagger/)
   - [REDOC](https://koseyazisi.onrender.com/documents/redoc)
   - [JSON](https://koseyazisi.onrender.com/documents/json)
