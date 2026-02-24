import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ViewToggle from "./ViewToggle";
import JobList from "./JobList";

function JobPortal() {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [viewMode, setViewMode] = useState("ALL");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(post => ({
          id: post.id,
          role: post.title,
          description: post.body
        }));
        setJobs(formatted);
      });
  }, []);

  const handleSave = (job) => {
    if (!savedJobs.find(j => j.id === job.id)) {
      setSavedJobs(prev => [...prev, job]);
    }
  };

  const handleRemove = (id) => {
    setSavedJobs(prev => prev.filter(job => job.id !== id));
  };

  const currentJobs = viewMode === "ALL" ? jobs : savedJobs;

  const filteredJobs = currentJobs.filter(job =>
    job.role.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <div className="portal-header">
        <h2 className="title">Job Listing Portal</h2>
        <p className="subtitle">{jobs.length > 0 ? `${jobs.length} positions available` : "Loading positions..."}</p>
      </div>

      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      <ViewToggle
        viewMode={viewMode}
        setViewMode={setViewMode}
        savedCount={savedJobs.length}
      />

      <JobList
        jobs={filteredJobs}
        viewMode={viewMode}
        onSave={handleSave}
        onRemove={handleRemove}
        savedJobs={savedJobs}
      />
    </div>
  );
}

export default JobPortal;