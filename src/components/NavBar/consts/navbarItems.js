import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';

export const mainNavbarItems = [
  {
		id: 0,
		icon: <HomeIcon />,
		label: 'Home',
		route: '/',
	},
	{
		id: 1,
		icon: <ArticleIcon />,
		label: 'Posts',
		route: 'posts',
	},
	{
		id: 2,
		icon: <PeopleIcon />,
		label: 'Authors',
		route: 'authors',
	},
	{
		id: 3,
		icon: <InfoIcon />,
		label: 'About',
		route: 'about',
	},
	{
		id: 4,
		icon: <CategoryIcon />,
		label: 'Categories',
		route: 'categories',
	},
	{
		id: 5,
		icon: '',
		label: 'About Taktsoft',
		route: 'https://taktsoft.com',
	},
];