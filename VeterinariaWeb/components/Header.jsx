export default function Header(title){
    const header = document.createElement('div')
    header.className = 'header'
    header.innerHTML =`
        <h2>${title}</h2>
        <header></header>
    `
    return header
}