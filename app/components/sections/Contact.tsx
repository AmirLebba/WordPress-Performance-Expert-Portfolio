import ContactHeader from '@/components/ui/ContactHeader';
import ContactForm from '@/components/ui/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <ContactHeader />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}