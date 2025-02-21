import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TopScrollProgressBar from '../TopScrollProgressBar';
import '@testing-library/jest-dom';


describe('TopScrollProgressBar', () => {
  beforeEach(() => {
    // Mock window properties for scroll position
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true
    });
    Object.defineProperty(document.documentElement, 'scrollTop', {
      value: 0,
      writable: true
    });
    Object.defineProperty(document.body, 'scrollTop', {
      value: 0,
      writable: true
    });
    
    // Mock document dimensions
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 1000,
      writable: true
    });
    Object.defineProperty(document.body, 'scrollHeight', {
      value: 1000,
      writable: true
    });
    Object.defineProperty(document.documentElement, 'offsetHeight', {
      value: 1000,
      writable: true
    });
    Object.defineProperty(document.body, 'offsetHeight', {
      value: 1000,
      writable: true
    });
    
    // Mock viewport dimensions
    Object.defineProperty(window, 'innerHeight', {
      value: 800,
      writable: true
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 800,
      writable: true
    });
    Object.defineProperty(document.body, 'clientHeight', {
      value: 800,
      writable: true
    });
  });

  it('renders without crashing', () => {
    const { container } = render(<TopScrollProgressBar />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('uses default props correctly', () => {
    const { container } = render(<TopScrollProgressBar />);
    const progressBar = container.firstChild as HTMLElement;
    
    expect(progressBar).toHaveStyle({
      height: '4px',
      backgroundColor:"#ff0000"
    });
    expect(progressBar.style.backgroundColor).toBe('rgb(255, 0, 0)');
  });

  it('accepts custom height and color', () => {
    const { container } = render(
      <TopScrollProgressBar height={8} color="#00ff00" />
    );
    const progressBar = container.firstChild as HTMLElement;
    
    expect(progressBar).toHaveStyle({
      height: '8px',
      backgroundColor: '#00ff00'
    });
  });

  it('updates progress on scroll', () => {
    const { container } = render(<TopScrollProgressBar />);
    const progressBar = container.firstChild as HTMLElement;
    
    // Simulate 50% scroll
    Object.defineProperty(window, 'scrollY', { value: 100 });
    Object.defineProperty(document.documentElement, 'scrollTop', { value: 100 });
    Object.defineProperty(document.body, 'scrollTop', { value: 100 });
    fireEvent.scroll(window);
    
    expect(progressBar).toHaveStyle({ width: '50%' });
  });
});
