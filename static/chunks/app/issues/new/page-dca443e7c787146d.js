(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[583],{6313:function(e,r,s){Promise.resolve().then(s.bind(s,1767))},1767:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return v}});var t=s(7437),i=s(5347),n=s(1530),l=s(9155),a=s(7818),o=s(9343),d=s(3208);s(8914);var c=s(6463),u=s(1014),p=s(4626);let x=p.z.object({title:p.z.string().min(1,"Title is required.").max(255),description:p.z.string().min(1,"Description is required.")});var h=s(540),m=s(2265),b=e=>{let{children:r}=e;return r?(0,t.jsx)(h.x,{color:"red",as:"p",children:r}):null},j=()=>(0,t.jsx)("div",{className:"inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",role:"status",children:(0,t.jsx)("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})});let f=(0,a.default)(()=>Promise.all([s.e(960),s.e(576),s.e(562)]).then(s.bind(s,7576)),{loadableGenerated:{webpack:()=>[7576]},ssr:!1});var v=()=>{var e,r;let s=(0,c.useRouter)(),{register:a,control:p,handleSubmit:h,formState:{errors:v}}=(0,o.cI)({resolver:(0,u.F)(x)}),[w,N]=(0,m.useState)(""),[_,k]=(0,m.useState)(!1),g=h(async e=>{try{k(!0),await d.Z.post("/api/issues",e),s.push("/issues")}catch(e){k(!1),N("An unexpected error occurred.")}});return(0,t.jsxs)("div",{className:"max-w-xl",children:[w&&(0,t.jsx)(i.CalloutRoot,{color:"red",className:"mb-5",children:(0,t.jsx)(i.CalloutText,{children:w})}),(0,t.jsxs)("form",{className:"space-y-3",onSubmit:g,children:[(0,t.jsx)(n.TextField.Root,{children:(0,t.jsx)(n.TextField.Input,{placeholder:"Title",...a("title")})}),(0,t.jsx)(b,{children:null===(e=v.title)||void 0===e?void 0:e.message}),(0,t.jsx)(o.Qr,{name:"description",control:p,render:e=>{let{field:r}=e;return(0,t.jsx)(f,{placeholder:"Description",...r})}}),(0,t.jsxs)(b,{children:[" ",null===(r=v.description)||void 0===r?void 0:r.message]}),(0,t.jsxs)(l.z,{disabled:_,children:["Submit New Issue ",_&&(0,t.jsx)(j,{})," "]})]})]})}}},function(e){e.O(0,[249,148,253,971,23,744],function(){return e(e.s=6313)}),_N_E=e.O()}]);