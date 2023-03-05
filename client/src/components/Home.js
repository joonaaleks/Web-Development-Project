import { useTranslation } from "react-i18next";
//Front page
export default function Home() {
    const { t } = useTranslation();
    return (
        <h1>{t("Welcome to my project work!")}</h1>
    )
}