import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 rounded text-black/60 sm:text-xl md:p-0 hover:text-black">
      {title}
    </Link>
  );
};

export default NavLink;