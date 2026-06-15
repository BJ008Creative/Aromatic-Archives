import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { HomePage } from "./pages/HomePage";
import { UploadPage } from "./pages/UploadPage";

function App() {

  const [recipes] = useState([
    {
      name: "Baishali",
      recipe: "Potato Curry"
    },
    {
      name: "Ariyan",
      recipe: "Egg Curry"
    }
  ]);

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<HomePage recipes={recipes} />}
        />

        <Route
          path="/upload"
          element={<UploadPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;