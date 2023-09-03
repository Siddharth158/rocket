// console.log('hello');

let nav_content = document.getElementById('nav_content');
// console.log(nav_content);
// let login = document.getElementById('login');
// console.log(login);
let toggle_btn = document.getElementById('toggle_btn');
// console.log(toggle_btn);
let body = document.getElementsByTagName('body')
// console.log(body[0])
// let nav = document.getElementsByTagName('nav');

if (innerWidth < 1024) {
    nav_content.classList.add('hidden');
    nav_content.classList.remove('block');
    // login.classList.add('hidden');
    // login.classList.remove('block');
    toggle_btn.classList.add('block');
    // console.log('done')
    toggle_btn.classList.remove('hidden');
}

window.addEventListener("resize",(event)=>{
    if (innerWidth < 1024) {
        nav_content.classList.add('hidden');
        nav_content.classList.remove('block');
        // login.classList.add('hidden');
        // login.classList.remove('block');
        toggle_btn.classList.add('block');
        // console.log('done')
        toggle_btn.classList.remove('hidden');
    }
    if(innerWidth > 1024){
        nav_content.classList.remove('hidden','flex-col','flex-col', 'absolute', 'top-0', '-right-40', 'animation','z-10','w-[20rem]');
        nav_content.classList.add('block','flex', 'items-center',);
        // nav_content.remove(login);
        // login.remove();
        // nav[0].append(login);
        // login.classList.remove('hidden');
        // login.classList.add('block');
        toggle_btn.classList.add('hidden');
        toggle_btn.classList.remove('block');
    }
})

toggle_btn.addEventListener("click", (event)=>{
    event.stopPropagation();
    // console.log('hello again');
    nav_content.classList.remove('hidden');
    nav_content.classList.add('block', 'flex-col', 'absolute', 'top-0', '-right-40', 'animation','z-10','w-[20rem]');
    // login.classList.add('absolute', 'top-40', '-right-40', 'animation','z-10','w-[20rem]','block');
    // nav_content.append(login);
    // login.classList.remove('hidden');
})
body[0].addEventListener("click",(event)=>{
    if(innerWidth<1024){
        nav_content.classList.remove('block');
        nav_content.classList.add('hidden');
        // login.classList.remove('block');
        // login.classList.add('hidden');

    }
})