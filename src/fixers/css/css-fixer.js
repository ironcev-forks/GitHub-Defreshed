import { createStyleElement } from "../../tools/create-element";
import { waitUntilHeadReady } from "../../tools/wait-until-ready";
import { SettingsProperty } from "../../tools/settings";
import { name as scriptName } from "../../../package.json";
import Fixer from "../fixer";

/**
 * Base class for css injectors.
 */
export default class CSSFixer extends Fixer {
    /**
     * Initializes a new instance of the CSSFixer class.
     *
     * @param {SettingsProperty<boolean>} option
     * Settings option that indicates whether to apply this fixer.
     *
     * @param {string} css CSS to be injected.
     *
     * @param {string} name This fixer's name.
     */
    constructor(option, css, name) {
        super();
        this._css = css.toString();
        this._option = option;
        this._name = `${scriptName}-${name}`;
    }

    /** @inheritdoc */
    isApplieble() {
        return this._option.value && !document.querySelector(`head > style[${this._name}]`);
    }

    /** @inheritdoc */
    waitUntilFixerReady() {
        return waitUntilHeadReady();
    }

    /** @inheritdoc */
    apply() {
        let cssElement = createStyleElement(this._css);
        cssElement.setAttribute(this._name, "");

        document.head.append(cssElement);
    }
}