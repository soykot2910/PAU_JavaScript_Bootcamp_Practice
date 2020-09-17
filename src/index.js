import { getID, create } from "./help";
import { ball, screen } from "./ball";
import {
  controllWrapper,
  leftControl,
  rightControl,
  upControl,
  downControl,
} from "./control";

const root = getID("game-wrapper");

screen.append(ball);
root.append(screen);

controllWrapper.append(leftControl);
controllWrapper.append(rightControl);
controllWrapper.append(upControl);
controllWrapper.append(downControl);

root.append(controllWrapper);

// controling action
const lb = document.querySelector(".left-control");
const rb = document.querySelector(".right-control");
const ub = document.querySelector(".up-control");
const db = document.querySelector(".down-control");

const bal = document.querySelector(".ball");

let xp = 140;
let yp = 140;

lb.addEventListener("click", () => {
  xp = xp + 10;
  if (xp <= 250) {
    bal.style.right = xp + "px";
  } else {
    alert("Please press right button");
  }
});
rb.addEventListener("click", () => {
  xp = xp - 10;
  if (xp >= 0) {
    bal.style.right = xp + "px";
  } else {
    alert("Please press left button");
  }
});

ub.addEventListener("click", () => {
  yp = yp - 10;
  if (yp >= 0) {
    bal.style.top = yp + "px";
  } else {
    alert("Please press down button");
  }
  //   alert("up click");
});
db.addEventListener("click", () => {
  yp = yp + 10;
  if (yp <= 250) {
    bal.style.top = yp + "px";
  } else {
    alert("Please press up button");
  }
  //   alert("down click");
});
