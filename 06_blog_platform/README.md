# Blog Platform

## Overview

This is a blog platform built with React and Redux Toolkit, allowing users to add, view, and delete blog posts. The platform includes features such as state persistence, rich text editing, and dynamic state management.

## Features

- **Blog Management:** Users can add new blogs, view a list of blogs, and delete existing blogs.
- **State Persistence:** Uses Redux Persist to save the state in local storage, ensuring that the state is retained across page reloads.
- **Rich Text Editing:** TinyMCE is integrated for rich text editing in blog content.
- **Responsive UI:** The platform is styled using TailwindCSS for a responsive and modern design.
- **Toast Notifications:** Feedback messages are shown using React Toastify for user interactions.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ma3llim007/react_project/
    ```

2. **Navigate to the project directory:**
    ```bash
    cd 06_blog_platform
    ```

3. **Install dependencies:**
    ```bash
    yarn install
    ```

4. **Environment Variables:**
   Create a `.env` file in the root directory and add your TinyMCE API key:
    ```bash
    VITE_TINYMC_API_KEY=your-tinymce-api-key
    ```

5. **Start the development server:**
    ```bash
    npm run dev
    ```

This will start the development server and open the project in your default browser at `http://localhost:3000`.

## Development

### State Management

- **Redux Toolkit:** The application uses Redux Toolkit for state management, with two slices:
  - `stateSlice`: Manages the active state of the application (e.g., showing the blog list or the add blog form).
  - `blogSlice`: Manages the list of blog posts, including adding and removing blogs.
- **Redux Persist:** The application state is persisted using `redux-persist` to ensure that the data remains intact across page reloads.

### Components

- **TinyMce:** A reusable component for rich text editing, integrated with `react-hook-form` for form validation.
- **ViewBlog:** A component for viewing the details of a blog post, including author information and the ability to delete the blog.
- **Header:** A navigation header that allows users to switch between the blog list and the add blog form.
- **BlogList:** Displays a list of all blogs, with each blog rendered as a `BlogCard`.

## Contributing
Contributions are welcome! If you find any bugs or have suggestions, please [open an issue](https://github.com/ma3llim007/react_project/issues) or [submit a pull request](https://github.com/ma3llim007/react_project/pulls).

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## Acknowledgements

- **React:** A JavaScript library for building user interfaces.
- **Redux Toolkit:** A library for efficient Redux development.
- **TinyMCE:** A powerful rich text editor.
- **TailwindCSS:** A utility-first CSS framework for styling.
