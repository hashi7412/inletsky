import { v4 as uuidv4 } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import enLang from "./lang/en-US.json";

const setDocumentCookie = () => {
    const cookie = uuidv4()
    document.cookie = `${process.env.REACT_APP_KEY}=${cookie}; path=/; sameSite=true; expires=${new Date(+new Date() + 7 * 86400000).toUTCString()}`
    return cookie
}

export const getDate = (time: number) => {
    const d = new Date(time);
    let timeStr = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return timeStr;
}

const langs = {
    "en-US": enLang
}

const initialState: StoreObject = {
    lang: "en-US",
    theme: "dark",
    cookie: null,
    user: null,
    isChat: false,
    isMobileNav: false
};

const getStore = (initialState: StoreObject) => {
    try {
        const buf = window.localStorage.getItem(process.env.REACT_APP_KEY || '');
        if (buf) {
            const json = JSON.parse(buf);
            const state: any = initialState;
            for (let k in json) {
                if (state[k] !== undefined) {
                    state[k] = json[k]
                }
            }
        }
        if (initialState.cookie === '') {
            initialState.cookie = uuidv4();
        }
    } catch (err) {
        console.log(err);
    }

    return initialState;
}

const setStore = (state: any) => {
    delete state.L;
    window.localStorage.setItem(process.env.REACT_APP_KEY || '', JSON.stringify(state));
}

export const slice = createSlice({
    name: 'store',
    initialState: getStore(initialState),
    reducers: {
        update: (state: any, action) => {
            for (const k in action.payload) {
                if (state[k] === undefined) new Error(`undefined store key ${k}`)
                state[k] = action.payload[k]
            }
            setStore(state)
        }
    }
})

const useStore = () => {
    const navigate = useNavigate();
    const G = useSelector((state: StoreObject) => state);
    const lang = langs[G.lang];
    type LangType = keyof typeof lang;
    const L = lang;

    const T = (key: LangType, args?: { [key: string]: string | number } | string | number): string => {
        let text = L[key]
        // if (text === undefined) throw new Error('Undefined lang key[' + String(key) + ']')
        if (typeof args === 'string' || typeof args === 'number') {
            text = text.replace(/\{\w+\}/, String(args))
        } else if (args) {
            for (let k in args) text = text.replace(new RegExp('{' + k + '}', 'g'), String(args[k]))
        }
        return text
    }

    const dispatch = useDispatch();
    const update = (payload: Partial<StoreObject>) => dispatch(slice.actions.update(payload))

    const setCookie = (extra?: Partial<StoreObject>) => {
        const cookie = setDocumentCookie()
        update({ cookie, ...extra })
    }

    const logout = (extra?: StoreObject) => {
        setCookie({ user: null, ...extra })
        navigate('/')
    }

    return { ...G, T, update, setCookie, logout }
}

export default useStore;
