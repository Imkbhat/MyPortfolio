import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import MyImage from "../image/Mine.png";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={MyImage} alt="Kiran B S" style={{ height: "200px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Kiran B S</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Software Developer with 6 years of Expirience, in Java, Spring,
              Hibernate, Javascript, Postgresql, React(1 Year)
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>#853, 5th main, 5th cross, MC Layout</p>
            <h5>Phone</h5>
            <p>9740594382</p>
            <h5>Email</h5>
            <p>kbs71190@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear="Jun 2008"
              endYear="Jun 2012"
              schoolName="Bahubali College of Engg."
              schoolDescription="Visveswaraya Technological University"
            />

            <Education
              startYear="Jun 2006"
              endYear="Jun 2008"
              schoolName="National Independent PU Residential School"
              schoolDescription="State Syllabus"
            />
            <hr style={{ borderTop: "3px solid #e22947", width: "100%" }} />
            <h2>Experience</h2>
            <Experience
              startYear="Oct 2017"
              endYear="Till"
              companyName="Vox Doc Bpo Pvt Ltd(NMC HealthCare)"
              roleDescription="Software Developer"
            />

            <Experience
              startYear="Jan 2015"
              endYear="Oct 2017"
              companyName="Practo Technologies Pvt Ltd."
              roleDescription="Software Developer"
            />

            <Experience
              startYear="Jan 2013"
              endYear=" Dec 2015"
              companyName="EeshaMount Technologies Pvt Ltd."
              roleDescription="Software Developer"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Java" progress={70} />
            <Skills skill="Spring" progress={60} />
            <Skills skill="Hibernate" progress={60} />
            <Skills skill="React" progress={60} />
            <Skills skill="JavaScript" progress={70} />
            <Skills skill="Postgresql" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
