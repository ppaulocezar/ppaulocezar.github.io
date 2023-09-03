"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[893],{950:function(i,e,t){t.d(e,{Z:function(){return M}});var r=t(29439),n=t(47313),a=t(45987),s=t(1413),d=t(30168),o=t(83061),l=t(30686),h=t(21921);function c(i){return String(i).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(i){return parseFloat(i)}var x=t(17551),m=t(17592),g=t(77342),Z=t(77430),j=t(32298);function p(i){return(0,j.Z)("MuiSkeleton",i)}(0,Z.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,b,f,H,S,y,w,L,B=t(46417),R=["animation","className","component","height","style","variant","width"],q=(0,l.F4)(S||(S=v||(v=(0,d.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),C=(0,l.F4)(y||(y=b||(b=(0,d.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),k=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(i,e){var t=i.ownerState;return[e.root,e[t.variant],!1!==t.animation&&e[t.animation],t.hasChildren&&e.withChildren,t.hasChildren&&!t.width&&e.fitContent,t.hasChildren&&!t.height&&e.heightAuto]}})((function(i){var e=i.theme,t=i.ownerState,r=c(e.shape.borderRadius)||"px",n=u(e.shape.borderRadius);return(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,x.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(n).concat(r,"/").concat(Math.round(n/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}}),"circular"===t.variant&&{borderRadius:"50%"}),"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius}),t.hasChildren&&{"& > *":{visibility:"hidden"}}),t.hasChildren&&!t.width&&{maxWidth:"fit-content"}),t.hasChildren&&!t.height&&{height:"auto"})}),(function(i){return"pulse"===i.ownerState.animation&&(0,l.iv)(w||(w=f||(f=(0,d.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),q)}),(function(i){var e=i.ownerState,t=i.theme;return"wave"===e.animation&&(0,l.iv)(L||(L=H||(H=(0,d.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),C,(t.vars||t).palette.action.hover)})),F=n.forwardRef((function(i,e){var t=(0,g.Z)({props:i,name:"MuiSkeleton"}),r=t.animation,n=void 0===r?"pulse":r,d=t.className,l=t.component,c=void 0===l?"span":l,u=t.height,x=t.style,m=t.variant,Z=void 0===m?"text":m,j=t.width,v=(0,a.Z)(t,R),b=(0,s.Z)((0,s.Z)({},t),{},{animation:n,component:c,variant:Z,hasChildren:Boolean(v.children)}),f=function(i){var e=i.classes,t=i.variant,r=i.animation,n=i.hasChildren,a=i.width,s=i.height,d={root:["root",t,r,n&&"withChildren",n&&!a&&"fitContent",n&&!s&&"heightAuto"]};return(0,h.Z)(d,p,e)}(b);return(0,B.jsx)(k,(0,s.Z)((0,s.Z)({as:c,ref:e,className:(0,o.Z)(f.root,d),ownerState:b},v),{},{style:(0,s.Z)({width:j,height:u},x)}))})),W=t(42832),z=t(9019),P=t(40263),M=function(i){var e=i.children,t=(0,n.useState)(!0),a=(0,r.Z)(t,2),s=a[0],d=a[1];(0,n.useEffect)((function(){d(!1)}),[]);var o=(0,B.jsx)(P.Z,{title:(0,B.jsx)(F,{sx:{width:{xs:120,md:180}}}),secondary:(0,B.jsx)(F,{animation:"wave",variant:"circular",width:24,height:24}),children:(0,B.jsxs)(W.Z,{spacing:1,children:[(0,B.jsx)(F,{}),(0,B.jsx)(F,{sx:{height:64},animation:"wave",variant:"rectangular"}),(0,B.jsx)(F,{}),(0,B.jsx)(F,{})]})});return(0,B.jsxs)(B.Fragment,{children:[s&&(0,B.jsxs)(z.ZP,{container:!0,spacing:3,children:[(0,B.jsx)(z.ZP,{item:!0,xs:12,md:6,children:o}),(0,B.jsx)(z.ZP,{item:!0,xs:12,md:6,children:o}),(0,B.jsx)(z.ZP,{item:!0,xs:12,md:6,children:o}),(0,B.jsx)(z.ZP,{item:!0,xs:12,md:6,children:o})]}),!s&&e]})}},47893:function(i,e,t){t.r(e);var r=t(9019),n=t(42832),a=t(61113),s=t(3404),d=t(19536),o=t(90891),l=t(950),h=t(40263),c=t(46417);e.default=function(){return(0,c.jsx)(l.Z,{children:(0,c.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,c.jsx)(r.ZP,{item:!0,xs:12,lg:6,children:(0,c.jsxs)(n.Z,{spacing:3,children:[(0,c.jsx)(h.Z,{title:"Basic",codeHighlight:!0,children:(0,c.jsxs)(n.Z,{spacing:.75,sx:{mt:-1.5},children:[(0,c.jsx)(a.Z,{variant:"h1",children:"Inter"}),(0,c.jsx)(a.Z,{variant:"h5",children:"Font Family"}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Regular"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Medium"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Bold"})]})]})}),(0,c.jsx)(h.Z,{title:"Heading",codeHighlight:!0,children:(0,c.jsxs)(n.Z,{spacing:2,children:[(0,c.jsx)(a.Z,{variant:"h1",children:"H1 Heading"}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 38px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Bold"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 46px"})]}),(0,c.jsx)(d.Z,{}),(0,c.jsx)(a.Z,{variant:"h2",children:"H2 Heading"}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 30px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Bold"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 38px"})]}),(0,c.jsx)(d.Z,{}),(0,c.jsx)(a.Z,{variant:"h3",children:"H3 Heading"}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 24px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Regular & Bold"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 32px"})]}),(0,c.jsx)(d.Z,{}),(0,c.jsx)(a.Z,{variant:"h4",children:"H4 Heading"}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 20px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Bold"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 28px"})]}),(0,c.jsx)(d.Z,{}),(0,c.jsx)(a.Z,{variant:"h5",children:"H5 Heading"}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 16px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Regular & Medium & Bold"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 24px"})]}),(0,c.jsx)(d.Z,{}),(0,c.jsx)(a.Z,{variant:"h6",children:"H6 Heading / Subheading"}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 14px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Regular"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 22px"})]})]})}),(0,c.jsx)(h.Z,{title:"Body 1",codeHighlight:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{variant:"body1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 14px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Regular"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 22px"})]})]})}),(0,c.jsx)(h.Z,{title:"Body 2",codeHighlight:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{variant:"body2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 12px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Regular"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 20px"})]})]})}),(0,c.jsx)(h.Z,{title:"Subtitle 1",codeHighlight:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{variant:"subtitle1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 14px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Medium"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 22px"})]})]})}),(0,c.jsx)(h.Z,{title:"Subtitle 2",codeHighlight:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{variant:"subtitle2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 12px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Medium"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 20px"})]})]})}),(0,c.jsx)(h.Z,{title:"Caption",codeHighlight:!0,children:(0,c.jsxs)(n.Z,{spacing:1,children:[(0,c.jsx)(a.Z,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 12px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Regular"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 20px"})]})]})})]})}),(0,c.jsx)(r.ZP,{item:!0,xs:12,lg:6,children:(0,c.jsxs)(n.Z,{spacing:3,children:[(0,c.jsx)(h.Z,{title:"Alignment",codeHighlight:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{variant:"body2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsx)(a.Z,{variant:"body2",textAlign:"center",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsx)(a.Z,{variant:"body2",textAlign:"right",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),(0,c.jsx)(h.Z,{title:"Gutter Bottom",codeHighlight:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{variant:"body1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsx)(a.Z,{variant:"body2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 12px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Regular"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 20px"})]})]})}),(0,c.jsx)(h.Z,{title:"Overline",codeHighlight:!0,children:(0,c.jsxs)(n.Z,{spacing:1.5,children:[(0,c.jsx)(a.Z,{variant:"overline",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 12px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Regular"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 20px"})]})]})}),(0,c.jsx)(h.Z,{title:"Link",codeHighlight:!0,children:(0,c.jsxs)(n.Z,{spacing:1.5,children:[(0,c.jsx)(o.Z,{href:"#",children:"www.mantis.com"}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 12px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Regular"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 20px"})]})]})}),(0,c.jsx)(h.Z,{title:"Colors",codeHighlight:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:"This is textPrimary text color."}),(0,c.jsx)(a.Z,{variant:"h6",color:"textSecondary",gutterBottom:!0,children:"This is textSecondary text color."}),(0,c.jsx)(a.Z,{variant:"h6",color:"primary",gutterBottom:!0,children:"This is primary text color."}),(0,c.jsx)(a.Z,{variant:"h6",color:"secondary",gutterBottom:!0,children:"This is secondary text color."}),(0,c.jsx)(a.Z,{variant:"h6",color:"success",gutterBottom:!0,children:"This is success text color."}),(0,c.jsx)(a.Z,{variant:"h6",sx:{color:"warning.main"},gutterBottom:!0,children:"This is warning text color."}),(0,c.jsx)(a.Z,{variant:"h6",color:"error",gutterBottom:!0,children:"This is error text color."})]})}),(0,c.jsx)(h.Z,{title:"Paragraph",codeHighlight:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{variant:"body1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 14px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Regular"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 22px"})]})]})}),(0,c.jsx)(h.Z,{title:"Font Style",codeHighlight:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{variant:"body1",gutterBottom:!0,sx:{fontStyle:"italic"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsx)(a.Z,{variant:"subtitle1",gutterBottom:!0,sx:{fontStyle:"italic"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Size: 14px"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Weight: Italic Regular & Italic Bold"}),(0,c.jsx)(a.Z,{variant:"h6",children:"Line Height: 22px"})]})]})})]})})]})})}}}]);