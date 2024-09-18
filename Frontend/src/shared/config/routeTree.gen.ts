/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from '../../routes/__root';
import { Route as IndexImport } from '../../routes/index';
import { Route as TestIndexImport } from '../../routes/Animals/index';

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const TestIndexRoute = TestIndexImport.update({
  path: '/test/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/test/': {
      id: '/test/';
      path: '/test';
      fullPath: '/test';
      preLoaderRoute: typeof TestIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute;
  '/test': typeof TestIndexRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute;
  '/test': typeof TestIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexRoute;
  '/test/': typeof TestIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/' | '/test';
  fileRoutesByTo: FileRoutesByTo;
  to: '/' | '/test';
  id: '__root__' | '/' | '/test/';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  TestIndexRoute: typeof TestIndexRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  TestIndexRoute: TestIndexRoute,
};

export const routeTree = rootRoute._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>();

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/test/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/test/": {
      "filePath": "test/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
