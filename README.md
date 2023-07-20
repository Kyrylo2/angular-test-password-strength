# Angular Test Password Strength 🔒💪

## Overview 📖

This repository contains an Angular application that serves as a password strength testing tool. The application provides real-time feedback on the strength of a password based on certain criteria, such as the presence of letters, digits, and symbols. The password strength is visually represented through colored sections and a progress bar.

## Features 🚀

- **Password Input Field** 🔑: The application has a password input field where users can enter their desired password.

- **Password Visibility Toggle** 👁️: There is a toggle button next to the password input field that allows users to toggle the password visibility to either hide or show the password.

- **Password Strength Indicator** 💪: The application evaluates the password strength and shows it in real-time using three sections.

  - If the password is empty, all sections are displayed in gray. 🟦
  - If the password is less than 8 characters, all sections are displayed in red. 🔴
  - If the password is easy (contains only letters, digits, or symbols), the first section is red, and the rest are gray. 🔴🟦🟦
  - If the password is medium (combination of letters-digits, letters-symbols, or digits-symbols), the first two sections are yellow, and the last one is gray. 🟨🟨🟦
  - If the password is strong (contains letters, symbols, and numbers), all sections are displayed in green. 🟩🟩🟩

- **Progress Bar** 📊: There is a progress bar that represents the password strength percentage. The color of the progress bar changes based on the password strength.

  - If the password is empty, the progress bar is displayed in light gray. 🟦
  - If the password strength is less than 66%, the progress bar is displayed in red. 🔴
  - If the password strength is between 66% and 100%, the progress bar is displayed in yellow. 🟨
  - If the password strength is 100%, the progress bar is displayed in green. 🟩

## Deployment 🚀

The application is deployed on GitHub Pages and can be accessed using the following URL: [https://kyrylo2.github.io/angular-test-password-strength/](https://kyrylo2.github.io/angular-test-password-strength/)

## Local Development 👨‍💻

To run the application locally, follow these steps:

1. Clone the repository using the command:
   git clone https://github.com/Kyrylo2/angular-test-password-strength.git

2. Navigate to the project directory:
   cd angular-test-password-strength

3. Install the project dependencies:
   npm install

4. Start the local development server:
   ng serve

5. Open your web browser and visit [http://localhost:4200/](http://localhost:4200/) to view the application.

## Technologies Used 🛠️

- Angular: The front-end framework used to build the application.
- Angular Material: Provides UI components used in the application.
- TypeScript: The programming language used for Angular development.

## Contributions 🤝

Contributions to this repository are welcome! If you find any bugs, have feature suggestions, or would like to improve the code, feel free to open an issue or submit a pull request.

## License 📝

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
