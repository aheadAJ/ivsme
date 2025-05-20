interface Props {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function BlogPage({ params }: Props) {
  const { category, slug } = await params;

  return (
    <div>
      <h1>Category: {category}</h1>
      <h2>Slug: {slug}</h2>
    </div>
  );
}
