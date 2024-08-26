# **Recipe Management Application**

## Overview

This React project is a Recipe Management Application that allows users to add, view, and delete recipes. The recipes are stored in the browser's local storage, ensuring that data persists even after a page reload. The application also provides a smooth user experience with a modal for viewing and deleting recipes, and it offers notifications for actions like adding and deleting recipes.

## Features

- **Add New Recipes**: Users can add new recipes with a unique ID.
- **View Recipes**: Users can view the details of a recipe in a modal.
- **Delete Recipes**: Users can delete recipes, with a confirmation step in the modal.
- **Local Storage**: Recipes are saved in local storage, ensuring persistence across sessions.
- **Responsive Design**: The application is responsive and works well on different screen sizes.
- **Notifications**: Users receive success and info notifications for actions like adding or deleting recipes.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ma3llim007/react_project/
    ```

2. **Navigate to the project directory**:

    ```bash
    cd 03_recipe_book
    ```

3. **Install dependencies**:

    ```bash
    yarn
    ```

4. **Start the development server**:

    ```bash
    yarn run dev
    ```

    This will start the development server and open the project in your default browser at `http://localhost:3000`.

## Usage

To use the application:

1. **Add a new recipe**: Fill in the recipe details and click the "Add Recipe" button.
2. **View a recipe**: Click on a recipe title to open a modal with detailed information.
3. **Delete a recipe**: In the view modal, click the "Delete Recipe" button to remove the recipe from the list.
4. **Persistence**: The recipes will be saved in local storage and will remain available even after reloading the page.

## Development

To contribute to this project:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ma3llim007/react_project/
    ```

2. **Create a new branch** for your feature or fix:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes** and **commit** them:

    ```bash
    git add .
    git commit -m "Describe your changes here"
    ```

4. **Push your changes** to GitHub:

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Open a pull request** on GitHub and describe your changes.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions, please [open an issue](https://github.com/ma3llim007/react_project/issues) or [submit a pull request](https://github.com/ma3llim007/react_project/pulls).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React**: For providing a powerful and flexible UI library.
- **TailwindCss**: For styling the user interface.
- **uuid**: For generating unique IDs for recipes.
- **react-toastify**: For providing notifications.
- **TinyMce**: For Rich Text Editor.
