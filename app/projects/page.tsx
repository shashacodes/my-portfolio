'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Chip, Dialog, Box, IconButton, Divider, Button } from '@mui/material'
import Link from 'next/link'
import { projects } from '../components/data/projects'
import { GitHub, Web, Close, ArrowUpward, Home } from '@mui/icons-material'

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  slug: string
  demo?: string
  github?: string
  about: string
}

export default function Projects() {
  const [openDialog, setOpenDialog] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null) 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const handleOpenDialog = (project: Project) => {
    setCurrentProject(project)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setCurrentProject(null)
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isClient) {
    return null;
  }


  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project: Project) => (
       <Card
       key={project.id}
       onClick={() => handleOpenDialog(project)}
       sx={{
         transition: 'transform 0.3s ease, box-shadow 1.3s ease',
         '&:hover': {
           transform: 'scale(1.05)',
           boxShadow: 6, 
         },
         cursor: 'pointer',
         
       }}
     >
     
       
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
                sx={{
    height: 200,
    objectFit: 'cover',
    width: '100%',
  }}

            />
            <CardContent className='text-left'>
              <Typography gutterBottom variant="h6" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <div className="mt-2 flex flex-wrap md:gap-4 gap-1">
                {project.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullScreen={window.innerWidth < 600} 
        maxWidth="md"
        fullWidth
        
      >
        <Box className="w-full relative p-4 py-6">
          <IconButton
            onClick={handleCloseDialog}
            edge="end"
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 1000,
              color: '#052E16',
            }}
          >
            <Close fontSize="large" className='bg-white rounded-md p-1 '/>
          </IconButton>


          <Box className="flex justify-center mb-4  ">
            <img
              src={currentProject?.image}
              alt={currentProject?.title}
  style={{
    height: 200,
    width: '100%',
    objectFit: 'cover',
    borderRadius: 8
  }}
            />
          </Box>

          <Typography variant="h5" gutterBottom>
            {currentProject?.title}
          </Typography>

          <Divider className="mb-4" />

          <Typography variant="body1" paragraph>
            {currentProject?.description}
          </Typography>

          <Typography variant="h6" className="mt-4 mb-2 ">Technologies Used</Typography>
          <Box className="flex flex-wrap gap-2 mb-4">
            {currentProject?.tags.map((tag: string) => (
              <Chip key={tag} label={tag} size="small" className="mr-2 mb-2" />
            ))}
          </Box>

          <Typography variant="h6" className="mt-4 mb-2">About the Project</Typography>
          {currentProject?.about && (
  <Typography variant="body2" paragraph>
    {currentProject.about}
  </Typography>
)}

          <Divider className="my-4" />

          <Box className="mt-4">
            {currentProject?.demo && (
              <Box className="flex items-center gap-2 mb-2 underline italic text-[#052E16]">
                <Web />{' '}
                <a href={currentProject.demo} target="_blank" rel="noopener noreferrer">
                 View Website Demo
                </a>
              </Box>
            )}
            {currentProject?.github && (
              <Box className="flex items-center gap-2 mb-2 underline italic text-[#052E16]">
                <GitHub />{' '}
                <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                 View GitHub Repository
                </a>
              </Box>
            )}
          </Box>
        </Box>
        {currentProject && (
  <Button
    component="a"
    href={currentProject.demo}
    target="_blank"
    rel="noopener noreferrer"
    variant="contained"
    sx={{
      backgroundColor: '#052E16',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#388E3C',
        color:"black"
      }
    }}
  >
    Open Project
  </Button>
)}

      </Dialog>

      <IconButton
        onClick={scrollToTop}
        className='animate-bounce'
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: '#052E16',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#388E3C',
          },
        }}
      >
        <ArrowUpward fontSize="large" />
      </IconButton>

      <Link href="/" passHref>
        <IconButton
          sx={{
            position: 'fixed',
            top: 30,
            left: 30,
            backgroundColor: '#052E16',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#388E3C',
            },
          }}
        >
          <Home fontSize="large" />
        </IconButton>
      </Link>
    </section>
  )
}
