import ProjectFrame from "../../components/ProjectFrame"
import CaseImg01 from '../../assets/images/case-studie-01.webp'

const CaseStudies = () => {
  return (
    <section>
        <h2>Personal Favorites</h2>
        <div className='grid-container'>
            <ProjectFrame img={CaseImg01} title={"Rowan Studios"} year={2025} />
            <ProjectFrame img={CaseImg01} title={"Adidas"} year={2021} />
            <ProjectFrame img={CaseImg01} title={"Rowan Studios"} year={2025} />
            <ProjectFrame img={CaseImg01} title={"Rowan Studios"} year={2025} />
        </div>
    </section>
  )
}

export default CaseStudies