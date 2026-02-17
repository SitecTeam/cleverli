import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Episodes", href: "/episodes" },
  { name: "Contact", href: "/contact" },
];

const defaultActions = (
  <div className="flex w-105 max-w-full min-w-0 justify-end gap-2">
    <div className="min-w-0 flex-1">
      <Button className="w-full">Listen now</Button>
    </div>
    <div className="min-w-0 flex-1">
      <Button className="w-full">Watch On Youtube</Button>
    </div>
  </div>
);

const homeActions = <div className="flex gap-2" />;

type HeaderVariant = "home" | "default";

type HeaderProps = {
  variant?: HeaderVariant;
};

const Header = ({ variant = "default" }: HeaderProps) => {
  const contentByVariant: Record<HeaderVariant, React.ReactNode> = {
    default: defaultActions,
    home: homeActions,
  };

  return (
    <div className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-10 bg-transparent px-10.5">
      <div className="justify-self-start">Logo</div>
      <nav className="flex gap-14 justify-self-center">
        {navItems.map(item => (
          <a key={item.href} href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>
      <div className="flex w-full min-w-0 justify-end justify-self-end">
        {contentByVariant[variant]}
      </div>
    </div>
  );
};

export default Header;
