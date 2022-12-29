import { createI18n } from 'vue-i18n'
import en from "./en.json"
import ka from "./ka.json"

const i18n = createI18n({
    locale: "ka",
    messages: {
        en: en,
        ka: ka
    }
})

export default i18n;