(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let p=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),p&&"?"!==p[0]&&(p="?"+p),a=a.replace(/[?#]/g,encodeURIComponent),p=p.replace("#","%23"),`${n}${c}${a}${p}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(71645);function a(e,t){let r=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=i(e,n)),t&&(a.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),a=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return v}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=e.r(90809),o=e.r(43476),s=i._(e.r(71645)),l=e.r(95057),c=e.r(8372),p=e.r(18581),d=e.r(18967),m=e.r(5550);e.r(33525);let h=e.r(88540),u=e.r(91949),f=e.r(73668),x=e.r(9396);function g(t){var r,n;let a,i,g,[v,b]=(0,s.useOptimistic)(u.IDLE_LINK_STATUS),y=(0,s.useRef)(null),{href:k,as:w,children:N,prefetch:C=null,passHref:R,replace:L,shallow:S,scroll:_,onClick:z,onMouseEnter:P,onTouchStart:M,legacyBehavior:B=!1,onNavigate:O,transitionTypes:T,ref:A,unstable_dynamicOnHover:I,...W}=t;a=N,B&&("string"==typeof a||"number"==typeof a)&&(a=(0,o.jsx)("a",{children:a}));let E=s.default.useContext(c.AppRouterContext),D=!1!==C,U=!1!==C?null===(n=C)||"auto"===n?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,F="string"==typeof(r=w||k)?r:(0,l.formatUrl)(r);if(B){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=s.default.Children.only(a)}let K=B?i&&"object"==typeof i&&i.ref:A,$=s.default.useCallback(e=>(null!==E&&(y.current=(0,u.mountLinkInstance)(e,F,E,U,D,b)),()=>{y.current&&((0,u.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,u.unmountPrefetchableInstance)(e)}),[D,F,E,U,b]),J={ref:(0,p.useMergedRef)($,K),onClick(t){B||"function"!=typeof z||z(t),B&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!E||t.defaultPrevented||function(t,r,n,a,i,o,l){if("u">typeof window){let c,{nodeName:p}=t.currentTarget;if("A"===p.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(r,a?"replace":"push",!1===i?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,n.current,l)})}}(t,F,y,L,_,O,T)},onMouseEnter(e){B||"function"!=typeof P||P(e),B&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),E&&D&&(0,u.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){B||"function"!=typeof M||M(e),B&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),E&&D&&(0,u.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,d.isAbsoluteUrl)(F)?J.href=F:B&&!R&&("a"!==i.type||"href"in i.props)||(J.href=(0,m.addBasePath)(F)),g=B?s.default.cloneElement(i,J):(0,o.jsx)("a",{...W,...J,children:a}),(0,o.jsx)(j.Provider,{value:v,children:g})}e.r(84508);let j=(0,s.createContext)(u.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(j);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},52683,e=>{"use strict";var t=e.i(43476),r=e.i(22016);let n="https://discord.gg/RJzyacfCcS",a="https://github.com/FeetFiender",i="https://feetfiender.github.io/countcheck-site/";e.s(["default",0,function(){return(0,t.jsxs)("div",{className:"min-h-screen bg-[#0b0c10] text-[#f4f4f5] antialiased selection:bg-red-800 selection:text-white pb-16 font-inter",children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        .font-inter { 
          font-family: 'Inter', -apple-system, sans-serif !important; 
        }
        .font-inter a { 
          text-decoration: none !important; 
          outline: none !important; 
          color: inherit !important; 
        }

        /* Consolidated Header container */
        .header-title-container {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          margin-bottom: 2rem !important;
        }
        .header-title-main {
          color: #dc2626 !important;
          font-size: 3.5rem !important; /* text-6xl */
          font-weight: 900 !important;
          line-height: 1 !important;
          margin: 0 !important;
          padding: 0 !important;
          letter-spacing: -0.05em !important;
        }
        .header-subtitle-main {
          color: #ffffff !important;
          font-size: 0.875rem !important; /* text-sm */
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.1em !important;
          margin: 0.125rem 0 0 0 !important; /* Sits directly beneath */
          padding: 0 !important;
          line-height: 1 !important;
        }
        .header-beta-main {
          color: #71717a !important; /* zinc-500 */
          font-size: 1.125rem !important; /* Slightly larger than Discord Bot */
          font-weight: 800 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.15em !important;
          margin: 0.5rem 0 0 0 !important;
          padding: 0 !important;
          line-height: 1 !important;
        }

        /* Persistent horizontal row structure for buttons */
        .cta-row-container {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 16px !important;
          width: 100% !important;
          max-width: 500px !important;
          margin: 3rem auto 1.5rem auto !important; /* Spacious vertical margins */
        }

        /* Primary Invite button */
        .btn-invite-wrap {
          display: inline-flex !important;
          align-items: center !important;
          background-color: #dc2626 !important;
          border: 1px solid #b91c1c !important;
          border-radius: 8px !important;
          overflow: hidden !important;
          transition: background-color 0.15s ease !important;
        }
        .btn-invite-wrap:hover { 
          background-color: #b91c1c !important; 
        }
        .btn-invite-link {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 10px 18px !important;
          color: #ffffff !important;
          font-size: 14px !important;
          font-weight: 600 !important;
        }
        .btn-invite-badge {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 40px !important;
          padding: 0 12px !important;
          background-color: #13141a !important;
          border-left: 1px solid #27272a !important;
          color: #a1a1aa !important;
          font-family: monospace !important;
          font-size: 12px !important;
        }

        /* Secondary outline buttons */
        .btn-docs {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          padding: 10px 20px !important;
          background-color: #111217 !important;
          border: 1px solid #27272a !important;
          border-radius: 8px !important;
          color: #d4d4d8 !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          transition: all 0.15s ease !important;
        }
        .btn-docs:hover {
          background-color: #16171e !important;
          color: #ffffff !important;
          border-color: #3f3f46 !important;
        }

        /* Clean vertical spacing around secondary redirects (Neutral selector bypasses ad-blockers) */
        .hero-meta-row {
          display: flex !important;
          flex-wrap: wrap !important;
          align-items: center !important;
          justify-content: center !important;
          margin-top: 1.5rem !important;
          margin-bottom: 4rem !important; /* Space below (above separation line) */
        }

        /* Generic naming completely avoids social-filtering blocklists */
        .hero-meta-item {
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          color: #71717a !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          transition: color 0.15s ease !important;
        }
        .hero-meta-item:hover { 
          color: #d4d4d8 !important; 
        }

        .link-feature {
          display: inline-flex !important;
          align-items: center !important;
          gap: 4px !important;
          color: #dc2626 !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          transition: color 0.15s ease !important;
        }
        .link-feature:hover { 
          color: #ef4444 !important; 
        }
      `}),(0,t.jsxs)("div",{className:"max-w-[840px] mx-auto px-6 py-12 sm:py-20 space-y-16 font-inter",children:[(0,t.jsxs)("section",{className:"text-center space-y-8",children:[(0,t.jsxs)("div",{className:"header-title-container",children:[(0,t.jsx)("h1",{className:"header-title-main",children:"Count Check"}),(0,t.jsx)("p",{className:"header-subtitle-main",children:"Discord Bot"}),(0,t.jsx)("p",{className:"header-beta-main",children:"BETA"})]}),(0,t.jsx)("p",{className:"text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto",children:"Flipping portfolios, combat loot simulators, and player stats—directly in your Discord server."}),(0,t.jsxs)("div",{className:"relative flex justify-center items-center py-4",children:[(0,t.jsx)("div",{className:"absolute pointer-events-none z-0",style:{width:"100%",maxWidth:"850px",height:"600px",background:"radial-gradient(circle, rgba(220, 38, 38, 0.45) 0%, rgba(220, 38, 38, 0.15) 45%, rgba(11, 12, 16, 0) 70%)",top:"50%",left:"50%",transform:"translate(-50%, -50%)",borderRadius:"50%",filter:"blur(35px)"}}),(0,t.jsx)("div",{className:"absolute pointer-events-none z-0",style:{width:"100%",maxWidth:"400px",height:"400px",background:"radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, rgba(220, 38, 38, 0.2) 50%, rgba(11, 12, 16, 0) 80%)",top:"50%",left:"50%",transform:"translate(-50%, -50%)",borderRadius:"50%",filter:"blur(15px)"}}),(0,t.jsx)("img",{src:"https://oldschool.runescape.wiki/images/Count_Check.png",alt:"Count Check Artwork",className:"relative max-h-[380px] sm:max-h-[500px] object-contain select-none z-10 filter drop-shadow-[0_15px_45px_rgba(220,38,38,0.25)]"})]}),(0,t.jsxs)("div",{className:"cta-row-container",children:[(0,t.jsxs)("div",{className:"btn-invite-wrap",children:[(0,t.jsxs)("a",{href:"https://discord.com/oauth2/authorize?client_id=1521537193103851551&permissions=414464707584&integration_type=0&scope=bot+applications.commands",target:"_blank",rel:"noopener noreferrer",className:"btn-invite-link",children:[(0,t.jsx)("svg",{width:"16",height:"16",fill:"#ffffff",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.03c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.03A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.072 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92.18 7.821.18 11.69 0a.075.075 0 0 1 .078.012c.12.097.246.194.372.287a.075.075 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.9 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"})}),(0,t.jsx)("span",{children:"Invite to Discord"})]}),(0,t.jsx)("span",{className:"btn-invite-badge",children:"2"})]}),(0,t.jsxs)(r.default,{href:"/setup",className:"btn-docs",children:[(0,t.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),(0,t.jsx)("span",{children:"Read documentation"})]})]}),(0,t.jsxs)("div",{className:"hero-meta-row",children:[(0,t.jsxs)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"hero-meta-item group",style:{marginRight:"16px"},children:[(0,t.jsx)("svg",{width:"16",height:"16",fill:"#dc2626",viewBox:"0 0 24 24",className:"group-hover:fill-zinc-300 transition-colors",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"})}),(0,t.jsx)("span",{children:"Contribute on GitHub"})]}),(0,t.jsx)("span",{className:"w-1 h-1 rounded-full bg-zinc-800 hidden sm:inline",style:{marginRight:"16px"}}),(0,t.jsxs)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"hero-meta-item group",style:{marginRight:"16px"},children:[(0,t.jsx)("svg",{width:"14",height:"14",fill:"#dc2626",viewBox:"0 0 127.14 96.36",className:"group-hover:fill-zinc-300 transition-colors",children:(0,t.jsx)("path",{d:"M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.18,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.45-5c.87-.64,1.72-1.31,2.53-2a75.46,75.46,0,0,0,72.9,0c.81.71,1.66,1.38,2.53,2a68.43,68.43,0,0,1-10.45,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.06-18.83C129.2,49.63,122.38,26.78,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.88,46,53.88,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.12,46,96.12,53,91,65.69,84.69,65.69Z"})}),(0,t.jsx)("span",{children:"Join our Discord"})]}),(0,t.jsx)("span",{className:"w-1 h-1 rounded-full bg-zinc-800 hidden sm:inline",style:{marginRight:"16px"}}),(0,t.jsxs)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"hero-meta-item group",children:[(0,t.jsx)("svg",{width:"14",height:"14",fill:"none",stroke:"#dc2626",strokeWidth:"2",viewBox:"0 0 24 24",className:"group-hover:stroke-zinc-300 transition-colors",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})}),(0,t.jsx)("span",{children:"CountCheck Website"})]})]})]}),(0,t.jsxs)("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-16 border-t border-zinc-900/60",children:[(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-extrabold text-white tracking-tight",children:"What is this bot?"}),(0,t.jsx)("p",{className:"text-zinc-400 text-sm sm:text-base leading-relaxed",children:"The Count Check Discord Bot is a production-grade, event-driven client interface designed to run natively within Discord application environments. It functions as an analytical hub, delivering real-time Old School RuneScape market telemetry, quantitative portfolio optimization, and high-fidelity game-mechanics simulations. By separating computationally heavy image processing, quantitative statistical modeling, and relational database writes from Discord’s asyncio gateway thread, the bot provides rapid, reliable, and uninterrupted performance for active users."}),(0,t.jsxs)("div",{className:"pt-2 flex flex-wrap items-center gap-y-2.5",children:[(0,t.jsxs)(r.default,{href:"/setup",className:"link-feature group",style:{marginRight:"16px"},children:[(0,t.jsx)("span",{children:"Learn how to setup"}),(0,t.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"transform translate-x-0 group-hover:translate-x-0.5 transition-transform mt-0.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]}),(0,t.jsxs)(r.default,{href:"/features",className:"link-feature group",style:{marginRight:"16px"},children:[(0,t.jsx)("span",{children:"Browse the features"}),(0,t.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"transform translate-x-0 group-hover:translate-x-0.5 transition-transform mt-0.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]}),(0,t.jsxs)(r.default,{href:"/commands",className:"link-feature group",style:{marginRight:"16px"},children:[(0,t.jsx)("span",{children:"Command Reference"}),(0,t.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"transform translate-x-0 group-hover:translate-x-0.5 transition-transform mt-0.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]}),(0,t.jsxs)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"link-feature group",children:[(0,t.jsx)("span",{children:"Join our Discord for help"}),(0,t.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"transform translate-x-0 group-hover:translate-x-0.5 transition-transform mt-0.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]})]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-extrabold text-white tracking-tight",children:"What is Count Check?"}),(0,t.jsx)("p",{className:"text-zinc-400 text-sm sm:text-base leading-relaxed",children:"Count Check represents the overarching quantitative ecosystem and back-end framework behind the Discord client. It is a comprehensive market intelligence, risk analysis, and simulation platform. Count Check leverages trailing historical databases, mathematical market models, and external API connectors to study the in-game economy. Its core mission is to remove speculation guesswork from the Grand Exchange by evaluating transactional velocity, tax friction, support and resistance boundaries, and competitor price undercutting in real time."}),(0,t.jsxs)("div",{className:"pt-2 flex flex-wrap items-center gap-y-2.5",children:[(0,t.jsxs)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"link-feature group",style:{marginRight:"16px"},children:[(0,t.jsx)("span",{children:"Check out the app"}),(0,t.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"transform translate-x-0 group-hover:translate-x-0.5 transition-transform mt-0.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]}),(0,t.jsxs)(r.default,{href:"/purpose",className:"link-feature group",style:{marginRight:"16px"},children:[(0,t.jsx)("span",{children:"Purpose and Goals"}),(0,t.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"transform translate-x-0 group-hover:translate-x-0.5 transition-transform mt-0.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]}),(0,t.jsxs)(r.default,{href:"/engine",className:"link-feature group",style:{marginRight:"16px"},children:[(0,t.jsx)("span",{children:"Quantitative Engine"}),(0,t.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"transform translate-x-0 group-hover:translate-x-0.5 transition-transform mt-0.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]}),(0,t.jsxs)(r.default,{href:"/api-specs",className:"link-feature group",style:{marginRight:"16px"},children:[(0,t.jsx)("span",{children:"API Specs"}),(0,t.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"transform translate-x-0 group-hover:translate-x-0.5 transition-transform mt-0.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]}),(0,t.jsxs)(r.default,{href:"/faq",className:"link-feature group",style:{marginRight:"16px"},children:[(0,t.jsx)("span",{children:"FAQ"}),(0,t.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"transform translate-x-0 group-hover:translate-x-0.5 transition-transform mt-0.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]}),(0,t.jsxs)(r.default,{href:"/terms",className:"link-feature group",children:[(0,t.jsx)("span",{children:"Terms & Privacy"}),(0,t.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"transform translate-x-0 group-hover:translate-x-0.5 transition-transform mt-0.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]})]})]})]}),(0,t.jsxs)("footer",{className:"border-t border-zinc-900 pt-10 space-y-4",style:{marginTop:"24px"},children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-center text-xs text-zinc-500 font-medium",children:[(0,t.jsx)("span",{children:"© 2026 Count Check Bot"}),(0,t.jsx)("span",{className:"text-zinc-800",style:{marginLeft:"16px",marginRight:"16px"},children:"|"}),(0,t.jsx)("a",{href:n,className:"hover:text-zinc-300 transition-colors",children:"Support"}),(0,t.jsx)("span",{className:"text-zinc-800",style:{marginLeft:"16px",marginRight:"16px"},children:"|"}),(0,t.jsx)("a",{href:a,className:"hover:text-zinc-300 transition-colors",children:"Open Source"}),(0,t.jsx)("span",{className:"text-zinc-800",style:{marginLeft:"16px",marginRight:"16px"},children:"|"}),(0,t.jsxs)("span",{children:["Powered by: ",(0,t.jsx)("span",{className:"text-red-500 font-semibold",children:"Jagex API"})," & ",(0,t.jsx)("span",{className:"text-red-500 font-semibold",children:"TempleOSRS"})]})]}),(0,t.jsx)("p",{className:"text-[10px] text-zinc-600 leading-relaxed text-center",children:"This site is a community fan project and is not affiliated with, authorized, or endorsed by Jagex Ltd. RuneScape and Old School RuneScape are registered trademarks of Jagex Ltd. All character sprites and OSRS elements belong to their respective creators."})]})]})]})}])}]);