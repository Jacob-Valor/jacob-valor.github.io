// theme/index.tsx
import { Search as PluginAlgoliaSearch } from "@rspress/plugin-algolia/runtime";

const Search = () => {
  return (
    <PluginAlgoliaSearch
      docSearchProps={{
        appId: "YRM4ENN0OT", // Replace with your own Algolia appId
        apiKey: "dc0687cd4ad3bf9ed5d6c3249a68aafe", // Replace with your own Algolia apiKey
        indexName: "web-blog", // Replace with your own Algolia indexName
      }}
    />
  );
};
export { Search };
export * from "@rspress/core/theme-original";
