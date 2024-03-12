import { cva } from "class-variance-authority";

// Base definition
const base = "inline-flex";



const button = cva(base, {
  variants: {
    intent: {
      accueil: [
        "bg-buttonaccueil",
        "text-texttitle",
        "hover:bg-buttonaccueil/80",
        "rounded-full",
        "py-2",
        "px-5",
        "font-bold",
      ],
      false: [
        "bg-buttonfalse",
        "text-forground",
        "hover:bg-buttonaccueil/80",
        "rounded-full",
        "py-2",
        "px-5",
        "font-bold",
      ],
      true: [
        "bg-buttontrue",
        "text-forground",
        "hover:bg-buttonaccueil/80",
        "rounded-full",
        "py-2",
        "px-5",
        "font-bold",
      ],
      accueilnom: [
        "bg-buttoncompte",
        "text-forground",
        "hover:bg-buttonaccueil/80",
        "rounded-full",
        "py-2",
        "px-5",
        "font-bold",
      ],
      accueil2: [
        "bg-buttoncompte2",
        "text-forground",
        "hover:bg-buttonaccueil/80",
        "rounded-full",
        "py-2",
        "px-5",
        "font-bold",
      ],
    },
    size: {
      categories: ["text-sm"],
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

function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}

export default function Buttons() {
  return (
    <div className="grid bg-background h-screen place-content-center">
      <Button>Click me</Button>
      <Button intent="false">Click me</Button>
      <Button intent="true">Click me</Button>
      <Button intent="accueilnom">Louise</Button>
      <Button intent="accueil2">Ajouter un compte</Button>
    </div>
  );
}