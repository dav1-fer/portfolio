import CaseImg01 from '../assets/images/case-studie-01.webp'

const ProjectFrame = ({ img, title, year }) => {
  return (
    <div className="project-container">
        <figure className="project-img">
            <img src={img} />
        </figure>
        <div className="project-details">
            <p className='title-details'>{title}</p>
            <p className='year-details'>{year}</p>
        </div>
    </div>
  )
}

export default ProjectFrame