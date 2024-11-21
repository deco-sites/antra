import {
  type BlogPost,
  BlogPostPage,
  Category,
  ExtraProps,
} from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

interface List {
  title: string;
  paragraph: string;
}

interface Topic {
  title: string;
  paragraph?: string[];
  list: List[];
  image?: ImageWidget;
}

interface RelatedPosts {
  title: string;
  tag: string;
  image?: ImageWidget;
}

interface Props {
  page?: BlogPostPage | null;
  relatedPosts: BlogPost[] | null;
}

const PARAGRAPH_STYLES = "[&_p]:leading-[150%] [&_*]:mb-4";
const HEADING_STYLES =
  "[&>h1]:text-4xl [&>h1]:my-6 [&>h1]:font-bold [&>h2]:text-3xl [&>h2]:my-6 [&>h2]:font-bold [&>h3]:text-2xl [&>h3]:my-6 [&>h3]:font-bold [&>h4]:text-xl [&>h4]:my-6 [&>h4]:font-bold [&>h5]:text-lg [&>h5]:my-6 [&>h5]:font-bold [&>h6]:text-base [&>h6]:my-6 [&>h6]:font-bold";
const CODE_BLOCK_STYLES =
  "[&>pre]:bg-gray-100 [&>pre]:text-gray-800 [&>pre]:p-4 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:border [&>pre]:rounded-md [&>pre]:overflow-x-auto [&>code]:block [&>code]:w-full";
const IMAGE_STYLES = "[&_img]:rounded-2xl [&_img]:w-full [&_img]:my-12";
const BLOCKQUOTE_STYLES =
  "[&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-black [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:pl-6";

const CONTENT_STYLES = `max-w-3xl mx-auto ${PARAGRAPH_STYLES} ${HEADING_STYLES} ${CODE_BLOCK_STYLES} ${IMAGE_STYLES} ${BLOCKQUOTE_STYLES}`;

const DEFAULT_PROPS: BlogPost = {
  title: "Blog title heading will go here",
  excerpt: "Excerpt goes here",
  authors: [
    {
      name: "Full name",
      email: "author@deco.cx",
    },
  ],
  categories: [],
  date: "20 de maio de 2024",
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
  slug: "blog-post",
  content:
    '<h1>Heading 1</h1><p>This is a paragraph under <strong>Heading 1</strong>. It can contain <em>italic</em> text, <strong>bold</strong> text, and even <code>code snippets</code>.</p><h2>Introduction</h2><p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p><p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p><h2>Heading 2</h2><p>More text can be placed here. This section is under <strong>Heading 2</strong>.</p><h3>Heading 3 with Code Block</h3><p>This is an example of a code block:</p><pre><code>// This is a code block console.log("Hello, World!");</code></pre><h4>Heading 4 with Image</h4><p>Below is an image:</p><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9" alt="Description of Image"><p><strong>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</strong></p><p>Collaboratively deploy intuitive partnerships whereas customized e-markets. Energistically maintain performance based strategic theme areas whereas just in time methodologies. Phosfluorescently drive functionalized intellectual capital and.</p><blockquote>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."</blockquote><p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.<h2>Conclusion</h2><p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p><p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p><p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>',
};

const RelatedPosts = ({ relatedPosts, extraProps }: any) => {
  const tagLa = extraProps.reduce((acc: string[], item: ExtraProps) => {
    if (item.key === "tag") {
      acc.push(item.value);
    }
    return acc;
  }, []);

  const filteredPosts = relatedPosts.filter(
    (post: BlogPost) =>
      post.categories?.some((category: Category) => category.slug === "news") &&
      post.extraProps?.some(
        (prop) => prop.key === "tag" && tagLa.includes(prop.value)
      )
  );

  const relatedPostsFilter = filteredPosts?.slice(0, 3) || [];
  console.log("tagLa: ", relatedPostsFilter);

  return (
    <div class="pb-32">
    <h2 class="text-2xl md:text-4xl font-bold leading-snug mb-8">
            Posts relacionados
          </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      {relatedPostsFilter?.map((news: BlogPost, index: number) => (
        <a href={`${news.slug}`}>
          <div
            class="relative w-full h-full col-span-1 flex justify-center"
            key={index}
          >
            <div class="overflow-hidden flex flex-col items-center w-full max-w-[400px]">
              {news?.image && (
                <Image
                  width={408}
                  height={232}
                  class="h-[232px] object-cover z-10 rounded-lg"
                  src={news?.image}
                  alt={news?.image}
                  decoding="async"
                  loading="lazy"
                />
              )}
              <div class="p-1 py-4 space-y-4 text-start w-full">
                <div class="flex flex-wrap gap-2">
                  {news.extraProps?.map((item, i) => {
                    return item.key === "tag" ? (
                      <div
                        className="badge badge-lg text-xs border border-gray-500 bg-transparent 
                              hover:bg-custom-gray hover:text-white hover:border-white"
                        key={i}
                      >
                        {item.value}
                      </div>
                    ) : null;
                  })}
                </div>
                <h3 class="text-lg font-semibold mt-2">{news.title}</h3>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
    </div>
  );
};

export default function Post({ page, relatedPosts }: Props) {
  const { title, authors, image, date, content, extraProps } =
    page?.post || DEFAULT_PROPS;

  return (
    <div className="lg:container text-sm mb-40">
      <div className="space-y-10">
        <div class="px-6 flex flex-col items-center gap-8">
          <Image
            width={380}
            height={274}
            class="object-cover w-full max-h-[456px] mt-20 rounded-2xl"
            sizes="(max-width: 640px) 100vw, 20vw"
            src={image || ""}
            alt={image}
            decoding="async"
            loading="lazy"
          />
          <div class="w-full max-w-[650px] flex flex-col gap-5">
            <div class="md:flex flex-wrap gap-2 w-full justify-start">
              {extraProps?.map((item, i) => {
                return item.key === "tag" ? (
                  <div
                    className="badge badge-lg text-xs border border-gray-500 bg-transparent
                      hover:bg-custom-gray hover:text-white hover:border-white"
                    key={i}
                  >
                    {item.value}
                  </div>
                ) : null;
              })}
            </div>
            <h1 class="text-3xl font-bold">{title}</h1>
            <div>
              <span class="underline">{authors[0].name}</span> •{" "}
              <span>{date}</span>
            </div>
            <hr />
            <div class="w-full flex justify-between items-center">
              <p>Compartilhe esse post</p>
              <div class="flex gap-5">
                <Icon id="Instagram" size={24} />
                <Icon id="Twitter" size={24} />
                <Icon id="Linkedin" size={24} />
                <Icon id="Facebook" size={24} />
              </div>
            </div>

            <hr />
            <div
              class={CONTENT_STYLES}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
        </div>
        <RelatedPosts relatedPosts={relatedPosts} extraProps={extraProps} />
      </div>
    </div>
  );
}
