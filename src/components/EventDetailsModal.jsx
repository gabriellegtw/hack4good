import { useState } from 'react';
import { X } from 'lucide-react';

const EventDetailsModal = ({isEventDetailsModalOpen, closeModal}) => {
    const [description, setDescription] = useState("");
    
    if (!isEventDetailsModalOpen) {
        return null;
    }
    console.log("Event Detail modal opening")

    return (
        <div className="modal-overlay">
          <div className="modal-container">
            <button
              type="button"
              className="close-button"
              onClick={closeModal}
            >
              <X className="icon" />
            </button>
            <form className="modal-form">
              <h2 className="modal-title">Event Details</h2>
              <div className="input-container">
                <label htmlFor="description" className="input-label">Event Description</label>
                <textarea
                  id="description"
                  placeholder="Enter event description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="button-container">
                <button type="submit" className="submit-button">Save Event</button>
                <button type="button" className="delete-button">Delete Event</button>
              </div>
            </form>
          </div>
        </div>
      );
};

export default EventDetails;