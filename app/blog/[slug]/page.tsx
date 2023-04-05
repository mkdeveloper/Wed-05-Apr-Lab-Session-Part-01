import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const getApost = async ({ slug }: { slug: string }) => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog2&fields.slug=${slug}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to Fetch data");
  }

  const data = await res.json();

  return data;
};

const SinglePost = async ({ params }: { params: { slug: string } }) => {
  const post = await getApost(params);
  console.log(post);
  return <div>{params.slug}</div>;
};

export default SinglePost;
