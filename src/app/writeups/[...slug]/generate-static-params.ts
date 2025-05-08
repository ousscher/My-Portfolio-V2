import { getAllWriteups } from '@/lib/markdown';

export async function generateStaticParams() {
  const writeups = getAllWriteups();

  return writeups.map((w) => ({
    slug: w.slug.split('/'),
  }));
}
