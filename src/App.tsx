import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProviderGlobal } from "./contexts";

const pages: any = import.meta.glob("./pages/**/*.tsx", { eager: true });

const routes: Array<any> = [];
for (const path in pages) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router: any = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

const App = () => {
  return (
    <ProviderGlobal>
      <RouterProvider router={router} />
    </ProviderGlobal>
  );
};

export default App;
