# Task Management App

## Overview

This is a Task Management App built with **React** and **Redux Toolkit**. The app allows users to add, view, delete, and organize tasks across three columns: Todo, Doing, and Done. The app supports drag-and-drop functionality to move tasks between columns. It also integrates with **Redux Persist** to store tasks in local storage, ensuring that the state persists between sessions.

## Features

-   **Add New Task**: Create a new task with a title and status (Todo, Doing, Done).
-   **Drag and Drop**: Move tasks between columns (Todo, Doing, Done) using drag-and-drop.
-   **Delete Task**: Remove a task from the list.
-   **Persistent State**: Task data is saved in local storage using **Redux Persist**.
-   **Responsive Design**: Works well on different screen sizes and devices.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/ma3llim007/react_project/
    ```

2. Navigate to the project directory:

    ```bash
    cd 09_task_management_app
    ```

3. Install the required dependencies:

    ```bash
    yarn
    ```

4. Start the development server:

    ```bash
    yarn run dev
    ```

    This will start the development server and open the project in your default browser at `http://localhost:5173`.

## Usage

### 1. Adding a Task

1. **Enter Task Details**: Type the task title in the input box.then Select the task status (Todo, Doing, Done) from the dropdown.

2. **Add the Task**: Click the **Add Task** button. The task will be added to the "Todo" column by default.

### 2. Managing Tasks

- **Move Tasks**: Drag and drop tasks between columns to update their status (Todo, Doing, Done).

- **Delete Tasks**: Click the trash icon (🗑️) next to a task to remove it.

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

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## Acknowledgements

-   **React** for the front-end framework.
-   **Redux Toolkit** for state management.
-   **Redux Persist** for persisting state across sessions.
-   **React DnD** for drag-and-drop functionality.
