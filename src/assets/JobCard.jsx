import React from "react";

function JobCard({ job, viewMode, onSave, onRemove, isSaved }) {
  return (
    <div className="job-card">
      <h4 className="job-title">{job.role}</h4>
      <p className="job-desc">{job.description}</p>

      <div className="card-footer">
        <span className="job-meta">Full-time &middot; Remote</span>

        {viewMode === "ALL" ? (
          <button
            className="primary-btn"
            onClick={() => onSave(job)}
            disabled={isSaved}
          >
            {isSaved ? "Saved ✓" : "Save Job"}
          </button>
        ) : (
          <button
            className="danger-btn"
            onClick={() => onRemove(job.id)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default JobCard;