/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        matrix: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        terminal: {
          green: '#00ff00',
          cyan: '#00ffff',
          red: '#ff0000',
          yellow: '#ffff00',
          purple: '#ff00ff',
          blue: '#0080ff',
        },
        security: {
          red: '#ff0000',
          orange: '#ff8000',
          yellow: '#ffff00',
          green: '#00ff00',
          blue: '#0080ff',
          purple: '#8000ff',
        },
        linux: {
          blue: '#0066cc',
          green: '#00ff00',
          red: '#ff0000',
          yellow: '#ffff00',
          purple: '#8000ff',
        },
        iot: {
          purple: '#8000ff',
          cyan: '#00ffff',
          green: '#00ff00',
          blue: '#0080ff',
          orange: '#ff8000',
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
        terminal: ['Fira Code', 'monospace'],
        linux: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'matrix-rain': 'matrixRain 2s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'scan': 'scan 3s linear infinite',
        'pulse-cyber': 'pulseCyber 2s ease-in-out infinite',
        'typing': 'typing 3s steps(40, end)',
        'blink': 'blink 1s infinite',
        'holographic': 'holographic 3s ease infinite',
        'circuit': 'circuit 4s linear infinite',
        'network-pulse': 'networkPulse 2s ease-in-out infinite',
        'security-scan': 'securityScan 4s linear infinite',
        'linux-boot': 'linuxBoot 2s ease-out',
        'iot-connect': 'iotConnect 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseCyber: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        holographic: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        circuit: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        networkPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.7' },
        },
        securityScan: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        linuxBoot: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        iotConnect: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
      },
      backgroundImage: {
        'matrix': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"matrix\" patternUnits=\"userSpaceOnUse\" width=\"20\" height=\"20\"%3E%3Crect width=\"20\" height=\"20\" fill=\"%23000000\"%3E%3C/rect%3E%3Ctext x=\"10\" y=\"15\" font-family=\"monospace\" font-size=\"12\" fill=\"%2300ff00\" text-anchor=\"middle\"%3E1%3C/text%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23matrix)\"%3E%3C/rect%3E%3C/svg%3E')",
        'circuit': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"circuit\" patternUnits=\"userSpaceOnUse\" width=\"40\" height=\"40\"%3E%3Crect width=\"40\" height=\"40\" fill=\"%23000000\"%3E%3C/rect%3E%3Cpath d=\"M0 20 L40 20 M20 0 L20 40\" stroke=\"%2300ff00\" stroke-width=\"1\" opacity=\"0.3\"%3E%3C/path%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"2\" fill=\"%2300ff00\" opacity=\"0.5\"%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23circuit)\"%3E%3C/rect%3E%3C/svg%3E')",
        'network': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"network\" patternUnits=\"userSpaceOnUse\" width=\"60\" height=\"60\"%3E%3Crect width=\"60\" height=\"60\" fill=\"%23000000\"%3E%3C/rect%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"%2300ffff\" stroke-width=\"1\" opacity=\"0.2\"%3E%3C/circle%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"10\" fill=\"none\" stroke=\"%2300ffff\" stroke-width=\"1\" opacity=\"0.4\"%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23network)\"%3E%3C/rect%3E%3C/svg%3E')",
        'security': "url('data:image/svg+xml,%3Csvg width=\"50\" height=\"50\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"security\" patternUnits=\"userSpaceOnUse\" width=\"50\" height=\"50\"%3E%3Crect width=\"50\" height=\"50\" fill=\"%23000000\"%3E%3C/rect%3E%3Cpath d=\"M25 5 L45 15 L45 35 L25 45 L5 35 L5 15 Z\" fill=\"none\" stroke=\"%23ff0000\" stroke-width=\"1\" opacity=\"0.3\"%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23security)\"%3E%3C/rect%3E%3C/svg%3E')",
        'linux': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"linux\" patternUnits=\"userSpaceOnUse\" width=\"40\" height=\"40\"%3E%3Crect width=\"40\" height=\"40\" fill=\"%23000000\"%3E%3C/rect%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"15\" fill=\"none\" stroke=\"%230066cc\" stroke-width=\"1\" opacity=\"0.2\"%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23linux)\"%3E%3C/rect%3E%3C/svg%3E')",
        'iot': "url('data:image/svg+xml,%3Csvg width=\"45\" height=\"45\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"iot\" patternUnits=\"userSpaceOnUse\" width=\"45\" height=\"45\"%3E%3Crect width=\"45\" height=\"45\" fill=\"%23000000\"%3E%3C/rect%3E%3Crect x=\"15\" y=\"15\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"%238000ff\" stroke-width=\"1\" opacity=\"0.3\"%3E%3C/rect%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23iot)\"%3E%3C/rect%3E%3C/svg%3E')",
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 255, 0, 0.3)',
        'matrix': '0 0 30px rgba(0, 255, 0, 0.5)',
        'terminal': '0 0 15px rgba(0, 255, 0, 0.4)',
        'security': '0 0 25px rgba(255, 0, 0, 0.3)',
        'linux': '0 0 20px rgba(0, 102, 204, 0.3)',
        'iot': '0 0 20px rgba(128, 0, 255, 0.3)',
      },
      textShadow: {
        'cyber': '0 0 10px rgba(0, 255, 0, 0.5)',
        'matrix': '0 0 15px rgba(0, 255, 0, 0.7)',
        'terminal': '0 0 8px rgba(0, 255, 0, 0.4)',
      },
    },
  },
  plugins: [],
}; 