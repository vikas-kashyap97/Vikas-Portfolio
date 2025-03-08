import { gsap } from "gsap";

const Cursor = () => {
    gsap.set('.cursor', {xPercent: -50, yPercent: -50})
    gsap.set('.follower', {xPercent: -50, yPercent: -50})

    var cur = document.querySelector('.cursor');
    var follow = document.querySelector('.follower');

    window.addEventListener('mousemove', e => {
        gsap.to(cur, 0.2, {x: e.clientX, y: e.clientY})
        gsap.to(follow, 0.9, {x: e.clientX, y: e.clientY})
    })
    
  return (
    <>
        <div className="cursor fixed top-0 left-0 w-4 h-4 rounded-full bg-white z-50"></div>
        <div className="follower fixed top-0 left-0 w-10 h-10 rounded-full bg-blue-500 opacity-70"></div>
    </>
  )
}

export default Cursor