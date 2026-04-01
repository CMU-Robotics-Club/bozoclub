const ticker = document.querySelector("[data-clustertron]");
const tickerStates = [
    "Vibes nominal",
    "H100s warm",
    "Agents booking rooms",
    "Filament restocked",
];

if (ticker) {
    let tickerIndex = 0;

    window.setInterval(() => {
        tickerIndex = (tickerIndex + 1) % tickerStates.length;
        ticker.textContent = tickerStates[tickerIndex];
    }, 2500);
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length > 0) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) {
                    continue;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    for (const item of revealItems) {
        revealObserver.observe(item);
    }
} else {
    for (const item of revealItems) {
        item.classList.add("is-visible");
    }
}
