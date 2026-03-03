// src/components/resource/LoadMore.jsx
import { useRef, useState } from "react";
import { fetchPosts } from "../../lib/getPostData";

export default function LoadMore({ pagesize, InitpageInfo }) {
    const [posts, setPosts] = useState([]);
    const [currentPInfo, setCurrentPInfo] = useState(InitpageInfo);
    const [loading, setLoading] = useState(false);

    const divRef = useRef(null);

    const loadMore = async () => {
        setLoading(true);
        const { posts, pageInfo } = await fetchPosts(pagesize, currentPInfo?.endCursor || null);

        setPosts(prev => [...prev, ...posts]);
        setCurrentPInfo(pageInfo)
        setLoading(false);

        if (divRef.current) {
            divRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>{
            posts.length > 0 &&
            <div className="grid grid-cols-3 gap-6">
                {posts.map((post, i) => (
                    <div key={i}
                        className="bg-card p-6 w-full xl:h-[495px] 2xl:h-[510px] rounded-3xl flex flex-col gap-4"
                    >
                        <img
                            src={post.featuredImage?.node?.sourceUrl}
                            alt={post.title}
                            className="w-full h-[200px] xl:h-[240px] 2xl:h-[250px] rounded-lg object-cover"
                        />

                        <div className="flex flex-col items-start gap-2">
                            <h3 className="text-2xl font-nunito font-semibold text-heading">
                                {post.title}
                            </h3>
                            <p
                                className="text-paragraph text-base leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                        <div className="flex justify-start">
                            <button
                                className="bg-secondary text-heading flex items-center gap-2 py-3 w-fit
                                h-fit px-10 cursor-pointer font-medium rounded-full"
                            >
                                DownLoad
                                <img src="/src/assets/resource/download.png" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        }
            {
                currentPInfo?.hasNextPage &&
                <div className="flex justify-center"
                    ref={divRef}>
                    <button onClick={loadMore} disabled={loading}
                        className="bg-white border border-secondary hover:bg-secondary hover:border-white
                    text-heading flex items-center gap-2 py-3 w-fit hover:text-white
                    h-fit px-8 cursor-pointer font-medium rounded-full"
                    >
                        {loading ? "Loading..." : "Load More"}
                    </button>
                </div>
            }
        </>
    );
}

