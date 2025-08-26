
import { useMemo, useState, useEffect } from "react";
import { MDXProvider } from '@mdx-js/react'

import Button from './components/Button.jsx';
import Card from './components/Card.jsx';
import './index.css';


// App.jsx (router setup)
import BlogPost from './pages/BlogPost'
import Home from './pages/Home'



const mdxComponents = {
  h1: (props) => <h1 className="t-heading font-bold mt-6" {...props} />,
  p: (props) => <p className="t-body my-4 leading-relaxed" {...props} />,
  img: (props) => <img className="rounded shadow max-w-full h-auto" {...props} />,
}

function AppLayout({ children }) {
  return (
    <MDXProvider components={mdxComponents}>
      {children}
    </MDXProvider>
  )
}

export default AppLayout