import { useState } from 'react'
import './App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import Sidebar from './components/Sidebar'

// This creates consecutive event Id
let eventGuid = 0
function createEventId() {
  return String(eventGuid++)
}

const events = [
  { title: 'Meeting', start: new Date() }
]

function App() {
  // To keep track of current events to be displayed as a list in the sidebar
  const [currentEvents, setCurrentEvents] = useState([])

  return (
    <div className="app-container">
      <Sidebar
        currentEvents={currentEvents}
      />
      <div className="calendar-container">
        <h1>Calendar</h1>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          weekends={true}
          currentEvents={currentEvents}
          eventContent={renderEventContent}
          eventsSet={setCurrentEvents}
          eventClick={handleDeleteEvent} // This is to delete events
          selectable={true} // This ensures that the boxes are selectable
          select={handleAddEvent} // This is so that we can add new events
          editable={true} // This allows events to be slid around
        />
      </div>
    </div>
  )
}

function renderEventContent(eventInfo) {
  return (
    <div>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  )
}

// This function is to add events to the calendar when you click on the date
function handleAddEvent(selectInfo) {
  let title = prompt('Please enter a new title for your event')
  let calendarApi = selectInfo.view.calendar

  // clear date selection so that current date is cleared after adding event
  calendarApi.unselect()

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    })
  }
}

function handleDeleteEvent(clickInfo) {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}

export default App
