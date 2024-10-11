import React, { useEffect, useRef } from 'react';
import {
  type WalineInstance,
  type WalineInitOptions,
  init,
} from '@waline/client';

import '@waline/client/style';

export type WalineOptions = Omit<WalineInitOptions, 'el'> & {
  path: string;
  // 添加 pageview 和 emoji 属性
  pageview?: boolean;
  emoji?: Array<string>;
};

export const Waline = (props: WalineOptions) => {
  const walineInstanceRef = useRef<WalineInstance | null>(null);
  const containerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
      // 将pageview和emoji属性从props中提取出来
      ...(props.pageview !== undefined && { pageview: props.pageview }),
      ...(props.emoji && { emoji: props.emoji }),
    });

    return () => walineInstanceRef.current?.destroy();
  }, [props.path, props.pageview, props.emoji]); // 添加到依赖项数组中以便在这些值变化时更新Waline实例

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, [props]);

  return <div ref={containerRef} />;
};