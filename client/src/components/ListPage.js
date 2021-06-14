import './ListPage.css';
import ListPageHeader from './ListPageHeader';
import DevelopersList from './DevelopersList';
import Footer from './Footer';

function ListPage() {
  return (
    <div>
      <ListPageHeader />
      <DevelopersList />
      <Footer />
    </div>
  );
}

export default ListPage;
