import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const NavBar = () => {
  const { t } = useTranslation('app-bar');
  const router = useRouter();
  const activeTabStyle = "border-b-2 border-lime1 text-lime1";

  return (
    <>
      <ul className="flex justify-center w-full px-1 pt-2 text-black font-gibson2 text-base col-span-2  md:col-end-6 lg:col-end-8 invisible lg:visible">
        <li className={`px-4 rounded-t cursor-pointer ${router.pathname == '/' && activeTabStyle}`}><Link href="/">{t('home')}</Link></li>
        <li className={`px-4 rounded-t cursor-pointer ${router.pathname == '/Leaderboard' && activeTabStyle}`}><Link href="/Leaderboard">{t('leaderboard')}</Link></li>
      </ul>
    </>
  );
};

export default NavBar;
