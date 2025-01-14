import { useState } from 'react'
import './App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Sidebar from './components/Sidebar'

const events = [
  { title: 'Meeting', start: new Date() }
]

function App() {
  const [currentEvents, setCurrentEvents] = useState([])

  return (
    <div className="app-container">
      <Sidebar
        currentEvents={currentEvents}
      />
      <div className="calendar-container">
        <h1>Calendar</h1>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          weekends={true}
          events={events}
          eventContent={renderEventContent}
          eventsSet={setCurrentEvents}
        />
      </div>
    </div>
  )
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default App
