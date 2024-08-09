import Link from "next/link";
import { Button } from "../ui/button";
import { FaNoteSticky } from "react-icons/fa6";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaNoteSticky className="w-6 h-6" />
      </Link>
    </Button>
  );
};
export default Logo;
