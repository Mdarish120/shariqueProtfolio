import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Frontend to Backend. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'frontend app' ?
            <ToggleButton active value="frontend app" onClick={() => setToggle('frontend app')}>Frontend App'S </ToggleButton>
            :
            <ToggleButton value="frontend app" onClick={() => setToggle('frontend app')} >Frontend App'S</ToggleButton>
          }
          <Divider />
          {toggle === 'MERN app' ?
            <ToggleButton active value="MERN app" onClick={() => setToggle('MERN app')}>MERN App'S</ToggleButton>
            :
            <ToggleButton value="MERN app" onClick={() => setToggle('MERN app')}>MERN App'S</ToggleButton>
          }
          <Divider />

        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects