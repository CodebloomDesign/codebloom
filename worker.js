 <form class="contact-form contact-form-panel reveal" id="contact-form" accept-charset="UTF-8">
        <div class="contact-lock-badge">
          <svg class="contact-lock-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 2 3 7v6c0 5.3 3.8 8.9 9 10 5.2-1.1 9-4.7 9-10V7l-9-5Z"/>
          </svg>
          <span data-ro="Formular activ" data-en="Form live" data-hu="Aktiv urlap">Formular activ</span>
        </div>
        <h3 class="contact-lock-title" data-ro="Spune-ne citeva detalii <span>despre proiect.</span>" data-en="Share a few details <span>about the project.</span>" data-hu="Irj nehany reszletet <span>a projektrol.</span>">Spune-ne citeva detalii <span>despre proiect.</span></h3>
        <p class="contact-lock-text" data-ro="Completeaza formularul si primesti confirmarea direct pe site. Daca preferi, ne poti scrie oricind si la codebloomdesign@gmail.com." data-en="Fill in the form and you'll get confirmation right on the site. If you prefer, you can always email us at codebloomdesign@gmail.com." data-hu="Toltsd ki az urlapot, es azonnal kapsz visszaigazolast az oldalon. Ha szeretned, irhatsz kozvetlenul is a codebloomdesign@gmail.com cimre.">Completeaza formularul si primesti confirmarea direct pe site. Daca preferi, ne poti scrie oricind si la codebloomdesign@gmail.com.</p>
        <div class="form-status" id="contact-form-status" role="status" aria-live="polite" hidden></div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="contact-name" data-ro="Nume" data-en="Name" data-hu="Nev">Nume</label>
            <input class="form-input" id="contact-name" name="name" type="text" required autocomplete="name" data-placeholder-ro="Numele tau" data-placeholder-en="Your name" data-placeholder-hu="Neved" placeholder="Numele tau">
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-company" data-ro="Companie" data-en="Company" data-hu="Ceg">Companie</label>
            <input class="form-input" id="contact-company" name="company" type="text" autocomplete="organization" data-placeholder-ro="Numele companiei" data-placeholder-en="Company name" data-placeholder-hu="Cegnev" placeholder="Numele companiei">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="contact-email" data-ro="Email" data-en="Email" data-hu="Email">Email</label>
            <input class="form-input" id="contact-email" name="email" type="email" required autocomplete="email" data-placeholder-ro="adresa@ta.ro" data-placeholder-en="your@email.com" data-placeholder-hu="email@cimed.hu" placeholder="adresa@ta.ro">
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-phone" data-ro="Telefon" data-en="Phone" data-hu="Telefon">Telefon</label>
            <input class="form-input" id="contact-phone" name="phone" type="tel" autocomplete="tel" data-placeholder-ro="Optional" data-placeholder-en="Optional" data-placeholder-hu="Opcionalis" placeholder="Optional">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="contact-service" data-ro="Serviciu" data-en="Service" data-hu="Szolgaltatas">Serviciu</label>
            <select class="form-select" id="contact-service" name="service">
              <option value="" data-ro="Selecteaza" data-en="Select one" data-hu="Valassz">Selecteaza</option>
              <option value="web-design" data-ro="Web Design" data-en="Web Design" data-hu="Webdesign">Web Design</option>
              <option value="redesign" data-ro="Redesign" data-en="Redesign" data-hu="Ujratervezes">Redesign</option>
              <option value="maintenance" data-ro="Mentenanta / Hosting" data-en="Maintenance / Hosting" data-hu="Karbantartas / Hosting">Mentenanta / Hosting</option>
              <option value="other" data-ro="Altceva" data-en="Other" data-hu="Mas">Altceva</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-project-url" data-ro="Website actual" data-en="Current website" data-hu="Jelenlegi weboldal">Website actual</label>
            <input class="form-input" id="contact-project-url" name="projectUrl" type="url" inputmode="url" data-placeholder-ro="https://..." data-placeholder-en="https://..." data-placeholder-hu="https://..." placeholder="https://...">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="contact-message" data-ro="Mesaj" data-en="Message" data-hu="Uzenet">Mesaj</label>
          <textarea class="form-textarea" id="contact-message" name="message" required data-placeholder-ro="Spune-ne ce construiesti, ce nu functioneaza acum si ce obiectiv ai." data-placeholder-en="Tell us what you're building, what is not working right now, and what outcome you want." data-placeholder-hu="Ird meg, min dolgozol, mi nem mukodik most, es mi a celod." placeholder="Spune-ne ce construiesti, ce nu functioneaza acum si ce obiectiv ai."></textarea>
        </div>
        <div class="form-hp" aria-hidden="true">
          <label for="contact-company-website">Website</label>
          <input id="contact-company-website" name="company_website" type="text" tabindex="-1" autocomplete="off">
        </div>
        <button class="form-submit" type="submit" data-ro="Trimite Mesaj ->" data-en="Send Message ->" data-hu="Uzenet kuldese ->">Trimite Mesaj -></button>
        <p class="form-helper" data-ro="Daca endpoint-ul API nu este gata sau CORS nu este configurat pe domeniul tau, trimiterea va esua pina la rezolvarea backend-ului." data-en="If the API endpoint is not live yet or CORS is not configured for your domain, submissions will fail until the backend is fixed." data-hu="Ha az API vegpont meg nem el, vagy a CORS nincs beallitva a domainedre, a kuldes addig hibazni fog, amig a backend nincs rendben.">Daca endpoint-ul API nu este gata sau CORS nu este configurat pe domeniul tau, trimiterea va esua pina la rezolvarea backend-ului.</p>
        <p class="form-note" data-ro="Preferi email direct? Scrie-ne la codebloomdesign@gmail.com" data-en="Prefer direct email? Write to codebloomdesign@gmail.com" data-hu="Inkabb kozvetlen email? Irj a codebloomdesign@gmail.com cimre">Preferi email direct? Scrie-ne la codebloomdesign@gmail.com</p>
      </form>
