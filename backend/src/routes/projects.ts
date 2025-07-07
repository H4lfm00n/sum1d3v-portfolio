import { Router, Request, Response } from 'express';
import { Project, ApiResponse } from '../types';

const router = Router();

// Sample projects data
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    imageUrl: '/images/project1.jpg',
    githubUrl: 'https://github.com/sum1d3v/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.sum1d3v.dev',
    featured: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: '/images/project2.jpg',
    githubUrl: 'https://github.com/sum1d3v/task-manager',
    liveUrl: 'https://task-manager.sum1d3v.dev',
    featured: true,
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20')
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '/images/project3.jpg',
    githubUrl: 'https://github.com/sum1d3v/portfolio',
    liveUrl: 'https://sum1d3v.dev',
    featured: true,
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  }
];

// GET /api/projects - Get all projects
router.get('/', async (req: Request, res: Response) => {
  try {
    const { featured, limit } = req.query;
    
    let projects = [...sampleProjects];
    
    // Filter by featured if specified
    if (featured === 'true') {
      projects = projects.filter(project => project.featured);
    }
    
    // Apply limit if specified
    if (limit && typeof limit === 'string') {
      const limitNum = parseInt(limit);
      if (!isNaN(limitNum)) {
        projects = projects.slice(0, limitNum);
      }
    }
    
    const response: ApiResponse<Project[]> = {
      success: true,
      data: projects,
      message: `Retrieved ${projects.length} projects`
    };
    
    res.status(200).json(response);
  } catch (error) {
    console.error('Projects fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Failed to fetch projects'
    } as ApiResponse);
  }
});

// GET /api/projects/:id - Get project by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = sampleProjects.find(p => p.id === id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
        message: `Project with ID ${id} not found`
      } as ApiResponse);
    }
    
    const response: ApiResponse<Project> = {
      success: true,
      data: project
    };
    
    res.status(200).json(response);
  } catch (error) {
    console.error('Project fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Failed to fetch project'
    } as ApiResponse);
  }
});

export { router as projectsRouter }; 