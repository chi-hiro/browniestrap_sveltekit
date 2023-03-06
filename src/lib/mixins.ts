import { pageScroll } from "$lib/pageScroll";

export const pagetop = () => {
  pageScroll("pagetop");
};

export const pageback = (event: Event) => {
  const link = event.currentTarget
    ? (event.currentTarget as HTMLElement)
    : (event.target as HTMLElement);
  const url = link.getAttribute("href");

  event.preventDefault();
  link.blur();

  if (document.referrer.match(new RegExp(location.hostname, "i"))) {
    window.history.back();
  } else {
    if (url) location.href = url;
  }
};

export const anchor = (event: Event) => {
  const link = event.currentTarget
    ? (event.currentTarget as HTMLElement)
    : (event.target as HTMLElement);
  const url = link.getAttribute("href");

  if (url) {
    const hash = url.split("/").slice(-1)[0];

    if (hash && hash.charAt(0) === "#" && document.querySelector(hash)) {
      event.preventDefault();
      link.blur();
      pageScroll(hash);
    }
  }
};

export const select = (event: Event) => {
  window.location.href = (event.currentTarget as HTMLInputElement).value;
};
