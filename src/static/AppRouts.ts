
const getAppRouts = () => {
  let userName = localStorage.getItem("userName") || 'User';
  return [
    {
      title: 'Home',
      href: 'home',
    },
    {
      title: 'Search',
      href: 'search',
    },
    {
      title: `Hello: ${userName}`,
      href: `page/${userName}`,
    }
  ]
}

export default getAppRouts;
