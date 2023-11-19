fetch("https://certifiedcode.editorx.io/highlight/_functions/config/" + _highlightConfig)
      .then((res) => res.text())
      .then((style) => {
        const styleTag = document.createElement("style");
        styleTag.innerHTML = style;
        document.head.appendChild(styleTag);
      })
      .catch((err) => {
        console.log(err);
      });
