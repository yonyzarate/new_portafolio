document.addEventListener("DOMContentLoaded", (even) => {
  setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `
  <iframe
                  class="contact__iframe"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15196.046991213423!2d-63.18125690462969!3d-17.79114499033055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1773470053335!5m2!1ses-419!2sbo"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
  `;
  }, 500);
});
