# Pomodoro Timer App

## Overview

This **Pomodoro Timer App** is built with **React**, **Styled Components**, and **Framer Motion**, providing an interactive timer to help users manage their work and break periods. It supports customizable work, short break, and long break durations through a settings modal. The app features responsive design and smooth animations for a polished user experience.

## Features

- **Pomodoro Timer**: Default work time of 25 minutes, short break of 5 minutes, and long break of 30 minutes.
- **Customizable Time**: Users can set their own work, short break, and long break durations.
- **Animated Timer**: Smooth progress animation for an engaging experience.
- **Settings Modal**: Modal for adjusting time settings.
- **Responsive Design**: Adapts to various screen sizes for seamless use on mobile, tablet, and desktop.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/ma3llim007/react_project/
    ```

2. Navigate to the project directory:

    ```bash
    cd 11_pomodoro_app
    ```

3. Install the required dependencies:

    ```bash
    yarn
    ```

4. Start the development server:

    ```bash
    yarn run dev
    ```
    This will start the server at `http://localhost:5173`.

## Usage

### 1. Start the Timer

- By default, the app starts with a 25-minute work session.
- The progress bar animates as time counts down.

### 2. Adjust Work and Break Durations

- Click the settings icon (cogwheel) to open the **Settings Modal**.
- Set custom times for work, short break, and long break durations.
- Save your changes by clicking **Submit**.

### 3. Toggle Between Work and Break Sessions

- Use the **Tags** at the top to switch between work, short break, and long break.

## Code Structure

- **Global Styles**: Configured using `styled-components` and `ThemeProvider` for consistent design across components.
- **State Management**: Context API is used to manage and share state across the app (work time, break time, active timer).
- **Framer Motion**: Animations for modal transitions and other UI elements.

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

- **React** for building the user interface.
- **Styled Components** for dynamic styling.
- **Framer Motion** for smooth animations.
- **Formik** for handling form submissions in the settings modal.