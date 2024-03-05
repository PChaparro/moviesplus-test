import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <main className='container'>
      This is the index
      <section id='categories'>Categories</section>
    </main>
  );
}
