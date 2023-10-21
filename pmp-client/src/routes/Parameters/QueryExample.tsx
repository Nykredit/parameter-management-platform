import useSimpleQuery from '../../features/network/useSimpleQuery';
import { z } from 'zod';

const postParser = z.array(
    z.object({
        userId: z.number(),
        id: z.number(),
        title: z.string(),
        body: z.string()
    })
);

const QueryExample = () => {
    const {
        data: posts,
        isPending,
        error
    } = useSimpleQuery(['queryExample'], 'https://jsonplaceholder.typicode.com/posts', postParser);

    if (isPending) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <p>Posts:</p>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default QueryExample;
