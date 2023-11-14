import getNavbarData from '@/lib/getData/getNav';

// Define the interfaces as mentioned above
interface Page {
  url: string;
  entry_id: string; // or string, depending on your data structure
  // Add any other properties that your pages have
}

interface NavItem {
  page: Page;
  children?: NavItem[]; // Optional property if an item can have children
}

// Now use the NavItem interface for the tree and the Page interface for the return type
const findPageInTree = (tree: NavItem[], slugWithLang: string): Page | null => {
  for (const item of tree) {
    if (item.page.url === slugWithLang) {
      return item.page;
    }
    if (item.children && item.children.length > 0) {
      const childPage = findPageInTree(item.children, slugWithLang);
      if (childPage) {
        return childPage;
      }
    }
  }
  return null;
};

// Explicitly type the return type of the usePageID hook
const UsePageID = async (slug: string, lng: string): Promise<string | null> => {
  const data = await getNavbarData();
  const navTree = lng === 'en' ? data?.nav.treeEn : data?.nav.treeAr;

  // Adjust the slug based on language
  const adjustedSlug = lng === 'en' ? `/en/${slug}` : `/${slug}`;

  // Find the page using the adjusted slug
  const pageID = findPageInTree(navTree, adjustedSlug);

  return pageID ? pageID.entry_id : null;
};

export default UsePageID;
