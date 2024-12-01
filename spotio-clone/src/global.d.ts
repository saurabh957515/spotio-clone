// global.d.ts
declare module '*.jsx' {
    import { FC } from 'react';
    const component: FC;
    export default component;
  }
  