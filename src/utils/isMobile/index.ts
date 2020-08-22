export default function isMobile() {
  const devicesRegExp = /iPhone|iPad|iPod|Android/i;

  const isMobile = devicesRegExp.test(navigator.userAgent);

  return isMobile;
}
