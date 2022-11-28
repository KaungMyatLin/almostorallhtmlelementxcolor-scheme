const meta = document.querySelector('meta[name="color-scheme"]');
let colorScheme = 'light';
meta.content = colorScheme
console.log(window)
console.log(window.frameElement)
console.log(window.frames[0])
if (!window.frameElement) {  
    window.setInterval(() => {    
        colorScheme = colorScheme === 'light' ? 'dark' : 'light';
        document.documentElement.style.colorScheme = colorScheme; 
        meta.content = colorScheme;
        const root = window.frames[0].document.documentElement;
        root.style.colorScheme = colorScheme;
        root.querySelector('meta[name="color-scheme"]').content = colorScheme;
    }, 3000);
}
