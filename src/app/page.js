import Card from "@/components/shared/cards/Card";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold py-3">
        Welcome to Blog's Sai
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((post) => <Card key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default page