#!/bin/bash

echo "🚀 Setting up sum1d3v Portfolio Project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Create environment file for backend
echo "🔧 Setting up environment variables..."
if [ ! -f backend/.env ]; then
    cp backend/env.example backend/.env
    echo "✅ Created backend/.env file"
else
    echo "⚠️  backend/.env already exists"
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p frontend/public/images
mkdir -p backend/dist

echo ""
echo "🎉 Setup complete! Here's what you can do next:"
echo ""
echo "1. Start development servers:"
echo "   npm run dev"
echo ""
echo "2. Or start them separately:"
echo "   npm run dev:frontend  # Frontend on http://localhost:3000"
echo "   npm run dev:backend   # Backend on http://localhost:5000"
echo ""
echo "3. Build for production:"
echo "   npm run build"
echo ""
echo "4. Deploy to Vercel:"
echo "   - Push to GitHub"
echo "   - Connect to Vercel"
echo "   - Deploy automatically!"
echo ""
echo "📚 Check README.md for more details"
echo ""
echo "Happy coding! 🚀" 