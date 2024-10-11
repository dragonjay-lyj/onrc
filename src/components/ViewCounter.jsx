// src/components/ViewCounter.jsx
import React, { useEffect } from 'react';

export default function ViewCounter({ slug }) {
  useEffect(() => {
    // 模拟浏览量统计
    const views = localStorage.getItem(`views-${slug}`) || 0;
    localStorage.setItem(`views-${slug}`, parseInt(views) + 1);
  }, [slug]);

  return null;
}
