import { getID, create } from "./help";

const controllWrapper = create("div", { class: "control-wrapper" });

// for left control
const leftControl = create("div", { class: "left-control" });
const leftIcon = create("i", { class: "fas fa-caret-left" });
const lBtn = leftControl.append(leftIcon);

// for right control
const rightControl = create("div", { class: "right-control" });
const rightIcon = create("i", { class: "fas fa-caret-right" });
const rBtn = rightControl.append(rightIcon);

// for upper control

const upControl = create("div", { class: "up-control" });
const upIcon = create("i", { class: "fas fa-caret-up" });
const uBtn = upControl.append(upIcon);

// for down control
const downControl = create("div", { class: "down-control" });
const downIcon = create("i", { class: "fas fa-caret-down" });
const dBtn = downControl.append(downIcon);

export { controllWrapper, leftControl, rightControl, upControl, downControl };
