import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export function getServerSideProps(ctx) {
  return { props: serverSideTranslations(ctx.locale, ["common"]) };
}

export default function Home() {
  const { t } = useTranslation();
  return <div>{t("hello")}</div>;
}
