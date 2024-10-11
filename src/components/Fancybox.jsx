import React, { useRef, useEffect } from "react";

import * as Fancyapps from "@fancyapps/ui";
const NativeFancybox = Fancyapps.Fancybox;
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Fancybox(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;