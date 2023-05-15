(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_router_router_mdx"],{7153:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var a in n)Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}(n,{frontmatter:function(){return r},title:function(){return o},toc:function(){return c},default:function(){return d}});var t=a("9880"),s=a("23169"),r={title:"router",sidebar_position:1},o="router",c=[{text:"hooks",depth:2,id:"hooks"},{text:"useNavigate",depth:3,id:"usenavigate"},{text:"useLocation",depth:3,id:"uselocation"},{text:"useParams",depth:3,id:"useparams"},{text:"Components",depth:2,id:"components"},{text:"Link",depth:3,id:"link"},{text:"NavLink",depth:3,id:"navlink"},{text:"Outlet",depth:3,id:"outlet"},{text:"Route",depth:3,id:"route"},{text:"More",depth:2,id:"more"}];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"router",children:["router",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#router",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["The router solution based on ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"react-router 6"}),"."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"hooks",children:["hooks",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hooks",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"usenavigate",children:["useNavigate",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usenavigate",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"declare function useNavigate(): NavigateFunction;\n\ninterface NavigateFunction {\n  (\n    to: To,\n    options?: {\n      replace?: boolean;\n      state?: any;\n      relative?: RelativeRoutingType;\n    },\n  ): void;\n  (delta: number): void;\n}\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"useNavigate"})," hook returns a function that lets you navigate programmatically."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useNavigate } from '@modern-js/runtime/router';\n\nexport function HomeButton() {\n  let navigate = useNavigate();\n\n  function handleClick() {\n    navigate('/home');\n  }\n\n  return (\n    <button type=\"button\" onClick={handleClick}>\n      Go home\n    </button>\n  );\n}\n"})})})}),"\n",(0,t.jsxs)(n.h3,{id:"uselocation",children:["useLocation",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#uselocation",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"declare function useLocation(): Location;\n\ninterface Location extends Path {\n  state: unknown;\n  key: Key;\n}\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"useLocation"})," hook returns the current ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/web/api/location",target:"_blank",rel:"noopener noreferrer",children:"location"})," object. A new location object would be returned whenever the current location changes."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { useLocation } from "@modern-js/runtime/router";\n\nfunction usePageViews() {\n  let location = useLocation();\n  React.useEffect(() => {\n    ga.send(["pageview", location.pathname]);\n  }, [location]);\n}\n\nfunction App() {\n  usePageViews();\n  return (\n    //...\n  );\n}\n'})})})}),"\n",(0,t.jsxs)(n.h3,{id:"useparams",children:["useParams",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useparams",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"declare function useParams<K extends string = string>(): Readonly<Params<K>>;\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"useParams"})," hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the ",(0,t.jsx)(n.code,{children:"<Route path>"}),"."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Routes, Route, useParams } from \'@modern-js/runtime/router\';\n\nfunction BlogPost() {\n  const { slug } = useParams();\n  return <div>Now showing post {slug}</div>;\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<div>home</div>} />\n      <Route path="/blog/:slug" element={<BlogPost />} />\n    </Routes>\n  );\n}\n'})})})}),"\n",(0,t.jsxs)(n.h2,{id:"components",children:["Components",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#components",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"link",children:["Link",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#link",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"declare function Link(props: LinkProps): React.ReactElement;\n\ninterface LinkProps\n  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {\n  replace?: boolean;\n  state?: any;\n  to: To;\n  reloadDocument?: boolean;\n}\n\ntype To = string | Partial<Path>;\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"<Link>"})," is an element that lets the user navigate to another page by clicking or tapping on it."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:'<Link to="/about">About</Link>\n'})})})}),"\n",(0,t.jsxs)(n.h3,{id:"navlink",children:["NavLink",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navlink",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"declare function NavLink(props: NavLinkProps): React.ReactElement;\n\ninterface NavLinkProps\n  extends Omit<LinkProps, 'className' | 'style' | 'children'> {\n  caseSensitive?: boolean;\n  children?:\n    | React.ReactNode\n    | ((props: { isActive: boolean }) => React.ReactNode);\n  className?: string | ((props: { isActive: boolean }) => string | undefined);\n  end?: boolean;\n  style?:\n    | React.CSSProperties\n    | ((props: { isActive: boolean }) => React.CSSProperties);\n}\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"<NavLink>"})," is a special kind of ",(0,t.jsx)(n.code,{children:"<Link>"}),' that knows whether or not it is "active".']}),"\n",(0,t.jsxs)(n.h3,{id:"outlet",children:["Outlet",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outlet",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface OutletProps {\n  context?: unknown;\n}\ndeclare function Outlet(props: OutletProps): React.ReactElement | null;\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.code,{children:"<Outlet>"})," should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",children:'function Dashboard() {\n  return (\n    <div>\n      <h1>Dashboard</h1>\n\n      {/* This element will render either <DashboardMessages> when the URL is\n          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"\n      */}\n      <Outlet />\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<Dashboard />}>\n        <Route path="messages" element={<DashboardMessages />} />\n        <Route path="tasks" element={<DashboardTasks />} />\n      </Route>\n    </Routes>\n  );\n}\n'})})})}),"\n",(0,t.jsxs)(n.h3,{id:"route",children:["Route",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#route",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface RouteObject {\n  path?: string;\n  index?: boolean;\n  children?: React.ReactNode;\n  caseSensitive?: boolean;\n  id?: string;\n  loader?: LoaderFunction;\n  action?: ActionFunction;\n  element?: React.ReactNode | null;\n  errorElement?: React.ReactNode | null;\n  handle?: RouteObject['handle'];\n  shouldRevalidate?: ShouldRevalidateFunction;\n}\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Route"})," represents the route information. A ",(0,t.jsx)(n.code,{children:"Route"})," object couples URL segments to components, data loading and data mutations."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Route"})," can be used as a plain object, passing to the router creation functions:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"const router = createBrowserRouter([\n  {\n    // it renders this element\n    element: <Team />,\n\n    // when the URL matches this segment\n    path: 'teams/:teamId',\n\n    // with this data loaded before rendering\n    loader: async ({ request, params }) => {\n      return fetch(`/fake/api/teams/${params.teamId}.json`, {\n        signal: request.signal,\n      });\n    },\n\n    // performing this mutation when data is submitted to it\n    action: async ({ request }) => {\n      return updateFakeTeam(await request.formData());\n    },\n\n    // and renders this element in case something went wrong\n    errorElement: <ErrorBoundary />,\n  },\n]);\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["You can also declare your routes with JSX and ",(0,t.jsx)(n.code,{children:"createRoutesFromElements"}),", the props to the element are identical to the properties of the route objects:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:'const router = createBrowserRouter(\n  createRoutesFromElements(\n    <Route\n      element={<Team />}\n      path="teams/:teamId"\n      loader={async ({ params }) => {\n        return fetch(`/fake/api/teams/${params.teamId}.json`);\n      }}\n      action={async ({ request }) => {\n        return updateFakeTeam(await request.formData());\n      }}\n      errorElement={<ErrorBoundary />}\n    />,\n  ),\n);\n'})})})}),"\n",(0,t.jsxs)(n.h2,{id:"more",children:["More",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#more",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can access to ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"React Router"})," to get the full API information."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}}]);