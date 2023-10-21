import useSimpleQuery from '../../features/network/useSimpleQuery';
import { z } from 'zod';

/**
 * An example parser
 * Creates a zod schema for an array of posts, which can be used to validate the response of a query
 */
const postParser = z.array(
    z.object({
        userId: z.number(),
        id: z.number(),
        title: z.string(),
        body: z.string()
    })
);

/**
 * Full example of a component fetching, validating, and displaying data from an API
 */
const QueryExample = () => {
    const {
        data: posts,
        isPending,
        error
    } = useSimpleQuery(['queryExample'], 'https://jsonplaceholder.typicode.com/posts', postParser);

    // While waiting for the first set of data to arrive, display a loading message
    if (isPending) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    // If there was an error with the request, display it. This includes both network errors and validation errors
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    // Everything is fine, display the data
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
