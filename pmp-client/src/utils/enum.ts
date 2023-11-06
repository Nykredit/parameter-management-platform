type Key = string | number | symbol;

/**
 * Creates a mapper function to map from one enum to another with proper type inference.
 *
 * @param from
 * @param to
 * @returns a fully typed function that maps from one enum to another
 */
export const createEnumMapper = <
    TKey1 extends Key,
    TKey2 extends Key,
    TValue1,
    TValue2,
    TR1 extends Record<TKey1, TValue1>,
    TR2 extends Record<TKey2, TValue2>
>(
    from: TR1,
    to: TR2
) => {
    return (value: (typeof from)[keyof typeof from]) => {
        const key = Object.keys(from).find((key) => from[key as TKey1] === value);
        return to[key as keyof typeof to];
    };
};
