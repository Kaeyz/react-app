const navItems = {
	SUPERADMIN: {
		navTitle: 'Admin Portal',
		topSection: [
			{ icon: 'dashboard_home', text: 'Overview', link: '/dashboard' },
			{ icon: 'assessments', text: 'Companies', link: '/companies' },
			{ icon: 'download', text: 'Reports', link: '/reports' }
		],
		otherSection: [
			{ icon: 'settings', text: 'Settings', link: '/settings/account' }
		],
	},
	ADMIN: {
		navTitle: 'Admin Portal',
		topSection: [
			{ icon: 'dashboard_home', text: 'Overview', link: '/dashboard' },
			{ icon: 'assessments', text: 'Companies', link: '/companies' },
			{ icon: 'download', text: 'Reports', link: '/reports' }
		],
		otherSection: [
			{ icon: 'settings', text: 'Settings', link: '/settings/account' }
		],
	},
	COMPANY: {
		navTitle: 'Company Portal',
		topSection: [
			{ icon: 'dashboard_home', text: 'Overview', link: '/dashboard' },
			{ icon: 'assessments', text: 'Employees', link: '/employees' },
			{ icon: 'download', text: 'Reports', link: '/reports' },
		],
		otherSection: [
			{ icon: 'rewards', text: 'Rewards', link: '/rewards' },
			{ icon: 'settings', text: 'Settings', link: '/settings/account' },
		],
	},
	EMPLOYEE: {
		navTitle: 'Employee Portal',
		topSection: [
			{ icon: 'dashboard_home', text: 'Dashboard', link: '/dashboard' },
			{ icon: 'assessments', text: 'Assessments', link: '/assessment' },
			{ icon: 'exercise', text: 'Exercise', link: '/exercise' },
			{ icon: 'exercise', text: 'Meals', link: '/meals' },
			{ icon: 'exercise', text: 'Appointments', link: '/appointments' },
		],
		otherSection: [
			{ icon: 'download', text: 'Reports', link: '/reports' },
			{ icon: 'rewards', text: 'Rewards', link: '/rewards/individual_reward' },
			{ icon: 'settings', text: 'Settings', link: '/settings/account' },
		],
	},
	INDIVIDUAL: {
		navTitle: 'Individual Portal',
		topSection: [
			{ icon: 'dashboard_home', text: 'Dashboard', link: '/dashboard' },
			{ icon: 'assessments', text: 'Assessments', link: '/assessment' },
			{ icon: 'exercise', text: 'Exercise', link: '/exercise' },
			{ icon: 'exercise', text: 'Meals', link: '/meals' },
			{ icon: 'exercise', text: 'Appointments', link: '/appointments' },
		],
		otherSection: [
			{ icon: 'download', text: 'Reports', link: '/reports' },
		/* 	{ icon: 'rewards', text: 'Rewards', link: '/rewards/individual_reward' }, */
			{ icon: 'settings', text: 'Settings', link: '/settings/account' },
		],
	},
};

export default navItems;