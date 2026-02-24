import React from "react";

function ViewToggle({ viewMode, setViewMode, savedCount }) {
  return (
  <div className="toggle-container">
  <button
    className={`toggle-btn ${viewMode === "ALL" ? "active" : ""}`}
    onClick={() => setViewMode("ALL")}
  >
    All Jobs
  </button>

  <button
    className={`toggle-btn ${viewMode === "SAVED" ? "active" : ""}`}
    onClick={() => setViewMode("SAVED")}
  >
    Saved Jobs ({savedCount})
  </button>
</div>
  );
}

export default ViewToggle;