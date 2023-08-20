export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Grep Labs",
	description: "Builing extremely powerful internet.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		// {
		// 	label: "Projects",
		// 	href: "/projects",
		// },
		// {
		// 	label: "Team",
		// 	href: "/team",
		// },
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/greplabs",
		twitter: "https://twitter.com/greplabs",
		docs: "https://docs.grelabs.com",
		discord: "",
    sponsor: ""
	},
};
