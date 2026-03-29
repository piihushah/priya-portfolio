// src/pages/ComponentLibrary.jsx
import ComponentLibrary from "../data/component-library.mdx";

export default function ComponentLibraryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="prose dark:prose-invert">
        <ComponentLibrary />
      </div>
    </div>
  );
}
