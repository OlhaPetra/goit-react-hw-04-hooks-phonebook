import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ name, number }) => {
  return (
    <div className={s.contactItem}>
      <p className={s.contactName}> {`${name}:`}</p>{' '}
      <p className={s.contactNumber}> {number}</p>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default ContactItem;
