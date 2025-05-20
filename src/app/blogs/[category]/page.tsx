interface CategoryParams {
  params: Promise<{ category: string }>;
}
export default async function BlogPage({ params }: CategoryParams) {
  const { category } = await params;
  // ... rest of your component
  return (
    <div>
      <h1>Category: {category}</h1>
    </div>
  );
}
