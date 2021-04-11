import Login from './containers/Login';
import Homes from './containers/Homes';


 const routes = [
    {
        component: Login,
        exact: true,
        path: ["/"],
        title: "Login",
      },{
        component: Homes,
        exact: true,
        path: ["/homes"],
        title: "Homes",
      },
];

export default routes;