import React from "react";
import JobCard from "./JobCard";

function JobList({ jobs, viewMode, onSave, onRemove, savedJobs }) {
  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📋</div>
        {viewMode === "SAVED"
          ? "No saved jobs yet — browse listings and save ones you like."
          : "No jobs match your search. Try a different keyword."}
      </div>
    );
  }

  return (
    <div>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          viewMode={viewMode}
          onSave={onSave}
          onRemove={onRemove}
          isSaved={savedJobs.some(j => j.id === job.id)}
        />
      ))}
    </div>
  );
}

export default JobList;