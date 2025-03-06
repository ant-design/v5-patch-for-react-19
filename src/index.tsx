'use client';

import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

type RenderType = Parameters<typeof unstableSetRender>[0];
type ContainerType = Parameters<RenderType>[1] & {
  _reactRoot?: ReturnType<typeof createRoot>;
};

unstableSetRender((node, container: ContainerType) => {
  container._reactRoot ||= createRoot(container);
  const root: ReturnType<typeof createRoot> = container._reactRoot;
  root.render(node);

  return () =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        root.unmount();
        resolve();
      }, 0);
    });
});


// Fix the warning for next-15 : antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.
export default function Fix(){
  return null
}