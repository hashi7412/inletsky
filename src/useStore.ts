// // import store from "./redux/store";

// const useStore = () => {
//     const T = (key: string, args?: { [key: string]: string | number } | string | number): string => {
//         let text = L[key]
//         if (text === undefined) throw new Error('Undefined lang key[' + key + ']')
//         if (typeof args === 'string' || typeof args === 'number') {
//             text = text.replace(/\{\w+\}/, String(args))
//         } else if (args) {
//             for (let k in args) text = text.replace(new RegExp('{' + k + '}', 'g'), String(args[k]))
//         }
//         return text
//     }
//      // T("menu.login")
// }