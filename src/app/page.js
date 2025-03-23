'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [headingText, setHeadingText] = useState('');
  const headingOptions = ['Lafra', 'Welcome to Hell®', 'Explore Lafra', 'Discover Lafra'];

  useEffect(() => {
    const randomText = headingOptions[Math.floor(Math.random() * headingOptions.length)];
    setHeadingText(randomText);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source
          src="/background.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={100}
        priority
        style={{ zIndex: 1 }}
      />

      {/* Dynamically changing heading */}
      <h1
        style={{
          fontFamily: 'MyCustomFont, sans-serif',
          fontWeight: 'bold',
          fontSize: '2rem',
          color: 'black',
          zIndex: 1,
        }}
      >
        {headingText}
      </h1>

      {/* Login Button */}
      <Link href="/login">
        <button
          id="login"
          onClick={(e) => {
            // Permanent style change on click
            e.currentTarget.style.borderRadius = '0px';
            e.currentTarget.style.margin = '0px';
            e.currentTarget.style.width = '100px';
            e.currentTarget.style.height = '30px';
            e.currentTarget.style.color = 'black';
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.border = '2px solid white';
          }}
          style={{
            borderRadius: '50px',
            margin: '5px',
            width: '100px',
            height: '30px',
            color: 'white',
            backgroundColor: 'black',
            border: '2px solid black',
          }}
        >
          Login
        </button>
      </Link>

      {/* Info Button */}
      <Link href="/info">
        <button
          style={{
            borderRadius: '50px',
            width: '200px',
            minHeight: '30px',
            margin: '5px',
            color: 'black',
            border: '2px solid black',
            backgroundColor: 'transparent',
          }}
        >
          What the hell is this?
        </button>
      </Link>

      {/* Custom Font */}
      <style jsx>{`
        @font-face {
          font-family: 'MyCustomFont';
          src: url('/fonts/Gotham-Black.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </div>
  );
}
