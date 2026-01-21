export default function NetlifyContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot */}
      <input name="bot-field" />

      {/* Champs déclarés pour Netlify */}
      <input name="firstName" />
      <input name="lastName" />
      <input name="email" />
      <input name="company" />
      <input name="phone" />
      <input name="numberOfPeople" />
      <textarea name="message" />
    </form>
  );
}
