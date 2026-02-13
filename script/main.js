const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];
  const replayBtn = document.getElementById("replay");

  if (!textBoxChars || !hbd) {
    document.querySelector(".container").style.visibility = "visible";
    return;
  }

  // Split chatbox text into spans (keeps animation)
  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  // Split headline into spans
  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const tl = new TimelineMax();

  tl.to(".container", 0.2, { visibility: "visible" })

    // Intro
    .from(".one", 0.8, { opacity: 0, y: 10 })
    .from(".two", 0.8, { opacity: 0, y: 10 })
    .to(".one", 0.5, { opacity: 0 }, "+=2")
    .to(".two", 0.5, { opacity: 0 }, "-=0.5")

    // Wait screen
    .from(".three", 0.7, { opacity: 0 })
    .to(".three", 0.7, { opacity: 0 }, "+=2")

    // ✅ The panel: slow fade in + hold + slow leave
    .from(".four", 1.5, { opacity: 0, y: 30 })
    .staggerTo(".hbd-chatbox span", 0.04, { visibility: "visible" }, 0.02)
    .to(".four", 2.0, { opacity: 0, y: -60, ease: Power2.easeInOut }, "+=3")

    // Ideas
    .from(".idea-1", 0.8, { opacity: 0, y: 20 })
    .from(".idea-2", 0.8, { opacity: 0, y: 20 })
    .from(".idea-3", 0.8, { opacity: 0, y: 20 })
    .from(".idea-4", 0.8, { opacity: 0, y: 20 })
    .from(".idea-5", 0.8, { opacity: 0, y: 20 })
    .staggerFrom(".idea-6 span", 0.6, { opacity: 0, y: 20 }, 0.12)

    // Wish section
    .from(".six", 1.0, { opacity: 0, scale: 0.96 })
    .staggerFrom(".wish-hbd span", 0.55, { opacity: 0, y: -18 }, 0.05)
    .from(".wish h5", 1.0, { opacity: 0 })

    // Balloons + ending
    .from(".baloons img", 1.5, { y: 1000, opacity: 0 })
    .from(".nine p", 1.0, { opacity: 0 })
    .to(".last-smile", 0.5, { rotation: 90 });

  if (replayBtn) replayBtn.addEventListener("click", () => tl.restart());
};

window.onload = animationTimeline;
