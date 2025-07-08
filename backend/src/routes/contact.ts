import { Router, Request, Response } from 'express';
import { ContactForm, ApiResponse } from '../types';

const router = Router();

// POST /api/contact - Submit contact form
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, subject, message }: ContactForm = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      res.status(400).json({
        success: false,
        error: 'Missing required fields',
        message: 'Please provide name, email, subject, and message'
      } as ApiResponse);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        error: 'Invalid email format',
        message: 'Please provide a valid email address'
      } as ApiResponse);
      return;
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the contact request
    
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // For now, just return success
    const response: ApiResponse = {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: {
        name,
        email,
        subject,
        submittedAt: new Date().toISOString()
      }
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Something went wrong. Please try again later.'
    } as ApiResponse);
  }
});

export { router as contactRouter }; 