const ContactMap = () => {
  return (
    <div className="my-10 rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="location"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d315.01618937580173!2d80.99765540410505!3d26.958458025433508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765177882692!5m2!1sen!2sin" 
      ></iframe>
    </div>
  );
};

export default ContactMap;
