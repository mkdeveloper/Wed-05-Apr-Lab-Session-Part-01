import Image from "next/image";
import Link from "next/link";

const getBlog = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog2`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to Fetch Data");
  }

  const data = await res.json();

  return data;
};

const Blog = async () => {
  const posts = await getBlog();
  //   console.log(post);
  return (
    <div className="max-w-[1240px] mx-auto pt-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 content-center justify-center">
        {posts.items.map((item: any) => (
          <div key={item.sys.id}>
            {/* image */}
            <div>
              {posts.includes.Asset.map((a: any) => (
                <div key={a.sys.id}>
                  {item.fields.img.sys.id == a.sys.id ? (
                    <Image
                      src={"https:" + a.fields.file.url}
                      alt="/"
                      width={1000}
                      height={1000}
                      className="rounded-xl max-h-40"
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
            {/* image */}
            {/* title */}
            <div>
              <h2>{item.fields.title}</h2>
            </div>
            {/* title */}
            {/* author */}
            {posts.includes.Entry.map((e: any) => (
              <div key={e.sys.id}>
                {item.fields.creator.sys.id == e.sys.id ? (
                  <div>
                    <p>Author: {e.fields.name}</p>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
            {/* author */}
            {/* Link */}
            <div>
              <Link href={`/blog/${item.fields.slug}`}>Read more...</Link>
            </div>
            {/* Link */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
