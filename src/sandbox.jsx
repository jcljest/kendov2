import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { withRoute } from "./routing/withRoute";

// super-simple presentational component to wrap
const Box = React.forwardRef(function Box({ children, ...props }, ref) {
  return (
    <div
      ref={ref}
      style={{
        padding: 16,
        border: "1px solid #ccc",
        borderRadius: 12,
        display: "inline-block",
      }}
      {...props}
    >
      {children}
    </div>
  );
});

const RoutableBox = withRoute(Box);

function App() {
  return (
    <MemoryRouter /* no full router needed for <Link/> to work */>
      <div style={{ display: "grid", gap: 16, padding: 24 }}>
        <RoutableBox data-testid="plain">Plain (no `to`)</RoutableBox>

        <RoutableBox to="/blog/abc" linkProps={{ "aria-label": "go" }}>
          As Link → /blog/abc
        </RoutableBox>

        <RoutableBox to="/blog/abc" avoidWrap>
          avoidWrap=true (no Link wrapper)
        </RoutableBox>
      </div>
    </MemoryRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);