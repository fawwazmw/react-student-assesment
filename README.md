# Technical Test Submission

## Description Project
This application is a solution for the technical test given. This application allows a lecturer to give an assessment to 10 students based on 4 assessment aspects. Each aspect can be given a value from 1 to 10. The assessment results will be generated in JSON format and displayed in the browser console.

---

## Main Features
- Input scores for 10 students on 4 assessment aspects.
- Input validation: Only accepts numbers between 1 and 10.
- JSON output in the requested format:
  ```json
  {
    "aspek_penilaian_1": {
      "mahasiswa_1": 5,
      "mahasiswa_2": 8,
      ...
    },
    ...
  }
- "Save" button to display the JSON output in the browser console.

## Technology Used
- React.js : JavaScript framework for building user interfaces.
- CSS : Simple styling for table and button appearance.
- JavaScript (ES6+) : For application logic.

## How to Run the Application
### Prerequisite
Before running the application, make sure you have installed:
- Node.js (version 16 or higher)
- npm (Node Package Manager): Usually included in Node.js installation.
### Steps
#### 1. Clone Repository
Open a terminal and run the following command to download the source code:
```bash
git clone https://github.com/username/nama-repository.git
cd nama-repository
```
#### 2. Install Dependencies
Install all required dependencies with the command:
```bash
npm install
```

#### 3. Run the Application
Start the application with the command:
```bash
npm start
```
The application will run on http://localhost:3000.

#### 4. View JSON Output
- Enter grades for each student and assessment aspects.
- Click the "Save" button.
- Open the Console Browser (press F12 or Ctrl + Shift + I) to see the JSON output.

## Project Structure
```plaintext
penilaian-mahasiswa/
├── public/               # Static File (index.html, favicon, dll.)
├── src/
│   ├── App.js            # Main components of the application
│   ├── App.css           # Styling for App components
│   ├── index.js          # Application entry point
│   └── index.css         # Global styling
├── package.json          # List of dependencies and scripts
└── README.md             # Project documentation
```
## JSON Output Example
After filling in the values ​​and pressing the "Save" button, the JSON output will be displayed in the console as follows:

```json
{
  "aspek_penilaian_1": {
    "mahasiswa_1": 5,
    "mahasiswa_2": 8,
    "mahasiswa_3": 7,
    ...
    "mahasiswa_10": 9
  },
  "aspek_penilaian_2": {
    "mahasiswa_1": 6,
    "mahasiswa_2": 7,
    "mahasiswa_3": 8,
    ...
    "mahasiswa_10": 10
  },
  ...
}
```

## License
This repository is licensed under the [MIT License](https://opensource.org/license/MIT) . You are free to use, modify, and distribute this code as long as you credit the original source.