import React, { useState } from "react";

function App() {
  // Define the number of students and aspects
  const numStudents = 10;
  const numAspects = 4;

  // Initialize the state to hold the scores
  const [scores, setScores] = useState(
      Array.from({ length: numAspects }, () =>
          Array.from({ length: numStudents }, () => 1)
      )
  );

  // Function to handle input change
  const handleScoreChange = (aspectIndex, studentIndex, value) => {
    // Create a copy of the current scores
    const newScores = [...scores];
    // Update the specific score
    newScores[aspectIndex][studentIndex] = parseInt(value, 10);
    // Update the state
    setScores(newScores);
  };

  // Function to generate JSON output
  const getJsonOutput = () => {
    const jsonOutput = {};
    for (let aspectIndex = 0; aspectIndex < numAspects; aspectIndex++) {
      const aspectKey = `aspek_penilaian_${aspectIndex + 1}`;
      jsonOutput[aspectKey] = {};
      for (let studentIndex = 0; studentIndex < numStudents; studentIndex++) {
        const studentKey = `mahasiswa_${studentIndex + 1}`;
        jsonOutput[aspectKey][studentKey] = scores[aspectIndex][studentIndex];
      }
    }
    return jsonOutput;
  };

// Function to save and display the JSON output in console
  const handleSave = () => {
    const jsonOutput = getJsonOutput();
    console.log(jsonOutput); // Kirim output JSON ke console
  };

  return (
      <div className="container">
        <h1>Aplikasi Penilaian Mahasiswa</h1>
        <table>
          <thead>
          <tr>
            <th>Mahasiswa</th>
            {[...Array(numAspects)].map((_, index) => (
                <th key={index}>Aspek penilaian <br /> {index + 1}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {[...Array(numStudents)].map((_, studentIndex) => (
              <tr key={studentIndex}>
                <td>
                  <i className="fa fa-user"></i> Mahasiswa {studentIndex + 1}
                </td>
                {[...Array(numAspects)].map((_, aspectIndex) => (
                    <td key={aspectIndex}>
                      <input
                          type="number"
                          min="1"
                          max="10"
                          value={scores[aspectIndex][studentIndex]}
                          onChange={(e) =>
                              handleScoreChange(
                                  aspectIndex,
                                  studentIndex,
                                  e.target.value
                              )
                          }
                      />
                    </td>
                ))}
              </tr>
          ))}
          </tbody>
        </table>
        <button onClick={handleSave} style={{ marginTop: "20px"}}>
          Simpan
        </button>
      </div>
  );
}

export default App;