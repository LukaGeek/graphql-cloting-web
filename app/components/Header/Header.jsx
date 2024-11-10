import { ComboboxCurrency } from "@/app/Extras/Combobox/Combobox-currency";
import { ComboboxLang } from "@/app/Extras/Combobox/Combobox-lang";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.mainDiv}>
      {/* Plain Text */}
      <div className={classes.plainText}>
        free shipping on all u.s orders over 50$
      </div>
      {/* Left Bar */}
      <div className={classes.comboboxCurr}>
        <ComboboxCurrency />
      </div>
      <div className={classes.comboboxLang}>
        <ComboboxLang />
      </div>
    </div>
  );
}
