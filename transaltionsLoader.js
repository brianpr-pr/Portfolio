import Polyglot from "node-polyglot";

export const defaultLocale = "en";

export const availableLocales = [
    {code: "en", label: "English"},
    {code: "es", label: "Espanish"}
];

export async function switchLocale(requestedLocale){
    const locale = availableLocales.find(l => l.code === requestedLocale)
    || availableLocales.find(l => l.code === defaultLocale);

    const phrasesModule = await import(`./locales/${locale.code}.json`, {with: {type: 'json'}});

    const phrases = phrasesModule.default;

    const polyglot = new Polyglot(
        {
            locale: locale.code,
            phrases: phrases
        });

        return {
            locale, 
            polyglot
        };
}