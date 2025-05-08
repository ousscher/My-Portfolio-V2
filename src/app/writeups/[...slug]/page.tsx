import { getAllWriteups, getWriteupBySlug } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string[];
  };
};

//dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const writeup = await getWriteupBySlug(params.slug);
  if (!writeup) return {};

  return {
    title: writeup.metadata.title,
    description: `${writeup.metadata.category} writeup by ${writeup.metadata.author}`,
  };
}

export default async function WriteupPage({ params }: Props) {
  const writeup = await getWriteupBySlug(params.slug);

  if (!writeup) return notFound();

  const { metadata, contentHtml } = writeup;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">{metadata.title}</h1>
      <p className="text-sm text-gray-500 mt-1">
        By {metadata.author} | {metadata.date} | {metadata.category}
      </p>
      <article
        className="prose prose-lg mt-6"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
