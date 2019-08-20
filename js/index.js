document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});

//responsive collapsible menu
document.getElementById("icon").addEventListener("click", function(){
  var x = document.getElementById("nav");
  var y = document.getElementById("icon");
  //toggle menu visibility
  if (x.className === "nav") {
    x.className += " responsive";
    y.className += " open";
  } else {
    x.className = "nav";
    y.className = "icon";
  }
});
