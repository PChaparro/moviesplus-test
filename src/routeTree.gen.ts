/* prettier-ignore-start */

/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// This file is auto-generated by TanStack Router
// Import Routes
import { Route as rootRoute } from './routes/__root';
import { Route as IndexImport } from './routes/index';
import { Route as LoginImport } from './routes/login';

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/login': {
      preLoaderRoute: typeof LoginImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([IndexRoute, LoginRoute]);

/* prettier-ignore-end */
