import React from 'react'
import { createRoot } from 'react-dom/client';
import { Badge } from "dse";
import "dse/dist/output.css";

const Index = () => {
  return (
    <Badge>Index</Badge>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Index />);