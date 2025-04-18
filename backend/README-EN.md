# BlogApp-FullStack - Backend

This project contains the backend of the **BlogApp-FullStack** application, a platform where you can share your blog posts. The project is developed using Node.js, Express.js, and MongoDB.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Express.js**: A minimalist web framework for handling API requests.
- **MongoDB**: NoSQL database.
- **dotenv**: A module for managing environment variables.
- **jsonwebtoken**: JSON Web Token usage for authentication.
- **mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **crypto**: For encryption and hashing operations.
- **multer**: For file upload operations.
- **Cloudinary**: For image uploads.
- **cors**: Cross-Origin Resource Sharing (CORS) management.
- **express-async-errors**: To handle asynchronous errors.
- **Swagger** and **Redoc**: For API documentation.
- **swagger-autogen**: Automatic generation of Swagger documentation.
- **Regex-based search**: Case-insensitive search queries.

---

## Project Features

### Database Connection
- MongoDB connection is established through the `dbConnection` function.
- Connection errors are logged to the console.

### Cloudinary Support
- Cloudinary API integration for image uploads.

### Image Upload
- **Multer**: Used for file upload operations.
- **Cloudinary**: Uploaded files are sent to Cloudinary.
- **Supported Formats**
  - JPEG, JPG, PNG, GIF, WEBP.
- **Upload Process**
  - Uploaded file names are sanitized (`fixFileName`).
  - Files are temporarily stored and then uploaded to Cloudinary.

### Authentication
- **JWT (Bearer Token)**: `jsonwebtoken` is used for user authentication.
- **Simple Token**: Authentication is performed based on tokens stored in the database using the `Token` model.

### Authorization
- **isLogin**: Checks if the user is logged in. Access is denied if the user is not logged in.
- **isAdmin**: Checks if the user is an admin. Only admin users can perform certain actions.

### Global Error Handling
- **ErrorHandler Middleware**
  - All server-side errors are caught and meaningful responses are returned using this middleware.
  - The returned error response includes:
    - `error`: The error status.
    - `message`: The error message.
    - `cause`: The cause of the error.
    - `body`: Data sent with the request.
    - `stack`: Error stack trace. 

### Auth Controller (Auth)
- **Login**
  - Login is performed using a username or email.
  - Password validation is performed, and a token is generated.
- **Forgot Password**
  - Password reset is performed using username or email.
- **Logout**
  - The token is deleted, and the session is terminated.
  
### User Model (User)
- **Fields**
  - `username` (String): Username, unique and required.
  - `firstName` (String): User's first name, required.
  - `lastName` (String): User's last name, required.
  - `email` (String): User's email address, unique and validated.
  - `password` (String): Password is validated with specific rules and encrypted.
  - `image` (Array): User images.
  - `isActive` (Boolean): User's active status.
  - `isAdmin` (Boolean): User's admin status.
- **Password Validation**
  - Must include at least one uppercase letter, one lowercase letter, one number, and one special character.
  - Minimum length of 8 characters.
- **Encryption**
  - Passwords are hashed using `crypto.pbkdf2Sync` and securely stored in the database.

### User Controller (Users)
- **Listing (`list`)**
  - Only users with admin privileges can list all users.
  - Non-admin users can only view their own information.
  - Filtering, sorting, searching, and pagination can be performed using query parameters.
- **Creating User (`create`)**
  - A new user record is created.
  - If a profile picture is uploaded, it is sent to Cloudinary.
  - Upon creation, the user is automatically logged in, and a token is generated.
- **Reading User (`read`)**
  - Logged-in users can only view their own information.
  - Admin users can view any user's information.
- **Updating User (`update`)**
  - Users can only update their own information.
  - Admin users can update other users' information but cannot change their own `isAdmin` and `isActive` statuses.
  - If a profile picture is uploaded, it is sent to Cloudinary, or if deleted, it is saved as an empty array.
- **Deleting User (`delete`)**
  - Users cannot delete their own accounts.
  - Admin users can delete other users' accounts.
  - Blogs associated with the deleted user are also automatically deleted. 

### Token Model (Token)
- **Fields**
  - `userId` (ObjectId): User associated with the token.
  - `token` (String): Token value.

### Token Controller (Tokens)
- **Listing (`list`)**
  - Lists all token records.
  - Only users with admin privileges can perform this action.
- **Creating Token (`create`)**
  - Creates a new token record.
  - Only users with admin privileges can perform this action.
- **Reading Token (`read`)**
  - Returns the details of a specific token record.
  - Only users with admin privileges can perform this action.
- **Updating Token (`update`)**
  - Updates a specific token record.
  - Only users with admin privileges can perform this action.
- **Deleting Token (`delete`)**
  - Deletes a specific token record.
  - Only users with admin privileges can perform this action.

### Blog Model (Blog)
- **Fields**
  - `categoryId` (ObjectId): Category of the blog.
  - `userId` (ObjectId): Author of the blog.
  - `commentsId`, `contentsId`, `likesId`, `viewsId`: Comments, contents, likes, and views associated with the blog.
  - `title` (String): Blog title.
  - `image` (Array): Blog images.
  - `viewCount` and `likeCount` (Number): Total views and likes of the blog.
  - `isPublish` (Boolean): Blog's publication status.

### Blog Controller (Blogs)
- **Listing (`list`)**
  - Filtering, sorting, searching, and pagination can be performed using query parameters.
- **Creating Blog (`create`)**
  - Users can create a blog after logging in.
  - If an image is uploaded while creating the blog, it is sent to Cloudinary.
- **Updating Blog (`update`)**
  - Only the author of the blog or admin can update it.
  - Image changes are updated by uploading them to Cloudinary.
- **Deleting Blog (`delete`)**
  - Contents, views, likes, and comments associated with the blog are also deleted.
- **Reading Blog (`read`)**
  - Blog details include category, comments, content, likes, and author information.
  - Viewing the blog is recorded using the `View` model.
- **Like Operations (`getLike`, `postLike`)**
  - **getLike**: Returns whether the user has liked the blog and the total like count.
  - **postLike**: Adds or removes a like for the blog.
- **Creating Blog ID (`createId`)**
  - Creates a draft blog and returns its ID.

### Category Model (Category)
- **Fields**
  - `name` (String): Category name.

### Category Controller (Categories)
- **Listing (`list`)**
  - Filtering, sorting, searching, and pagination can be performed using query parameters.
- **Creating Category (`create`)**
  - Admin users can create new categories.
- **Reading Category (`read`)**
  - Returns the details of a specific category.
- **Updating Category (`update`)**
  - Admin users can update categories.
- **Deleting Category (`delete`)**
  - Admin users can delete categories.
  - Categories with associated blogs cannot be deleted.

### Content Model (Content)
- **Fields**
  - `blogId` (ObjectId): Blog associated with the content.
  - `userId` (ObjectId): User who created the content.
  - `content` (String): Content text.
  - `images` (Array): Images associated with the content.

### Content Controller (Contents)
- **Listing (`list`)**
  - Filtering, sorting, searching, and pagination can be performed using query parameters.
- **Creating Content (`create`)**
  - Users can create content for blogs after logging in.
  - Images are uploaded to Cloudinary, and their URLs are saved.
- **Reading Content (`read`)**
  - Returns the details of a specific content.
- **Updating Content (`update`)**
  - Only the user who created the content or admin can update it.
  - While updating images, existing images can be deleted, new images can be added, or they can be used together with existing ones.
- **Deleting Content (`delete`)**
  - Only the user who created the content or admin can delete it.

### Comment Model (Comment)
- **Fields**
  - `blogId` (ObjectId): Blog associated with the comment.
  - `userId` (ObjectId): User who wrote the comment.
  - `comment` (String): Comment text.
  - `bottomCommentsId` (Array): References to sub-comments.

### Comment Controller (Comments)
- **Listing (`list`)**
  - Filtering, sorting, searching, and pagination can be performed using query parameters.
- **Creating Comment (`create`)**
  - Users can add comments to blogs after logging in.
  - When a new comment is created, it is added to the `commentsId` field of the relevant blog.
- **Reading Comment (`read`)**
  - Returns the details of a specific comment.
- **Updating Comment (`update`)**
  - Only the user who wrote the comment or admin can update it.
- **Deleting Comment (`delete`)**
  - Only the user who wrote the comment or admin can delete it.
  - Deleted comments are removed from the `commentsId` field of the relevant blog, and their sub-comments are also deleted.

### Bottom Comment Model (BottomComment)
- **Fields**
  - `commentId` (ObjectId): Parent comment associated with the sub-comment.
  - `userId` (ObjectId): Author of the sub-comment.
  - `bottomComment` (String): Text of the sub-comment.

### Bottom Comment Controller (BottomComments)
- **Listing (`list`)**
  - Filtering, sorting, searching, and pagination can be performed using query parameters.
- **Creating Bottom Comment (`create`)**
  - Users can create sub-comments after logging in.
  - When a new sub-comment is created, it is added to the `bottomCommentsId` field of the relevant parent comment.
- **Reading Bottom Comment (`read`)**
  - Returns the details of a specific sub-comment.
- **Updating Bottom Comment (`update`)**
  - Only the user who wrote the sub-comment or admin can update it.
- **Deleting Bottom Comment (`delete`)**
  - Only the user who wrote the sub-comment or admin can delete it.
  - Deleted sub-comments are also removed from the `bottomCommentsId` field of the relevant parent comment.

### Like Model (Like)
- **Fields**
  - `blogId` (ObjectId): Blog associated with the like.
  - `userId` (ObjectId): User who liked the blog.

### Like Controller (Likes)
- **Adding or Removing Likes**
  - Likes can be added to or removed from blogs.
  - When a user likes a blog, a reference is added to the `likesId` field of the relevant blog.
- **Getting Like Information**
  - Returns the total number of likes for a blog and whether it has been liked by the user.

### View Model (View)
- **Fields**
  - `blogId` (ObjectId): Blog associated with the view.
  - `userId` (ObjectId): User who viewed the blog.
  - `deviceId` (String): Device ID for anonymous views.

### View Controller (Views)
- **Recording Views**
  - A `View` record is created every time a blog is viewed.
  - For logged-in users, the `userId` is recorded.
  - For non-logged-in users, `deviceId` is used to record anonymous views.

### Documentation Guidelines (Documents)
- **Swagger and Redoc**:
  - The `swagger.json` file is used for Swagger and Redoc documentation.
  - Swagger and Redoc provide different user interfaces for easily viewing API documentation.
- **Documentation URLs**:
  - `/documents/json`: JSON format of the API documentation.
  - `/documents/redoc`: API documentation through the Redoc interface.
  - `/documents/swagger`: API documentation through the Swagger UI.

### Middleware
- **Authentication Middleware**:
  - Session control is performed via the `Authorization` value in the header.
  - Access to certain actions is denied if the user is not logged in.
- **Authorization Middleware**:
  - `isLogin`: Verifies that the user is logged in.
  - `isAdmin`: Verifies that the user has admin privileges.
- **Filtering, Searching, Sorting, and Pagination Middleware**:
  - Parameters:
    - `filter`: Filtering queries.
    - `search`: Case-insensitive search.
    - `sort`: Sorting records (default: `createdAt: 'desc'`).
    - `page` and `limit`: Pagination settings.
  - Querying data by model using `res.getModelList` and `res.getModelListDetails` functions.

### Error Management
- All errors are captured and returned as a response using the `errorHandler` middleware.

**API Documentation**
   - [SWAGGER](https://koseyazisi.onrender.com/documents/swagger/)
   - [REDOC](https://koseyazisi.onrender.com/documents/redoc)
   - [JSON](https://koseyazisi.onrender.com/documents/json)