import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main className="bg-blue-200-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1>Hello World</h1>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {/* Additional content goes here */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-green-500 p-4 rounded shadow-md text-gray-800">
                {/* Content of each box */}
                Box {index + 1}
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
