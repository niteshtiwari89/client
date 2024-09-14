import React, { useState } from "react";

export default function SessionModal({ isOpen, onClose, onSubmit }) {
  const [session, setSession] = useState("");
  const [section, setSection] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (session.trim() && section && startTime && endTime) {
      try {
        const response = await fetch("http://localhost:5000/api/session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            session,
            section,
            startTime,
            endTime,
            remarks,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Class added:", result);

        setSession("");
        setSection("");
        setStartTime("");
        setEndTime("");
        setRemarks("");

        onSubmit(result);

        onClose();
      } catch (error) {
        console.error("Error adding class:", error);
      }
    } else {
      alert("Please fill out all required fields");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ width: "50%" }}>
        <h2>Add New Session</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            placeholder="Class Name"
            required
          />
          <input
            type="number"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="Section (In Digit)"
            required
          />
          <h4>From</h4>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <h4>To</h4>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Remarks"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
