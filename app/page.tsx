import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>We are&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>working&nbsp;</h1>
        <br />
        <h1 className={title()}>
          to build <div className={title({ color: "blue" })}>Beautiful</div>,{" "}
          <div className={title({ color: "violet" })}>Blazingly</div> fast
          internet.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Extremely Powerful Internet.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          as={NextLink}
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
