import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: Index,
});

function Index() {
  return <main className='container'>This is the Sign in</main>;
}
