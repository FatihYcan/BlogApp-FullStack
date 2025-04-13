# Blog API

This project provides a backend API service for a blog application. The project is developed using Node.js, Express.js, and MongoDB.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Express.js**: Minimalist web framework for managing API requests.
- **MongoDB**: NoSQL database.
- **dotenv**: Module for managing environment variables.
- **jsonwebtoken**: JSON Web Token for authentication
- **mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **crypto**: For encryption and hashing operations.
- **multer**: For file uploads.
- **Cloudinary**: For image uploads.
- **cors**: For Cross-Origin Resource Sharing (CORS) management.
- **express-async-errors**: For managing asynchronous errors.
- **Swagger** ve **Redoc**: For API documentation
- **swagger-autogen**: For automatic Swagger generation. 
- **regex destekli arama**: Case-insensitive search queries.

---

## Project Features

### Database Connection
- MongoDB connection is established via the dbConnection function.
- Connection errors are logged to the console.

### Cloudinary Support
- Cloudinary API integration is available for image uploads.

### Image Upload
- **Multer**: Used for file upload operations.
- **Cloudinary**: Uploaded files are sent to Cloudinary.
- **Supported Formats**:
  - JPEG, JPG, PNG, GIF, WEBP.
- **Upload Process**:
  - The uploaded filename is formatted (`fixFileName`).
  - The file is temporarily saved and then uploaded to Cloudinary..

### Authentication
- **JWT (Bearer Token)**: `jsonwebtoken` is used for user authentication.
- **Simple Token**:  Authentication is performed based on tokens stored in the `Token` model.

### Authorization
- **isLogin**: Checks if the user is logged in. Access is denied if the user is not logged in.
- **isAdmin**: Checks if the user is an admin. Only users with admin privileges can perform certain operations.

### Global Error Handling
- **ErrorHandler Middleware**:
  - All server-side errors are caught by this middleware and returned with a meaningful response.
  - The error response includes:
    - `error`: Error status.
    - `message`: Error message.
    - `cause`: Cause of the error.
    - `body`: Data sent with the request.
    - `stack`: Error stack trace.

### Auth Controller (Auth)
- **Login**:
  - Users can log in using their username or email.
  - Password verification is performed, and a token is generated.
- **Forgot Password**:
  - Password reset is performed using the username or email.
- **Logout**:
  - The token is deleted, and the session is terminated.
  
### User Model (User)
- **Fields**:
  - `username` (String): Unique and required.
  - `firstName` (String): Required.
  - `lastName` (String): Required.
  - `email` (String): Unique and validated.
  - `password` (String): Validated and encrypted.
  - `image` (Array): User images.
  - `isActive` (Boolean): User activity status.
  - `isAdmin` (Boolean): Admin status.
- **Password Validation**:
  - Must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.
  - Minimum length of 8 characters.
- **Şifreleme**:
  - Passwords are hashed using `crypto.pbkdf2Sync` and stored securely in the database.

### User Controller (Users)
#### Listing  (`list`)
- Only users with admin privileges can list all users..
- Non-admin users can only view their own information.
- Filtering, sorting, searching, and pagination are supported via query parameters.

#### User Creation (`create`)
- Creates a new user record.
- If a profile picture is uploaded, it is uploaded to Cloudinary.
- Upon creation, the user is automatically logged in, and a token is generated.

#### User Reading (`read`)
- Only logged-in users can view their own information.
- Users with admin privileges can view any user's details.

#### User Update (`update`)
- Users can only update their own information.
- Admin users can update other users' information but cannot modify their own `isAdmin` and `isActive` status.
- If a profile picture is uploaded, it is uploaded to Cloudinary. If deleted, it is saved as an empty array.

#### User Deletion (`delete`)
- Users cannot delete their own accounts.
- Admin users can delete other users' accounts.
- Blogs belonging to the deleted user are also automatically deleted. 

### Token Model (Token)
- **Fields**:
  - `userId` (ObjectId): The user associated with the token.
  - `token` (String): The token value.

### Token Controller (Tokens)
#### Listing (`list`)
- Lists all token records.
- Only users with admin privileges can perform this operation.

#### Token Creation (`create`)
- Creates a new token record.
- Only users with admin privileges can perform this operation.

#### Token Reading (`read`)
- Returns details of a specific token record.
- Only users with admin privileges can perform this operation.

#### Token Update (`update`)
- Updates a specific token record.
- Only users with admin privileges can perform this operation.

#### Token Deletion (`delete`)
- Deletes a specific token record.
- Only users with admin privileges can perform this operation.

### Blog Model (Blog)
- **Fields**:
  - `categoryId` (ObjectId): The blog's category.
  - `userId` (ObjectId): The blog's author.
  - `commentsId`, `contentsId`, `likesId`, `viewsId`: References to the blog's comments, contents, likes, and views.
  - `title` (String): Blog title.
  - `image` (Array): Blog images.
  - `viewCount` ve `likeCount` (Number): Total views and likes for the blog.
  - `isPublish` (Boolean): Blog publication status.

### Blog Controller (Blogs)
#### Listing (`list`)
- Filtering, sorting, searching, and pagination are supported via query parameters.

#### Blog Creation , (`create`)
- Users can create blogs after logging in.
- If an image is uploaded during creation, it is uploaded to Cloudinary.

#### Blog Update (`update`)
- Only the blog author or admin can update the blog.
- Image changes are uploaded to Cloudinary.

#### Blog Deletion (`delete`)
- Contents, views, likes, and comments associated with the blog are also deleted..

#### Blog Reading (`read`)
- Blog details include category, comments, content, likes, and author information.
- User views are recorded in the `View` model.

#### Like Operations (`getLike`, `postLike`)
- **getLike**: Returns whether the user has liked the blog and the total number of likes.
- **postLike**: Adds or removes a like for the blog.

#### Blog ID Creation (`createId`)
- Creates a draft blog and returns its ID.

### Category Model (Category)
- **Fields**:
  - `name` (String): Category name.

### Category Controller (Categories)
#### Listing (`list`)
- Filtering, sorting, searching, and pagination are supported via query parameters.

#### Category Creation (`create`)
- Only users with admin privileges can create new categories.

#### Category Reading (`read`)
- Returns details of a specific category.

#### Category Update (`update`)
- Only users with admin privileges can update categories.

#### Category Deletion (`delete`)
- Only users with admin privileges can delete categories.
- If the category has associated blogs, it cannot be deleted.

### Content Model (Content)
- **Fields**:
  - `blogId` (ObjectId): The blog the content belongs to.
  - `userId` (ObjectId): The user who created the content.
  - `content` (String): The content text.
  - `images` (Array): Images associated with the content.

### Content Controller (Contents)
#### Listing (`list`)
- Filtering, sorting, searching, and pagination are supported via query parameters.

#### Content Creation (`create`)
- Users can create content for blogs after logging in.
- Images are uploaded to Cloudinary, and their URLs are saved.

#### Content Reading (`read`)
- Returns details of a specific content.

#### Content Update (`update`)
- Only the content creator or admin can update the content.
- Existing images can be deleted, new images can be added, or a combination of both can be used.

#### Content Deletion (`delete`)
- Only the content creator or admin can delete the content.

### Comment Model (Comment)
- **Fields**:
  - `blogId` (ObjectId): The blog the comment belongs to.
  - `userId` (ObjectId): The user who wrote the comment.
  - `comment` (String): The comment text.
  - `bottomCommentsId` (Array): References to sub-comments.

### Comment Controller (Comments)
#### Listing (`list`)
- Filtering, sorting, searching, and pagination are supported via query parameters.

#### Comment Creation (`create`)
- Users can add comments to blogs after logging in.
- When a new comment is created, it is added to the blog's `commentsId` field.

#### Comment Reading (`read`)
- Returns details of a specific comment.

#### Comment Update (`update`)
- Only the comment author or admin can update the comment.

#### Comment Deletion (`delete`)
- Only the comment author or admin can delete the comment.
- The deleted comment is removed from the blog's `commentsId` field, and its sub-comments are also deleted. 

### Bottom Comment Model (BottomComment)
- **Fields**:
  - `commentId` (ObjectId): The parent comment.
  - `userId` (ObjectId): The user who wrote the sub-comment.
  - `bottomComment` (String): The sub-comment text.

### Bottom Comment Controller (BottomComments)
#### Listing (`list`)
- Filtering, sorting, searching, and pagination are supported via query parameters.

#### Sub-Comment Creation (`create`)
- Users can create sub-comments after logging in.
- When a new sub-comment is created, it is added to the parent comment's `bottomCommentsId` field.

#### Sub-Comment Reading (`read`)
- Returns details of a specific sub-comment.

#### Sub-Comment Update (`update`)
- Only the sub-comment author or admin can update the sub-comment.

#### Sub-Comment Deletion (`delete`)
- Only the sub-comment author or admin can delete the sub-comment.
- The deleted sub-comment is removed from the parent comment's `bottomCommentsId` field.

### Like Model (Like)
- **Fields**:
  - `blogId` (ObjectId): The blog the like belongs to.
  - `userId` (ObjectId): The user who liked the blog.

### Like Controller (Likes)
#### Adding or Removing Likes
- Likes can be added or removed for blogs.
- Likes can be added or removed for blogs. `likesId` field.

#### Retrieving Like Information
- Returns the total number of likes for a blog and whether the user has liked it.

### View Model (View)
- **Fields**:
  - `blogId` (ObjectId): The blog the view belongs to.
  - `userId` (ObjectId): The user who viewed the blog (if logged in).
  - `deviceId` (String): The user's device ID (for anonymous views). 

### View Controller (Views)
#### Recording Views
- A `View` record is created each time a blog is viewed.
- For logged-in users, the `userId` is recorded.
- For anonymous users, the `deviceId` is used to record the view.

### Documentation Routes (Documents)
- **Swagger ve Redoc**:
  - The `swagger.json` file is used for Swagger and Redoc documentation.
  - Swagger and Redoc provide different user interfaces for easily viewing API documentation.
- **Documentation URLs**:
  - `/documents/json`: API documentation in JSON format.
  - `/documents/redoc`: API documentation via Redoc interface.
  - `/documents/swagger`: API documentation via Swagger UI.

### Middlewares
- **Authentication Middleware**:
  - Session verification is performed using the `Authorization` header value.
  - If the user is not logged in, access to certain operations is denied.

- **Authorization Middleware**:
  - `isLogin`: Verifies that the user is logged in.
  - `isAdmin`: Verifies that the user has admin privileges.

- **Filtering, Searching, Sorting, and Pagination Middleware**:
  - Parameters:
    - `filter`: Filtering queries.
    - `search`: Case-insensitive search.
    - `sort`: Record sorting (default: `createdAt: 'desc'`).
    - `page` ve `limit`: Pagination settings.
  - Model-based data queries are performed using `res.getModelList` and `res.getModelListDetails` functions.

### Error Handling
- All errors are caught by the `errorHandler` middleware and returned as responses.

**API Documentation**
   - [SWAGGER](https://koseyazisi.onrender.com/documents/swagger/)
   - [REDOC](https://koseyazisi.onrender.com/documents/redoc)
   - [JSON](https://koseyazisi.onrender.com/documents/json)
