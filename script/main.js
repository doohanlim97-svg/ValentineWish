const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];
  const replyBtn = document.getElementById("replay");

  if (!textBoxChars || !hbd) {
    document.querySelector(".container").style.visibility = "visible";
    return;
  }

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const tl = new TimelineMax();

  tl.to(".container", 0.2, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 10 })
    .from(".two", 0.7, { opacity: 0, y: 10 })
    .to(".one", 0.5, { opacity: 0 }, "+=2")
    .to(".two", 0.5, { opacity: 0 }, "-=0.5")
    .from(".three", 0.7, { opacity: 0 })
    .to(".three", 0.7, { opacity: 0 }, "+=2")
    .from(".four", 0.7, { opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.03, { visibility: "visible" }, 0.02)
    .to(".four", 0.7, { opacity: 0 }, "+=2")
    .from(".idea-1", 0.6, { opacity: 0, y: 20 })
    .from(".idea-2", 0.6, { opacity: 0, y: 20 })
    .from(".idea-3", 0.6, { opacity: 0, y: 20 })
    .from(".idea-4", 0.6, { opacity: 0, y: 20 })
    .from(".idea-5", 0.6, { opacity: 0, y: 20 })
    .staggerFrom(".idea-6 span", 0.5, { opacity: 0, y: 20 }, 0.1)
    .from(".six", 1, { opacity: 0, scale: 0.8 })
    .staggerFrom(".wish-hbd span", 0.5, { opacity: 0, y: -20 }, 0.05)
    .from(".wish h5", 1, { opacity: 0 })
    .from(".baloons img", 1.5, { y: 1000, opacity: 0 })
    .from(".nine p", 1, { opacity: 0 })
    .to(".last-smile", 0.5, { rotation: 90 });

  if (replyBtn) {
    replyBtn.addEventListener("click", () => tl.restart());
  }
};

window.onload = animationTimeline;
