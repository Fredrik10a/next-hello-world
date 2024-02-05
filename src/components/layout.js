// components/layout.js
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Add meta tags, title, or other head elements here */}
        <title>Your Page Title</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
