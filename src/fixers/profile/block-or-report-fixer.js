import { isProfile } from "../../tools/path-detector";
import { waitUntilElementsReady, checkIfElementsReady } from "../../tools/wait-until-ready";
import createElement from "../../tools/create-element";
import settings from "../../tools/settings";
import Fixer from "../fixer";

export default class BlockOrReportFixer extends Fixer {
    isApplieble(location) {
        return settings.defreshProfilePage.value && isProfile(location);
    }

    async waitUntilFixerReady() {
        return (await waitUntilElementsReady("main:nth-child(1) .h-card")) && (await checkIfElementsReady("main:nth-child(1) #blob-more-options-details"));
    }

    apply() {
        let container = document.querySelector("#blob-more-options-details");

        let reportBlock = container.querySelector("details").parentElement;
        reportBlock.querySelector("summary").className = "btn-link text-small muted-link my-1";

        let userInfo = document.querySelector("main .h-card");
        userInfo.append(createElement("div", {
            className: "pt-3",
            children: [reportBlock]
        }));

        container.parentElement.remove();
    }
}