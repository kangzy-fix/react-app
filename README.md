# User List Project

This is a React project that allows users to manage a list of users. Users can be added, edited, and deleted. The project retrieves user data from an API and displays it in a list format. It also includes form validation and displays toast notifications for various actions.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

Follow the steps below to get started with the project:

1. Clone the repository or download the project files.
   ```
    git clone https://github.com/kangzy-fix/react-app.git
   ```

2. Open a terminal and navigate to the project directory.
   ```
   cd react-app
   ```
3. Install the dependencies by running the following command:
    ```
     npm install
     npm install react-loading-skeleton@3.3.1
     npm install react-router@6.14.1
     npm install react-router-dom@6.14.1
     npm install react-toastify
     npm install @fortawesome/react-fontawesome
     npm install @fortawesome/free-solid-svg-icons
    ```
4. Once the dependencies are installed, start the development server with the following command:
    ```
     npm start
     ```
5. The project should now be running. Open your web browser and visit http://localhost:3000 to see the application.

## Usage

The application consists of a user list interface where you can perform the following actions:

- Add a user: Fill in the required fields (name, username, email, phone) in the form and click the "Add User" button.

- Edit a user: Click the "Edit" button next to a user in the list. The user's details will populate the form, allowing you to make changes. Click the "Update User" button to save the changes.

- Delete a user: Click the "Delete" button next to a user in the list. A confirmation prompt will appear. Click "OK" to delete the user.

- Toast notifications: Toast notifications will appear at the top-right corner of the screen to indicate the success or failure of user-related actions.

## Project Structure

The project files and directories are organized as follows:

- `UserList.js`: The main component that renders the user list interface and handles user interactions.

- `UserList.css`: Stylesheet file for the user list component.

- `LoaderSpinner.css`: Stylesheet file for the loading spinner animation.

- `react-toastify`: External library for displaying toast notifications.

- `public/`: Directory containing the public assets and the `index.html` file.

- `src/`: Directory containing the application source code.

- `index.js`: Entry point of the application.

- `App.js`: Root component that renders the `UserList` component.

- `README.md`: Documentation file providing information about the project.

## Screenshots

![image](https://github.com/kangzy-fix/react-app/assets/108343154/1bbf6fda-f44f-45b2-b19d-cf096f1beaec)


## Additional Notes

- The project fetches user data from the JSONPlaceholder API.

- The project uses the FontAwesome library for displaying icons.

- Form validation is implemented to ensure that all required fields are filled before submitting.

- The project includes a loading spinner animation to indicate when data is being fetched or updated.

- Toast notifications are displayed to provide feedback on user actions.

## License

This project is free and anyone can use it for his/her desire
