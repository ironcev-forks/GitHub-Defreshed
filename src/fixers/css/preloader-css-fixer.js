import css from "./sass/preloader.scss";
import settings from "../../tools/settings";
import CSSFixer from "./css-fixer";

/**
 * Injects preloader styles into the page.
 */
export default class PreloaderCSSFixer extends CSSFixer {
    /** @inheritdoc */
    constructor() {
        super(settings.usePreloader, css, "preloader");
    }
}