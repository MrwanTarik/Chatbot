// Import necessary dependencies
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useEffect, useState } from 'react';

// Define the types for your query data and variables
interface EntryData {
  entry: {
    id: string;
    seo_image: {
      path: string;
    };
    seo_description: string;
    seo_title: string;
    title: string;
    main_class_wrapper: string;
  };
}

interface QueryVariables {
  site: string;
  id: string;
}

// Define the type for the hook's return value
interface HookReturnValue {
  seo_description: string;
  seo_title: string;
  id: string;
  title: string;
  seo_image: string;
  main_class_wrapper: string;
}

// Define your custom hook
export function useSEO(
  query: any,
  lang: string,
  pageId: string,
): HookReturnValue {
  // Define the default state
  const [result, setResult] = useState<HookReturnValue>({
    seo_description: '',
    seo_title: '',
    id: '',
    title: '',
    seo_image: '',
    main_class_wrapper: '',
  });

  // Determine the site based on the language
  const site = lang === 'en' ? 'default' : 'arabic';

  // Use the useQuery hook from Apollo Client to execute your query
  const { data } = useSuspenseQuery<EntryData, QueryVariables>(query, {
    variables: { site, id: pageId },
  });

  // When the query data changes, update the result state
  useEffect(() => {
    if (data && data.entry) {
      setResult({
        seo_description: data.entry.seo_description,
        seo_title: data.entry.seo_title,
        id: data.entry.id,
        title: data.entry.title,
        seo_image: data.entry.seo_image.path,
        main_class_wrapper: data.entry.main_class_wrapper,
      });
    }
  }, [data]);

  // Return the result state
  return result;
}
