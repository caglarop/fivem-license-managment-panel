import { SquadButtonLink } from "../buttons/SquadButtonLink";
import { DiscordIcon } from "../icons/DiscordIcon";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[#E3FB86]/5 to-transparent px-8 lg:px-12 flex items-center justify-center h-[250px]">
      <div className="grid lg:grid-cols-2 gap-8 w-full">
        <div className="flex items-center">
          <div className="grid gap-2">
            <h1 className="text-4xl lg:text-6xl font-semibold text-primary">
              CMD Scripts
            </h1>
            <h1 className="text-2xl lg:text-4xl font-semibold text-white">
              License Panel
            </h1>
          </div>
        </div>
        <div className="w-full flex lg:justify-end items-center gap-4">
          <div>
            <SquadButtonLink
              href="https://discord.gg/GVjSqzRpqq"
              target="_discord"
              className="bg-[#7289da] text-white p-2"
            >
              <DiscordIcon />
            </SquadButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
};
