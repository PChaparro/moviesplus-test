import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main className='container'>
      This is the index
      <section id='categories'>Categories</section>
    </main>
  );
}
