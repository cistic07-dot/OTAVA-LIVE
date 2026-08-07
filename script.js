const events = [
  {
    id: "vlak",
    date: new Date("2026-08-08T12:51:00+02:00"),
    done: "🚆 Vlak odjíždí!"
  },
  {
    id: "rock",
    date: new Date("2026-08-08T14:00:00+02:00"),
    done: "🎸 Rock in Ústí začíná!"
  },
  {
    id: "ber",
    date: new Date("2026-08-21T17:00:00+02:00"),
    done: "🛶 Plakát Berounky je zveřejněn!"
  }
];

function updateCountdown() {
  const now = new Date();

  events.forEach(event => {
    const element = document.getElementById(event.id);
    if (!element) return;

    const diff = event.date - now;

    if (diff <= 0) {
      element.textContent = event.done;
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    element.textContent =
      `${days} dní ${hours} h ${minutes} min ${seconds} s`;
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);
