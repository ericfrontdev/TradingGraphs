import{aa as P,ag as q,r as f,j as e,ah as C,G as a,S as l,O as c,ad as L,ae as W,F as k,B as D,T as h,af as F,L as y,a as R}from"./index-CFdnnZ_z.js";import{A as N}from"./AuthWrapper-HH0WXyse.js";import{u as T,F as O,c as M,a as x}from"./useScriptRef-BkLD80qr.js";import{A as $}from"./AnimateButton-D65Ykoc0.js";import{s as z,a as G}from"./password-strength-_dbWWfI_.js";import{E as V,a as H}from"./EyeInvisibleOutlined-90Lcv6hp.js";import{I as d,F as o}from"./InputLabel-C4Eqlr42.js";function J(){const{register:j}=P(),w=T(),S=q(),[t,B]=f.useState(),[g,A]=f.useState(!1),I=()=>{A(!g)},E=s=>{s.preventDefault()},b=s=>{const r=z(s);B(G(r))};return f.useEffect(()=>{b("")},[]),e.jsx(e.Fragment,{children:e.jsx(O,{initialValues:{firstname:"",lastname:"",email:"",company:"",password:"",submit:null},validationSchema:M().shape({firstname:x().max(255).required("First Name is required"),lastname:x().max(255).required("Last Name is required"),email:x().email("Must be a valid email").max(255).required("Email is required"),password:x().max(255).required("Password is required")}),onSubmit:async(s,{setErrors:r,setStatus:n,setSubmitting:u})=>{try{await j(s.email,s.password,s.firstname,s.lastname),w.current&&(n({success:!0}),u(!1),C({open:!0,message:"Your registration has been successfully completed.",variant:"alert",alert:{color:"success"}}),setTimeout(()=>{S("/login",{replace:!0})},1500))}catch(p){console.error(p),w.current&&(n({success:!1}),r({submit:p.message}),u(!1))}},children:({errors:s,handleBlur:r,handleChange:n,handleSubmit:u,isSubmitting:p,touched:i,values:m})=>e.jsx("form",{noValidate:!0,onSubmit:u,children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsxs(a,{item:!0,xs:12,md:6,children:[e.jsxs(l,{spacing:1,children:[e.jsx(d,{htmlFor:"firstname-signup",children:"First Name*"}),e.jsx(c,{id:"firstname-login",type:"firstname",value:m.firstname,name:"firstname",onBlur:r,onChange:n,placeholder:"John",fullWidth:!0,error:!!(i.firstname&&s.firstname)})]}),i.firstname&&s.firstname&&e.jsx(o,{error:!0,id:"helper-text-firstname-signup",children:s.firstname})]}),e.jsxs(a,{item:!0,xs:12,md:6,children:[e.jsxs(l,{spacing:1,children:[e.jsx(d,{htmlFor:"lastname-signup",children:"Last Name*"}),e.jsx(c,{fullWidth:!0,error:!!(i.lastname&&s.lastname),id:"lastname-signup",type:"lastname",value:m.lastname,name:"lastname",onBlur:r,onChange:n,placeholder:"Doe",inputProps:{}})]}),i.lastname&&s.lastname&&e.jsx(o,{error:!0,id:"helper-text-lastname-signup",children:s.lastname})]}),e.jsxs(a,{item:!0,xs:12,children:[e.jsxs(l,{spacing:1,children:[e.jsx(d,{htmlFor:"company-signup",children:"Company"}),e.jsx(c,{fullWidth:!0,error:!!(i.company&&s.company),id:"company-signup",value:m.company,name:"company",onBlur:r,onChange:n,placeholder:"Demo Inc.",inputProps:{}})]}),i.company&&s.company&&e.jsx(o,{error:!0,id:"helper-text-company-signup",children:s.company})]}),e.jsxs(a,{item:!0,xs:12,children:[e.jsxs(l,{spacing:1,children:[e.jsx(d,{htmlFor:"email-signup",children:"Email Address*"}),e.jsx(c,{fullWidth:!0,error:!!(i.email&&s.email),id:"email-login",type:"email",value:m.email,name:"email",onBlur:r,onChange:n,placeholder:"demo@company.com",inputProps:{}})]}),i.email&&s.email&&e.jsx(o,{error:!0,id:"helper-text-email-signup",children:s.email})]}),e.jsxs(a,{item:!0,xs:12,children:[e.jsxs(l,{spacing:1,children:[e.jsx(d,{htmlFor:"password-signup",children:"Password"}),e.jsx(c,{fullWidth:!0,error:!!(i.password&&s.password),id:"password-signup",type:g?"text":"password",value:m.password,name:"password",onBlur:r,onChange:v=>{n(v),b(v.target.value)},endAdornment:e.jsx(L,{position:"end",children:e.jsx(W,{"aria-label":"toggle password visibility",onClick:I,onMouseDown:E,edge:"end",color:"secondary",children:g?e.jsx(V,{}):e.jsx(H,{})})}),placeholder:"******",inputProps:{}})]}),i.password&&s.password&&e.jsx(o,{error:!0,id:"helper-text-password-signup",children:s.password}),e.jsx(k,{fullWidth:!0,sx:{mt:2},children:e.jsxs(a,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(a,{item:!0,children:e.jsx(D,{sx:{bgcolor:t==null?void 0:t.color,width:85,height:8,borderRadius:"7px"}})}),e.jsx(a,{item:!0,children:e.jsx(h,{variant:"subtitle1",fontSize:"0.75rem",children:t==null?void 0:t.label})})]})})]}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(h,{variant:"body2",children:["By Signing up, you agree to our  ",e.jsx(F,{variant:"subtitle2",component:y,to:"#",children:"Terms of Service"}),"  and  ",e.jsx(F,{variant:"subtitle2",component:y,to:"#",children:"Privacy Policy"})]})}),s.submit&&e.jsx(a,{item:!0,xs:12,children:e.jsx(o,{error:!0,children:s.submit})}),e.jsx(a,{item:!0,xs:12,children:e.jsx($,{children:e.jsx(R,{disableElevation:!0,disabled:p,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})})})})}function ee(){const{isLoggedIn:j}=P();return e.jsx(N,{children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,children:e.jsxs(l,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[e.jsx(h,{variant:"h3",children:"Sign up"}),e.jsx(h,{component:y,to:j?"/auth/login":"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(J,{})})]})})}export{ee as default};