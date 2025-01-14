export default function Sidebar(props) {
  return (
    <div className='sidebar'>
      <div className='sidebar-section'>
        <h2>Hello! Welcome to BookMark</h2>
        <ul>
          <li>Create events by selecting the corresponding date!</li>
          <li>You can drag, drop, and resize events</li>
          <li>Was the event cancelled? No worries! Click on an event to delete it</li>
        </ul>
      </div>
      <div className='sidebar-section'>
      </div>
      <div className='sidebar-section'>
        <h2>All Events ({props.currentEvents.length})</h2>
        <ul>
          {props.currentEvents.map(event => (
            <li key={event.id}>
              <b>{event.title}</b>
              {event.extendedProps.description && (
                <>
                  <br/>
                  <span className="event-description">{event.extendedProps.description}</span>
                </>
              )}
              <br/>
              {event.start?.toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 