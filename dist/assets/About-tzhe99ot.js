import{r as t,a as r,j as e,b as c}from"./index-DeFVV6rA.js";const x=()=>{const s=t.useRef(),[a,l]=t.useState(!1);t.useEffect(()=>{r(s)},[]);const i=()=>l(!0),n=()=>l(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("section",{ref:s,id:"about",className:"w-full py-10 md:py-20",children:[e.jsx("h1",{className:"text-2xl md:text-3xl lg:text-4xl font-bold text-green-500 pl-4 md:pl-8 ",children:"ABOUT ME"}),e.jsxs("div",{className:"h-auto w-full md:h-[500px] lg:h-[650px] flex flex-col md:flex-row justify-between items-center md:w-4/5 mx-auto p-5 mt-12",children:[e.jsx("div",{className:"w-full lg:w-1/2 h-[30vh] md:h-full relative flex justify-center items-center",onMouseEnter:i,onMouseLeave:n,children:e.jsxs("div",{className:`relative ${a?"glitch-effect":""}`,children:[e.jsx("img",{src:"images/propic.jpeg",alt:"my-img",className:"h-[220px] sm:h-[270px] lg:h-[450px] rounded-xl ring-2 lg:ring-4 ring-green-700 transition-all duration-300 ease-out"}),e.jsxs("div",{className:"glitch-layers",children:[e.jsx("div",{className:"glitch-layer"}),e.jsx("div",{className:"glitch-layer"}),e.jsx("div",{className:"glitch-layer"})]})]})}),e.jsxs("div",{className:"w-full lg:w-1/2 h-auto lg:h-full lg:ml-5 mt-6 md:mt-0",children:[e.jsx("h1",{className:"text-lg sm:text-xl md:text-2xl lg:text-3xl mt-5 text-green-400 md:mt-14 lg:mt-0",children:"My Bio"}),e.jsxs("p",{className:"mt-2 lg:mt-5 text-green-500 text-sm sm:text-base md:text-lg lg:text-2xl ",children:["As a dedicated ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"Frontend Developer"})," with over one years of hands-on experience, I bring proficiency in crafting ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"dynamic, user-centric solutions."})," From frontend ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"aesthetics"})," to ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"interactive"})," functionality, I thrive on translating concepts into ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"robust digital experiences."})," With a keen eye for detail and a ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"passion for innovation,"})," I am committed to delivering ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"high-quality, responsive,"})," and ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"visually appealing solutions"})," that exceed expectations. Let's ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"collaborate"})," to bring your vision to life and drive ",e.jsx("a",{className:"lg:text-3xl font-semibold",children:"success"})," in the digital realm."]}),e.jsx("table",{className:"w-full mt-5 lg:mt-10 text-sm md:text-base",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsxs("td",{className:"p-1 lg:p-3",children:[e.jsx("span",{className:"text-green-400 lg:text-xl",children:"Name"})," ",e.jsx("br",{}),e.jsx("span",{className:"text-green-500 hover:text-green-500 transition-colors",children:"Vikas Kashyap"})]})}),e.jsx("tr",{children:e.jsxs("td",{className:"p-1 lg:p-3",children:[e.jsx("span",{className:"text-green-400 lg:text-xl",children:"Email"}),e.jsx("br",{}),e.jsx("span",{className:"text-green-500 hover:text-green-500 transition-colors",children:"vikaskashyaprock@gmail.com"})]})}),e.jsx("tr",{children:e.jsxs("td",{className:"p-1 lg:p-3",children:[e.jsx("span",{className:"text-green-400 lg:text-xl",children:"Phone"}),e.jsx("br",{}),e.jsx("span",{className:"text-green-500 hover:text-green-500 transition-colors",children:"+91 8542050782"})]})})]})}),e.jsx(c.Button,{className:"px-6 lg:px-8 py-3 lg:py-4 mt-5  rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 transition-transform",children:e.jsx("a",{className:"text-black",href:"/images/Vikas Kashyap Frontend 1Yrs.pdf",download:"/images/Vikas Kashyap Frontend 1Yrs.pdf",children:"DOWNLOAD RESUME"})})]})]})]}),e.jsx("style",{jsx:!0,children:`
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
          background: url('images/propic.jpeg') no-repeat center center;
          background-size: cover;
        }
        .glitch-layer:nth-child(1) {
          left: 2px;
          animation: glitch1 2s infinite linear alternate-reverse;
          mix-blend-mode: multiply;
          filter: brightness(2) saturate(150%) hue-rotate(90deg);
        }
        .glitch-layer:nth-child(2) {
          left: -2px;
          animation: glitch2 3s infinite linear alternate-reverse;
          mix-blend-mode: screen;
          filter: brightness(2) saturate(150%) hue-rotate(-90deg);
        }
        .glitch-layer:nth-child(3) {
          left: 0;
          animation: glitch3 2.5s infinite linear alternate-reverse;
          mix-blend-mode: overlay;
          filter: brightness(2) saturate(150%) hue-rotate(180deg);
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
