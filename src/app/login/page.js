'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
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
      {/* DPS Ruby Park Background Image */}
      <Image
        src="/dps-ruby-park.jpg" // Replace with your actual image in /public
        alt="DPS Ruby Park Background"
        layout="fill"
        objectFit="cover"
        style={{ zIndex: -1 }}
      />

      {/* Logo */}
      <Image
        src="/logo.webp"
        alt="Logo"
        width={200}
        height={100}
        priority
        style={{ zIndex: 1 }}
      />

      {/* Login Heading */}
      <h1
        style={{
          fontFamily: 'MyCustomFont, sans-serif',
          fontWeight: 'bold',
          fontSize: '2rem',
          color: 'black',
          zIndex: 1,
        }}
      >
        Login to Lafra
      </h1>

      {/* Dummy Login Form */}
      <form style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Username"
          style={{
            padding: '10px',
            margin: '5px',
            borderRadius: '20px',
            border: '1px solid black',
            width: '200px',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: '10px',
            margin: '5px',
            borderRadius: '20px',
            border: '1px solid black',
            width: '200px',
          }}
        />

        <button
          type="submit"
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
      </form>

      <Link href="/">
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
          Back to Home
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
