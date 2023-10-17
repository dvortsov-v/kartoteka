export const scrollToElem = (selector: string, isCenter: boolean = false) => {
    const element: HTMLInputElement | null = document.querySelector(selector);

    if (!element) {
        return;
    }

    const {top: offsetTop, height} = element.getBoundingClientRect();
    const top = window.scrollY + offsetTop - (isCenter ? (window.innerHeight - height) / 2 : 0);

    window.scroll({
        top,
        behavior: 'smooth',
    });
};
