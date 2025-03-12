src
├── App.js
├── app
│   └── store.jsx
├── assets
│   ├── icons
│   │   └── avatar.png
│   ├── images
│   │   ├── blog-app.png
│   │   └── blog-app.svg
│   └── styles
│       └── editorStyles.css
├── components
│   ├── auth
│   │   ├── ForgotPasswordForm.jsx
│   │   ├── LoginForm.jsx
│   │   └── RegisterForm.jsx
│   ├── blog
│   │   ├── cards
│   │   │   ├── BlogCard.jsx
│   │   │   ├── PopularCard.jsx
│   │   │   └── UserBlogCard.jsx
│   │   ├── forms
│   │   │   ├── NewBlogForm.jsx
│   │   │   ├── TextEditor.jsx
│   │   │   └── UpdateBlogForm.jsx
│   │   └── modals
│   │       ├── DeleteBlogModal.jsx
│   │       ├── LikeModal.jsx
│   │       ├── LoginModal.jsx
│   │       └── UpdateBlogModal.jsx
│   ├── category
│   │   ├── CategoryCard.jsx
│   │   └── modals
│   │       ├── DeleteCategoryModal.jsx
│   │       └── UpdateCategoryModal.jsx
│   ├── common
│   │   ├── ColorModeIconDropdown.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   └── user
│       ├── DeleteModel.jsx
│       ├── UpdateModel.jsx
│       ├── UpdateUserModel.jsx
│       └── UserCard.jsx
├── features
│   ├── authSlice.jsx
│   └── blogSlice.jsx
├── helper
│   └── ToastNotify.js
├── hooks
│   ├── useAuthCalls.jsx
│   ├── useAxios.jsx
│   └── useBlogCalls.jsx
├── index.css
├── index.js
├── pages
│   ├── Dashboard.jsx
│   ├── MainContent.jsx
│   ├── about
│   │   └── About.jsx
│   ├── auth
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── blog
│   │   ├── BlogDetail.jsx
│   │   ├── MyBlogDetail.jsx
│   │   ├── MyBlogs.jsx
│   │   └── NewBlog.jsx
│   ├── category
│   │   ├── Categories.jsx
│   │   └── NewCategory.jsx
│   ├── comment
│   │   ├── BottomCommentCard.jsx
│   │   ├── BottomCommentForm.jsx
│   │   ├── CommentBottomForm.jsx
│   │   ├── CommentCard.jsx
│   │   ├── CommentForm.jsx
│   │   ├── EditBottomCommentForm.jsx
│   │   └── EditCommentForm.jsx
│   └── user
│       ├── Profile.jsx
│       ├── UserDetail.jsx
│       └── Users.jsx
├── router
│   └── AppRouter.jsx
└── theme
    ├── AppTheme.jsx
    ├── components
    │   ├── dataDisplay.jsx
    │   ├── inputs.jsx
    │   └── surfaces.jsx
    └── primitives
        └── themePrimitives.jsx