import Home from "./pages/home/Home"
import Parameter from "./pages/parameter/Parameter"
import User from "./pages/user/User"

const routesConfig = [
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/users",
        component:User,
        exact:true
    },
    {
        path:"/parameters",
        component:Parameter,
        exact:true
    }
];

export default routesConfig
