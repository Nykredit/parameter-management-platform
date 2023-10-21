import { QueryKey, UseQueryResult, useQuery } from '@tanstack/react-query';

import axios from 'axios';
import { z } from 'zod';

type UseSimpleQuery = {
    <TData>(queryKey: QueryKey, url: string): UseQueryResult<TData>;
    <TParser extends z.ZodType>(queryKey: QueryKey, url: string, parser: TParser): UseQueryResult<z.infer<TParser>>;
};

const useSimpleQuery = (<TData>(queryKey: QueryKey, url: string, parser?: z.ZodType<TData>) => {
    return useQuery({
        queryKey,
        queryFn: async () => {
            const response = await axios.get<TData>(url);
            if (parser) return parser.parse(response.data);
            return response.data;
        }
    });
}) as UseSimpleQuery;

export default useSimpleQuery;
