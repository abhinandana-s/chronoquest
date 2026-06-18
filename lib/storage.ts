export function saveXP(xp: number) {
  localStorage.setItem("chronoquest-xp", xp.toString());
}

export function getXP() {
  return Number(localStorage.getItem("chronoquest-xp")) || 0;
}