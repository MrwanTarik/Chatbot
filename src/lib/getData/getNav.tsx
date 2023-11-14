import { getClient } from '../client';
import { query } from '../queries/navbarQuery';

const getNavbarData = async () => {
  const { data } = await getClient().query({
    query,
    // context: {
    //   fetchOptions: {
    //     next: { revalidate: 5 },
    //   },
    // },
  });
  return data;
};

export default getNavbarData;
