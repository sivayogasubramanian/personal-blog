// deno-lint-ignore-file

import { h } from "https://deno.land/x/htm@0.0.10/mod.tsx";

/** @jsx h */

export function IconPortfolio(): h.JSX.Element {
  return (
    <svg
      className="inline-block w-5 h-5"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8,1L1,6v9h5v-4c0-1.105,0.895-2,2-2s2,0.895,2,2v4h5V6L8,1z"
        fill="currentColor"
      />
    </svg>
  );
}
