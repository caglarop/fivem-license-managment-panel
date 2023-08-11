import { SquadButtonLink } from "../buttons/SquadButtonLink";
import { DiscordIcon } from "../icons/DiscordIcon";

export const Footer = () => {
  return (
    <footer className="border-t py-4 text-sm px-8 lg:px-12 grid lg:flex gap-4 items-center">
      <div className="flex-1">
        <span>
          &copy; 2023 <a href="https://cmd-scripts.com">CMD-Scripts.com</a>. All
          rights reserved.
        </span>
      </div>

      <div className="text-end">
        <SquadButtonLink
          href="https://discord.gg/GVjSqzRpqq"
          target="_discord"
          className="!bg-[#7289da] !text-white !p-1.5 !h-8 !w-8"
        >
          <DiscordIcon />
        </SquadButtonLink>
      </div>
    </footer>
  );
};
