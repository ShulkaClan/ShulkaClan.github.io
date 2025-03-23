'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Info() {
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
        backgroundColor: '#f9f9f9',
        padding: '20px',
      }}
    >
      {/* Logo */}
      <Image
        src="/logo.webp"
        alt="Logo"
        width={200}
        height={100}
        priority
        style={{ zIndex: 1 }}
      />

      <h1
        style={{
          fontFamily: 'MyCustomFont, sans-serif',
          fontWeight: 'bold',
          fontSize: '2rem',
          color: 'black',
          marginBottom: '20px',
        }}
      >
        What the Hell is This?
      </h1>

      <p
        style={{
          maxWidth: '600px',
          fontSize: '1.2rem',
          color: '#333',
          fontFamily: 'Georgia, serif',
          lineHeight: '1.6',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        Lo, thou hath stumbled upon <strong>Lafra</strong>, the fairest digital realm where jest meets jesters,
        and the spirits of DPS Ruby Park doth reside. A place where one mayst truly admire the grand halls of
        DPS, and perchance... <em>shake thy spheres</em> in reverence.
        <br /><br />
        For what is school, if not a stage? And we — merely players, pranking, laughing, and passing the test of time.
      </p>

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
          Return to the Stage (Home)
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
