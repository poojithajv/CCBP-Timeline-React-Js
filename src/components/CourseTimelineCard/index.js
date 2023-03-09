// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div>
      <div className="course-card-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-card">
          <AiFillClockCircle />
          <p className="duration1">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-container">
        {tagsList.map(each => (
          <li key={each.id} className="tag-item">
            <p className="tag-name">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
