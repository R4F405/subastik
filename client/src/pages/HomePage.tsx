import { Header } from '../components/shared/Header';
import Menu from '../components/shared/Menu';
import Card from '../components/shared/Card';
import { useCategories } from '../hooks/categories/useCategories';

const Homepage = () => {
  const { categories, isLoading, error } = useCategories();

  return (
    <>
      <Header />
      <Menu />
      <div className="mt-8 px-16">
        <h1 className="text-3xl font-bold mb-4">Secciones más visitadas</h1>
        {isLoading && <p>Cargando categorías...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="cards-container grid grid-cols-5 gap-2">
          {categories.map((category) => (
            <Card key={category.id} image={`/Imagenes/${category.name}.png`} title={category.name} count="" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;