import { render, screen } from '@testing-library/react';
import Home from './page';
import { expect, test, vi } from 'vitest';

// Mock Hero3D since it uses Three.js
vi.mock('./components/three/Hero3D', () => ({
  default: () => <div data-testid="hero-3d" />,
}));

test('renders Home page with updated marketing content', () => {
  render(<Home />);
  
  // Check for new hero headline parts
  expect(screen.getByText(/Own Your Energy/i)).toBeInTheDocument();
  expect(screen.getByText(/Own Your Future/i)).toBeInTheDocument();
  
  // Check for primary CTA (multiple occurrences are fine for presence check)
  const ctaElements = screen.getAllByText(/Join the Waitlist/i);
  expect(ctaElements.length).toBeGreaterThan(0);
  
  // Check for Problem section
  expect(screen.getByText(/The Invisible Energy Avalanche/i)).toBeInTheDocument();
  
  // Check for Solution section
  expect(screen.getByText(/Meet Netso/i)).toBeInTheDocument();
  expect(screen.getByText(/Your Energy Intelligence/i)).toBeInTheDocument();
  
  // Check for Waitlist section title
  expect(screen.getByText(/Join the Energy Independence Movement/i)).toBeInTheDocument();
});
