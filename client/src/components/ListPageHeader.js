import './ListPageHeader.css';
import headerImage from '../resources/undraw_dev_productivity_umsq 1.png';

function ListPageHeader() {
  return (
    <div className="header-style">
      <div className="header-container">
        <section className="header-item">
          <div className="header-title">The&nbsp;Developer Repository</div>
        </section>
        <section className="header-item">
          <img
            src={headerImage}
            height="500px"
            width="600px"
            alt="A person working on a laptop"
            className="header-image"
          />
        </section>
      </div>
    </div>
  );
}

export default ListPageHeader;
