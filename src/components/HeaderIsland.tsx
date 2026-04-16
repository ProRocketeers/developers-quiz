import Header from "./Header";
import { I18nProvider } from "../i18n/I18nContext";

type Props = {
  currentPath?: string;
};

export default function HeaderIsland(props: Props) {
  return (
    <I18nProvider>
      <Header {...props} />
    </I18nProvider>
  );
}
