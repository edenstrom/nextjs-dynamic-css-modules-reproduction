"use client";
import dynamic from "next/dynamic";

const MyComponent = dynamic(() => import('./MyComponent').then(m => m.MyComponent), { ssr: false });

export const ClientComponent = () => {
  return <MyComponent />
}