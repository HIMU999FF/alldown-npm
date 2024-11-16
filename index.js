module.exports.alldown = (url) => 
  new Promise(async (resolve, reject) => {
    const { alldown } = require("nayan-media-downloader");

    try {
      const { data, msg } = await alldown(url);

      resolve({
        status: true,
        dev: "404 (HIMU)",
        devfb: "https://www.facebook.com/99.6T9.HIMU.6T9.1?mibextid=ZbWKwL",
        devwp: "w.me/+31613501164", 
        data: data || msg,
      });
    } catch (error) {
      reject({ 
        status: false, 
        error: error.message || "An unexpected error occurred" 
      });
    }
  });
