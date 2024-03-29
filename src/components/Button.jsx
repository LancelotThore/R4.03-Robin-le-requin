import { cva } from "class-variance-authority";

// Base definition
const base = "inline-flex rounded-full py-2 px-5 font-bold text-center items-center min-w-full";

const button = cva(base, {
  variants: {
    intent: {
      accueil: [
        "bg-buttonaccueil",
        "text-texttitle",
        "hover:bg-buttonaccueil/80",
      ],
      false: [
        "bg-buttonfalse",
        "text-forground",
        "hover:bg-buttonfalse/80",
        "justify-center"
      ],
      true: [
        "bg-buttontrue",
        "text-forground",
        "hover:bg-buttontrue/80",
        "justify-center"
      ],
      accueilnom: [
        "bg-buttoncompte",
        "text-forground",
        "hover:bg-buttoncompte/80",
        "justify-center"
      ],
      submit: [
        "bg-buttoncompte2",
        "text-forground",
        "hover:bg-buttoncompte2/80",
        "justify-center"
      ],
    },
    size: {
      small: ["text-sm", "py-0.5", "px-1"],
      medium: ["text-base", "py-3", "px-6"],
    },
  },
  compoundVariants: [{ intent: "accueil", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "accueil",
    size: "medium",
    class: "uppercase",
  },
});

export default function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}