// Class.js
import React, { useState } from "react";
import ClassModal from "./Modals/ClassModal"; // Import ClassModal with the correct name

export default function Class() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddClass = async (className) => {
    try {
      const response = await fetch('/api/classes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: className }),
      });

      if (!response.ok) {
        throw new Error('Failed to add class');
      }

      const result = await response.json();
      console.log('Class added:', result);

      } catch (error) {
      console.error('Error adding class:', error);
    } finally {
      closeModal();
    }
  };

  return (
    <div className="dashContainer">
      <div className="classes">
        <div className="header">
          <h2>Classes</h2>
          <button onClick={openModal}>Add Class</button>
        </div>
        <div className="content">
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
        </div>
      </div>
      <ClassModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleAddClass} />
    </div>
  );
}
