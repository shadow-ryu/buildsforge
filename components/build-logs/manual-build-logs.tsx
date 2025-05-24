"use client";

import dynamic from "next/dynamic";
import { useState } from "react";


// Dynamically import MDEditor to prevent SSR issues
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

export default function MarkdownEditor({
  content = "",
  onChange,
  className = "",
}: {
  content?: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  const [value, setValue] = useState<string>(content);

  const handleChange = (val: string | undefined) => {
    setValue(val || "");
    onChange(val || "");
  };

  return (

      <div data-color-mode="" className={className}>
        <MDEditor
          value={value}
          onChange={handleChange}
          height={500}
          preview="live"
        />
      </div>
  );
}
