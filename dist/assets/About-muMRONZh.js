import{r as t,a as r,j as e,b as c}from"./index-2QJaORzH.js";const x=()=>{const s=t.useRef(),[a,l]=t.useState(!1);t.useEffect(()=>{r(s)},[]);const i=()=>l(!0),n=()=>l(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("section",{ref:s,id:"about",className:"w-full py-10 md:py-20 mb-20",children:[e.jsx("h1",{className:"text-2xl md:text-3xl lg:text-4xl font-bold text-green-500 pl-4 md:pl-8",children:"ABOUT ME"}),e.jsxs("div",{className:"h-auto w-full flex flex-col md:flex-col lg:flex-row justify-center items-center md:w-4/5 mx-auto p-5 mt-12 gap-10",children:[e.jsx("div",{className:"w-full lg:w-1/2 flex justify-center items-center",onMouseEnter:i,onMouseLeave:n,children:e.jsxs("div",{className:`relative ${a?"glitch-effect":""}`,children:[e.jsx("img",{src:"images/propic.jpeg",alt:"my-img",className:"h-[220px] sm:h-[270px] md:h-[350px] lg:h-[450px] max-w-full rounded-xl ring-2 lg:ring-4 ring-green-700 transition-all duration-300 ease-out object-cover"}),e.jsxs("div",{className:"glitch-layers",children:[e.jsx("div",{className:"glitch-layer"}),e.jsx("div",{className:"glitch-layer"}),e.jsx("div",{className:"glitch-layer"})]})]})}),e.jsxs("div",{className:"w-full lg:w-1/2",children:[e.jsx("h1",{className:"text-lg sm:text-xl md:text-2xl lg:text-3xl mt-5 text-green-400",children:"My Bio"}),e.jsxs("p",{className:"mt-2 lg:mt-5 text-green-500 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed",children:["As a passionate"," ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"Frontend & AI Developer"})," ","with over one year of experience, I specialize in crafting"," ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"intelligent, user-focused solutions."})," ","From designing seamless"," ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"frontend interfaces"})," ","to integrating"," ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"AI-driven automation,"})," ","I thrive on transforming ideas into"," ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"scalable digital experiences."})," ","With expertise in"," ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"React.js, Vite, and AI technologies,"})," ","I am dedicated to delivering"," ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"high-performance, responsive,"})," ","and ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"visually stunning applications."})," ","My commitment to continuous learning and"," ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"innovation"})," ","drives me to push the boundaries of technology. Let’s"," ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"collaborate"})," ","and build the future of"," ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"AI-powered digital experiences."})]}),e.jsx("table",{className:"w-full mt-5 lg:mt-10 text-sm md:text-base",children:e.jsx("tbody",{children:e.jsxs("tr",{className:"flex flex-col md:flex-row md:justify-between",children:[e.jsxs("td",{className:"p-1 lg:p-3",children:[e.jsx("span",{className:"text-green-400 lg:text-xl",children:"Name"})," ",e.jsx("br",{}),e.jsx("span",{className:"text-green-500",children:"Vikas Kashyap"})]}),e.jsxs("td",{className:"p-1 lg:p-3",children:[e.jsx("span",{className:"text-green-400 lg:text-xl",children:"Email"})," ",e.jsx("br",{}),e.jsx("span",{className:"text-green-500",children:"vikaskashyaprock@gmail.com"})]}),e.jsxs("td",{className:"p-1 lg:p-3",children:[e.jsx("span",{className:"text-green-400 lg:text-xl",children:"Phone"})," ",e.jsx("br",{}),e.jsx("span",{className:"text-green-500",children:"+91 8542050782"})]})]})})}),e.jsx(c.Button,{className:"px-6 lg:px-8 py-3 lg:py-4 mt-5 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 transition-transform",children:e.jsx("a",{className:"text-black",href:"/images/Vikas Kashyap Frontend 1Yrs.pdf",download:"/images/Vikas Kashyap Frontend 1Yrs.pdf",children:"DOWNLOAD RESUME"})})]})]})]}),e.jsx("style",{jsx:!0,children:`
        .glitch-effect {
          position: relative;
          display: inline-block;
        }
        .glitch-layers {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .glitch-effect:hover .glitch-layers {
          opacity: 1;
        }
        .glitch-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("images/propic.jpeg") no-repeat center center;
          background-size: cover;
        }
        .glitch-layer:nth-child(1) {
          left: 2px;
          animation: glitch1 2s infinite linear alternate-reverse;
          mix-blend-mode: multiply;
        }
        .glitch-layer:nth-child(2) {
          left: -2px;
          animation: glitch2 3s infinite linear alternate-reverse;
          mix-blend-mode: screen;
        }
        .glitch-layer:nth-child(3) {
          left: 0;
          animation: glitch3 2.5s infinite linear alternate-reverse;
          mix-blend-mode: overlay;
        }
        @keyframes glitch1 {
          0% { clip-path: inset(20% 0 60% 0); }
          100% { clip-path: inset(80% 0 0% 0); }
        }
        @keyframes glitch2 {
          0% { clip-path: inset(0 20% 0 60%); }
          100% { clip-path: inset(0 80% 0 0); }
        }
        @keyframes glitch3 {
          0% { clip-path: inset(60% 0 20% 0); }
          100% { clip-path: inset(0 0 80% 0); }
        }
      `})]})};export{x as default};
