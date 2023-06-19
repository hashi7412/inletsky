declare type LanguageKeyType = 'en-US'

declare interface StoreObject {
    lang: LanguageKeyType
    theme: 'dark' | 'light'
    user: UserObject | null
    isChat: boolean,
    isMobileNav: boolean
    cookie: string | null
}