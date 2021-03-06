$SCRIPTS$

System.config({
  baseURL: '/',
  defaultJSExtensions: true
});

System.import("playground/src/web_workers/message_broker/background_index")
    .then(
        function(m) {
          console.log("running main");
          try {
            m.main();
          } catch (e) {
            console.error(e);
          }
        },
        function(error) { console.error("error loading background", error); });
