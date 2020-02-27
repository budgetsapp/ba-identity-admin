const Signin = { template: "<div>Signin</div>" };
const Signup = { template: "<div>Signup</div>" };
const Dashboard = { template: "<div>Dashboard</div>" };
const UsersWrapper = {
  template: `
    <div>
        <router-view></router-view>
    </div>
`
};
const Users = {
  template: `
    <div>
        <h1>Users</h1>
    </div>
`
};
const UserCreate = {
  template: `
    <div>
        <h1>UserCreate</h1>
        <span>User new</span>
    </div>
`
};
const UserUpdate = {
  template: `
    <div>
        <h1>UserUpdate</h1>
        <span>User {{ $route.params.id }}</span>
    </div>
`
};
const Roles = { template: "<div>Roles</div>" };
// const RoleCreate = { template: "<div>RoleCreate</div>" };
// const RoleUpdate = { template: "<div>RoleUpdate</div>" };

const routes = [
  { path: "/", component: Dashboard },
  { path: "/signin", component: Signin },
  { path: "/signup", component: Signup },

  {
    path: "/users",
    component: UsersWrapper,
    children: [
      { path: "", component: Users },
      { path: "new", component: UserCreate },
      { path: ":id", component: UserUpdate }
    ]
  },

  { path: "/roles", component: Roles }
  // { path: "/roles/new", component: RoleCreate },
  // { path: "/roles/:id", component: RoleUpdate }
];

export default routes;
