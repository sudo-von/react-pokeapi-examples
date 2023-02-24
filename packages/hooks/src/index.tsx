import React from 'react'
import { createRoot } from 'react-dom/client';
import { Badge } from "dse";

const Index = () => {
  return (
    <Badge>Indexsssxs</Badge>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Index />);

if (module.hot) module.hot.accept();